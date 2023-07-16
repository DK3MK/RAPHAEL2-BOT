let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
    if (!args[0]) return conn.sendFile(m.chat,  pp, 'paper.jpg', `للإستخدام\n\n*مثال*: لعبه ورقه\nيمكنك اختيار *حجر, ورقه, مقص*`, m)
    var astro = Math.random()
    if (astro < 0.34) {
    astro = 'حجر' 
    } else if (astro > 0.34 && astro < 0.67) {
    astro = 'مقص' 
    } else {
    astro = 'ورقة'
    }

    ////////
    if (text == astro) {
    m.reply(`🔰 تعادل!\n\nانت: ${text}\nالبوت: ${astro}`)
    } else if (text == 'ورقة','ورقه') {
    if (astro == 'حجر') {
    m.reply(`🥳 لقد فزت! 🎉\n\nانت: ${text}\nالبوت: ${astro}`)
    } else {
    m.reply(`☠️ انت تخسر! ❌\n\nانت: ${text}\nالبوت: ${astro}`)
    }
    } else if (text == 'مقص') {
    if (astro == 'ورقة','ورقه') {
    m.reply(`🥳 لقد فزت! 🎉\n\nانت: ${text}\nالبوت: ${astro}`)
    } else {
    m.reply(`☠️ انت تخسر! ❌\n\nانت: ${text}\nالبوت: ${astro}`)
    }
    } else if (text == 'مقص') {
    if (astro == 'ورقة','ورقه') {
    m.reply(`🥳 لقد فزت! 🎉\n\nانت: ${text}\nالبوت: ${astro}`)
    } else {
    m.reply(`☠️ انت تخسر! ❌\n\nانت: ${text}\nالبوت: ${astro}`)
    }
    } else if (text == 'ورقة','ورقه') {
    if (astro == 'حجر') {
    m.reply(`🥳 لقد فزت! 🎉\n\nانت: ${text}\nالبوت: ${astro}`)
    } else {
    m.reply(`☠️ انت تخسر! ❌\n\nانت: ${text}\nالبوت: ${astro}`)
    }
    } else if (text == 'حجر') {
    if (astro == 'مقص') {
    m.reply(`🥳 لقد فزت! 🎉\n\n*انت: ${text}\nالبوت: ${astro}`)
    } else {
    m.reply(`☠️ انت تخسر! ❌\n\n*انت: ${text}\nالبوت: ${astro}`)
    }


    }}
    handler.help = ['ppt']
    handler.tags = ['games']
    handler.command = /^(ppt|لعبة|حجر-ورقه-مقص|حجر|ورقه|مقص|ورقة|لعبه)$/i
    export default handler
