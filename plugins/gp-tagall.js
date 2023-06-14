let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ المجموعة: *${groupMetadata.subject}*\n▢ الأعضاء: *${participants.length}*${text ? `\n▢ الرسالة: ${text}\n` : ''}\n┌───⊷ *المنشن*\n` + users.map(v => '▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ ℝ𝔸ℙℍ𝔸𝔼𝕃 ┃ ＢＯＴ ²⁰²³ ✪──', null, {
      mentions: users
    })
  }
  
  handler.help = ['tagall']
  handler.tags = ['group']
  handler.command = ['tagall']
  handler.admin = true
  handler.group = true
  
  export default handler
  