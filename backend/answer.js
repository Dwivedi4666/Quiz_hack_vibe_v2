module.exports = async function (questionId, answerId, token) {
  //6968e135bf2860d6e3905a2a/attempt/697288b792124fb9a2d05eaf
  const itemId = "6968e135bf2860d6e3905a2a";
  const attempt = await fetch(
    "https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e135bf2860d6e3905a2a/attempt",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en-IN;q=0.9,en;q=0.8,hi;q=0.7",
        authorization: token,
        "cache-control": "no-cache",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-fetch-storage-access": "active",
        Referer: "https://vibe.vicharanashala.ai/",
      },
      body: null,
      method: "POST",
    },
  );
  const dataAttempt = await attempt.json();
  const attemptId = dataAttempt.attemptId;
  const response = await fetch(
    `https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/${itemId}/attempt/${attemptId}/save`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en-IN;q=0.9,en;q=0.8,hi;q=0.7",
        authorization: token,
        "cache-control": "no-cache",
        "content-type": "application/json",
        pragma: "no-cache",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-fetch-storage-access": "active",
        Referer: "https://vibe.vicharanashala.ai/",
      },
      body: JSON.stringify({
        answers: [
          {
            questionId: questionId,
            questionType: "SELECT_ONE_IN_LOT",
            answer: {
              lotItemId: answerId,
            },
          },
        ],
      }),
      method: "POST",
    },
  );

  const data = await response.json();
  return data.result;
};
