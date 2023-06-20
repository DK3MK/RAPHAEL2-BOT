let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	 let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
    let user = global.db.data.users[m.sender]
   let tee = `✳️ أدخل نصًا قصيرًا\n\n📌 مثال: *${usedPrefix + command}* RAFF`
   let too = `✳️ افصل النص بواسطة *+*\n\n📌 مثال:\n*${usedPrefix + command}* RAFF *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
     case 'lightglow': 
	if (!text) throw tee
	let ut = global.API('fgmods', '/api/textpro/lightglow', { text }, 'apikey')
	conn.sendFile(m.chat, ut, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
     case 'layer': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let lr = global.API('fgmods', '/api/textpro/layered', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, lr, 'logo.png', `✅ Result`, m)
	m.react(done)
	break  
     case 'aglow': 
	if (!text) throw tee
	let da = global.API('fgmods', '/api/textpro/advancedglow', { text }, 'apikey')
	conn.sendFile(m.chat, da, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
     case 'diamond': 
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/diamond', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
  default:
} 
} 
handler.help = ['lightglow', 'layer', 'aglow', 'diamond']
handler.tags = ['maker']
handler.command = /^(lightglow|layer|aglow|diamond)$/i

export default handler
