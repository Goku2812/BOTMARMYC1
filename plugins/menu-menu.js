import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
┃➤ *ʜᴏʟᴀ:* ${taguser}
┃➤ *ғᴇᴄʜᴀ:* ${date}
┃➤ *ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* ${uptime}
┃➤ *ᴘʀᴇᴍɪᴜᴍ:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣ ඬ⃟ 🎖️ _${usedPrefix}acertijo_
┣ ඬ⃟ 🎖️ _${usedPrefix}top *<texto>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}topgays_
┣ ඬ⃟ 🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟ 🎖️ _${usedPrefix}formarpareja_ fp
┣ ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣ ඬ⃟ 🎖️ _${usedPrefix}reto_
┣ ඬ⃟ 🎖️ _${usedPrefix}cancion_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *gokubot*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *gokubot*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *autosticker*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antiviewonce*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *antitoxic*_
┣ ඬ⃟ ☑️ _${usedPrefix}enable *modoadmin*_
┣ ඬ⃟ ☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _${usedPrefix}tiktok/tt *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}myc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}myc2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playdoc2 *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}spotify/sp *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
┣ ඬ⃟ 📥 _${usedPrefix}pinterest *<texto>*__
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝔻𝕄𝕀ℕ𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}menu3 vsinternos_
┣ ඬ⃟ 💎 _${usedPrefix}menuvs_
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}ban *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}ban2 *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}darpoder *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}quitarpoder *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}marcar/t *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<idioma> <texto>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ _${usedPrefix}gptvoz *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}dall-e *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}revelar *<imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}qc *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.premium = true;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
