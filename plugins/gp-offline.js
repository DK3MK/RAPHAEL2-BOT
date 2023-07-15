let handler = async (m, { conn, text, participants }) => {
    let member = participants.map(u => u.id)
    if(!text) {
    var sum = member.length
    } else {
    var sum = text} 
    var total = 0
    var sider = []
    for(let i = 0; i < sum; i++) {
    let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
    if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
    if (typeof global.db.data.users[member[i]] !== 'undefined'){
    if(global.db.data.users[member[i]].whitelist == false){
    total++
    sider.push(member[i])}
    }else {
    total++
    sider.push(member[i])}}}
    if(total == 0) return conn.reply(m.chat, `*هذه المجموعة نشطة وليس بها اصنام*`, m) 
    m.reply(`*[⚠ أعضاء غير متفاعلين ⚠]*\n\n*الجروب:* ${await conn.getName(m.chat)}\n*الاعضاء:* ${sum}\n\n*[ 👻 قائمة الاصنام 👻 ]*\n${sider.map(v => '▢ تفاعل @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملحوظة : مب شرط إن البوت يكون صح 100%*`, null, { mentions: sider })}
    handler.command = /^(الاصنام|الاشباح|اصنام|الأصنام|الإصنام)$/i
    handler.admin = true
    handler.botAdmin = true
    export default handler
