let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0] || isNaN(args[0])) throw `✳️ يرجى إدخال عدد يمثل عدد الأيام!\n\n📌 مثال:\n*${usedPrefix + command}* 30`

  let who
  if (m.isGroup) who = args[1] ? args[1] : m.chat
  else who = args[1]

  var nDays = 86400000 * args[0]
  var now = new Date() * 1
  if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += nDays
  else global.db.data.chats[who].expired = now + nDays
  let teks = `✅ تم تعيين فترة انتهاء الصلاحية لـ \n*${await conn.getName(who)}* \n\n*المدة:* ${args[0]} أيام\n\n*العد التنازلي :* ${msToDate(global.db.data.chats[who].expired - now)}`
  conn.sendButton(m.chat, teks, igfg, null, [['حذف الصلاحية', `${usedPrefix}delexpired`], ['تحقق من الصلاحية', `${usedPrefix}checkexpired`]], m)
}
handler.help = ['expired <أيام>']
handler.tags = ['owner']
handler.command = /^(expired|addexpired)$/i
handler.owner = true

export default handler

function msToDate(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [d, ' *أيام*\n ', h, ' *ساعات*\n ', m, ' *دقائق*\n ', s, ' *ثواني* '].map(v => v.toString().padStart(2, 0)).join('')
}
