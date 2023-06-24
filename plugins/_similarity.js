import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    if (!m.text) return
    let noPrefix = m.text.replace(usedPrefix, '')
    let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
    if (help.includes(noPrefix)) return
    let mean = didyoumean(noPrefix, help)
    let sim = similarity(noPrefix, mean)
    let som = sim * 100
    if (mean) {
this.m.reply(`*ربما كنت تقصد:*

▢ ${usedPrefix + mean}
▢ التشابه: *_${parseInt(som)}%_*`)
    }
  }
}

export const disabled = false
