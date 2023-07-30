let handler = async (m, { args, usedPrefix, command }) => {
    let json = JSON.parse(JSON.stringify(global.asmaulhusna))
    if (isNaN(args[0])) throw `*مثال*:\n          ${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `الحد الأدنى 1 والحد الأقصى 99!`
        let { arabic, translation_ar, index } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return m.reply(`الترتيب: *${index}*

الأسم: *${arabic}*
المعنى: *${translation_ar}*
`.trim())
    }
}
handler.help = ['asmaulhusna [1-99]']
handler.tags = ['quran']
handler.command = ['الله']

export default handler
global.asmaulhusna = [
  {
      index: 1,
      arabic: "الرَّحْمَنُ",
      translation_ar: "من له الامتنان المطلق",
  },
  {
      index: 2,
      arabic: "الرَّحِيمُ",
      translation_ar: "من له الطبيعة الرحمة المطلقة",
  },
  {
      index: 3,
      arabic: "الْمَلِكُ",
      translation_ar: "من له الطبيعة المطلقة للحكم / الحكم",
  },
  {
      index: 4,
      arabic: "الْقُدُّوسُ",
      translation_ar: "من لديه المطلق الالهي",
  },
  {
      index: 5,
      arabic: "السَّلاَمُ",
      translation_ar: "من لديه الملكية المطلقة لعطاء الرفاهية",
  },
  {
      index: 6,
      arabic: "الْمُؤْمِنُ",
      translation_ar: "من لديه الملكية المطلقة لمنح الضمان",
  },
  {
      index: 7,
      arabic: "الْمُهَيْمِنُ",
      translation_ar: "المطلق الحافظ",
  },
  {
      index: 8,
      arabic: "الْعَزِيزُ",
      translation_ar: "من لديه بسالة مطلقة",
  },
  {
      index: 9,
      arabic: "الْجَبَّارُ",
      translation_ar: "صاحب المطلق العظيم",
  },
  {
      index: 10,
      arabic: "الْمُتَكَبِّرُ",
      translation_ar: "من له العظمة المطلقة وله العظمة",
  },
  {
      index: 11,
      arabic: "الْخَالِقُ",
      translation_ar: "من له طبيعة الخالق المطلقة",
  },
  {
      index: 12,
      arabic: "الْبَارِئُ",
      translation_ar: "المطلق (الإنشاء والتكوين والموازنة)",
  },
  {
      index: 13,
      arabic: "الْمُصَوِّرُ",
      translation_ar: "من له التكوين المطلق (كيانه)",
  },
  {
      index: 14,
      arabic: "الْغَفَّارُ",
      translation_ar: "من له الرحمة المطلقة",
  },
  {
      index: 15,
      arabic: "الْقَهَّارُ",
      translation_ar: "التي لها قوة مطلقة",
  },
  {
      index: 16,
      arabic: "الْوَهَّابُ",
      translation_ar: "من لديه الطبيعة المطلقة للمهتم",
  },
  {
      index: 17,
      arabic: "الرَّزَّاقُ",
      translation_ar: "من لديه طبيعة مانح الثروة المطلقة",
  },
  {
      index: 18,
      arabic: "الْفَتَّاحُ",
      translation_ar: "من له الطبيعة المطلقة لنعمة الافتتاح",
  },
  {
      index: 19,
      arabic: "اَلْعَلِيْمُ",
      translation_ar: "من لديه العليم المطلق (لديه المعرفة)",
  },
  {
      index: 20,
      arabic: "الْقَابِضُ",
      translation_ar: "من له المطلق الضيق (مخلوقه)",
  },
  {
      index: 21,
      arabic: "الْبَاسِطُ",
      translation_ar: "من له الطبيعة المطلقة الموسعة (مخلوقه)",
  },
  {
      index: 22,
      arabic: "الْخَافِضُ",
      translation_ar: "صاحب المطلق (خليقته)",
  },
  {
      index: 23,
      arabic: "الرَّافِعُ",
      translation_ar: "من له المطلق تعالى (مخلوقه)",
  },
  {
      index: 24,
      arabic: "الْمُعِزُّ",
      translation_ar: "من له الطبيعة المطلقة المُسبحة (مخلوقه)",
  },
  {
      index: 25,
      arabic: "المُذِلُّ",
      translation_ar: "ذو الذل المطلق (خليقته)",
  },
  {
      index: 26,
      arabic: "السَّمِيعُ",
      translation_ar: "المطلق سميع",
  },
  {
      index: 27,
      arabic: "الْبَصِيرُ",
      translation_ar: "الذي له كل المطلق",
  },
  {
      index: 28,
      arabic: "الْحَكَمُ",
      translation_ar: "من لديه الطبيعة المطلقة للأكثر إصرارًا",
  },
  {
      index: 29,
      arabic: "الْعَدْلُ",
      translation_ar: "من له الطبيعة المطلقة للعدل",
  },
  {
      index: 30,
      arabic: "اللَّطِيفُ",
      translation_ar: "من لديه المطلق اللطيف",
  },
  {
      index: 31,
      arabic: "الْخَبِيرُ",
      translation_ar: "المطلق هو معرفة كل الأسرار",
  },
  {
      index: 32,
      arabic: "الْحَلِيمُ",
      translation_ar: "من له الطبيعة المطلقة من الحليم",
  },
  {
      index: 33,
      arabic: "الْعَظِيمُ",
      translation_ar: "من لديه المطلق الأسمى",
  },
  {
      index: 34,
      arabic: "الْغَفُورُ",
      translation_ar: "من له الطبيعة المطلقة للغفور",
  },
  {
      index: 35,
      arabic: "الشَّكُورُ",
      translation_ar: "من يملك مطلق الرحيم (الاحترام)",
  },
  {
      index: 36,
      arabic: "الْعَلِيُّ",
      translation_ar: "من لديه المطلق الأسمى",
  },
  {
      index: 37,
      arabic: "الْكَبِيرُ",
      translation_ar: "من لديه المطلق الأسمى",
  },
  {
      index: 38,
      arabic: "الْحَفِيظُ",
      translation_ar: "من لديه الطبيعة الأسمى المحافظة",
  },
  {
      index: 39,
      arabic: "المُقيِت",
      translation_ar: "من له الطبيعة المطلقة لمن يقدم الكفايه",
  },
  {
      index: 40,
      arabic: "الْحسِيبُ",
      translation_ar: "من لديه الطبيعة المطلقة للحوسبة",
  },
  {
      index: 41,
      arabic: "الْجَلِيلُ",
      translation_ar: "من له المطلق الأسمى",
  },
  {
      index: 42,
      arabic: "الْكَرِيمُ",
      translation_ar: "من له الطبيعة الأكثر كرمًا",
  },
  {
      index: 43,
      arabic: "الرَّقِيبُ",
      translation_ar: "من لديه طبيعة إشرافية مطلقة",
  },
  {
      index: 44,
      arabic: "الْمُجِيبُ",
      translation_ar: "من لديه الطبيعة المطلقة الأكثر منحًا",
  },
  {
      index: 45,
      arabic: "الْوَاسِعُ",
      translation_ar: "من لديه المطلق الأكثر شمولاً",
  },
  {
      index: 46,
      arabic: "الْحَكِيمُ",
      translation_ar: "من لديه الطبيعة المطلقة لذلك الحكمة",
  },
  {
      index: 47,
      arabic: "الْوَدُودُ",
      translation_ar: "من لديه طبيعة مطلقة من محبين",
  },
  {
      index: 48,
      arabic: "الْمَجِيدُ",
      translation_ar: "من له المطلق الأسمى",
  },
  {
      index: 49,
      arabic: "الْبَاعِثُ",
      translation_ar: "من لديه أكثر المطلق الصحوة",
  },
  {
      index: 50,
      arabic: "الشَّهِيدُ",
      translation_ar: "الشاهد هو صاحب المطلق",
  },
  {
      index: 51,
      arabic: "الْحَقُّ",
      translation_ar: "من له الطبيعة المطلقة للصالحين",
  },
  {
      index: 52,
      arabic: "الْوَكِيلُ",
      translation_ar: "الذي له المطلق هو الأوفر",
  },
  {
      index: 53,
      arabic: "الْقَوِيُّ",
      translation_ar: "صاحب المطلق هو الأقوى",
  },
  {
      index: 54,
      arabic: "الْمَتِينُ",
      translation_ar: "من لديه أقوى المطلق",
  },
  {
      index: 55,
      arabic: "الْوَلِيُّ",
      translation_ar: "من يتمتع بالطبيعة المطلقة الأكثر حماية",
  },
  {
      index: 56,
      arabic: "الْحَمِيدُ",
      translation_ar: "من له الطبيعة المطلقة التي تستحق الثناء",
  },
  {
      index: 57,
      arabic: "الْمُحْصِي",
      translation_ar: "الذي له المطلق هو الحساب",
  },
  {
      index: 58,
      arabic: "الْمُبْدِئُ",
      translation_ar: "صاحب المطلق هو البادئ",
  },
  {
      index: 59,
      arabic: "الْمُعِيدُ",
      translation_ar: "من لديه الطبيعة المطلقة لعودة الحياة",
  },
  {
      index: 60,
      arabic: "الْمُحْيِي",
      translation_ar: "من لديه الحركة المطلقة",
  },
  {
      index: 61,
      arabic: "اَلْمُمِيتُ",
      translation_ar: "من لديه معنويات مطلقة",
  },
  {
      index: 62,
      arabic: "الْحَيُّ",
      translation_ar: "صاحب المطلق هو الحي",
  },
  {
      index: 63,
      arabic: "الْقَيُّومُ",
      translation_ar: "من لديه الاكتفاء الذاتي المطلق",
  },
  {
      index: 64,
      arabic: "الْوَاجِدُ",
      translation_ar: "من لديه الطبيعة المطلقة لأكبر مخترع",
  },
  {
      index: 65,
      arabic: "الْمَاجِدُ",
      translation_ar: "من له المطلق الأسمى",
  },
  {
      index: 66,
      arabic: "الْواحِدُ",
      translation_ar: "من له الكائن الأسمى المطلق",
  },
  {
      index: 67,
      arabic: "اَلاَحَدُ",
      translation_ar: "من لديه الكائن الأسمى المطلق",
  },
  {
      index: 68,
      arabic: "الصَّمَدُ",
      translation_ar: "من لديه المطلق الأكثر حاجة ، مكان يسأل عنه",
  },
  {
      index: 69,
      arabic: "الْقَادِرُ",
      translation_ar: "من لديه المطلق ، والأكثر إصرارا ، والأكثر توازنا",
  },
  {
      index: 70,
      arabic: "الْمُقْتَدِرُ",
      translation_ar: "المطلق هو الكائن الأسمى",
  },
  {
      index: 71,
      arabic: "الْمُقَدِّمُ",
      translation_ar: "من لديه الطبيعة المطلقة للأولوية",
  },
  {
      index: 72,
      arabic: "الْمُؤَخِّرُ",
      translation_ar: "من له الطبيعة المطلقة في غاية النهاية",
  },
  {
      index: 73,
      arabic: "الأوَّلُ",
      translation_ar: "من لديه الطبيعة المطلقة للبداية",
  },
  {
      index: 74,
      arabic: "الآخِرُ",
      translation_ar: "من لديه طبيعة المطلقة المطلقة",
  },
  {
      index: 75,
      arabic: "الظَّاهِرُ",
      translation_ar: "المطلق هو الأكثر واقعية",
  },
  {
      index: 76,
      arabic: "الْبَاطِنُ",
      translation_ar: "من لديه طبيعة الغيب المطلقة",
  },
  {
      index: 77,
      arabic: "الْوَالِي",
      translation_ar: "من لديه المطلق الأسمى",
  },
  {
      index: 78,
      arabic: "الْمُتَعَالِي",
      translation_ar: "من لديه المطلق الأسمى",
  },
  {
      index: 79,
      arabic: "الْبَرُّ",
      translation_ar: "من له طبيعة مطلقة من أرحم",
  },
  {
      index: 80,
      arabic: "التَّوَابُ",
      translation_ar: "من له طبيعته المطلقة قائلًا للتوبة",
  },
  {
      index: 81,
      arabic: "الْمُنْتَقِمُ",
      translation_ar: "صاحب المطلق هو المنتقم الأسمى",
  },
  {
      index: 82,
      arabic: "العَفُوُّ",
      translation_ar: "من له طبيعة الغفران المطلقة",
  },
  {
      index: 83,
      arabic: "الرَّؤُوفُ",
      translation_ar: "من له الطبيعة المطلقة للرحمة",
  },
  {
      index: 84,
      arabic: "مَالِكُ الْمُلْكِ",
      translation_ar: "من له الحاكم المطلق للمملكة (الكون)",
  },
  {
      index: 85,
      arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
      translation_ar: "صاحب العظمة والمجد المطلق",
  },
  {
      index: 86,
      arabic: "الْمُقْسِطُ",
      translation_ar: "من له الطبيعة المطلقة للعدل",
  },
  {
      index: 87,
      arabic: "الْجَامِعُ",
      translation_ar: "الشخص الذي لديه المطلق هو الجامع",
  },
  {
      index: 88,
      arabic: "الْغَنِيُّ",
      translation_ar: "من لديه الطبيعة المطلقة للأكثر ملاءمة",
  },
  {
      index: 89,
      arabic: "الْمُغْنِي",
      translation_ar: "الذي له المطلق هو أعظم الثروة",
  },
  {
      index: 90,
      arabic: "اَلْمَانِعُ",
      translation_ar: "من لديه المطلق من الطبيعة الأكثر وقائية",
  },
  {
      index: 91,
      arabic: "الضَّارَّ",
      translation_ar: "صاحب العذاب المطلق",
  },
  {
      index: 92,
      arabic: "النَّافِعُ",
      translation_ar: "من لديه الطبيعة المطلقة للاكثر فائدة",
  },
  {
      index: 93,
      arabic: "النُّورُ",
      translation_ar: "من لديه الضوء المطلق (ينير ، يعطي الضوء)",
  },
  {
      index: 94,
      arabic: "الْهَادِي",
      translation_ar: "من لديه طبيعة المطلقة من أكثر المرشدين",
  },
  {
      index: 95,
      arabic: "الْبَدِيعُ",
      translation_ar: "من له طبيعة الخالق المطلقة",
  },
  {
      index: 96,
      arabic: "اَلْبَاقِي",
      translation_ar: "من له الطبيعة المطلقة للأبدية",
  },
  {
      index: 97,
      arabic: "الْوَارِثُ",
      translation_ar: "من لديه الطبيعة المطلقة للوريث الأعلى",
  },
  {
      index: 98,
      arabic: "الرَّشِيدُ",
      translation_ar: "من لديه الطبيعة الأكثر ذكاءً",
  },
  {
      index: 99,
      arabic: "الصَّبُورُ",
      translation_ar: "من له طبيعة الصبر المطلقة",
  }
]
