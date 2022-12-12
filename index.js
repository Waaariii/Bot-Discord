const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', function(){
    client.user.setAvatar('./puke.jpg')
        .then(() => console.log('L\'avatar est en place oeoeoe'))
        .catch(console.error)
    client.user.setActivity('a la pignouf oui').catch(console.error)
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'cha') {
    msg.channel.send('kira');
  }
});

client.login('MON_TOKEN');
