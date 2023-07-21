import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*أدخل نص أو طلبًا لاستخدام ChatGpt*\n\n*مثال:*\n*${usedPrefix + command} أحدث سلسلة Netflix*\n*${usedPrefix + command} اكتب رمز JS*`;

  try {
    const response = await fetch(`https://guru-scrapper.cyclic.app/api/chatgpt?query=${encodeURIComponent(text)}`);
    const data = await response.json();
    const { text: result } = data.data || {};
    const creator = '*dark man*';
    const fullResult = `${result}\n\nCreator: ${creator}`;
    m.reply(fullResult.trim());
  } catch (error) {
    console.error('Error:', error); // Log the error
    throw `*ERROR*`;
  }
};

handler.command = ['bro', 'chatgpt', 'ai', 'بوت'];

export default handler;
