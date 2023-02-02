import "dotenv/config";
import sendMessage from "./services/sendMessage.js";
import sendPhotos from "./services/sendPhoto.js";

console.log("🔥🔥🔥 runing 🔥🔥🔥");

run();

async function run() {
  try {
    await sendPhotos();
    await sendMessage("Cartinha para passar");
  } catch (err) {
    console.log(err);
  }
}
