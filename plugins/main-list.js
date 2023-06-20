//✓⋕⌯（∣∾）
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => m.reply(`
*_<All menu />_*             
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Owner:_*
*─────────────────*
*┣⌯* ${usedPrefix}expired *<day>*
*┣⌯* ${usedPrefix}delexpired
*┣⌯* ${usedPrefix}blocklist
*┣⌯* ${usedPrefix}listprem
*┣⌯* ${usedPrefix}ping
*┣⌯* ${usedPrefix}runtime
*┣⌯* ${usedPrefix}addprem *<@Tag>*
*┣⌯* ${usedPrefix}delprem *<@Tag>*
*┣⌯* ${usedPrefix}banlist
*┣⌯* ${usedPrefix}ban
*┣⌯* ${usedPrefix}unban
*┣⌯* ${usedPrefix}bc
*┣⌯* ${usedPrefix}restart
*┣⌯* ${usedPrefix}cleartmp
*┣⌯* ${usedPrefix}join
*┣⌯* ${usedPrefix}resetuser
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Group:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}support
*┣⌯* ${usedPrefix}tagall *<Text>*
*┣⌯* ${usedPrefix}hidetag *<Text>*
*┣⌯* ${usedPrefix}totag *<Reply Msg>*
*┣⌯* ${usedPrefix}add *<Number>*
*┣⌯* ${usedPrefix}kick *<@Tag>*
*┣⌯* ${usedPrefix}promote *<@Tag>*
*┣⌯* ${usedPrefix}demote *<@Tag>*
*┣⌯* ${usedPrefix}warn *<@Tag>*
*┣⌯* ${usedPrefix}unwarn *<@Tag>*
*┣⌯* ${usedPrefix}del *<Reply Msg>*
*┣⌯* ${usedPrefix}invite *<Number>*
*┣⌯* ${usedPrefix}group *<close/open>*
*┣⌯* ${usedPrefix}tagadmins
*┣⌯* ${usedPrefix}link
*┣⌯* ${usedPrefix}resetlink
*┣⌯* ${usedPrefix}infogroup
*┣⌯* ${usedPrefix}warns
*┣⌯* ${usedPrefix}banchat
*┣⌯* ${usedPrefix}unbanchat
*┣⌯* ${usedPrefix}cexpired
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Sticker:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}sticker *<Reply Img>*
*┣⌯* ${usedPrefix}wm *<Reply S (Text|Text)>*
*┣⌯* ${usedPrefix}tovid *<Reply S GIF>*
*┣⌯* ${usedPrefix}emojimix *<emoji+emoji>*
*┣⌯* ${usedPrefix}getsticker *<Text>*
*┣⌯* ${usedPrefix}scircle *<Reply Img>*
*┣⌯* ${usedPrefix}toimg *<Reply Img>*
*┣⌯* ${usedPrefix}attp *<Text>*
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Tools:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}tomp3 *<Reply Vidoe>*
*┣⌯* ${usedPrefix}tovn *<Reply Vidoe>*
*┣⌯* ${usedPrefix}styletext *<Text>*
*┣⌯* ${usedPrefix}qrcode *<Text>*
*┣⌯* ${usedPrefix}toanime *<Reply Img>*
*┣⌯* ${usedPrefix}shazam *<Reply Voice>*
*┣⌯* ${usedPrefix}tourl *<Reply img, gif, vid>*
*┣⌯* ${usedPrefix}tr en *<Text Arabic>*
*┣⌯* ${usedPrefix}tr ar *<Text English>*
*┣⌯* ${usedPrefix}tts *<Text Arabic>*
*┣⌯* ${usedPrefix}tts en *<Text English>*
*┣⌯* ${usedPrefix}cal 
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Download:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}gdrive *<Url Gogle Drive>*
*┣⌯* ${usedPrefix}gitclone *<Url GitHub>*
*┣⌯* ${usedPrefix}ytmp4 *<Url Youtube>*
*┣⌯* ${usedPrefix}tgsticker *<Url S Telegram>*
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
*_Search:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}yts *<text>*
*┣⌯* ${usedPrefix}google *<text>*
*┣⌯* ${usedPrefix}wiki *<text>*
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_Logo:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}phlogo *<Text + Text>*
*┣⌯* ${usedPrefix}layer *<Text + Text>*
*┣⌯* ${usedPrefix}lightglow *<Text>*
*┣⌯* ${usedPrefix}aglow *<Text>*
*┣⌯* ${usedPrefix}diamond *<Text>* 
*┣⌯* ${usedPrefix}neon *<Text>* 
*┣⌯* ${usedPrefix}devil *<Text>* 
*┣⌯* ${usedPrefix}logos
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*

*_For You:_*
*─────────────────*
*┣⌯* ${usedPrefix}owner
*┣⌯* ${usedPrefix}afk
*┣⌯* ${usedPrefix}profile
*┣⌯* ${usedPrefix}bot
*┣⌯* ${usedPrefix}support
*┣⌯* ${usedPrefix}reg
*┣⌯* ${usedPrefix}unreg
*┣⌯* ${usedPrefix}mysn
*┣⌯* ${usedPrefix}couplepp
*┣⌯* ${usedPrefix}readmore *<Text>*
*≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡*
`.trim())
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'allmenu'] 

export default handler
