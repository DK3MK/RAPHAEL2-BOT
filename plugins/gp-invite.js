let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ أدخل الرقم الذي ترغب في إرسال دعوة المجموعة إليه\n\n📌 مثال :\n*${usedPrefix + command}* 7605902011`
  if (text.includes('+')) throw  `✳️ أدخل الرقم بدون الرمز *+*`
  if (isNaN(text)) throw ' 📌 أدخل أرقام فقط مع رمز البلد الخاص بك بدون مسافات'
  let group = m.chat
  let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

  await conn.reply(text + '@s.whatsapp.net', `≡ *دعوة للانضمام إلى المجموعة*\n\nقام أحد المستخدمين بدعوتك للانضمام إلى هذه المجموعة \n\n${link}`, m, { mentions: [m.sender] })
  m.reply(`✅ تم إرسال رابط الدعوة للمستخدم`)
}

handler.help = ['invite <917xxx>']
handler.tags = ['group']
handler.command = ['invite', 'invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
