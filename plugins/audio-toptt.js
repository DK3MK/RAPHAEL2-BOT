import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `✳️ قم بالرد على الملف الصوتي الذي ترغب في تحويله إلى ملف صوتي مضغوط بامتداد ptt باستخدام الأمر :\n\n*${usedPrefix + command}*`
let media = await q.download?.()
if (!media) throw '❎ فشل في تحميل الوسائط'
let audio = await toPTT(media, 'mp4')
if (!audio.data) throw '❎ خطأ أثناء التحويل'
conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['toav', 'tovn']

export default handler