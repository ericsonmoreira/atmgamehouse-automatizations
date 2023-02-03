import "dotenv/config";
import sendMessage from "./services/sendMessage.js";
import sendPhotos from "./services/sendPhoto.js";

console.log("🔥🔥🔥 runing 🔥🔥🔥");

run();

async function run() {
  try {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID_TO_NOTIFY, TELEGRAM_API_URL } =
      process.env;

    console.log({
      TELEGRAM_BOT_TOKEN,
      TELEGRAM_CHAT_ID_TO_NOTIFY,
      TELEGRAM_API_URL,
    });

    // await sendPhotos();
    // await sendMessage("Cartinha para passar");
  } catch (err) {
    console.log(err);
  }
}
