import fetch from 'node-fetch';
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*أدخل نص أو طلبًا لاستخدام ChatGpt*\n\n*مثال:*\n*${usedPrefix + command} أحدث سلسلة Netflix*\n*${usedPrefix + command} اكتب رمز JS*`;
  try {
    const response = await fetch(`https://botz-openai-prod-botz-chatgpt-s78su6.mo1.mogenius.io/chatgpt?text=${encodeURIComponent(text)}`);
    const data = await response.json();
    const result = data.result['result']
    const fullResult = `${result}\n\nCreator: '*dark man*`;
    m.reply(fullResult.trim(data));
  } catch (error) {
    console.error('Error:', error);
    throw `*ERROR*`;
  }
};

handler.command = ['bro', 'chatgpt', 'ai', 'بوت'];

export default handler
