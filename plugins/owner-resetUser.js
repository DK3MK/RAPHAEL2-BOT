//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
	function no(number) {
	  return number.replace(/\s/g,'').replace(/([@+-])/g,'')
	}
  
	text = no(text)
  
	if (isNaN(text)) {
	  var number = text.split`@`[1]
	} else if (!isNaN(text)) {
	  var number = text
	}
  
	if (!text && !m.quoted) return conn.reply(m.chat, `*❏ إعادة ضبط المستخدم*\n\nقم بعمل تاغ للمستخدم، أو اكتب الرقم، أو قم بالرد على رسالة المستخدم الذي تريد إعادة تعيينه`, m)
  
	if (isNaN(number)) return conn.reply(m.chat, `*❏ إعادة ضبط المستخدم*\n\nالرقم الذي أدخلته غير صالح`, m)
  
	try {
	  if (text) {
		var user = number + '@s.whatsapp.net'
	  } else if (m.quoted.sender) {
		var user = m.quoted.sender
	  } else if (m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	  }
	} catch (e) {
	} finally {
	  let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
	  let participants = m.isGroup ? groupMetadata.participants : []
	  let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	  let number = user.split('@')[0]
  
	  delete global.db.data.users[user]
  
	  conn.reply(m.chat, `*❏ إعادة ضبط المستخدم*\n\n✅ تمت إعادة تعيين المستخدم @${number} من *قاعدة البيانات*`, null, { mentions: [user] })
	}
  }
  
  handler.help = ['reset <54xxx>']
  handler.tags = ['owner']
  handler.command = ['resetuser']

  handler.owner = true
  
  export default handler
  