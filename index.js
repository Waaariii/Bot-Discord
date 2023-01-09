const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');
const Ping = require('./commands/ping');

client.on('ready', function(){
    client.user.setAvatar('./puke.jpg')
        .then(() => console.log('L\'avatar est en place oeoeoe'))
        .catch(console.error)
    client.user.setActivity('a la pignouf oui').catch(console.error)
})

client.on('guildMemberAdd', function (member){
    member.createDM().then(function(channel){
        channel.send('Bienvenue sur le serveur WouariServ' + member.displayName)
    }).catch(console.error)
})

client.on('message', function (message){
    let commandUsed = 
        Ping.parse(message) ||
        Play.parse(message)
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);
