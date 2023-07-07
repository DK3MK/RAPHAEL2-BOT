let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  let user = global.db.data.users[who]
  if (!who) throw `✳️ قم بوسم المستخدم لإلغاء الحظر`
  let users = global.db.data.users
  users[who].banned = false
  conn.reply(m.chat, `
✅ إلغاء الحظر

───────────
تم إلغاء حظر @${who.split`@`[0]}`, m, { mentions: [who] })
}

handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = true

export default handler
