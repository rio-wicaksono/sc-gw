global.d = new Date()
global.calender = d.toLocaleDateString('id')

// --------------- INFO OWNER ------------- //
global.prefix = "." // command prefix
global.ownNumb = "6285263390832" // isi no kalian
global.ownName = "RainStoreID" // isi nama kalian
global.namaCreator ="RainStoreID"
global.versionSc ="5.0"
global.namaBot ="RAINSTOEREID V5"
global.linkgc ="https://chat.whatsapp.com/CjRuVIjBOYeLEpflkvtO1z"
global.namaproduk ="BY RAINSTOREID"
global.namaStore ="RAINSTOREID"

//---------------GLOBAL SOSIAL------------------//
global.pyt ="https://youtube.com/@SafeStoreH" //ISI DENGAN URL YT LU
global.ptele ="https://t.me/RainStoreID"
global.pwa ="https://wa.me/6285263390832" //ISI DENGAN URL/NOKOR WA LU
global.pig ="-"  //ISI DNGN URL IG LU
//---------------GLOBAL THUMBNAIL------------//
global.thumb = "-" //isi dengan foto dengan bentuk url caranya ganti biar foto jadi url ke dd.ci
//____________global apikey_________//

global.lol = 'GataDios' // ISI APIKEY LOL HUMAN LU

//_____________global payment_______//
global.Qris = 'https://img1.dd.ci/file/382cba1a870e702f18be7.jpg'
global.dana = '085263390832'
global.gopay = '085263390832'
global.scan = 'sᴄᴀɴ ǫʀɪs ᴀʟʟ ᴘᴀʏᴍᴇɴᴛ ᴅɪ ᴀᴛᴀs'

//__________________ʙᴀᴛᴀs ᴘᴀʏᴍᴇɴᴛ_____________//

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '1' // id location

//__________________GLOBAL TESTI_______________//

global.testi ='https://whatsapp.com/channel/0029VaEeYcRHbFV9gMv6G03P' // ISI URL TESTI KALIAN
global.text1 ='ITU TESTI RAINSTOREID KAK' // UBH AJA JADI NAMA MU
global.text2 ='GA BANG? AMAN DONG' // G SH DI HPS

//______________BATAS TESTI_____________//


// --------------- GLOBAL MESS ------------- //
global.mess = {
     delay: '4000', // Set Jeda Atur Di sini 1000 = 1 detik
     eror: 'lagi eror kak maaf ha', 
     wait: 'Wait Kak Lagi Proses',
     group: 'Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group', 
     owner: 'lu siapa?\n*GAUSAH SO ASIK*',
     group: "khusus di dalam group",
     inf: "TIDAK ADA INFORMASTI"
}
// --------------- BATAS GLOBAL MESS ------------- //

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

/*
*/