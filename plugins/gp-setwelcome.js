//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ تم تكوين رسالة الترحيب')
  } else throw `✳️ قم بإدخال رسالة الترحيب\n\n@user (الإشارة)\n@group (اسم المجموعة)\n@desc (وصف المجموعة)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome','تغيرالترحيب']
handler.admin = true
handler.owner = false

export default handler
