/*
*/
require('./config')
const {
	delay,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const { parseMention, getGroupAdmins, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('./lib/myfunc')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require('axios')
const crypto = require("crypto")
const path = require('path')
const os = require('os')


//TEXT BANNED//
const { textbanv1, textbanv2, textbanv3, textbanv4, textbanv5, textbanv6, textbanv7, textbanv8, textbanv9, textbanv10, textbanv11, textbanv12, textbanv13, textbanv14, textbanv15, textbanv16, textbanv17, textbanv18, textbanv19, textbanv20, textbanv21, textbanv22, textbanv23, textbanv24, textbanv25, textbanv26, textbanv27, textbanv28, textbanv29, textbanv30, textbanv31, textbanv32, textbanv33, textbanv34, textbanv35, textbanv36, textbanv37, textbanv38 } = require('./wangsap/textban.js')

const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./wangsap/textunban.js')


module.exports = chilo = async (chilo, m, chatUpdate, store) => { try {
var body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
var budy = (typeof m.text == 'string' ? m.text: '')
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const botId = await chilo.decodeJid(chilo.user.id)
const botNumber = botId.split('@')[0]
const ownId = ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
const ownNumber = ownNumb.replace(/[^0-9]/g, '')
const dtext = args.join(" ")
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted: m
const groupMetadata = m.isGroup ? await chilo.groupMetadata(m.chat).catch(e => {}): ''
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupName = m.isGroup ? groupMetadata.subject: ''
const participants = m.isGroup ? await groupMetadata.participants: ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants): ''
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
const isBotGroupAdmins = m.isGroup ? groupAdmins.includes(botId): false
const isAuthor = '6285263390832'+'@s.whatsapp.net'.includes(m.sender)
const ownerNumber = JSON.parse(fs.readFileSync("./Kizh/owner.json"))
const isOwner = ownerNumber.includes(m.sender) || isAuthor
const prem = JSON.parse(fs.readFileSync("./Kizh/premium.json"))
const isPremium = prem.includes(m.sender)
const isMe = botId.includes(m.sender)
const auttor = "RainStoreID" //gantu dengan Namamu
const mark = `0@s.whatsapp.net`
const text = q = args.join(" ")
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]

const reply = (teks) => { 
chilo.sendMessage(m.chat, { text : teks, contextInfo: { forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}

const ownSc = `${pwa}`
const ownScName = `*${namaCreator}*`

if (command) {
	console.log()
	console.log(`${m.isGroup ? '\x1b[0;32mKIZH\x1b[1;32m-host' : '\x1b[1;32mKIZH-host'} \x1b[0m[ \x1b[1;37m${command} \x1b[0m] at \x1b[0;32m${calender}\x1b[0m\n› ${m.chat}\n› FROM :\x1b[0;37m${m.sender.split('@')[0]}\x1b[0m${m.pushName ? ', '+m.pushName : ''}\n› IN :\x1b[0;32m${m.isGroup ? groupName : ' chat private'}\x1b[0m`)
	chilo.readMessages([m.key])
}
switch (command) {

case 'menu': case 'help': {
//const version = require("baileys/package.json").version
const owned = `${ownSc}@s.whatsapp.net`
let menu = `𝗧𝗢𝗞𝗢 𝗛𝗢𝗦𝗧𝗜𝗡𝗚 *${namaStore}* 

┌⁠──────────
○ \`\`\`OWNER   :\`\`\` *${ownName}*
○ \`\`\`VESION  :\`\`\` *${versionSc}*
○ \`\`\`NAME SC :\`\`\` *${namaBot}*
○ \`\`\`TYPE    :\`\`\` 𝗣𝗔𝗜𝗥𝗜𝗡𝗚 𝗖𝗢𝗗𝗘
└──────────

𝗠𝗘𝗡𝗨 𝗟𝗔𝗜𝗡
┌⁠──────────
 ➪. ᴀʟʟᴍᴇɴᴜ
 ➪. ᴍᴇɴᴜᴘᴜsʜᴋᴏɴ
 ➪. panelmenu
 ➪. sᴛᴏʀᴇ
└──────────

𝗣𝗥𝗢𝗗𝗨𝗞 *${namaStore}*
┌⁠──────────
  🛍️ ᴘᴀɴᴇʟ
  🛍️ ɴᴏᴋᴏs
└──────────

# ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇʟɪʜᴀᴛ ʜᴀʀɢᴀ ᴘʀᴏᴅᴜᴋ
ʙɪsᴀ ᴋᴇᴛɪᴋ ᴄᴏɴᴛᴏʜ :
.ᴘʀɪᴄᴇᴘᴀɴᴇʟ

*©RainStoreID*`
chilo.sendMessage(m.chat, {
text: menu,
contextInfo: {
mentionedJid:[sender, mark],
externalAdReply: {
title: auttor,
body: 'bodynya',
thumbnailUrl: "https://img1.dd.ci/file/392177eb01234f3950592.jpg", 
sourceUrl: "https://chat.whatsapp.com/CjRuVIjBOYeLEpflkvtO1z",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
        break // (?); daftar menu

case 'allmenu':{
	let menu = `
𝗔𝗟𝗟 𝗠𝗘𝗡𝗨
┌⁠──────────
  *OWNER* : ${ownName}
  *CREATOR* SC : ${namaCreator}
  *VERSION SC* : ${versionSc}
└──────────

*𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐🛍️*
┌⁠──────────
 ➪ >ɴᴏᴋᴏs
 ➪ >priceᴘᴀɴᴇʟ
 ➪ >ᴘᴀʏᴍᴇɴᴛ
 ➪ >ᴅᴏɴᴇ
 ➪ >ᴘʀᴏsᴇs
 ➪ >ᴛᴇsᴛɪ
└──────────
*𝙈𝙀𝙉𝙐 𝙋𝙐𝙎𝙃𝙆𝙊𝙉𝙏𝘼𝙆*
┌⁠──────────
 ➪.>ᴄᴇᴋɪᴅ  *[ ID + NAMA*
 ➪ >ᴄᴇᴋɪᴅ2 *[ ID ]*
 ➪ >ᴄᴇᴋᴍᴇᴍʙᴇʀ
 ➪ >ᴘᴜsʜᴋᴏɴ
 ➪ >ᴘᴜsʜᴋᴏɴ2
 ➪ >sᴀᴠᴇᴋᴏɴᴛᴀᴋ
└──────────
*𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >ᴘᴜʙʟɪᴄ
 ➪ >sᴇʟғ
 ➪ >ɢᴇᴛᴋᴏɴᴛᴀᴋ
 ➪ >sᴇɴᴅᴋᴏɴᴛᴀᴋ
└──────────
*𝘼𝘽𝙊𝙐𝙏 𝙎𝘾𝙍𝙄𝙋𝙏*
┌⁠──────────
 ➪ >ᴏᴡɴᴇʀ
 ➪ >ᴏᴡɴᴇʀsᴄ
 ➪ >sᴄ
 ➪ >ɪɴғᴏʀᴍᴀsɪ
 ➪ >ᴛᴜᴛᴏʀᴘᴜsʜ
 ➪ >tq
 ➪ >ʀᴜɴᴛɪᴍᴇ
└──────────
*𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >ᴛɪᴋᴛᴏᴋ *LINK/URL*
 ➪ >ᴄᴀʟʟ *NOMOR*
└──────────
*𝙋𝘼𝙉𝙀𝙇 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >panel
 ➪ >ramlist
 ➪ >listadmin
 ➪ >createadmin
 ➪ >listsrv
 ➪ >delsrv
 ➪ >pricepanel
└──────────
*𝙏𝙀𝙓𝙏𝘽𝘼𝙉 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >ᴛᴇxᴛʙᴀɴᴠ1
 ➪ >ᴛᴇxᴛʙᴀɴᴠ2
 ➪ >ᴛᴇxᴛʙᴀɴᴠ3
 ➪ >ᴛᴇxᴛʙᴀɴᴠ4
 ➪ >ᴛᴇxᴛʙᴀɴᴠ5
 ➪ >ᴛᴇxᴛʙᴀɴᴠ6
 ➪ >ᴛᴇxᴛʙᴀɴᴠ7
 ➪ >ᴛᴇxᴛʙᴀɴᴠ8
 ➪ >ᴛᴇxᴛʙᴀɴᴠ9
 ➪ >ᴛᴇxᴛʙᴀɴᴠ10
└──────────
*𝙏𝙀𝙓𝙏𝙐𝙉𝘽𝘼𝙉 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ1
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ2
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ3
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ4
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ5
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ6
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ7
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ8
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ9
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ10
 ➪ >ᴛᴇxᴛᴜɴʙᴀɴᴠ11
└──────────
*𝙏𝙀𝙓𝙏𝙐𝙉𝘽𝘼𝙉 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >ʜɪᴅᴇᴛᴀɢ
 ➪ > <
 ➪ > <
 ➪ > <
└──────────
`
chilo.sendMessage(m.chat, {
text: menu,
contextInfo: {
mentionedJid:[sender, mark],
externalAdReply: {
title: auttor,
body: '${ownName}',
thumbnailUrl: "${thumb}", 
sourceUrl: "${linkgc}",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
        break // (?); daftar menu

case 'menupushkon':{
	let menu = `
*𝙈𝙀𝙉𝙐 𝙋𝙐𝙎𝙃𝙆𝙊𝙉𝙏𝘼𝙆*
┌⁠──────────
 ➪.>ᴄᴇᴋɪᴅ  *[ ID + NAMA*
 ➪ >ᴄᴇᴋɪᴅ2 *[ ID ]*
 ➪ >ᴄᴇᴋᴍᴇᴍʙᴇʀ
 ➪ >ᴘᴜsʜᴋᴏɴ
 ➪ >ᴘᴜsʜᴋᴏɴ2
 ➪ >sᴀᴠᴇᴋᴏɴᴛᴀᴋ
└──────────
`
chilo.sendMessage(from, {text: menu}, {quoted: m})
}
break

case 'panelmenu':{
	let menu = `
*𝙋𝘼𝙉𝙀𝙇 𝙈𝙀𝙉𝙐*
┌⁠──────────
 ➪ >panel
 ➪ >ramlist
 ➪ >listadmin
 ➪ >createadmin
 ➪ >listsrv
 ➪ >delsrv
└──────────
`
chilo.sendMessage(from, {text: menu}, {quoted: m})
}
break

case 'store':{
	let menu = `
*𝙈𝙀𝙉𝙐 𝙎𝙏𝙊𝙍𝙀🛍*
┌⁠──────────
 ➪ >ɴᴏᴋᴏs
 ➪ >ᴊᴀsᴜɴ
 ➪ >ᴛᴏᴘᴜᴘ
 ➪ >ᴘᴀɴᴇʟ
 ➪ >ᴘᴀʏᴍᴇɴᴛ
 ➪ >ᴅᴏɴᴇ
 ➪ >ᴘʀᴏsᴇs
└──────────
`
chilo.sendMessage(from, {text: menu}, {quoted: m})
}
break

case "self":{
chilo.public = false
reply('*SELEB MODE*')
}
break

case "public":{
chilo.public = true
reply('*FRIENDLY MODE*')
}
break
        
case 'sc':
let sc =`*CARI AJA SENDIRI AMPE KEUJUNG DUNIA*
`
reply(sc)
break // (?); bot script

case 'runtime': case 'test':
reply(runtime(process.uptime()))
break
        
case 'sosmed': case 'sos': 
let menu = `*INI KAK*

*𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*
${pwa}

*𝙇𝙄𝙉𝙆 𝙏𝙀𝙇𝙀*
${ptele}

*𝙔𝙊𝙐𝙏𝙐𝘽𝙀*
${pyt}
`
reply(menu)
break // (?); bot script

case 'runtime': case 'test':
reply(runtime(process.uptime()))
break // (?); runtime bot

case "informasi": case "info":
if (!isOwner) return reply('khusus own')
if (!dtext) return reply(mess.inf)
break
case "tutorpush":
let menunya = `𝗧𝗨𝗧𝗢𝗥 𝗣𝗨𝗦𝗛 ⚠️
 › lakukan perintah sesuai yg ada di menu
 › beda command bot gakan respon jadi  
   utamakan ketelitian
 › misal kalian mau cek id group
   Silahkan ketik .listgc
 › mau push ? Ketikan
  .pushkon atau .pushkonv2
   setelah itu ikuti intruksi yg di berikan oleh
   bot
 › masih bingun ? 
   chat own ketikan .ownersc
`
reply(menunya)
break

case "nokos":
let nokos =`*𝙃𝘼𝙍𝙂𝘼 𝙉𝙊𝙆𝙊𝙎*
┌⁠──────────
🛒> NOKOS ${namaproduk}

   > NOKOS US [+1]
   =4K
   > NOKOS INDO [+62]
   =7K
   > NOKOS BRAZIL [+55]
   =37K
   > NOKOS ARGENTINA [+54]
   =31k

└────────
`
reply(nokos) 
break

case 'payment':
let p = `*P A Y M E N T*\n\n`
p += `*DANA: ${global.dana}*\n`
p += `*GOPAY: ${global.gopay}*\n`
p += `*QRIS: ${global.scan}*\n`
chilo.sendMessage(m.chat, { image: { url: global.Qris }, caption: p }, { quoted: m })
break

case 'testi':
let t = `*T E S T I*\n\n`
t += `*ITU: ${global.text1}*\n`
t += `*AMAN: ${global.text2}*\n`
chilo.sendMessage(m.chat, { image: { url: global.testi }, caption: t }, { quoted: m })
break

case "tq":
let tq =`*TQ SEMUA NYA*
`
reply(tq) 
break

case "proses":
let proses =`*SEBENTAR YA KAK LAGI DI PROSES🙏*
`
reply(proses) 
break

case "done":
let done =`*DONE*
MAKASIH SUDAH ORDER DI ${namaStore}
JANGAN LUPA KE SINI LAGI YA KAK
🤗
`
reply(done) 
break

case "pricepanel":
let panel =`*𝙃𝘼𝙍𝙂𝘼 𝙋𝘼𝙉𝙀𝙇*
┌⁠──────────

🛒> 𝙋𝘼𝙉𝙀𝙇 ${namaproduk}

🛍️1𝘎𝘉 RAM 30% 𝘊𝘗𝘜 : 𝘙𝘱 3k
🛍️2𝘎𝘉 𝘙𝘈𝘔 50% 𝘊𝘗𝘜 : 𝘙𝘱 4k
🛍️3𝘎𝘉 𝘙𝘈𝘔 80% 𝘊𝘗𝘜 : 𝘙𝘱 5k
🛍️4𝘎𝘉 𝘙𝘈𝘔 100% 𝘊𝘗𝘜 : 𝘙𝘱 6k
🛍️5𝘎𝘉 𝘙𝘈𝘔 120% 𝘊𝘗𝘜 : 𝘙𝘱 7k
🛍️6𝘎𝘉 𝘙𝘈𝘔 150% 𝘊𝘗𝘜 : 𝘙𝘱 8k
🛍️7𝘎𝘉 𝘙𝘈𝘔 180% 𝘊𝘗𝘜 : 𝘙𝘱 9k

🗣️ : > ADA GARANSI GAK MAS? 
👤 : > YANG BERGARANSI 10GB-UNLI SAJA

└────────
`
reply(panel) 
break


case "topup":
let topup =`*ʜᴀʀɢᴀ ᴛᴏᴘᴜᴘ ɢᴀᴍᴇ*
┌⁠──────────

🛒> TOPUP ${namaproduk}

 > 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀🔥
 > 𝙋𝙐𝘽𝙂🔥
 > 𝙈𝙊𝘽𝙄𝙇𝙀 𝙇𝙀𝙂𝙀𝙉𝙎🔥
 > 𝘋𝘈𝘕 𝘓𝘈𝘐𝘕 𝘓𝘈𝘐𝘕

 >ʟɪsᴛ ʜᴀʀɢᴀ? 
 ᴘᴍ ${pwa}?text=Bang+Mau+Topup+Game

└────────
`
reply(topup) 
break

case 'ownersc':
let ownnContact = {
	displayName: "Contact", contacts: [{displayName: ownScName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownScName+";;;\nFN:"+ownScName+"\nitem1.TEL;waid="+ownSc+":"+ownSc+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); kontak owner
let sooContact = await chilo.sendMessage(m.chat, {contacts: ownnContact},{quoted: m})
chilo.sendMessage(m.chat, {text: `*ITU KA OWNER SCNYA*\n*MAU BUY NO ENC ? CHAT AJA*`}, {quoted: sooContact})
break
case 'owner': case 'botowner':
let ownContact = {
	displayName: "Contact", contacts: [{displayName: ownName, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownName+";;;\nFN:"+ownName+"\nitem1.TEL;waid="+ownNumber+":"+ownNumber+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); kontak owner
let soContact = await chilo.sendMessage(m.chat, {contacts: ownContact}, {quoted: m})
setTimeout(() => {chilo.sendMessage(m.chat, {delete: soContact.key})}, 20000)
break

case 'getcontact': case 'getkontak':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('Khusus Admin')
huhuhs = await chilo.sendMessage(m.chat, {
    text: `*GROUP :* ${groupMetadata.subject}\n*MEMBER :* ${participants.length}`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
chilo.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break

case 'savekontak': case 'svkontak':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('admin_only')
let cmiggc = await chilo.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('Mengimpor '+cmiggc.participants.length+' kontak..')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
chilo.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'Group: *'+cmiggc.subject+'*\nParticipants total: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break

case 'sendkontak': case 'kontak':
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
chilo.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break

case 'sendkontag': case 'kontag':
if (!m.isGroup) return reply(mess.group)
if (!(isGroupAdmins || isOwner)) return reply('khusus admin')
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let sngTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak - hidetag
chilo.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
break

case 'cekid':
if (!isOwner) return reply(mess.owner)
await reply('*wait sedang mengambil data....*')
let getGroups = await chilo.groupFetchAllParticipating()
let gclish = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let gclist = gclish.map(v => v.id)
if (gclist.length > 2000) return reply(jsonformat(gclist))
let gctext = `𝗗𝗔𝗙𝗧𝗔𝗥 𝗚𝗖 𝗔𝗡𝗗𝗔\n*total :* ${gclist.length} GC`
for (let a of gclist) {
	let mdata = await chilo.groupMetadata(a)
	gctext += `\n\n*☍ NAME GC :* ${mdata.subject}\n*☍ MEMBER :* ${mdata.participants.length}\n*☍ ID :* ${mdata.id}`
} // (?); daftar chat grup
reply(gctext)
break

case "cekid2": {
if (!isOwner) return khususOwner()
reply(`*wait sedang mengambil data....*`)
let getGroups = await chilo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let tekss = `𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 : ${anu.length} Group\n\n`
for (let xnxx of anu) {
tekss += `${xnxx}\n`
}
reply(tekss + `\n𝗡𝗼𝘁𝗲 :\nKalo mau cek member ketik\n.cekmember idgc \nsalin terlebih dahulu idgc di atas`)
}
break
case "addowner":
if (!isOwner) return reply(" KHUSUS OWNER ")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await chilo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./Kizh/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case "delowner":
if (!isOwner) return reply(" KHUSUS OWNER ")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./Kizh/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case "addprem":{
if (!isOwner) return reply(" KHUSUS OWNER ")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await chilo.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./Kizh/premium.json", JSON.stringify(prem))
reply(`Done Mas Si ${prrkek} Udh Premium ✅`)
}
break
case "delprem":{
if (!isOwner) return reply(" KHUSUS OWNER BANG")
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./Kizh/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "cekmember": {
if (!isOwner) return khususOwner()
if (!dtext) return reply("Id Nya Mana Kak?")
let cekmd = await chilo.groupMetadata(dtext)
let txrk = await chilo.sendMessage(m.chat, { text: `*Nama Group :* ${cekmd.subject}\n*Member :* ${cekmd.participants.length} Orang` }, { quoted: m})
await chilo.sendMessage(m.chat, { text: `*Kalo mau push ketik ke gni*\n.pushkon2 120363144535686704@g.us|halo meks save *${namaCreator}*` }, { quoted: txrk })
}
break
case 'ramlist':{
	let menu = `
▭▬▭( *𝐑𝐀𝐌 𝐘𝐀𝐍𝐆 𝐓𝐄𝐑𝐒𝐄𝐃𝐈𝐀* )▭▬▭

 • 𝐒𝐄𝐑𝐕𝐄𝐑 𝟏
⭔𝟏𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟐𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟑𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟒𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟓𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟔𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝟕𝐆𝐁 ( 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 )✅
⭔𝐔𝐍𝐋𝐈 ( 𝐎𝐖𝐍𝐄𝐑 )✅

*𝐉𝐎𝐈𝐍 𝐑𝐄𝐒𝐄𝐋𝐋𝐄𝐑 𝐂𝐔𝐌𝐀 15k 𝐁𝐀𝐍𝐆😁*
Powered By *${namaCreator}*`
chilo.sendMessage(from, {text: menu}, {quoted: m})
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
    case 'panel':{
	let menu = `
CARA BIKIN PANEL BY *${namaCreator}*?🔥

CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb ${namaCreator},628xxxxxx [ isi pake no lu ]

Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
chilo.sendMessage(from, {text: menu}, {quoted: m})
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
                case "listsrv": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await chilo.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
        case "delsrv": {
      if (!isOwner) return reply(`Khusus Wann Aza`)

let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
case "1gb": {
    if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = dtext.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:

${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "hosting"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`DONE BY *${namaCreator}*

 *DONE CRATE USER + SERVER ID :* ${user.id}
JANGAN LUPA DI PAKE YAH ASU
KALO NGGA NANTI DI HAPUS *${namaCreator}*`)
ctf = `Hai @${u.split`@`[0]}

_Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
𝐃𝐎𝐍𝐄 𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐂𝐄𝐊 𝐃𝐀𝐓𝐀 𝐀𝐊𝐔𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀 𝐒𝐔𝐃𝐀𝐇 𝐓𝐄𝐑𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐓𝐄𝐑𝐒𝐄𝐁𝐔𝐓 ☑️
© BY *${namaCreator}*
`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "hosting"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE YAH BANG KALO G MAU DI HAPUS OLEH *${namaCreator}*
`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "70"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "hosting"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER PANEL",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE DARI PADA DI HAPUS *${namaCreator}*
`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "90"
let disk = "4048"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "hosting"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE YAH ASU NANTI DI HAPUS BANG *${namaCreator}* 
`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "100"
let disk = "5138"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "*${namaCreator}*"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG *${namaCreator}*
`)

}
break
case "6gb": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6138"
let cpu = "120"
let disk = "6138"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "*${namaCreator}*"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG *${namaCreator}* 
`)

}
break

case "7gb": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7138"
let cpu = "140"
let disk = "7138"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "*${namaCreator}*"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
??Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG *${namaCreator}* 
`)

}
break


case "unli": {
if (!isPremium && !isOwner) return reply(" KHUSUS PREMIUM ")

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "UNLI"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/31882be1935f56a5ae145.jpg" 
if (!u) return
let d = (await chilo.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "*${namaCreator}*"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 _Berikut Data Panel Anda_🏀
👤username: ${user.username}
🔐password: ${password}
🌐Login: ${domain}
📚Info Panel: ${linkgc}
*Jngan Lupa Bilang Done Jika Sudah Di Cek*
====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`
chilo.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: chilo.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "BUYER *${namaCreator}*",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

JANGAN LUPA DI PAKE BIAR G DI HAPUS SAMA BANG *${namaCreator}* 
`)

}
break

  case "createadmin": {
if (!isOwner) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)
if (!isOwner) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "PREMIUM"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }
    await chilo.sendMessage(m.chat, listMessage)

    await chilo.sendMessage(nomornya, {

        text: `_*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*_\n

Username :  ${username}
Password: ${password}
Login: ${domain}

====================
⚠️INFO RULES⚠️
> • Simpan data dengan baik
> • Jika data yang dikirimkan hilang seller tidak bertanggung jawab
> • Seller hanya mengirimkan data 1x

⏣𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝘽𝙪𝙮𝙞𝙣𝙜 *${namaStore}*✌
`,

    })        
}
break
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
        case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await chilo.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;
case 'pushkon':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!dtext) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkontak teksnya')
	let pkDetect = await chilo.groupMetadata(m.chat)
	if (pkDetect.participants.length > 2000) return reply(mess.maksimal)
	reply('*proses send ke* '+pkDetect.participants.length+' *kontak..*')
	for (let a of pkDetect.participants) {
	chilo.sendMessage(a.id, {text: dtext})
	await sleep(mess.delay) // SET JEDANYA DI SINI
} // (?); kirim pesan ke semua peserta grup
reply('*DONE YA*')
break

case 'pushkon2':
if (!isOwner) return reply(mess.owner)
	let phkid = dtext.split('|')[0]
	let phktxt = dtext.split('|')[1]
if (!phkid) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkon2 ID|teksnya')
if (!phktxt) return reply('*SALAH DECK TUTOR NYA GINI*\n\n.pushkon2 ID|teksnya')
	let pk2Detect = await chilo.groupMetadata(phkid)
	if (pk2Detect.participants.length > 2000) return reply(mess.maksimal)
	reply('*proses send ke* '+pk2Detect.participants.length+' *kontak..*')
	for (let a of pk2Detect.participants) {
	chilo.sendMessage(a.id, {text: phktxt})
	await sleep(mess.delay) // SET JEDA NYA DI SINI
} // (?); kirim pesan ke semua peserta grup (id)
reply('*DONE YA*')
break

case "call":
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} + ${pwa}`)
await reply(mess.wait)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break

case 'textbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sploer = ` ${textbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sploer)

break
//=======================================================//
case 'textbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ban = ` ${textbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ban)

break
//=======================================================//
case 'textbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const masuk = ` ${textbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(masuk)

break
//=======================================================//
case 'textbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const banned = ` ${textbanv4()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(banned)

break
//=======================================================//
case 'textbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const car = ` ${textbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(car)

break
//=======================================================//
case 'textbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const capek = ` ${textbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(capek)

break
//=======================================================//
case 'textbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const hem = `${textbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(hem)

break
//=======================================================//
case 'textbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lelah = ` ${textbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lelah)

break
//=======================================================//
case 'textbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const pem = ` ${textbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(pem)

break
//=======================================================//
case 'textbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahh = ` ${textbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahh)

break

case 'textunbanv1':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const vaga = ` ${textunbanv1()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(vaga)
break
case 'textunbanv2':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const aga = ` ${textunbanv2()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(aga)
break
case 'textunbanv3':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const naga = ` ${textunbanv3()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(naga)
break
case 'textunbanv4':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const woii = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(woii)
break
case 'textunbanv5':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sokasim = ` ${textunbanv5()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(sokasim)
break
//=======================================================//
case 'textunbanv6':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const akakaka = ` ${textunbanv6()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const kopok = ` ${textunbanv7()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const tehyung = ` ${textunbanv8()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const ahhyan = ` ${textunbanv9()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const yamete = ` ${textunbanv10()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const suuu = ` ${textunbanv11()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const huuuu = ` ${textunbanv12()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const gaje = ` ${textunbanv13()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const well = ` ${textunbanv14()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const lempo = ` ${textunbanv15()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const cok = ` ${textunbanv16()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const sayasuka = ` ${textunbanv17()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const oooooooo= ` ${textunbanv18()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const omaaavaaaaaaaa = ` ${textunbanv19()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const bykepo = ` ${textunbanv20()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isOwner) return reply('Maaf, command ini hanya untuk pemilik.')
const unbannned = ` ${textunbanv21()}


Powered By *${namaCreator}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break


case "h":
case "hidetag": {
if (!isGroup) return reply(mess.group)
if (!q) return reply(`Teks?`)
global.hit = q
chilo.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'tiktok':
         if(!dtext) return reply(`${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
         json = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=${global.lol}&url=${text}`)
         chilo.sendMessage(m.chat, {video:{url: json.result }, mimetype:"video/mp4", caption: 'Done' }, {quoted:m})
         break

default:

if (budy.startsWith('>')) {
    if (!isOwner) return
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isOwner) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return reply(`${err}`)
        if (stdout) return reply(stdout)
    })
}
}
	} catch (err) {
		chilo.sendMessage(ownNumb.replace(/[^0-9]/g, '')+'@s.whatsapp.net', {text: util.format(err)}, {ephemeralExpiration: 86400, quoted: m})
		console.log('\x1b[1;31m'+err+'\x1b[0m')
	}
}


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})