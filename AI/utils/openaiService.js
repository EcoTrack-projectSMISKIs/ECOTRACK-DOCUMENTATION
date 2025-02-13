import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export const generateEnergyRecommendation = async (usageData) => {
  const prompt = `My ${usageData.device} runs ${usageData.daily_usage} hours daily, consuming ${usageData.avg_power}W. Peak usage: ${usageData.peak_hours}. How can I optimize its energy use?`;

  const response = await openai.createChatCompletion({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "You are an energy-saving assistant." },
      { role: "user", content: prompt }
    ]
  });

  return response.data.choices[0].message.content;
};
