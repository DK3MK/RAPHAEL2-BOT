let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ اختر خيارًا:*
  *▢ ${usedPrefix + command} open*
  *▢ ${usedPrefix + command} close*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}

handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'grupo']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
