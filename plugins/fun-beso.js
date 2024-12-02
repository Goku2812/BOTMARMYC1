const handler = async (m, {conn, usedPrefix, command, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat;
  const user = global.db.data.users[who];
  if (!who) return m.reply(`*✳️ menciona a quien deseas abrazar*\n\n*📌 ejemplo :*\n${usedPrefix + command} @tag`);


  const abrazo = await conn.reply(m.chat, `@${m.sender.split('@')[0]} 𝗹𝗲 𝗲𝘀𝘁𝗮 𝗱𝗮𝗻𝗱𝗼 𝗯𝗲𝘀𝗶𝘁𝗼 𝗮   @${who.split('@')[0]} `, m, {mentions: [who, m.sender]});

  conn.sendMessage(m.chat, {react: {text: '😘', key: abrazo.key}});
};
handler.help = ['beso @user'];
handler.tags = ['fun'];
handler.command = ['beso'];
handler.group = true;
export default handler;
