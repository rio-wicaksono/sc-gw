require('./config')
const { default: chiloConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, getAggregateVotesInPollMessage } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const FileType = require('file-type')
const path = require('path')
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const usePairingCode = true

async function startchilo() {
const { state, saveCreds } = await useMultiFileAuthState('./auth')
const chilo = chiloConnect({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
if(usePairingCode && !chilo.authState.creds.registered) {
const phoneNumber = await question('Masukan No yang Ingin Di jadikan bot dengan awalan 62:\n');
		const code = await chilo.requestPairingCode(phoneNumber.trim())
		console.log(`KODE CONNECTING : ${code}`)

}
 
  console.log(('SC BY RAINSTOREID\n'),('\nSTATUS : CONNECT ED\nNAME SC: Store\nCREATOR : RAINSTOREID\n\n\nCH : https//youtube.com/@SafeStoreH`\n\nThanks\n'))


    store.bind(chilo.ev)
    
    chilo.ev.on('call', async (caller) => {
	    console.log(caller)
    })

    chilo.ev.on('messages.upsert', async chatUpdate => {
	    // console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        msg = chatUpdate.messages[0]
        if (!msg.message) return
        msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
        // if (msg.key && msg.key.remoteJid === 'status@broadcast') return
        if (!chilo.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
        if (msg.key.id.startsWith('BAE5') && msg.key.id.length === 16) return
        m = smsg(chilo, msg, store)
        require("./chilo")(chilo, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    chilo.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
    })
	
    // Setting
    chilo.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    chilo.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = chilo.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    chilo.getName = (jid, withoutContact  = false) => {
        id = chilo.decodeJid(jid)
        withoutContact = chilo.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = chilo.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === chilo.decodeJid(chilo.user.id) ?
            chilo.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    chilo.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await chilo.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await chilo.getName(i)}\nFN:${await chilo.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	    })
	}
	chilo.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    chilo.public = true

    chilo.serializeM = (m) => smsg(chilo, m, store)

    chilo.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
startchilo();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
startchilo();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
startchilo();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
startchilo();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
startchilo();
  }
} else if (connection === "open") {
  chilo.sendMessage('6285601059864' + "@s.whatsapp.net", { text: `*BOT CONNECTED*
SC BY : 𝘿𝘼𝙁𝙁𝙕𝙓𝘿 𝙊𝙁𝙁𝘾 Buy Panel? Langsung Aja Ke Wa Gw

WA 
https://wa.me/6285601059864` });
}
    })
    

    chilo.ev.on('creds.update', saveCreds)

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    chilo.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await chilo.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    chilo.cMod = (jid, copy, text = '', sender = chilo.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === chilo.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    chilo.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return chilo
}

startchilo()


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})