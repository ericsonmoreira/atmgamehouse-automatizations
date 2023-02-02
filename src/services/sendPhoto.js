import "dotenv/config";
import FormData from "form-data";
import telegramApi from "../api/telegramApi.js";
import fs from "fs";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatIdToNotify = process.env.TELEGRAM_CHAT_ID_TO_NOTIFY;

const sendPhotos = () => {
  const photos = fs.readdirSync("./photos", { withFileTypes: true });

  const photoNames = photos
    .filter((photo) => photo.isFile())
    .map((photo) => photo.name);

  const sendPhotosPromises = [];

  photoNames.forEach(async (photoName) => {
    const photoFile = fs.readFileSync(`./photos/${photoName}`);

    const formData = new FormData();

    formData.append("photo", photoFile, photoName);
    formData.append("chat_id", telegramChatIdToNotify);
    formData.append("disable_web_page_preview", "true");

    sendPhotosPromises.push(
      telegramApi.post(`/bot${telegramBotToken}/sendPhoto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    );
  });

  return Promise.all(sendPhotosPromises);
};

export default sendPhotos;
