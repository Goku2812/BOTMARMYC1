var handler = async (m, { conn, command, text }) => {

if (!text) throw `*⚠️ ESCRIBE EL NOMBRE DE DOS PERSONAS PARA CALCULAR SU AMOR*`
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) throw `*⚠️ ESCRIBE EL NOMBRE DE LA SEGUNDA PERSONA*`
let love = `❤️ *${text1}* *Esta persona te ama* *${text2}* *y su amor por ti es de* ${Math.floor(Math.random() * 100)}%👩🏻‍❤️‍👨🏻 

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(ship)$/i

export default handler
