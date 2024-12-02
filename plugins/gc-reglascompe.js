import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`http://raw.githubusercontent.com/Bigcharly97/goku1/master/src/REGLAS_COMPE.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*ʀᴇɢʟᴀs ᴄᴏᴍᴘᴇᴛɪᴛɪᴠᴏ ғғ*`, m)}
//conn.sendButton(m.chat, "*ʀᴇɢʟᴀs ɪɴғɪɴɪᴛᴏ ғғ*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['REGLAS_COMPE']
handler.tags = ['internet']
handler.command = /^(r.c)$/i
export default handler
