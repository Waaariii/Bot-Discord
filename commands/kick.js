
const Command = require('./command')

module.exports = class Ping extends Command {
    static match(message){
        return message.content.startsWith('!kick')
    }
    static action (message){
        const member = message.mentions.members.first()
        if (!member) {
            return message.reply(`Utilisateur pas trouvé ou pas spécifié`)
        }
        if (!member.kickable) {
            return message.reply(`L'utilisateur n'est pas kickable`)
        }
            return member
        .kick()
        .then(() => message.reply(`L'utilisateur ${member.user.tag} a été kicked`))
    .   catch(error => message.reply(`Une erreur s'est produite`))
    }
}

