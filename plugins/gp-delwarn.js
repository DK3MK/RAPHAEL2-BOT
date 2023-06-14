let handler = async (m, { conn, args, groupMetadata }) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        
        if (!who) throw `✳️ قم بوسم أو منشن شخص ما`
        if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة بياناتي`
        
        let warn = global.db.data.users[who].warn
        if (warn > 0) {
          global.db.data.users[who].warn -= 1
          m.reply(`⚠️ *DELWARN*
          
      ▢ التحذيرات: *-1*
      ▢ إجمالي التحذيرات: *${warn - 1}*`)
          m.reply(`✳️ خفض المسؤول عدد التحذيرات، الآن لديك *${warn - 1}* تحذيرات`, who)
        } else if (warn == 0) {
          m.reply('✳️ المستخدم ليس لديه أي تحذير')
        }
      }
      
      handler.help = ['delwarn @user']
      handler.tags = ['group']
      handler.command = ['delwarn', 'unwarn']
      handler.group = true
      handler.admin = true
      handler.botAdmin = true
      
      export default handler
      