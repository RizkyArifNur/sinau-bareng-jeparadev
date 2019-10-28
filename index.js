const TelegramBot = require("node-telegram-bot-api");
const dBot = require("dbot-js");
const token = "921695957:AAFmy4SXIeps28O-0X1lMwFTKKj2r_D_DcA";

const simpleBot = new TelegramBot(token, { polling: true });
simpleBot.on("message", message => {
  dBot.get_response(message.text, (error, result) => {
    if (!error) {
      simpleBot.sendMessage(message.chat.id, result);
    }
  });
});
