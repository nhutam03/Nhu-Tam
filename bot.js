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

    const bully = ["thằng đầu buồi giẻ rách này", "nghe mà đau nát trái tim này", "mẹ cái bọn lesor", "NamKey buscu Backy", "đừng chửi em nữa, yêu em đi", "hic cai loz, im lang", "ngoan ngoan", "nếu cảm thấy mệt quá, em cho mượn bờ vide, thì thầm em nói nhỏ, tổng cộng năm trăm hai", "hic là năm lít", "Ai là đứa trẻ ngoan nàoooo? Đéo phải mày, cút.", "wjbu thì im mồm", "Phải tôi tôi lại đấm cho mấy fat", "bớt đùa đi, dạo này tao không còn hiền nữa đâu", "yêu em đừng để em buồn, em buồn anh vẫn phải yêu em <3", "tự làm bot mà chơi, chơi chùa là 300k"]
    const randombully = bully[Math.floor(Math.random() * bully.length)]
    if (message.content === "hic") {
        message.channel.send(randombully);
    }

    const gn = ["Chúc bé ngủ ngon", "oyasumi", "đi ngủ hoặc bị đánh đít", "cút cút mau", "tôi thay mặt twm chúc bạn ngủ ngon", "ngủ đi hoặc yêu em"]
    const randomgn = gn[Math.floor(Math.random() * gn.length)]
    if ((message.content === "ngu ngon") || (message.content === "Ngu ngon")) {
        message.channel.send(randomgn);
    }

    const quote = ["if he's cheating, cheat back-Support your man in everything he does", "quy tắc tạo nên cuộc sống, bất quy tắc tạo nên cuộc đời", "thành công khi không yêu là tránh dc thất bại trên đường tình", " An oan giang ho day tao lon - Anh em choi cho' day tao khon", "Tuy rang nu cuoi luon no tren moi, nhung cuoc song cua toi chua bao gio la on", "dieu thuoc tan nhat len hut lai, ban khon nan khong choi lai lan 2", "co buom ma khong cho dit thi cat me buom di", "doi hoi ha va bon chen, con nguoi nho nhen va ja tao", "ot du cay em van an ca vo, em nguc nho anh co bo em khong?",
        "j ban da quay vao o mat luot", "goi nguc em la oreo boi vi anh muon xoay va liem", "VÌ TỔ QUỐC XÃ HỘI CHỦ NGHĨA, VÌ LÝ TƯỞNG CỦA BÁC HỒ VĨ ĐẠI, SẲN SÀNG.", "ban than khong co, nhung ban cho tao co thua", "nguoi ta da gang noi doi, thi minh ngai gi ma ko ja vo tin", "che anh ngheo? den luc thay anh boc dau thi dung co tiec", "co tien 2 chu anh em, het tien 4 chu anh em cai loz", "Cuoc doi tao den luot may len mat a? chua du tu cach dau", "cuoc song ma, ai cung phai di tu thoi", "toi nghe, toi thay, toi biet. nhung toi muon ja mu ja cam ja diec, de xem ban jien tiep ra sao",
        "danh dit em bang thuoc, Penthouse o Binh Phuoc", "gẶm nhẤm kỶ niỆm, trÁng miỆng nỖi buỒn", "troi em vao audi, penthouse o viet tri", "ngay xua cung ta the chung huong, ma nay cung han dit rung giuong ?", "Goi em la mua vi anh rat thich nghe tieng rain cua em", "https://imgur.com/qnAe9PA", "Luat jang ho em choi bang sung may, Ban lung loz dua nao noi iu anh", "Vi tien do bat canh chua, ae xuong mau van thua cai loz", "duong tao di co quy nhan fu ho, viec tao lam co quy ju bao ke", "Anh yeu em nhu Bac Ho yeu nuoc, mat em roi nhu Phap mat Dong Duong", "vu hoi cang, co phai em dang vang hoi cu", "anh khong yeu em thi em yeu nguoi khac, luat jang ho khong cho fep em co don", "lam lil cuon ren be bé, penthhouse ben ben' nghe'", "Ho cuoi toi vi toi ko jong ho, Toi cuoi ho vi ho dang cuoi toi", "Yeu em dung de em buon, em buon em tat nguon di pay", "nghe dau anh thich fa tra, nha em co am anh co chen k", " bot dua di t ko con vui tinh nhu truoc dau", "khoi chua tan sao voi quen tinh ban, thuoc chua tan sao vut tinh ae", "https://imgur.com/p4bDu3L", " me oi con chan om chan om goi ngu roi, con muon om con nha nguoi ta ngu co"
    ]
    const randomQuote = quote[Math.floor(Math.random() * quote.length)];
    if ((message.content === "quote") || (message.content === "Quote")) {
        (message.channel.send(randomQuote));

    }

    const zoc = ["cơm chiên trứng", "trứng chiên", "Gà chiên lước mắm", "trứng luộc", "canh chua", "cà ri", "mời ăn bánh mì cả ngày", "nhịn", "thịt kho trứng", "mua mực về xào lên, hỏi loz à", "rau muống xào tỏi - để mày nhận thức được cái sự nghèo khổ của mày",
        "thịt luộc", "biết làm gà rô ti không con chó?", "cháo hành thịt băm mà còn đéo nấu dc thì chỉ có ăn con cặc", "cơm chiên juon châu", "bò núc nắc", "cà ri x3,14", " canh khoai tây cà rốt - đéo phải cà ri nhé", "đậu phụ sốt cà chua thì sao hả con đĩ?",
        "ngũ quả kho qoẹt-món ăn cho bọn nghèo", "mì cay đi bạn hiền", " hết cái để chiên thì chiên con mẹ mày mì lên mà ăn", "mì tôm trứng đi con đỗ nghèo khỉ", "tôm thì sao ?"
    ]
    const randomZoc = zoc[Math.floor(Math.random() * zoc.length)]
    if ((message.content.includes("hôm nay ăn gì")) || (message.content.includes("Hôm nay ăn gì")) || (message.content.includes("Hom nay an gi")) || (message.content.includes("hom nay an gi"))) {
        (message.channel.send(randomZoc));

    }

    const bth = ["bánh mì Thổ Nhĩ Kỳ", "xôi gà", "bánh mì", "bún real", "bún chả ngon", "ăn cứt ăn đầu buồi", "an pho", "xôi bắp", "cơm chiên trân châu", "ăn chay", "nhịn", "xôi gấc", "mì thập cẩm các thứ đi em",
        "ăn iem", "súp cua", "mì gói", "mì ổ", "ăn đéo gì ngủ tiếp đi", "ăn loz", "về bảo mẹ nấu cho mà ăn", "mapdjt rồi còn ăn sao", "bún bò Huế", "bánh canh cá nóc", "xôi bắp", "ăn em gái loli mup’ rup",
        "mì quảng là lựa chọn số 1", "cơm chiên trứng", "cơm tấm của chị Tấm", "mì indomie nhưng theo cảm nhận của tôi thì tiểu nhị ngon hơn hic", "nghèo thì ra lề đường mua gói xôi 5 ngàn mà ăn",
        "mì ốp la đi em", "bánh mì xíu mại", "xôi bó gà", "bánh bao to bự", "ra family mart có gì ăn nấy"
    ]
    const randombth = bth[Math.floor(Math.random() * bth.length)]
    if ((message.content.includes("sáng nay ăn gì")) || (message.content.includes("Sáng nay ăn gì")) || (message.content.includes("sang nay an gi")) || (message.content.includes("Sang nay an gi"))) {
        (message.channel.send(randombth))
    }

    const aud = ["https://imgur.com/dQoMckk", "https://imgur.com/5uC2Rro", "https://imgur.com/lWJYAM4", "https://imgur.com/SqhEkWr", "https://imgur.com/t7QP3xQ", "https://imgur.com/5n348C7", "https://imgur.com/bM3YIMy", "https://imgur.com/7kxoTUv", "https://imgur.com/d4j1fsA", "https://cdn.discordapp.com/emojis/608330095094136844.png?v=1"]
    const randomAud = aud[Math.floor(Math.random() * aud.length)]
    if ((message.content.includes("aujam")) || (message.content.includes("audam")) || (message.content.includes("Aujam")) || (message.content.includes("Audam"))) {
        (message.channel.send(randomAud));

    }

    if (message.content.includes("anh that su ngu ngoc")) {
        var text = message.content.split(' ').slice(1).join(' ');
        if (text) return message.reply("bao ve nguoi ay cung k xong");
        message.channel.reply(text);
    }
    if (message.content.includes("sức đề kháng yếu") || message.content.includes("suc de khang yeu") || message.content.includes("sức đề kháng có yếu ")) {
        var text = message.content.split(' ').slice(1).join(' ');
        if (text) return message.reply(" ôi bạn ơi, sức đề kháng của bạn yếu là do bạn không chơi đồ đấy");
        message.channel.reply(text);
    }
    if (message.content.startsWith(":say")) {
        var text = message.content.split(' ').slice(1).join(' ');
        message.channel.send(text)
        message.delete();
    }


    if (message.author.equals(bot.user)) return;
    var args = message.content.substring(PREFIX.length).split(" ")
    if (!message.content.startsWith(PREFIX)) return;
    switch (args[0].toLowerCase()) {
        case "alo":
            {
                message.channel.send("công an đây địt mẹ mày");
                break;
            }
        case "seno":
            {
                message.channel.send("demo sonna");
                break;
            }
        case "help":
            {
                message.channel.send("Chưa update mục này.");
                break;
            }
        case "oblivion":
            {
                message.channel.send("https://discord.gg/GQzDBPE");
                break;
            }
        case "dogevn":
            {
                message.channel.send("https://discord.gg/QfGbBY5");
                break;
            }
        case "hello":
            {
                message.channel.send("lo con cac");
                break;
            }
        case "dmcs":
            {
                message.channel.send("cong dau thang lon nay lai ");
                break;
            }
        case "sai trinh ta ":
            {
                message.channel.send('thang nay thich an dui cui')
                break;
            }
        case "mạng lag":
            {
                message.channel.send("xin được địt con mẹ những FuckPT,VNPeeTee, Vịt teo");
                break;
            }
        case "google":
            {
                message.channel.send("http://hss3uro2hsxfogfq.onion/");
                break;
            }
    }
})

bot.login(process.env.BOT_TOKEN);
