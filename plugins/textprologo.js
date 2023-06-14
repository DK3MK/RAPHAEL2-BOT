import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*استخدام صحيح للأمر؟*\n*┣⌯* /logo 100 *<text>*\n*مثال:*\n*┣⌯* /logo 100\n\n*[!] عند الحاجة لنصين، استخدم:*\n*┣⌯* /logo 100 *<text1|text2>*\n*مثال:*\n*┣⌯* /logo 100 *<RAFF|Bot>*\n\n*<𝑳𝑰𝑺𝑻  𝑬𝑭𝑬𝑪𝑻𝑺/>*\n\n*┣⌯* /logo ' + effects.map(v => v.title).join('\n*┣⌯* /logo ')
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `*لا يمكن العثور على تأثير ${effect}*`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗]  ${effect} غير موجود*` : `*استخدم التنسيق الصحيح ${usedPrefix + command} ${effect} ${new Array(res).fill('text').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `*لك هذا!!*\n*التأثير: ${effect}*`, m)
}
handler.help = ['logos']
handler.tags = ['logo']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
    "title": "1",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "2",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
  {
    "title": "3",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "4",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "5",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "6",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
  },
  {
    "title": "7",
    "url": "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
  },
  {
    "title": "8",
    "url": "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
  },
  {
    "title": "9",
    "url": "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
  },
  {
    "title": "10",
    "url": "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
  },
  {
    "title": "11",
    "url": "https://textpro.me/create-space-text-effects-online-free-1042.html"
  },
  {
    "title": "12",
    "url": "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  },
  {
    "title": "13",
    "url": "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
  },
  {
    "title": "14",
    "url": "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html"
  },
  {
    "title": "15",
    "url": "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
  },
  {
    "title": "16",
    "url": "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
  },
  {
    "title": "17",
    "url": "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
  },
  {
    "title": "18",
    "url": "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  },
  {
    "title": "19",
    "url": "https://textpro.me/create-berry-text-effect-online-free-1033.html"
  },
  {
    "title": "20",
    "url": "https://textpro.me/create-layered-text-effects-online-free-1032.html"
  },
  {
    "title": "21",
    "url": "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  },
  {
    "title": "22",
    "url": "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
  },
  {
    "title": "23",
    "url": "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
  },
  {
    "title": "24",
    "url": "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  },
  {
    "title": "25",
    "url": "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
  },
  {
    "title": "26",
    "url": "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  },
  {
    "title": "27",
    "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  },
  {
    "title": "28",
    "url": "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
  },
  {
    "title": "29",
    "url": "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
  },
  {
    "title": "30",
    "url": "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  },
  {
    "title": "31",
    "url": "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html"
  },
  {
    "title": "32",
    "url": "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"
  },
  {
    "title": "33",
    "url": "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"
  },
  {
    "title": "34",
    "url": "https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html"
  },
  {
    "title": "35",
    "url": "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
  },
  {
    "title": "36",
    "url": "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
  },
  {
    "title": "37",
    "url": "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
  },
  {
    "title": "38",
    "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
  },
  {
    "title": "39",
    "url": "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
  },
  {
    "title": "40",
    "url": "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
  },
  {
    "title": "41",
    "url": "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
  },
  {
    "title": "42",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "43",
    "url": "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html"
  },
  {
    "title": "44",
    "url": "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"
  },
  {
    "title": "45",
    "url": "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
  },
  {
    "title": "46",
    "url": "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
  },
  {
    "title": "47",
    "url": "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
  },
  {
    "title": "48",
    "url": "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
  },
  {
    "title": "49",
    "url": "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
  },
  {
    "title": "50",
    "url": "https://textpro.me/create-blackpink-logo-style-online-1001.html"
  },
  {
    "title": "51",
    "url": "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html"
  },
  {
    "title": "52",
    "url": "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
  },
  {
    "title": "53",
    "url": "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
  },
  {
    "title": "54",
    "url": "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
  },
  {
    "title": 55,
    "url": "https://textpro.me/sand-writing-text-effect-online-990.html"
  },
  {
    "title": "56",
    "url": "https://textpro.me/sand-engraved-3d-text-effect-989.html"
  },
  {
    "title": 57,
    "url": "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
  },
  {
    "title": "58",
    "url": "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"
  },
  {
    "title": "59",
    "url": "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
  },
  {
    "title": "60",
    "url": "https://textpro.me/create-space-3d-text-effect-online-985.html"
  },
  {
    "title": "61",
    "url": "https://textpro.me/metal-dark-gold-text-effect-984.html"
  },
  {
    "title": "62",
    "url": "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  },
  {
    "title": "63",
    "url": "https://textpro.me/create-a-stone-text-effect-online-982.html"
  },
  {
    "title": "64",
    "url": "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  },
  {
    "title": "65",
    "url": "https://textpro.me/1917-style-text-effect-online-980.html"
  },
  {
    "title": "66",
    "url": "https://textpro.me/80-s-retro-neon-text-effect-online-979.html"
  },
  {
    "title": "67",
    "url": "https://textpro.me/minion-text-effect-3d-online-978.html"
  },
  {
    "title": "68",
    "url": "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
  },
  {
    "title": "69",
    "url": "https://textpro.me/double-exposure-text-effect-black-white-976.html"
  },
  {
    "title": "70",
    "url": "https://textpro.me/holographic-3d-text-effect-975.html"
  },
  {
    "title": "71",
    "url": "https://textpro.me/create-3d-avengers-logo-online-974.html"
  },
  {
    "title": "72",
    "url": "https://textpro.me/metal-purple-dual-effect-973.html"
  },
  {
    "title": "73",
    "url": "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html"
  },
  {
    "title": "74",
    "url": "https://textpro.me/create-logo-style-marvel-studios-online-971.html"
  },
  {
    "title": "75",
    "url": "https://textpro.me/deluxe-silver-text-effect-970.html"
  },
  {
    "title": "76",
    "url": "https://textpro.me/color-full-luxury-metal-text-effect-969.html"
  },
  {
    "title": "77",
    "url": "https://textpro.me/glossy-blue-metal-text-effect-967.html"
  },
  {
    "title": "78",
    "url": "https://textpro.me/deluxe-gold-text-effect-966.html"
  },
  {
    "title": "79",
    "url": "https://textpro.me/glossy-carbon-text-effect-965.html"
  },
  {
    "title": "80",
    "url": "https://textpro.me/fabric-text-effect-online-964.html"
  },
  {
    "title": "81",
    "url": "https://textpro.me/neon-text-effect-online-963.html"
  },
  {
    "title": "82",
    "url": "https://textpro.me/new-year-cards-3d-by-name-960.html"
  },
  {
    "title": "83",
    "url": "https://textpro.me/happ-new-year-card-firework-gif-959.html"
  },
  {
    "title": "84",
    "url": "https://textpro.me/fullcolor-balloon-text-effect-958.html"
  },
  {
    "title": "85",
    "url": "https://textpro.me/create-text-logo-3d-metal-online-957.html"
  },
  {
    "title": "86",
    "url": "https://textpro.me/create-avatar-gold-online-956.html"
  },
  {
    "title": "87",
    "url": "https://textpro.me/text-logo-3d-metal-silver-946.html"
  },
  {
    "title": "88",
    "url": "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"
  },
  {
    "title": "89",
    "url": "https://textpro.me/text-logo-3d-metal-gold-944.html"
  },
  {
    "title": "90",
    "url": "https://textpro.me/text-logo-3d-metal-galaxy-943.html"
  },
  {
    "title": "91",
    "url": "https://textpro.me/xmas-cards-3d-online-942.html"
  },
  {
    "title": "92",
    "url": "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
  },
  {
    "title": "93",
    "url": "https://textpro.me/halloween-fire-text-effect-940.html"
  },
  {
    "title": "94",
    "url": "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
  },
  {
    "title": "95",
    "url": "https://textpro.me/create-lion-logo-mascot-online-938.html"
  },
  {
    "title": "96",
    "url": "https://textpro.me/create-wolf-logo-black-white-937.html"
  },
  {
    "title": "97",
    "url": "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
  },
  {
    "title": "98",
    "url": "https://textpro.me/create-ninja-logo-online-935.html"
  },
  {
    "title": "99",
    "url": "https://textpro.me/create-logo-joker-online-934.html"
  },
  {
    "title": "100",
    "url": "https://textpro.me/wicker-text-effect-online-932.html"
  },
  {
    "title": "101",
    "url": "https://textpro.me/natural-leaves-text-effect-931.html"
  },
  {
    "title": "102",
    "url": "https://textpro.me/firework-sparkle-text-effect-930.html"
  },
  {
    "title": "103",
    "url": "https://textpro.me/skeleton-text-effect-online-929.html"
  },
  {
    "title": "104",
    "url": "https://textpro.me/red-foil-balloon-text-effect-928.html"
  },
  {
    "title": "105",
    "url": "https://textpro.me/purple-foil-balloon-text-effect-927.html"
  },
  {
    "title": "106",
    "url": "https://textpro.me/pink-foil-balloon-text-effect-926.html"
  },
  {
    "title": "107",
    "url": "https://textpro.me/green-foil-balloon-text-effect-925.html"
  },
  {
    "title": "108",
    "url": "https://textpro.me/cyan-foil-balloon-text-effect-924.html"
  },
  {
    "title": "109",
    "url": "https://textpro.me/blue-foil-balloon-text-effect-923.html"
  },
  {
    "title": "110",
    "url": "https://textpro.me/gold-foil-balloon-text-effect-922.html"
  },
  {
    "title": "111",
    "url": "https://textpro.me/steel-text-effect-online-921.html"
  },
  {
    "title": "112",
    "url": "https://textpro.me/ultra-gloss-text-effect-online-920.html"
  },
  {
    "title": "113",
    "url": "https://textpro.me/denim-text-effect-online-919.html"
  },
  {
    "title": "114",
    "url": "https://textpro.me/decorate-green-text-effect-918.html"
  },
  {
    "title": "115",
    "url": "https://textpro.me/decorate-purple-text-effect-917.html"
  },
  {
    "title": "116",
    "url": "https://textpro.me/peridot-stone-text-effect-916.html"
  },
  {
    "title": "117",
    "url": "https://textpro.me/rock-text-effect-online-915.html"
  },
  {
    "title": "118",
    "url": "https://textpro.me/lava-text-effect-online-914.html"
  },
  {
    "title": "119",
    "url": "https://textpro.me/yellow-glass-text-effect-913.html"
  },
  {
    "title": "120",
    "url": "https://textpro.me/purple-glass-text-effect-912.html"
  },
  {
    "title": "121",
    "url": "https://textpro.me/orange-glass-text-effect-911.html"
  },
  {
    "title": "122",
    "url": "https://textpro.me/green-glass-text-effect-910.html"
  },
  {
    "title": "123",
    "url": "https://textpro.me/cyan-glass-text-effect-909.html"
  },
  {
    "title": "124",
    "url": "https://textpro.me/blue-glass-text-effect-908.html"
  },
  {
    "title": "125",
    "url": "https://textpro.me/red-glass-text-effect-907.html"
  },
  {
    "title": "126",
    "url": "https://textpro.me/purple-shiny-glass-text-effect-906.html"
  },
  {
    "title": "127",
    "url": "https://textpro.me/captain-america-text-effect-905.html"
  },
  {
    "title": "128",
    "url": "https://textpro.me/robot-r2-d2-text-effect-903.html"
  },
  {
    "title": "129",
    "url": "https://textpro.me/rainbow-equalizer-text-effect-902.html"
  },
  {
    "title": "130",
    "url": "https://textpro.me/toxic-text-effect-online-901.html"
  },
  {
    "title": "131",
    "url": "https://textpro.me/pink-sparkling-jewelry-text-effect-899.html"
  },
  {
    "title": "132",
    "url": "https://textpro.me/blue-sparkling-jewelry-text-effect-898.html"
  },
  {
    "title": "133",
    "url": "https://textpro.me/green-sparkling-jewelry-text-effect-897.html"
  },
  {
    "title": "134",
    "url": "https://textpro.me/purple-sparkling-jewelry-text-effect-896.html"
  },
  {
    "title": "135",
    "url": "https://textpro.me/gold-sparkling-jewelry-text-effect-895.html"
  },
  {
    "title": "136",
    "url": "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"
  },
  {
    "title": "137",
    "url": "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"
  },
  {
    "title": "138",
    "url": "https://textpro.me/purple-glass-text-effect-online-892.html"
  },
  {
    "title": "139",
    "url": "https://textpro.me/decorative-glass-text-effect-891.html"
  },
  {
    "title": "140",
    "url": "https://textpro.me/chocolate-cake-text-effect-890.html"
  },
  {
    "title": "141",
    "url": "https://textpro.me/strawberry-text-effect-online-889.html"
  },
  {
    "title": "142",
    "url": "https://textpro.me/koi-fish-text-effect-online-888.html"
  },
  {
    "title": "143",
    "url": "https://textpro.me/bread-text-effect-online-887.html"
  },
  {
    "title": "144",
    "url": "https://textpro.me/matrix-style-text-effect-online-884.html"
  },
  {
    "title": "145",
    "url": "https://textpro.me/horror-blood-text-effect-online-883.html"
  },
  {
    "title": "146",
    "url": "https://textpro.me/neon-light-text-effect-online-882.html"
  },
  {
    "title": "147",
    "url": "https://textpro.me/create-thunder-text-effect-online-881.html"
  },
  {
    "title": "148",
    "url": "https://textpro.me/3d-box-text-effect-online-880.html"
  },
  {
    "title": "149",
    "url": "https://textpro.me/neon-text-effect-online-879.html"
  },
  {
    "title": "150",
    "url": "https://textpro.me/road-warning-text-effect-878.html"
  },
  {
    "title": "151",
    "url": "https://textpro.me/3d-steel-text-effect-877.html"
  },
  {
    "title": "152",
    "url": "https://textpro.me/bokeh-text-effect-876.html"
  },
  {
    "title": "153",
    "url": "https://textpro.me/green-neon-text-effect-874.html"
  },
  {
    "title": "154",
    "url": "https://textpro.me/free-advanced-glow-text-effect-873.html"
  },
  {
    "title": "155",
    "url": "https://textpro.me/dropwater-text-effect-872.html"
  },
  {
    "title": "156",
    "url": "https://textpro.me/break-wall-text-effect-871.html"
  },
  {
    "title": "157",
    "url": "https://textpro.me/chrismast-gift-text-effect-869.html"
  },
  {
    "title": "158",
    "url": "https://textpro.me/honey-text-effect-868.html"
  },
  {
    "title": "159",
    "url": "https://textpro.me/plastic-bag-drug-text-effect-867.html"
  },
  {
    "title": "160",
    "url": "https://textpro.me/horror-gift-text-effect-866.html"
  },
  {
    "title": "161",
    "url": "https://textpro.me/marble-slabs-text-effect-864.html"
  },
  {
    "title": "162",
    "url": "https://textpro.me/marble-text-effect-863.html"
  },
  {
    "title": "163",
    "url": "https://textpro.me/ice-cold-text-effect-862.html"
  },
  {
    "title": "164",
    "url": "https://textpro.me/fruit-juice-text-effect-861.html"
  },
  {
    "title": "165",
    "url": "https://textpro.me/rusty-metal-text-effect-860.html"
  },
  {
    "title": "166",
    "url": "https://textpro.me/abstra-gold-text-effect-859.html"
  },
  {
    "title": "167",
    "url": "https://textpro.me/biscuit-text-effect-858.html"
  },
  {
    "title": "168",
    "url": "https://textpro.me/bagel-text-effect-857.html"
  },
  {
    "title": "169",
    "url": "https://textpro.me/wood-text-effect-856.html"
  },
  {
    "title": "170",
    "url": "https://textpro.me/sci-fi-text-effect-855.html"
  },
  {
    "title": "171",
    "url": "https://textpro.me/metal-rainbow-text-effect-854.html"
  },
  {
    "title": "172",
    "url": "https://textpro.me/purple-gem-text-effect-853.html"
  },
  {
    "title": "173",
    "url": "https://textpro.me/shiny-metal-text-effect-852.html"
  },
  {
    "title": "174",
    "url": "https://textpro.me/yellow-jewelry-text-effect-851.html"
  },
  {
    "title": "175",
    "url": "https://textpro.me/silver-jewelry-text-effect-850.html"
  },
  {
    "title": "176",
    "url": "https://textpro.me/red-jewelry-text-effect-849.html"
  },
  {
    "title": "177",
    "url": "https://textpro.me/purple-jewelry-text-effect-848.html"
  },
  {
    "title": "178",
    "url": "https://textpro.me/orange-jewelry-text-effect-847.html"
  },
  {
    "title": "179",
    "url": "https://textpro.me/green-jewelry-text-effect-846.html"
  },
  {
    "title": "180",
    "url": "https://textpro.me/cyan-jewelry-text-effect-845.html"
  },
  {
    "title": "181",
    "url": "https://textpro.me/blue-jewelry-text-effect-844.html"
  },
  {
    "title": "182",
    "url": "https://textpro.me/hot-metal-text-effect-843.html"
  },
  {
    "title": "183",
    "url": "https://textpro.me/hexa-golden-text-effect-842.html"
  },
  {
    "title": "184",
    "url": "https://textpro.me/blue-glitter-text-effect-841.html"
  },
  {
    "title": "185",
    "url": "https://textpro.me/purple-glitter-text-effect-840.html"
  },
  {
    "title": "186",
    "url": "https://textpro.me/pink-glitter-text-effect-839.html"
  },
  {
    "title": "187",
    "url": "https://textpro.me/green-glitter-text-effect-838.html"
  },
  {
    "title": "188",
    "url": "https://textpro.me/silver-glitter-text-effect-837.html"
  },
  {
    "title": "189",
    "url": "https://textpro.me/gold-glitter-text-effect-836.html"
  },
  {
    "title": "190",
    "url": "https://textpro.me/bronze-glitter-text-effect-835.html"
  },
  {
    "title": "191",
    "url": "https://textpro.me/eroded-metal-text-effect-834.html"
  },
  {
    "title": "192",
    "url": "https://textpro.me/carbon-text-effect-833.html"
  },
  {
    "title": "193",
    "url": "https://textpro.me/pink-candy-text-effect-832.html"
  },
  {
    "title": "194",
    "url": "https://textpro.me/blue-metal-text-effect-831.html"
  },
  {
    "title": "195",
    "url": "https://textpro.me/blue-gem-text-effect-830.html"
  },
  {
    "title": "196",
    "url": "https://textpro.me/black-metal-text-effect-829.html"
  },
  {
    "title": "197",
    "url": "https://textpro.me/3d-glowing-metal-text-effect-828.html"
  },
  {
    "title": "198",
    "url": "https://textpro.me/3d-chrome-text-effect-827.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://textpro.me")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
    console.log(`${body}`)
  let resImgUrl = await fetch(`https://textpro.me/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://textpro.me' + results.fullsize_image
}
