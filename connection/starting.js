//@rifza.p.p
const { exec } = require('child_process')
const { chalk, color, bgcolor, ConsoleLog, biocolor } = require('../lib/color')
const term = require('terminal-kit').terminal 
const loading = async () => {
var progressBar , progress = 0 ;
function doProgress()
{
    progress += Math.random() / 10 ;
	progressBar.update( progress ) ;	
	if ( progress >= 1 )
	{
     setTimeout( function() { console.clear(),
     exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
     console.log(stdout), console.log(bgcolor('X-BOT-MD CREATED BY TOXIC-KRIZ AND ASWIN SPARKY', 'red'))})}, 200 ) ;
	} else {
      setTimeout( doProgress , 90 + Math.random() * 200 ) ;
    }     
}

 progressBar = term.progressBar( { width: 80, title: '\n\nConnecting To X-BOT-MD.....', eta: false, percent: true } );

doProgress ()


}
module.exports = { loading }