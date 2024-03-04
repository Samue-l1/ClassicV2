//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'ClASSIC-V2' //ur bot name
global.ownernumber = '254742491666' //ur owner number
global.ownername = '『✙ 𝐾𝐼𝑁𝐺 𝑀𝑂𝐷𝑍✙』' //ur owner name
global.websitex = "https://t.me/+hhQQxFUABd81MDM0"
global.wagc = "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
global.themeemoji = '🪀'
global.wm = "Classic Bot Inc."
global.botscript = 'https://github.com/Samue-l1/ClassicV2' //script link
global.packname = "Sticker By"
global.author = "『✙ 𝐾𝐼𝑁𝐺 𝑀𝑂𝐷𝑍✙』\n\n+254703542294"
global.creator = "254703542294@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254703542294"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
