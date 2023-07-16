import { googleImage } from  '@bochilteam/scraper' 
var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `للإستخدام *مثال*: ${usedPrefix}${command} dark man`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendFile(m.chat, link,  'google.jpg' , `*بــــــℝ𝔸ℙℍ𝔸𝔼𝕃ــــــوت*
🔎 النتيجة: *${text}*
🌎 الصورة مأخوذة من جوجل
`,m)
}
handler.help = [ 'gimage' ]
handler.tags = [ 'internet' ]
handler.command = ['صوره','صورة']
///
export default handler
