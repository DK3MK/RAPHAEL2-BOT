import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'

let limit = 350

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ مثال:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
	if (!args[0].match(/youtu/gi)) throw `❎ تحقق من الرابط الخاص بـ YouTube`
	
	let chat = global.db.data.chats[m.chat]
	m.react(rwait) 

	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
		if (size.split('MB')[0] >= limit) return m.reply(` ≡  *RAPHAEL YTDL*\n\n▢ *⚖️ الحجم* : ${size}\n▢ *جودة الفيديو* : ${q}\n\n▢ _الملف يتجاوز الحد المسموح به_ *+${limit} ميجابايت*`)
		
		conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *RAPHAEL YTDL*
  
▢ *📌 العنوان* : ${title}
▢ *📟 الامتداد* : mp4
▢ *جودة الفيديو* : ${q}
▢ *⚖️ الحجم* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		
		m.react(done) 
		
	} catch {
		
		const { title, result, quality, size, duration, thumb, channel } = await fg.ytv(args[0])
		
		if (size.split('MB')[0] >= limit) return m.reply(` ≡  *RAPHAEL YTDL2*\n\n▢ *⚖️ الحجم* : ${size}\n▢ *جودة الفيديو* : ${quality}\n\n▢ _الملف يتجاوز الحد المسموح به_ *+${limit} ميجابايت*`)
		
		conn.sendFile(m.chat, result, title + '.mp4', `
 ≡  *RAPHAEL YTDL2*
  
▢ *📌 العنوان* : ${title}
▢ *📟 الامتداد* : mp4
▢ *⚖️ الحجم* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		
		m.react(done) 
	} 
}

handler.help = ['ytmp4 <رابط يوتيوب>']
handler.tags = ['dl']
handler.command = ['ytmp4', 'video','يوتيوبmp4','يوتيوب2']


export default handler
