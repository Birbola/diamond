//replace content

//btns
let nav1:HTMLButtonElement = document.querySelector('.nav-1')!
let nav2:HTMLButtonElement = document.querySelector('.nav-2')!
let nav3:HTMLButtonElement = document.querySelector('.nav-3')!
let nav4:HTMLButtonElement = document.querySelector('.nav-4')!
//cards
let card1:HTMLElement = document.querySelector('.card-1')!
let card2:HTMLElement = document.querySelector('.card-2')!
let card3:HTMLElement = document.querySelector('.card-3')!
let card4:HTMLElement = document.querySelector('.card-4')!
let card5:HTMLElement = document.querySelector('.card-5')!

// functions
nav1.onclick = () => {
  if(card1.classList.contains("not-5")){
    card1.classList.replace("not-5" , "not-1")
    card2.classList.replace("not-1" , "not-5")
    card3.classList.replace("not-1" , "not-5")
    card4.classList.replace("not-1" , "not-5")
    card5.classList.add("not-5")
  }
}
nav2.onclick = () => {
  if(card2.classList.contains("not-5")){
    card2.classList.replace("not-5" , "not-1")
    card1.classList.replace("not-1" , "not-5")
    card3.classList.replace("not-1" , "not-5")
    card4.classList.replace("not-1" , "not-5")
    card5.classList.add("not-5")
  }
}
nav3.onclick = () => {
  if(card3.classList.contains("not-5")){
    card3.classList.replace("not-5" , "not-1")
    card1.classList.replace("not-1" , "not-5")
    card2.classList.replace("not-1" , "not-5")
    card4.classList.replace("not-1" , "not-5")
    card5.classList.add("not-5")
  }
}
nav4.onclick = () => {
  if(card4.classList.contains("not-5")){
    card4.classList.replace("not-5" , "not-1")
    card1.classList.replace("not-1" , "not-5")
    card2.classList.replace("not-1" , "not-5")
    card3.classList.replace("not-1" , "not-5")
    card5.classList.add("not-5")
  }
}

// Obyekt
let yuz:HTMLElement = document.querySelector('.yuz-content')!

type Link = {
  name: string
  src: string
}

