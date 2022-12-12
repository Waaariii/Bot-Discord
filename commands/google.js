const Command = require('./command')

module.exports = class Google extends Command {

    static match (message) {
        console.log('google')
        return message.content.startsWith('!google')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        message.reply('https://www.google.fr/#q=' +args.join('%20'))
    }
}