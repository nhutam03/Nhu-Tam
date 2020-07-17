const Discord = require("discord.js");
const PREFIX = ':'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

let bot = new Discord.Client();
let fortunes = [
    "không", "đoán xem", "tôi không nghe, tôi không thấy", "đi ngủ để mer đi", "mẹ cái bọn lesor", "thằng đầu buổi giẻ rách", "cut' me may di"
]
let bully = [
    "thằng đầu buồi giẻ rách này", "nghe mà đau nát trái tim này", "mẹ cái bọn lesor", "NamKey buscu Backy", "đừng chửi em nữa, yêu em đi", "hic cai loz, im lang", "ngoan ngoan", "nếu cảm thấy mệt quá, em cho mượn bờ vide, thì thầm em nói nhỏ, tổng cộng năm trăm hai",
    "hic là năm lít", "Ai là đứa trẻ ngoan nàoooo? Đéo phải mày, cút.", "wjbu thì im mồm", "Phải tôi tôi lại đấm cho mấy fat",
    "bớt đùa đi, dạo này tao không còn hiền nữa đâu", "yêu em đừng để em buồn, em buồn anh vẫn phải yêu em <3"
]
let fatdean = [
    "dai ja xao loz", "mập quá anh ơi", "ai nớp diu chu cà mo"
]
fatto = [
    "admin cute hehe", "cali khat' nuoc'", "đưa ba trăm để có thêm", "vippro"
]
let mk = "Gia Lai thich nhau lai rai"

bot.on('ready', function () {
    console.log("bot is now online");
})

bot.on("message", async message => {

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
        message.channel.send("dễ thương nhưng ngoại trừ thằng hoa cải pha ke")
    }
    
    if (message.content === "mina") {
        message.chanel.send("hen cac ban vao 20/7")
    }
    
    if (message.content === "nguyen jung~ va lil cuong") {
        message.channel.send("dong huong tot, mot like")
    }

    if (message.content === "mk") {
        message.channel.send(mk)
    }

    if (message.content === "hic") {
        message.channel.send(bully[Math.floor(Math.random() * bully.length)]);
    }

    if (message.content === "fatto") {
        message.channel.send(fatto[Math.floor(Math.random() * fatto.length)]);
    }

    if (message.content === "fat dean") {
        message.channel.send(fatdean[Math.floor(Math.random() * fatdean.length)]);
    }
    

    if (message.author.equals(bot.user)) return;
    var args = message.content.substring(PREFIX.length).split(" ")
    if (!message.content.startsWith(PREFIX)) return;
    switch (args[0].toLowerCase()) {
        case "alo": {
            message.channel.send("công an đây địt mẹ mày");
            break;
        }

        case "seno": {
            message.channel.send("demo sonna");
            break;
        }
        case "help": {
            message.channel.send("Tôi là con bot vô dụng, tôi không giúp được ai cả hic. Nhưng chửi nhau set ke`o dam' nhau thì oce (° ͜ʖ ͡°)");
            break;
        }
        case "say": {
            if (args[0]) {
                message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            }
            break;
        }
    }
})

bot.login(process.env.BOT_TOKEN);


