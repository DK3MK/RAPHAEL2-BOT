import { stickerTelegram } from '@bochilteam/scraper'
import axios from 'axios'

var handler = async (m, { conn, args }) => {
    if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
        let res = await Telesticker(args[0])
        await m.reply(`جارٍ إرسال ${res.length} ملصقات...`)
        if (m.isGroup && res.length > 30) {
            await m.reply('عدد الملصقات أكثر من 30، سيتم إرسالها في الدردشة الخاصة.')
            for (let i = 0; i < res.length; i++) {
                conn.sendMessage(m.sender, { sticker: { url: res[i].url }})
            }
        } else {
            for (let i = 0; i < res.length; i++) {
                conn.sendMessage(m.chat, { sticker: { url: res[i].url }})
            }
        }
    } else if (args && args.join(' ')) {
        let [query, page] = args.join(' ').split('|')
        let res = await stickerTelegram(query, page)
        if (!res.length) throw `الاستعلام "${args.join(' ')}" غير موجود`
        m.reply(res.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
    } else throw 'أدخل استعلام / رابط ملصق تليجرام'
}
handler.help = ['telesticker']
handler.tags = ['tools']
handler.command = /^(telestic?ker|tgsticker)$/i
handler.limit = true

export default handler

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'أدخل رابط ملصق تليجرام الخاص بك'
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Xfarr05',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
        resolve(hasil)
    })
}
