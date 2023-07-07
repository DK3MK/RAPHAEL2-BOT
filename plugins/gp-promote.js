let handler = async (m, { conn, usedPrefix, command, text }) => {
    let number = '';
    if (isNaN(text) && !text.match(/@/g)) {

    } else if (isNaN(text)) {
        number = text.split`@`[1];
    } else if (!isNaN(text)) {
        number = text;
    }
    if (!text && !m.quoted) {
        return conn.reply(m.chat, `✳️ استخدم الأمر \n *${usedPrefix + command}* @tag  (أو قم بالرد على رسالة)`, m);
    }
    if (number.length > 13 || (number.length < 11 && number.length > 0)) {
        return conn.reply(m.chat, `✳️ رقم غير صحيح`, m);
    }
    try {
        let user = '';
        if (text) {
            user = number + '@s.whatsapp.net';
        } else if (m.quoted.sender) {
            user = m.quoted.sender;
        } else if (m.mentionedJid) {
            user = number + '@s.whatsapp.net';
        }
        conn.groupParticipantsUpdate(m.chat, [user], 'promote');
        m.reply(`✅ تمت ترقية المستخدم`);
    } catch (e) {
        console.log(e);
    }
}

handler.help = ['promote']
handler.tags = ['group']
handler.command = ['promote', 'promover','ترقيه','ترقية']
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
