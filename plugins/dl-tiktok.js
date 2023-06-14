import fg from 'api-dylux'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `✳️ أدخل رابط TikTok\n\n 📌 مثال: ${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1`
  if (!args[0].match(/tiktok/gi)) throw `❎ تأكد من أن الرابط من TikTok`
  m.react(rwait)

  try {
    let p = await fg.tiktok(args[0])
    let te = `
┌─⊷ تيك توك
▢ *اسم المستخدم:* ${p.author}
▢ *الوصف:* ${p.title}
└───────────`
    conn.sendMessage(m.chat, te, p.nowm, m)
    m.react(done)
  } catch {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
      .catch(async _ => await tiktokdlv2(args[0]))
      .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ حدث خطأ أثناء تحميل الفيديو'
    conn.sendMessage(m.chat, `
┌─⊷ تيك توك
▢ *الاسم:* ${nickname} ${description ? `\n▢ *الوصف:* ${description}` : ''}
└───────────`, url, m)
    m.react(done)
  } 
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = false

export default handler
