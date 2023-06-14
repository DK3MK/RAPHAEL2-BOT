import fg from 'api-dylux'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) throw `✳️ قم بإدخال ما تريد البحث عنه\n\n📌*مثال:*\n${usedPrefix + command} anime`

  try {
    let json = await fg.StickerSearch(text)
    m.reply(`
✅ النتيجة

▢ *العنوان:* ${json.title}
▢ *إجمالي الملصقات:* ${json.sticker_url.length}
▢ *الوقت المقدر للتحميل:* _*${json.sticker_url.length * 2} ثانية*_`)

    for (let i of json.sticker_url) {
      const stiker = await sticker(false, i, global.packname, global.author)
      await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
  } catch (e) {
    m.reply(`❇️ خطأ: جرب كلمة أخرى`)
  }
}

handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['getsticker', 'getstick', 'stickersearch', 'sticksearch']
handler.diamond = `${premium}`

export default handler
