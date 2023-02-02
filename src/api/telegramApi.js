import axios from "axios";

const telegramApiUrl = process.env.TELEGRAM_API_URL;

const telegramApi = axios.create({
  baseURL: telegramApiUrl,
});

export default telegramApi;
