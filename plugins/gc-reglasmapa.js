import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`http://raw.githubusercontent.com/Bigcharly97/goku1/master/src/REGLAS_MAPA.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*ʀᴇɢʟᴀs ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ ғғ*`, m)}
//conn.sendButton(m.chat, "*ʀᴇɢʟᴀs ɪɴғɪɴɪᴛᴏ ғғ*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['REGLAS_MAPAABIERTO']
handler.tags = ['internet']
handler.command = /^(m.a)$/i
export default handler
