const TelegramBot = require("node-telegram-bot-api");
const token = "921695957:AAFmy4SXIeps28O-0X1lMwFTKKj2r_D_DcA";
const simpleBot = new TelegramBot(token, { polling: true });
const menu = {
  sendPhoto: "Send Photo",
  sendLocation: "Send Location"
};
simpleBot.onText(/\/menu/, message => {
  simpleBot.sendMessage(message.chat.id, "Here is the menu.", {
    reply_markup: {
      keyboard: [Object.values(menu)]
    }
  });
});

simpleBot.on("message", message => {
  switch (message.text) {
    case menu.sendLocation:
      simpleBot.sendLocation(message.chat.id, -6.521876, 110.719502);
      simpleBot.sendMessage(message.chat.id, "something");
      break;
    case menu.sendPhoto:
      simpleBot.sendPhoto(message.chat.id, "https://s.id/sample-image");
      break;
  }
});
simpleBot.on("polling_error", error => {
  console.log(error);
});
