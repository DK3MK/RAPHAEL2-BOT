
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner } ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let te = `✳️Only English-speaking people are allowed in this group`
	if (isBotAdmin && chat.onlyenglish && !isAdmin && !isOwner) {
   if (m.sender.startsWith('60')) {
 m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   //---
}  
}
export default handler
