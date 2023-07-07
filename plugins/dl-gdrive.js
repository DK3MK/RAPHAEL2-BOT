import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `✳️ أدخل رابط Google Drive`
m.react(rwait) 
try {
let res = await fg.GDriveDl(args[0])
 await m.reply(`
≡ *Google Drive DL*

*▢ الرقم:* ${res.fileName}
*▢ الحجم:* ${res.fileSize}
*▢ النوع:* ${res.mimetype}
`)
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
m.react(done)
} catch {
m.reply('خطأ: تحقق من الرابط أو حاول رابط آخر')
}
}

handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive','دريف','درايف']
// Done
export default handler
