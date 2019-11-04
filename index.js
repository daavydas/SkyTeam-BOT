const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQwMjcxNTgwMDg5Mjg2NzE2.Xb3ZcA.yEDBhEC3p9u6wsBMsZVcD071IDE';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "sveiki-atvyke")
    if(!channel) return;

    channel.send(`Sveikas atvykęs į mūsų serverį ${member}, dalis darbo jau atlikta liko perskaityti taisykles ir užpildyti anketą ;D  Sėkmės!!!`)
});
bot.on('message', message=>{
 
    let args = message.content.substring(PREFIX.lenght).split(" ");

    switch(args[0]){
        case '?anketa':
            message.channel.sendMessage('https://forms.gle/GJukj45tXGFVPxva7/')
        break;
        case '?admin':
            message.channel.sendMessage('Administracija: DariuS_(DariuS_ #3322) ir GokasLT(ROKELIS🎃#3735)')
            break;
        case '?sezonas':
            message.channel.sendMessage('Dabar jau antras sezonas!')
            break;
            case '?neveikia':
                message.channel.sendMessage('Serveris po restarto pats neįsijungia. Laukiam Dariaus.')
            break;
            case '?youtube':
                message.channel.sendMessage('Hloperis: https://www.youtube.com/channel/UCHeFI4jwrzw9HvFIAxMSQVQ        Faivas: https://www.youtube.com/channel/UCQMh46pv_FDFBZL1hhit1Ig                              the eimis: https://www.youtube.com/user/TheEimisGame')
            break;
            case '?status':
                message.channel.sendMessage('https://mcsrvstat.us/server/91.103.255.46:10305')
            break;
            case '?mc':
                message.channel.sendMessage('Minecraft versija: 1.14.4, žaisti galima ir be premium paskyros. ')
            break;
            case '?ideja':
                message.channel.sendMessage('Jei turi kokių idėjų kokius dar klausimus gali atsakyti botas parašyk Devas #5228')
            break;
            case '?ip':
                message.channel.sendMessage('Serverio IP: 91.103.255.46:10305')
            break;
            case '?':
                message.channel.sendMessage('sakyk ko nori')
            break;
        case '?tikrinti':
            if(args[1] === 'anketa'){
                message.channel.sendMessage('Kiekvieną penktadienį 19:00, prašome neprašinėti patikrinti anksčiau')
            }else{
                message.channel.sendMessage('Tavo nesąmonių nesuprantu ;D')
            }
            break;
        }


})

bot.login(token);