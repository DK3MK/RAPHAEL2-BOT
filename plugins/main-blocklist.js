let handler = async (m, { conn }) => {
	await conn.fetchBlocklist().then(async data => {
	  let txt = `*≡ قائمة الحظر *\n\n*الإجمالي :* ${data.length}\n\n┌─⊷\n`
	  for (let i of data) {
		txt += `▢ @${i.split("@")[0]}\n`
	  }
	  txt += "└───────────"
	  return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
	  console.log(err);
	  throw 'لا يوجد أرقام محظورة'
	})
  }
  
  handler.help = ['blocklist']
  handler.tags = ['main']
  handler.command = ['blocklist', 'listblock'] 
  handler.owner = true

  export default handler
  