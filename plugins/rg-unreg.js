//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *أدخل الرقم التسلسلي*\nتحقق من رقم التسلسلي الخاص بك باستخدام الأمر...\n\n*${usedPrefix}nserie*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *رقم التسلسلي غير صحيح*'
  user.registered = false
  m.reply(`✅ تم إلغاء التسجيل بنجاح`)
}

handler.help = ['unreg <رقم التسلسلي>'] 
handler.tags = ['rg']
handler.command = ['unreg'] 
handler.register = true

export default handler
