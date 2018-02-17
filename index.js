const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf('509762747:AAE_Qd4hiJ97uTdqmCWxP7iauXtTzh5xtA4')
//bot.start((ctx) => ctx.reply('Hey there!'))
////bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
////bot.action('delete', ({ deleteMessage }) => deleteMessage())
//bot.startPolling()



const Telegram = require('telegraf/telegram')
const telegram = new Telegram('509762747:AAE_Qd4hiJ97uTdqmCWxP7iauXtTzh5xtA4')
//channel id -> https://github.com/GabrielRF/telegram-id#web-channel-id
telegram.sendMessage(-1001231605489, 'testing...').then((resp) => {console.log(resp)})