let links:Link[] = [
  {name: "1.Taym menejment" , src: "https://youtu.be/UAUFobTLuaU"},
  {name: "2.Inson Xotirjamlikka qanday erishishi mumkin?" , src: "https://youtu.be/9tta6_AoKAY"},
  {name: "3.Motivatsiyadan foyda yo'q" , src: "https://youtu.be/MBw_wsRZ1gM"},
  {name: "4.Qanday kasb tanlashim kerak?" , src: "https://youtu.be/HmTloyX6d0Q "},
  {name: "5.Seni maqsading haqiqiymi?" , src: "https://youtu.be/Z_FRmvaradg"},
  {name: "6.Inson Xotirjamlikka qanday erishishi mumkin? | Aziz Rakhimov" , src: "https://youtu.be/9tta6_AoKAY"},
  {name: "7.BU VIDEONI KO'RGANINGIZDAN SO'NG, 1 DAQIQA VAQTINGIZNI HAM BEXUDA SARFLAMAYSIZ" , src: "https://youtu.be/mygwBEJX-VE"},
  {name: "8.3 Ajoyib Usullar Orqali O`rganganlaringiz Esdan Chiqmaydi" , src: "https://youtu.be/89-1v5_N7GM"},
  {name: "9. Oltindan paypoq yaxshi?" , src: "https://youtu.be/zowoo70-ZyA"},
  {name: "10.Komplimentlarni qabul qilish haqida" , src: "https://youtu.be/qb5Lnizd-Xg"},
  {name: "11.Boy bo'lish uchun Warren Buffett dan maslahatlar" , src: "https://youtu.be/5BgGcfjdBP0"},
  {name: "12.Marsdan tushgan tuxum" , src: "https://youtu.be/quPO1WgG0OU"},
  {name: "13.1000 °C da odam bo‘lasiz" , src: "https://youtu.be/6KAxi5VkgCo"},
  {name: "14.Hammasiga o'z kuchim bilan erishdim deydiganlar haqida." , src: "https://youtu.be/4F1fQjBnSHI"},
  {name: "15.Oliy ta'lim muassasalariga topshirish va talaba bo'lish maqsadida bilan yoshlarga tavsiyalar...16." , src: "https://youtu.be/hSQ8Zxw3dkM"},
  {name: "16.Eng katta xato | Aziz Rakhimov" , src: "https://youtu.be/4XiAQw_ROHw"},
  {name: "17.Seni maqsading haqiqiymi?" , src: "https://youtu.be/Z_FRmvaradg"},
  {name: "18.900 ta kitob o'qigan odam" , src: "https://youtube.com/shorts/dx5PKaeDifA?feature=share"},
  {name: "19.Maktab ochish uchun 800 000$ pul kerak" , src: "https://youtube.com/shorts/GpbUfmGcJHk?feature=share"},
  {name: "20.Boy bo'lish aslida nima?" , src: "https://youtube.com/shorts/3H3v_xLNpEM?feature=share"},
  {name: "21.Insonlar har doim o'zi uchun oson yo'lni tanlaydi" , src: "https://youtube.com/shorts/vzazpbBglsQ?feature=share"},
  {name: "22.Xususiy maktablarda faqat BOYLARNING farzandlari o'qiydimi?" , src: "https://youtube.com/shorts/z4V-RVo0V8E?feature=share"},
  {name: "23.Xususiy va davlat maktablarining asosiy farqi" , src: "https://youtube.com/shorts/1UIR779Fpt8?feature=share"},
  {name: "24.Qishloqdan tashqariga chiqmagan yoshlarning aybi nimada?" , src: "https://youtube.com/shorts/DMHKRTE2njg?feature=share"},
  {name: "25.Ingliz tilini 3 OYDA o'rgansa bo'ladimi?" , src: "https://youtu.be/cZ_crRNAVRI"},
  {name: "26.90 yoshli insondan 90ta maslahat" , src: "https://youtu.be/Ss-zIV8n1hs"},
  {name: "27.O'zbekistonda to'xtatib bo'lmas biznesmen bo'lish siri" , src: "https://youtu.be/q90gonLuI5E"},
  {name: "28.Agar biznesda siz lider bo'lmasangiz, boshqasi bo'ladi..." , src: "https://youtube.com/shorts/5vLRnVSOMt4?feature=share"},
  {name: "29.Eng xato g'oya bu..." , src: "https://youtube.com/shorts/3leQTxT2ArE?feature=share"},
  {name: "30.Biznes uchun ajoyib g'oya qayerdan keladi? 1-qism" , src: "https://youtube.com/shorts/QW1VdE_J56Q?feature=share"},
  {name: "31.Birinchi bo'ldingiz degani, siz eng zo'risiz degani emas!" , src: "https://youtube.com/shorts/2bOXvBSB0QY?feature=share"},
  {name: "32.Yaxshi MARKETOLOG bo'lish haqida" , src: "https://youtube.com/shorts/zEVA4KEL-Mc?feature=share"},
  {name: "33.Hech kim sizga qarshilik qilmaydi!" , src: "https://youtube.com/shorts/P0f0c0Qy9Ao?feature=share"},
  {name: "34.Shunchaki, vaqtni behuda sarflamang!" , src: "https://youtube.com/shorts/Svrc_IPoz1g?feature=share"},
  {name: "35.Atrof-muhit sizni kelajagingizni belgilaydi" , src: "https://youtube.com/shorts/Fbkjjhrwn2w?feature=share"},
  {name: "36.Universitetda o'qish kerak!" , src: "https://youtube.com/shorts/VB1xvWG5Mb0?feature=share"},
  {name: "37.Bilimni olish kerak boshga quyib qo'yishlarini kutish emas..." , src: "https://youtube.com/shorts/bafMdZ9aX2s?feature=share"},
  {name: "38.Boy bo'lishning oson yo'li" , src: "https://youtube.com/shorts/gpIKD7u8CXI?feature=share"},
  {name: "39.2021-Yil O`qigan Kitoblarim" , src: "https://youtu.be/dRM_NwA-6sw"},
  {name: "40.Qanday Qilib KITOBNI To'g'ri O'qish kerak?" , src: "https://youtu.be/t93gaUpP3N0"},
  {name: "41.O'z xotirangizga ishoning!" , src: "https://youtu.be/1ccOoUo-qnM"},
  {name: "42.MNEMONIST Kundaligi" , src: "https://youtu.be/bAfOGcFZsYM"},
  {name: "43.Bu 5 Narsani Bilmasdan Kasb Tanlashga Urinmang!" , src: "https://youtu.be/8u0TMjoq2Xc"},
  {name: "44.XOTIRANI Rivojlantirishni 4 ta SIRI" , src: "https://youtu.be/OgzWWZ6PVYk"},
  {name: "45.Xotirani Rivojlantirish Haqida SAVOL-JAVOBLAR!" , src: "https://youtu.be/5tGbSpR4y2s"},
  {name: "46.Qanday Qilib Xotira Susayishini To`xtatish Mumkin?!" , src: "https://youtu.be/ObnHjfzEYvY"},
  {name: "47.O'ZBEKISTONDA YASHASH UCHUN TOP 3 SABAB Nega aynan O'zbekistonda qolish kerak?" , src: "https://youtu.be/78RdrnfweQ8"},
  {name: "48.Mana haqiqiy MOTIVATSIYA!" , src: "https://youtu.be/QGT-qi2WzSM"},
  {name: "49.Intizomli Bo'lishning Siri Nimada?" , src: "https://youtu.be/LlVxUxFDeTI"},
  {name: "50.Kitob O’qiganda Zerikmaslik Uchun Nima Qilish Kerak?" , src: "https://youtu.be/pDBolnV9CzU"},
  {name: "51.Dangasalikni Yengishning Eng Oson Usuli" , src: "https://youtu.be/Ad698jz1MkQ"},
  {name: "52.Hayotini O’zgartirishni Xohlagan Har Bir Inson Bilishi Shart!" , src: "https://youtu.be/BO4vBWqLXeY"},
  {name: "53.Muvaffaqiyat Uchun Eng Muhim Yagona Xislat (Siz O`ylagan Narsa Emas)" , src: "https://youtu.be/zgmqohe3iy4"},
  {name: "54.Muvaffaqiyatli Insonlar Bilishingizni Xohlamagan 3 Oson va Kuchli Dangasalikni Yengish Usullari!" , src: "https://youtu.be/zrhXCGBuv84"},
  {name: "55.Qaysi paytdagi uyqu xotiraga ko'p kuch beradi? | Davronbek Turdiyev" , src: "https://youtu.be/V0cqw8B1_s4"},
  {name: "56.Kuchli xotiraga qanday qilib ega bo'lamiz?" , src: "https://youtu.be/9aVvmIOMusU"},
  {name: "57.Xotirani nima kuchsizlantiradi?" , src: "https://youtu.be/czbj9OYG93U"},
  {name: "58.Ushbu 7 Qonunga Rioya Qilmaganlar Ertami-kech Sinadi" , src: "https://youtu.be/ZeLT8BuWosM"},
  {name: "59.Rivojlanishning Asosiy Omili Bu..." , src: "https://youtu.be/pNXS03qBdpw"},
  {name: "60.Super xotira egasi Davron Turdiyev Bu hammaning qo'lidan keladi" , src: "https://youtu.be/M8f5pzmcHEw"},
  {name: "61.Fikrlashni kengaytiramiz | Davron Turdiyev" , src: "https://youtu.be/P6gKFt5wyPE"},
  {name: "62.O'z xotirangizga ishoning!" , src: "https://youtu.be/1ccOoUo-qnM"},
  {name: "63.Super xotira egasi Davron Turdiyev Bu hammaning qo'lidan keladi" , src: "https://youtu.be/M8f5pzmcHEw"},
  {name: "64.Fikrlashni kengaytiramiz | Davron Turdiyev" , src: "https://youtu.be/P6gKFt5wyPE"},
  {name: "65.O'z xotirangizga ishoning!" , src: "https://youtu.be/1ccOoUo-qnM"},
  {name: "66.Miyani tiniqlashtiruvchi mashq | Diqqatni jamlash" , src: "https://www.youtube.com/watch?v=NJIgxzTT9dQ"},
  {name: "67.Xotirani eng kuchli qiladigan narsa nima?" , src: "https://youtu.be/0wJictiYofY"},
  {name: "68.Biz butun umr bilmagan boylik! Dovranbek Turdiyev" , src: "https://youtu.be/DUAW3FUyWok"},
  {name: "69.Dangasalikni yengish uchun eng kuchli motimatsiya Muhammadali Eshonqulovdan" , src: "https://youtu.be/G6LjbJIshUQ"},
  {name: "70.O'quvchi va talabalar uchun MOTIVATSIYA. Tinmasdan O'QI!" , src: "https://youtu.be/35ZrmZMDi58"},
  {name: "71.Qanday kasb tanlay emas, balki... | Alisher Isaev" , src: "https://youtu.be/EYXuTEACeyk"},
  {name: "72.Dunyodagi eng nufuzli universitet" , src: "https://youtu.be/ZHVco5QoI9o"},
  {name: "73.Qancha vaqt uxlash kerak?" , src: "https://youtu.be/Co6-YpGtcYY"},
  {name: "74.Kun tartibi" , src: "https://youtu.be/L3yH1zCUPlE"},
  {name: "75.Butun umrga yetadigan motivatsiya" , src: "https://youtu.be/LPLtV69vlj8"},
  {name: "76.Pulsiz biznes qilish" , src: "https://youtu.be/Ych-WHg-tDw"},
  {name: "77.Men eng zo'rman degan inson..." , src: "https://youtu.be/7U6Z-qp5eis"},
  {name: "78.Imkon har doim topiladi" , src: "https://youtu.be/2QwFMw33SUk"},
  {name: "79.Ilmsizlikdan qoching!" , src: "https://youtu.be/aZL2_oxOGQ0"},
  {name: "80.O’sha buyuk inson — bizmiz!" , src: "https://youtu.be/N2sUQArtpgg"},
  {name: "81.Hayotda do'st ko'pdek ko'rinar ekan, aslida ular kam!" , src: "https://youtu.be/ftML2n_misU"},
  {name: "82.Bir umr esimda qolgan voqea" , src: "https://youtu.be/6ZE0wm3aUps"},
  {name: "83.Xotirani nima kuchsizlantiradi?" , src: "https://youtu.be/czbj9OYG93U"},
  {name: "84.Xotirangiz kuchli bo'lsa, yashash" , src: "https://youtu.be/SlqGWXjDxE0"},
  {name: "85.Hamma narsaning poydevori — ta'lim!" , src: "https://youtu.be/5ozTp3eDFuU"},
  {name: "86.Odamlarni majburlamaylik!" , src: "https://youtu.be/KJirKVLxBBc"},
  {name: "87.Siz — millat umidisiz!" , src: "https://youtu.be/rfzCxzKJGV0"},
  {name: "88.Bu bilimlarni bilmasdan uylanmang!" , src: "https://youtu.be/jObgUW0WXYw"},
  {name: "89.Notiqlikdagi sirlilik nima?" , src: "https://youtu.be/Mm7Mf5RL9hE"},
  {name: "90.Ishni 110% ga bajaring" , src: "https://youtube.com/shorts/lWO9-GMcEh8?feature=share"},
  {name: "91.Tarixda o'z nomini qoldirgan kashfiyotchi biolog bilan suhbat" , src: "https://youtu.be/D3F4jnHb_po"},
  {name: "92.15 yoshda talaba bo'lgan, 10 mingdan ziyod shogird chiqarishga ulgurgan o'zbek o'g'loni bilan suhbat" , src: "https://youtu.be/WFTtGlFL52M"} ,
  {name: "93.Ishga olmaguningcha toʻxtamayman" , src: "https://youtu.be/UT6KXfHHi-A"},
  {name: "94.O'z sohasining ustasi bo'lish uchun..." , src: "https://youtu.be/U03cTEEjv5U"},
  {name: "95.Biz mardikor emasmiz!" , src: "https://youtu.be/npyZNw4QfuA"},
  {name: "96.Samimiyat ketib qolmasin" , src: "https://youtu.be/eDdZR4KMXWw"},
  {name: "97.Yengillik bormi? Demak yiqilish ham bo'ladi..." , src: "https://youtu.be/35IWOnKahtI"},
  {name: "98.Bu dunyo to'yxona emas!" , src: "https://youtu.be/bs4i1x3XZK0"},
  {name: "99.Chet elda o'qimoqchi bo'lganlarga maslahat" , src: "https://youtu.be/nm7bjA4v1k0"},
  {name: "100.18 yoshimda Rossiyaga ishlashga ketganman" , src: "https://youtu.be/xhpbqhYaThE"} 
]

function link(params:Link) {
  let a = document.createElement("a")
  a.setAttribute('href' , params.src)
  a.innerText = params.name
  a.className = 'yuz-content-link'
  yuz.appendChild(a)
}

for (const item of links) {
  link(item)
}
//navbar
let button:HTMLElement = document.querySelector('.navbar-btn')!
let menu:HTMLElement = document.querySelector('.navbar-menu')!

button.onclick = () => {
  menu.classList.toggle('nav-act')
}