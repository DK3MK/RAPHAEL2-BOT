import yts from 'yt-search'

let handler = async (m, { conn, text }) => {
  if (!text) throw '✳️ ما الذي تريد البحث عنه على يوتيوب؟'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video':
        return `
▢ ${v.title}
▢ *الرابط* : ${v.url}
▢ *المدة* : ${v.timestamp}
▢ *تم نشره* : ${v.ago}
▢ *المشاهدات* : ${v.views}
      `.trim()
      case 'channel':
        return `
▢ *${v.name}* (${v.url})
▢ ${v.subCountLabel} (${v.subCount}) اشتراك
▢ ${v.videoCount} فيديو
      `.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['ytsearch']
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts','يوتيوب']

export default handler
