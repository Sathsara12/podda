const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "20220316_204003.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━☯*PODDA-Z*☯━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 PODDA-Z 𝐛𝐨𝐭.
              *PODDA*

❤٨ـﮩﮩـ╬━❤️❥❥═══❤٨ـﮩﮩـ╬━❤️❥❥═══
☠︎ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ☠︎

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
亗𝙐𝙨𝙚➜ Downloads song for you.
❄️.song  baby love

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
亗𝙐𝙨𝙚➜ Downloads video from YouTube link.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
亗𝙐𝙨𝙚➜   Downloads content from instagram.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
亗𝙐𝙨𝙚➜   Gives you YT links.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
亗𝙐𝙨𝙚➜   Get info related to tv series and shows.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
亗𝙐𝙨𝙚➜ Converts video to gif.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
亗𝙐𝙨𝙚➜ Converts video into audio.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
亗𝙐𝙨𝙚➜ Converts text into voice.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
亗𝙐𝙨𝙚➜ It sends image from google.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
亗𝙐𝙨𝙚➜ Translate the text you tag.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
亗𝙐𝙨𝙚➜ It sends Wikipedia result.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
亗𝙐𝙨𝙚➜ Finds the lyrics of the song.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
亗𝙐𝙨𝙚➜ Send the covid stats of your country.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
亗𝙐𝙨𝙚➜ Tells you about the weather of your place.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
亗𝙐𝙨𝙚➜ Removes the background of tge image.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
亗𝙐𝙨𝙚➜ Finds the text written on the image.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
亗𝙐𝙨𝙚➜ It sends you random wallpaper.


❤٨ـﮩﮩـ╬━❤️❥❥═══PODDA-Z■❤٨ـﮩﮩـ╬━❤️❥❥══


☤ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ☤

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
亗𝙐𝙨𝙚➜ It sends a random joke.
 
☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
亗𝙐𝙨𝙚➜ Cations the image into a meme.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
亗𝙐𝙨𝙚➜ It sends a random quote.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
亗𝙐𝙨𝙚➜ It sends the screenshot of the website.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
亗𝙐𝙨𝙚➜ Converts text into changesay meme image.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
亗𝙐𝙨𝙚➜ Convert text into Trump's tweet.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
亗𝙐𝙨𝙚➜ Gives you a compliment.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
亗𝙐𝙨𝙚➜   Shorten your link.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
亗𝙐𝙨𝙚➜   Dictionary [-dict en;anime]

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
亗𝙐𝙨𝙚➜   Tells you about your horoscope.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
亗𝙐𝙨𝙚➜   Converts text into qr code.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
亗𝙐𝙨𝙚➜  Gives you info about movie.
❄️movie master

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
亗𝙐𝙨𝙚➜  Gives you info about anime.
❄️anime PODDA-Z


❤٨ـﮩﮩـ╬━❤️❥❥═══PODDA-Z❤٨ـﮩﮩـ╬━❤️❥❥═══


★ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ★

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
亗𝙐𝙨𝙚➜ Converts img/gif into a sticker.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
亗𝙐𝙨𝙚➜ Converts sticker into image.

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
亗𝙐𝙨𝙚➜ Converts text into glowing sticker.
❄️ex  attp PODDA-Z


❤٨ـﮩﮩـ╬━❤️❥❥═══PODDA-Z❤٨ـﮩﮩـ╬━❤️❥❥═══


☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -activate
亗𝙐𝙨𝙚➜ It can activate antispam

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ - emergencycrash
亗𝙐𝙨𝙚➜ it will send Whatsapp virus

☯𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ - List 
亗𝙐𝙨𝙚➜ For more commands 
❤٨ـﮩﮩـ╬━❤️❥❥═══❤٨ـﮩﮩـ╬━❤️❥❥═══
═════🌸PODDA-Z🌸═════
❤٨ـﮩﮩـ╬❥═PODDA-Z❤٨ـﮩﮩـ╬❥═

`}) 

}));

