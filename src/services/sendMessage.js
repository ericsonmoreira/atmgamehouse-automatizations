import "dotenv/config";
import telegramApi from "../api/telegramApi.js";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatIdToNotify = process.env.TELEGRAM_CHAT_ID_TO_NOTIFY;

const sendMessage = (text) =>
  telegramApi.post(`/bot${telegramBotToken}/sendMessage`, {
    chat_id: telegramChatIdToNotify,
    disable_web_page_preview: true,
    text,
  });

export default sendMessage;
