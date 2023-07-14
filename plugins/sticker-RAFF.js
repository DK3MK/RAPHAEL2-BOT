import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {conn, args, usedPrefix, command }) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw `*مثال*: \n${usedPrefix + command} دارك مان`
   if (!text) return m.reply('نص ?')
   if (text.length > 30) return m.reply('*الحد الأقصى* 30')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/3694d5edde3846459647b.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = ["qc","اكتب","أكتب"]

export default handler
