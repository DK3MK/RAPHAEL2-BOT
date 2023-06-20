let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
*_< All menu >_*

*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Group: - < للجروب >_*
─────────────────
*┣⌯* ${usedPrefix}tagall ↓
< منشن جماعي مع کتابة الرساله >
*┣⌯* ${usedPrefix}totag ↓
< منشن مخفي | قم بالرد علی رساله >
*┣⌯* ${usedPrefix}kick ↓
< طرد | منشن الشخص >
*┣⌯* ${usedPrefix}promote ↓
< جعل العضو/ة لمشرف/ة | منشن العضو/ة >
*┣⌯* ${usedPrefix}demote ↓
< الغاء الاشراف من العضو | منشن المشرف/ة >
*┣⌯* ${usedPrefix}warn ↓
< انذار للعضو/ة | منشن الشخص >
*┣⌯* ${usedPrefix}warns ↓
< عدد انذار العضو/ة | منشن الشخص >
*┣⌯* ${usedPrefix}unwarn ↓
< حذف انذار العضو/ة | منشن الشخص >
*┣⌯* ${usedPrefix}del ↓
< حذف الرسالة | رد على الرساله >
*┣⌯* ${usedPrefix}tagadmins ↓
< منشن المشرفين >
*┣⌯* ${usedPrefix}link ↓
< رابط الجروب >
*┣⌯* ${usedPrefix}resetlink ↓
< اعادة تعیین رابط الجروب >
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Sticker: - < للملصقات  >_*
─────────────────
*┣⌯* ${usedPrefix}sticker ↓
< قم بالرد علی صوره >
*┣⌯* ${usedPrefix}wm ↓
< لتغییر حقوق الملصق ☟
مثال : ( man | dark ) >
*┣⌯* ${usedPrefix}tovid ↓
< تحویل ملصق متحرك الی فيديو >
*┣⌯* ${usedPrefix}toimg ↓
< تحویل الملصق الی صوره >
*┣⌯* ${usedPrefix}scircle ↓
< تحویل الصورة الی ملصق دائري >
*┣⌯* ${usedPrefix}attp ↓
< تحویل النص الی ملصق >
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Tools: - < الأدوات >_*
─────────────────
*┣⌯* ${usedPrefix}tomp3 ↓
< تحويل الفیدیو الی صوت >
*┣⌯* ${usedPrefix}tovn ↓
< تحویل الفیدیو الی فویس >
*┣⌯* ${usedPrefix}styletext ↓
< تغییر استایل الکلمات ( فونت ) >
*┣⌯* ${usedPrefix}qrcode ↓
<تحویل الرابط الی  ( QR ) >
*┣⌯* ${usedPrefix}tourl ↓
< تحویل الفیدیو الی رابط >
*┣⌯* ${usedPrefix}tts ↓
< نطق باللغة ( العربیة ) >
*┣⌯* ${usedPrefix}tts en ↓
< نطق باللغة ( الإنجلزیة ) >
*┣⌯* ${usedPrefix}cal ↓
< الألة الحاسبه > 
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Search: - < بحث >_*
─────────────────
*┣⌯* ${usedPrefix}couplepp ↓
< تطقيم >
*┣⌯* ${usedPrefix}yts ↓
< بحث یوتیوب >
*┣⌯* ${usedPrefix}google ↓
< بحث جوجل >
*┣⌯* ${usedPrefix}wiki ↓
< بحث ويكيبيديا >
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Logo: - < لوجو >_*
─────────────────
*┣⌯* ${usedPrefix}logos
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_For You: < معلومات لك >_*
─────────────────
*┣⌯* ${usedPrefix}owner ↓
< المطور >
*┣⌯* ${usedPrefix}profile ↓
< معلومات الملف الشخصي >
*┣⌯* ${usedPrefix}bot ↓
< معلومات البوت >
*┣⌯* ${usedPrefix}reg ↓
< تسجیل الإسم و العمر في البوت >
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list-ar', 'allmenu-ar'] 

export default handler
