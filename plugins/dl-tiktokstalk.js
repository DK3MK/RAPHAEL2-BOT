import fg from 'api-dylux'
let handler = async (m, { conn, text, args }) => {

  if (!text) throw `✳️ أدخل اسم مستخدم TikTok`
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
▢ *🔖الرقم:* ${res.name}
▢ *🔖اسم المستخدم:* ${res.username}
▢ *👥متابعون:* ${res.followers}
▢ *🫂متابعة:* ${res.following}
▢ *📌الوصف:* ${res.desc}

▢ *🔗 الرابط:* https://tiktok.com/${res.username}
└────────────`
  await conn.sendFile(m.chat, res.profile, 'tt.png', txt, m)
}
handler.help = ['tiktokstalk']
handler.tags = ['dl']
handler.command = /^t(tstalk|iktokstalk)$/i

export default handler
