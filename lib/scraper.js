const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const error = {
    link: {
        status: false,
        message: "Link tidak valid!"
    },
};

exports.mediafire = async(url) => {
    try{
        const {data} = await axios.get(url)
        const $ = cheerio.load(data)
        const result = {
            filename: $("div.dl-btn-label").attr("title"),
            filesize: $("a#downloadButton").text().split("(")[1].split(")")[0],
            uploadAt: $("ul.details > li:nth-child(2)").text().split(": ")[1],
            mimetype: mime.lookup($("a#downloadButton").attr("href")),
            ext: $("a#downloadButton").attr("href").replace(/^.*[\.\/\\]/, ""),
            filetype: $("div.filetype").text(),
            link: $("a#downloadButton").attr("href")
        }
        return({status: true, ...result})
    }catch{
        return({status: false, message: 'error'})
    }
}

exports.instagram = async(url) => {
            let res = await axios("https://indown.io/");
            let _$ = cheerio.load(res.data);
            let referer = _$("input[name=referer]").val();
            let locale = _$("input[name=locale]").val();
            let _token = _$("input[name=_token]").val();
            let { data } = await axios.post(
              "https://indown.io/download",
              new URLSearchParams({
                link: url,
                referer,
                locale,
                _token,
              }),
              {
                headers: {
                  cookie: res.headers["set-cookie"].join("; "),
                },
              }
            );
            let $ = cheerio.load(data);
            let result = [];
            let __$ = cheerio.load($("#result").html());
            __$("video").each(function () {
              let $$ = $(this);
              result.push({
                type: "video",
                thumbnail: $$.attr("poster"),
                url: $$.find("source").attr("src"),
              });
            });
            __$("img").each(function () {
              let $$ = $(this);
              result.push({
                type: "image",
                url: $$.attr("src"),
              });
            });
          
            return result;
          }

exports.tiktok = async (url) => {
    if (!/tiktok/.test(url)) return error.link;
    const get_token = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(get_token.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = { url: url, _token: token, };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    get_data = cheerio.load(data.html);
    if (data.status) {
        return {
            status: 200,
            thumbnail: get_data("img").attr("src"),
            video: get_data("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: get_data("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else
        return {
            status: false,
        };
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log("Update 'scraper.js'");
    delete require.cache[file];
});
