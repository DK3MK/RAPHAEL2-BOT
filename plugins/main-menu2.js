
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
ℝ𝔸ℙℍ𝔸𝔼𝕃 ┃ ＢＯＴ ²⁰²³
`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './Guru.jpg' 
    conn.sendFile(m.chat, m2, pp, m, false)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'help2', 'h2']

export default handler
