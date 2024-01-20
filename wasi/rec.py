//creadted by wasi

import sounddevice
from scipy.io.wavfile import write
fs=44100
second=int(input("enter the duration......:"))
print("recording..................:")
record_voice=sounddevice.rec(int(second*fs),samplerate=fs,channels=2)
sounddevice.wait()
write("out.wav",fs,record_voice)
print("finished...........:\n plz chk it..............:")
