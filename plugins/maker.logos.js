
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
	let tee = `✳️ أدخل نصًا قصيرًا\n\n📌 مثال: *${usedPrefix + command}* RAFF`
	let too = `✳️ افصل النص بواسطة *+*\n\n📌 مثال:\n*${usedPrefix + command}* RAFF *+* BOT`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	

	case 'neon': //
	if (!text) throw tee
	let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
	conn.sendFile(m.chat, ne, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	case 'devil': //
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 

	case 'phlogo': //
	if (!text) throw too
	if (!text.includes('+')) throw too
	let [a, b] = text.split`+`   
	let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, ph, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['neon', 'devil', 'phlogo']
handler.tags = ['maker']
handler.command = /^(neon|devil|phlogo)$/i

export default handler
