
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ أدخل اسم المستخدم في Instagram\n\n📌 المثال: ${usedPrefix + command} a0i.b` 
    let res = await fg.igStalk(args[0])
    let te = `
    
┌──「 *STALKING*
*▢ 🔖الاسم:* ${res.name}
*▢ 🔖اسم المستخدم:* ${res.username}
*▢ 👥المتابعون:* ${res.followersH}
*▢ 🫂المتابعة:* ${res.followingH}
*▢ 📌النبذة:* ${res.description}
*▢ 🏝️المنشورات:* ${res.postsH}

*▢ 🔗 الرابط :* https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
