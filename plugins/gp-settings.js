let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'فتح': 'not_announcement',
        'اغلاق': 'announcement',
        'إغلاق': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ اختر خيارًا:*
  *▢ ${usedPrefix + command} فتح*
  *▢ ${usedPrefix + command} إغلاق*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}

handler.help = ['group *فتح/اغلاق*']
handler.tags = ['group']
handler.command = ['group', 'grupo','جروب']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
