let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *4 vs 4* *ɪɴᴛᴇʀɴᴏ* 🌐
*╟❧*  *ɪɴғɪɴɪᴛᴏ*
*╟*
*╟❧*  ⏰  *8:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *9:45 ᴘᴍ*  🇪🇨
*╟❧*  ⏰  *10:45 ᴘᴍ*  🇻🇪
*╟*
*╟❧*  *sᴏʟᴏ ᴀʟᴏᴋ ʏ ᴋ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ A* 
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ B* 
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖠌
*╟❧* 𖠌
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs4i.i.9$/i
handler.admin = true
export default handler
