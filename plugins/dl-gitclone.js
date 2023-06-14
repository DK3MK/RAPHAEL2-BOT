import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `أين رابط GitHub؟\n\n📌 المثال: ${usedPrefix + command} https://github.com/Guru322/api`
if (!regex.test(args[0])) throw '⚠️ الرابط غير صحيح'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`✳️ *انتظر، جارٍ إرسال المستودع..*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['dl']
handler.command = ['gitclone']
handler.diamond = true
// Done 
export default handler