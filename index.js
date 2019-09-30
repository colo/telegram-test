const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])

const bot = new Telegraf('xxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
//bot.start((ctx) => ctx.reply('Hey there!'))
////bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard)))
////bot.action('delete', ({ deleteMessage }) => deleteMessage())
//bot.startPolling()



const Telegram = require('telegraf/telegram')
const telegram = new Telegram('xxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
//channel id -> https://github.com/GabrielRF/telegram-id#web-channel-id
telegram.sendMessage(-1001231605489, '*bold text*\n'+
'_italic text_\n'+
'[inline URL](http://www.example.com/)\n'+
'[inline mention of a user](tg://user?id=123456789)\n'+
'`inline fixed-width code`\n'+
'```block_language'+
'pre-formatted fixed-width code block'+
'```\n', {parse_mode: 'Markdown'}).then((resp) => {console.log(resp)})
