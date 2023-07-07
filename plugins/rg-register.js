//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ أنت مسجل بالفعل\n\nهل ترغب في إعادة التسجيل؟\n\n📌 استخدم هذا الأمر لحذف سجلك\n*${usedPrefix}unreg* <الرقم التسلسلي>`
  if (!Reg.test(text)) throw `⚠️ تنسيق غير صحيح\n\n✳️ استخدم هذا الأمر: *${usedPrefix + command} اسم.عمر*\n📌 مثال: *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ لا يمكن أن يكون الاسم فارغًا'
  if (!age) throw '✳️ لا يمكن أن يكون العمر فارغًا'
  if (name.length >= 30) throw '✳️ الاسم طويل جدًا'
  age = parseInt(age)
  if (age > 100) throw '👴🏻 واو جدو يبي يلعب بوت'
  if (age < 5) throw '🚼 هنا جدو طفل jsjsj'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *مسجل* 」─
▢ *الرقم:* ${name}
▢ *العمر* : ${age} سنة
▢ *الرقم التسلسلي* :
${sn}
└──────────────

 *${usedPrefix}help* لعرض القائمة
`.trim())
}

handler.help = ['reg'].map(v => v + ' <الاسم.العمر>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'registrar','تسجيل']

export default handler
