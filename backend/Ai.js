const fs = require("fs");

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Apni API Key yahan dalein
const genAI = new GoogleGenerativeAI("AIzaSyDEF8iOiZb5fXxf4Djlbrndd-d1G_sJKP4");

module.exports = async function (question) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const t = fs.readFileSync("transcript.txt", "utf-8");

  const lectureData = {
    lecture_transcript: t,
    questions: question,
  };

  const prompt = `Given Below is  JSON data of  lecture transcript and a questin. Based on the transcript give the correct answer.There are multiple questions , just print the correct answer , dont print answer id , give question and its answers, there are multiple question give answer of all ot them ${JSON.stringify(lectureData)}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("--- Answer from Gemini ---");
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
};
