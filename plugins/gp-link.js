import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw '⚠️ يمكن استخدام هذا الأمر فقط في المجموعات'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata غير معرفة :\\'
    if (!('participants' in groupMetadata)) throw 'participants غير معرفة :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw '✳️ أنا لست في تلك المجموعة :('
    if (!me.admin) throw '✳️ أنا لست مسؤولًا'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}

handler.help = ['link']
handler.tags = ['group']
handler.command = ['link', 'linkgroup']
handler.admin = true
handler.group = true

export default handler
