let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
  if (!isOwner) return conn.sendButton(m.chat, `*Invite bot to a group*\n\nHello @${m.sender.split('@')[0]}\nyou can rent the bot to join a group\n\n_more info click on the button_`.trim(), igfg, null, [
      ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })
 
 let time = global.db.data.users[m.sender].lastjoin + 86400000
 let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
 let delay = time => new Promise(res => setTimeout(res, time))

 let name = m.sender 
 let [_, code] = text.match(linkRegex) || []
 if (!args[0]) throw `✳️ أرسل رابط المجموعة\n\n 📌 مثال:\n *${usedPrefix + command}* <linkwa> <أيام>\n\n_العدد يمثل عدد الأيام التي سيكون فيها البوت في المجموعة_` 
 if (!code) throw `✳️ رابط غير صالح`
 if (!args[1]) throw `📌 عدد الأيام مفقود\n\n مثال:\n *${usedPrefix + command}* <linkwa> 2`
 if (isNaN(args[1])) throw `✳️ أدخل رقمًا فقط يُمثل عدد الأيام التي سيكون البوت في المجموعة!`
 let owbot = global.owner[1] 
 m.reply(`😎 انتظر 3 ثوانٍ، سأنضم إلى المجموعة`)
 await delay(3000)
 try {
 let res = await conn.groupAcceptInvite(code)
 let b = await conn.groupMetadata(res)
 let d = b.participants.map(v => v.id)
 let member = d.toString()
 let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
 let nDays = 86400000 * args[1]  
 let now = new Date() * 1
 if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
 else global.db.data.chats[res].expired = now + nDays
 if (e.length) await m.reply(`✅ انضممت بنجاح إلى المجموعة \n\n≡ معلومات المجموعة \n\n *الاسم :* ${await conn.getName(res)}\n\nسيغادر البوت تلقائيًا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`)

if (e.length) await conn.reply(res, `🏮 مرحبًا بكم جميعًا

@${owbot} هو منشئي في حالة وجود أي استفسار
تمت دعوة *${m.name}*`, m, {
   mentions: d
    }).then(async () => {
    await delay(7000)
    }).then( async () => {
    await conn.reply(res, `حسنًا انتظر جميعًا 🤭`, 0)
    await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *دعوة إلى المجموعة*\n\n@${m.sender.split('@')[0]} قد قام بدعوة *${conn.user.name}* إلى المجموعة\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 الرابط : ${args[0]}\n\nسيغادر البوت تلقائيًا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
    })
    if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* to group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 link : ${args[0]}\n\nThe bot will exit automatically after\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
    if (!e.length) await m.reply(`✳️ تمت دعوة البوت بنجاح إلى المجموعة\n\n${await conn.getName(res)}\n\nسيغادر البوت تلقائيًا بعد *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
    let mes = `Hii 👋🏻
    
*${conn.user.name}* هو أحد بوتات الواتساب المتعددة المدمجة بلغة Node.js ، تمت دعوة *${conn.user.name}* من قِبل *${m.name}*

لرؤية قائمة الأوامر اكتب

${usedPrefix}help
@${conn.user.jid.split('@')[0]} سيغادر تلقائيًا بعد \n\n${msToDate(global.db.data.chats[res].expired - now)}`
 await conn.sendButton(res, mes, igfg, null, [[`✆ Owner`, `${usedPrefix}fgowner`], [`⦙☰ Menu`, `${usedPrefix}help`]], m, {
       mentions: d
        })
    })
   } catch (e) {
     conn.reply(global.owner[1]+'@s.whatsapp.net', e)
     throw `✳️ عذرًا، حدث خطأ أثناء انضمام البوت للمجموعة`
     }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

handler.owner = true

export default handler

function msToDate(ms) {
 let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
 let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
 return [d, ' *أيام*\n ', h, ' *ساعات*\n ', m, ' *دقائق*\n ', s, ' *ثواني* '].map(v => v.toString().padStart(2, 0)).join('')
}
