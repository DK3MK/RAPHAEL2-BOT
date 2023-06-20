import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['96894116692', '𝖽𝖺𝗋𝗄 𝗆𝖺𝗇', true],
] //Number of owners

global.mods = ['96894116692','989233823465'] 
global.prems = ['96894116692', '989233823465']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.ownername = '𝖽𝖺𝗋𝗄 𝗆𝖺𝗇'
global.botname = 'ℝ𝔸ℙℍ𝔸𝔼𝕃'
global.premium = 'false'
global.packname = 'ℝ𝔸ℙℍ𝔸𝔼𝕃 ┃ ＢＯＴ ²⁰²³'
global.author = 'ℝ𝔸ℙℍ𝔸𝔼𝕃'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/aboud_coding\n'
global.dygp = 'https://chat.whatsapp.com'
global.fgsc = 'https://github.com/Dark-Man747/RAPHAEL-BOT' 
global.fgyt = 'https://youtube.com/@9TL'
global.fgpyp = 'https://youtube.com/@9TL'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
global.dbase = 'mongodb+srv://action20005:@123456aa@bot-whatsapp.3owz610.mongodb.net/?retryWrites=true&w=majority' //ADD YOUR MONGODB BY CHANGIMG IT
//mongodb+srv://action20005:@123456aa@bot-whatsapp.3owz610.mongodb.net/?retryWrites=true&w=majority
global.wait = '*جارٍ التحميل، يرجى الانتظار....*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 70 
global.maxwarn = '5' // máxima advertencias //

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
