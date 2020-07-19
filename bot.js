const Discord = require("discord.js");
const PREFIX = ':'
const fortunes = [ "không", "đoán xem", "tôi không nghe, tôi không thấy", "đi ngủ để mer đi", "mẹ cái bọn lesor", "thằng đầu buổi giẻ rách", "cut' me may di"]

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

let bot = new Discord.Client();

bot.on('ready', function () {
    console.log("bot is now online");
})

bot.on("message", async message => {
    
    if (message.content === "hello") {
        message.channel.send("lo con cac")
    }

    if (message.content === "gioi") {
        message.channel.send("chu ngu nhu may sao")
    }

    if (message.content === "twm") {
        message.channel.send("thomng mimnh sieu cap")
    }
    
    if (message.content === "van fuong") {
        message.channel.send("lesor lord sao")
    }
    
    if (message.content === "nhat ha") {
        message.channel.send("fuckgirl 2k6 du cac anh vao tu")
    }
    
    if (message.content === "minh thu") {
        message.channel.send("j loli trong truyen thuyet sao")
    }
    
    if (message.content === "hoa cai") {
        message.channel.send("sống ở đời nói phải giữ lời, đừng như con cu biết bay 👌")
    }
    
    if (message.content === "mina") {
        message.channel.send("hen cac ban vao 20/7")
    }
    
    if (message.content === "nhi") {
        message.channel.send("tụi mày khóc chắc gì đã khổ, tuy Nhi cười nhưng máu đổ trong pant")
    }
    
    if (message.content === "nguyen jung~ va lil cuong") {
        message.channel.send("dong huong tot, mot like")
    }


    if(message.content === '!rule'){
        message.channel.send('luat concac ne cac ban oi, quay len');
    }
//if(message.content === 'minhthu'){
//    message.channel.send('girl dot van');
//}
    if(message.content === '!Thư'){
        message.channel.send('jau thua merr');
    }
    if(message.content === 'he+lp'){
        message.channel.send('https://imgur.com/JlbBHBG');
    }
    if(message.content === '#S'){
        message.channel.send('https://imgur.com/CGLOBxA');
    }
    if(message.content === 'dit me lil cuong'){
        message.channel.send('cai dit con me may a');
    }
    if(message.content === "!thochan"){
        message.channel.send('em thich anh dam k');
    }
    if(message.content === "!thanngu"){
        message.channel.send('dit me than ngu');
    }
    if(message.content === "!thaophuong"){
        message.channel.send('anh yeu em');
    }
    if(message.content === "!phuongthao"){
        message.channel.send('anh yeu em');
    }
    if(message.content === "!zend" ){
        message.channel.send('fucc boi co tieng day cac ban');
    }
    if(message.content === "!chongu"){
        message.channel.send('dit me ngu ly doggu');
    }
    if(message.content === "!tailai"){
        message.channel.send('con nghien ruou vo liem si');
    }
    if(message.content === "!merr"){
        message.channel.send('jau cing nhung chua cho lil cuong 50 trieu');
    }
    if(message.content === "!meoleo"){
        message.channel.send('nguoi yeu cua chongu')
    }
    if(message.content === "!live4chan"){
        message.channel.send('10 trump x3,14')
    }
    if(message.content === "!ncat"){
        message.channel.send('bủh')
    }
    if(message.content === "!nhatha"){
        message.channel.send('chi so dang yeu cua nhatha la 1 ty')
    }
    if(message.content === "!sugarsama"){
        message.channel.send('xin dung ai nhac ve co ay')
    };
    if(message.content === "!twm"){
        message.channel.send('van vo 80')
    };
    if(message.content === "tha"){
        message.channel.send('tha jum')
    };
    if(message.content === "ah shit"){
        message.channel.send('here we go again')
    };
    if(message.content === "!hao"){
        message.channel.send('haohao kute')
    }
//if(message.content === "!fatdean"){
 //   message.channel.send('Fat wa 0 i iu')
//}
    if(message.content === "!huykun"){
        message.channel.send('ja hanh ton aka boi phan boi')
    };
    if(message.content === "!mike"){
        message.channel.send('mike chan dùng dây thừng tự sát, dây thừng chết')
    };

    if(message.content === "dmcs") {
        (message.channel.send("cong dau thang lon nay lai"));   
    }
    //if(message.content === "2106252") {
    //    (message.channel.send("j may man z"));   
    //}
    const mk = ["Gia Lai thich nhau lai rai", "nhớ đốt phong long nha mk", "ko muon noi gi"]
    const randommk = mk[Math.floor(Math.random() * mk.length)]
    if (message.content === "mk") {
        message.channel.send(randommk);
    }


    const bully = [ "thằng đầu buồi giẻ rách này", "nghe mà đau nát trái tim này", "mẹ cái bọn lesor", "NamKey buscu Backy", "đừng chửi em nữa, yêu em đi", "hic cai loz, im lang", "ngoan ngoan", "nếu cảm thấy mệt quá, em cho mượn bờ vide, thì thầm em nói nhỏ, tổng cộng năm trăm hai", "hic là năm lít", "Ai là đứa trẻ ngoan nàoooo? Đéo phải mày, cút.", "wjbu thì im mồm", "Phải tôi tôi lại đấm cho mấy fat", "bớt đùa đi, dạo này tao không còn hiền nữa đâu", "yêu em đừng để em buồn, em buồn anh vẫn phải yêu em <3", "tự làm bot mà chơi, chơi chùa là 300k"]
    const randombully = bully[Math.floor(Math.random() * bully.length)] 
    if (message.content === "hic") {
        message.channel.send(randombully);
    }

    const fatto = ["admin cute hehe", "cali khat' nuoc'", "baka bakaaa", "vippro", "phải luôn vui vẻ và tươi trẻ he he"]
    const randomfatto = fatto[Math.floor(Math.random() * fatto.length)]
    if (message.content === "fatto") {
        message.channel.send(randomfatto);
    }

    const fatdean = ["dai ja xao loz", "mập quá anh ơi", "thích tò mò không mà kêu hoài z", "an cut’ an db"]
    const randomfatdean = fatdean[Math.floor(Math.random() * fatdean.length)]
    if (message.content === "fat dean") {
        message.channel.send(randomfatdean);
    }
    const theanh = ["Đi ăn chè thái hok?", "mẹ cái thằng simp đội loz lên đầu", "duy trì tình bạn bằng 100k bạn nhé"]
    const randomtheanh = theanh[Math.floor(Math.random() * theanh.length)]
    if (message.content === "the anh") {
        message.channel.send(randomtheanh);
    }

    const gn = ["Chúc bé ngủ ngon", "oyasumi 😴", "đi ngủ hoặc bị đánh đít", "cút cút mau"]
    const randomgn = gn[Math.floor(Math.random() * gn.length)]
    if (message.content.includes("ngu ngon")) {
        message.channel.send(randomgn);
    }

    if(message.content === "Oblivion link") {
        (message.channel.send("https://discord.gg/GQzDBPE"));    
    }
    if(message.content === "Dogevn link") {
        (message.channel.send("https://discord.gg/M8FTp5D"));    
    }

    if(message.content.includes("mạng lag")){
        message.channel.send('xin được địt con mẹ những FuckPT,VNPeeTee, Vịt teo')}   
    if(message.content.includes("police san")){
        message.channel.send('chuyen j')}
    if(message.content.includes("sai trinh ta")){
        message.channel.send('thang nay thich an dui cui')}
    if(message.content.includes("co au dam") || message.content.includes('co au jam')){
         message.channel.send('dau? de tao cong dau thang lon do lai')}      
    if(message.content.includes("Cường óc chó")){
        message.channel.send('Coi chừng bố mày')} 
    
   // if(message.content === "google") {
    //    (message.channel.send("http://hss3uro2hsxfogfq.onion/"));            
    //}
    //if((message.content === "quote") || (message.content === "Quote"))  {
      //  (message.channel.send(randomQuote));
    //}
   
    //if((message.content.includes("hôm nay ăn gì")) || (message.content.includes("Hôm nay ăn gì"))|| (message.content.includes("Hom nay an gi"))|| (message.content.includes("hom nay an gi")))
    //{
    //(message.channel.send(randomZoc));
    //}

    //if((message.content.includes("aujam")) || (message.content.includes("audam"))|| (message.content.includes("Aujam"))|| (message.content.includes("Audam")))
    //{
      //  (message.channel.send(randomAud));

    //}

    //if(message.content.includes("sức đề kháng yếu")||message.content.includes("suc de khang yeu")||message.content.includes("sức đề kháng có yếu ")) {
      //  var text = message.content.split(' ').slice(1).join(' ');
        //if(text) return message.reply(" ôi bạn ơi, sức đề kháng của bạn yếu là do bạn không chơi đồ đấy");
         //message.channel.reply(text);
   // }
   const quote = ["if he's cheating, cheat back-Support your man in everything he does","quy tắc tạo nên cuộc sống, bất quy tắc tạo nên cuộc đời","thành công khi không yêu là tránh dc thất bại trên đường tình", " An oan giang ho day tao lon - Anh em choi cho' day tao khon","Tuy rang nu cuoi luon no tren moi, nhung cuoc song cua toi chua bao gio la on", "dieu thuoc tan nhat len hut lai, ban khon nan khong choi lai lan 2", "co buom ma khong cho dit thi cat me buom di", "doi hoi ha va bon chen, con nguoi nho nhen va ja tao", "ot du cay em van an ca vo, em nguc nho anh co bo em khong?", 
   "j ban da quay vao o mat luot","goi nguc em la oreo boi vi anh muon xoay va liem","VÌ TỔ QUỐC XÃ HỘI CHỦ NGHĨA, VÌ LÝ TƯỞNG CỦA BÁC HỒ VĨ ĐẠI, SẲN SÀNG." ,"ban than khong co, nhung ban cho tao co thua", "nguoi ta da gang noi doi, thi minh ngai gi ma ko ja vo tin","che anh ngheo? den luc thay anh boc dau thi dung co tiec", "co tien 2 chu anh em, het tien 4 chu anh em cai loz", "Cuoc doi tao den luot may len mat a? chua du tu cach dau", "cuoc song ma, ai cung phai di tu thoi", "toi nghe, toi thay, toi biet. nhung toi muon ja mu ja cam ja diec, de xem ban jien tiep ra sao",
   "danh dit em bang thuoc, Penthouse o Binh Phuoc","gẶm nhẤm kỶ niỆm, trÁng miỆng nỖi buỒn","troi em vao audi, penthouse o viet tri","ngay xua cung ta the chung huong, ma nay cung han dit rung giuong ?","Goi em la mua vi anh rat thich nghe tieng rain cua em","https://imgur.com/qnAe9PA","Luat jang ho em choi bang sung may, Ban lung loz dua nao noi iu anh","Vi tien do bat canh chua, ae xuong mau van thua cai loz","duong tao di co quy nhan fu ho, viec tao lam co quy ju bao ke","Anh yeu em nhu Bac Ho yeu nuoc, mat em roi nhu Phap mat Dong Duong","vu hoi cang, co phai em dang vang hoi cu","anh khong yeu em thi em yeu nguoi khac, luat jang ho khong cho fep em co don","lam lil cuon ren be bé, penthhouse ben ben' nghe'","Ho cuoi toi vi toi ko jong ho, Toi cuoi ho vi ho dang cuoi toi","Yeu em dung de em buon, em buon em tat nguon di pay","nghe dau anh thich fa tra, nha em co am anh co chen k"," bot dua di t ko con vui tinh nhu truoc dau","khoi chua tan sao voi quen tinh ban, thuoc chua tan sao vut tinh ae","https://imgur.com/p4bDu3L"," me oi con chan om chan om goi ngu roi, con muon om con nha nguoi ta ngu co"]
   
   const randomQuote = quote[Math.floor(Math.random() * quote.length)];
   
   if(message.content === "google") {
       (message.channel.send("http://hss3uro2hsxfogfq.onion/"));
       
   }
   if((message.content === "quote") || (message.content === "Quote"))
   {
       (message.channel.send(randomQuote));
       
   }
   const zoc = ["cơm chiên trứng","trứng chiên","Gà chiên lước mắm","trứng luộc","canh chua","cà ri","mời ăn bánh mì cả ngày","nhịn","thịt kho trứng","mua mực về xào lên, hỏi loz à","rau muống xào tỏi - để mày nhận thức được cái sự nghèo khổ của mày",
   "thịt luộc","biết làm gà rô ti không con chó?","cháo hành thịt băm mà còn đéo nấu dc thì chỉ có ăn con cặc","cơm chiên juon châu","bò núc nắc","cà ri x3,14"," canh khoai tây cà rốt - đéo phải cà ri nhé","đậu phụ sốt cà chua thì sao hả con đĩ?",
   "ngũ quả kho qoẹt-món ăn cho bọn nghèo","mì cay đi bạn hiền"," hết cái để chiên thì chiên con mẹ mày mì lên mà ăn","mì tôm trứng đi con đỗ nghèo khỉ","tôm thì sao ?"]
       const randomZoc = zoc[Math.floor(Math.random() * zoc.length)]
       if((message.content.includes("hôm nay ăn gì")) || (message.content.includes("Hôm nay ăn gì"))|| (message.content.includes("Hom nay an gi"))|| (message.content.includes("hom nay an gi")))
   {
       (message.channel.send(randomZoc));
       
   }
   const aud = ["https://imgur.com/dQoMckk","https://imgur.com/5uC2Rro","https://imgur.com/lWJYAM4","https://imgur.com/SqhEkWr","https://imgur.com/t7QP3xQ","https://imgur.com/5n348C7","https://imgur.com/bM3YIMy","https://imgur.com/7kxoTUv","https://imgur.com/d4j1fsA"]
   const randomAud = aud[Math.floor(Math.random() * aud.length)]
   if((message.content.includes("aujam")) || (message.content.includes("audam"))|| (message.content.includes("Aujam"))|| (message.content.includes("Audam")))
   {
   (message.channel.send(randomAud));
   
   }

    if(message.content.includes("anh that su ngu ngoc")) {
        var text = message.content.split(' ').slice(1).join(' ');
        if(text) return message.reply("bao ve nguoi ay cung k xong");
         message.channel.reply(text);
        }

    if(message.content.startsWith(":say")) {
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.reply("địt mẹ mày sai rồi Ex: :say sủa concac");
         message.channel.send(text)
         message.delete();
    }
    


    if (message.author.equals(bot.user)) return;
    var args = message.content.substring(PREFIX.length).split(" ")
    if (!message.content.startsWith(PREFIX)) return;
    switch (args[0].toLowerCase()) {
        case "alo": {
            message.channel.send("công an đây địt mẹ mày");
            break;
        }

        case "seno": {
            message.channel.send("demo sonna");
            break;
        }
        case "help": {
            message.channel.send("Tôi là con bot vô dụng, tôi không giúp được ai cả hic. Nhưng chửi nhau set ke`o dam' nhau thì oce (° ͜ʖ ͡°)");
            break;
        }
        case "talk": {
            if (args[0]) {
                message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            }
            break;
        }
    }
})

bot.login(process.env.BOT_TOKEN);
