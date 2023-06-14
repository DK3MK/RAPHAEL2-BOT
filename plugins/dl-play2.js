import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (!text) throw `✳️ أدخل عنوان الأغنية\n\n*📌 مثال*\n*${usedPrefix + command}* Lil Peep hate my fuccn life `
  
  m.react('📀')
  
  let result = await yts(text)
  let ytres = result.all
  let listSections = []
  
  Object.values(ytres).map((v, index) => {
    listSections.push([
      `${index}┃ ${v.title}`, [
        ['🎶 MP3', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *المدة:* ${v.timestamp}\n▢ 👀 *المشاهدات:* ${v.views}\n▢ 📌 *العنوان* : ${v.title}\n▢ 📆 *تاريخ النشر:* ${v.ago}\n`],
        ['🎥 MP4', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *المدة:* ${v.timestamp}\n▢ 👀 *المشاهدات:* ${v.views}\n▢ 📌 *العنوان* : ${v.title}\n▢ 📆 *تاريخ النشر:* ${v.ago}\n`]
      ]
    ])
  })
  
  return conn.sendList(m.chat, '  ≡ *ℝ𝔸ℙℍ𝔸𝔼𝕃 MUSIC*🔎', `\n 📀 هنا قائمة بنتائج من: \n *${text}*`, igfg, `انقر`, listSections, m)
}

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
