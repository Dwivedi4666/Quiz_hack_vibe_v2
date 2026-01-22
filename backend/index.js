const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const analyzeLecture = require("./Ai.js");
const getAnswer = require("./answer.js");
// import { analyzeLecture } from "./Ai.js";
///////////////////////////////////

const idConvert = (el) => {
  bufferData = el._id.buffer.data;
  const hexString = Buffer.from(bufferData).toString("hex");
  return hexString;
};

const quesConvert = (ques) => {
  const questionTemp = ques.map((el) => {
    const lotItems = el.lotItems.map((item) => {
      return { ...item, _id: idConvert(item) };
    });
    return { ...el, _id: idConvert(el), lotItems };
  });

  const questions = questionTemp.map((q) => {
    const tempObj = Object.assign({
      questionId: q._id,
      question: q.text,
      options: q.lotItems.map((opt) =>
        Object.assign({
          id: opt._id,
          text: opt.text,
          explaination: opt.explaination,
        }),
      ),
    });

    return tempObj;
  });

  return questions;
};
////////////////////////////////

app.use(cors());

app.use(express.json());

app.post("/capture", (req, res) => {
  console.log("---Received Body from /attempt ---");
  const token = req.body.token;
  const questions = req.body.data.questionRenderViews;
  if (!questions) return;
  questions.forEach((q, qi) => {
    console.log(`\nQuestion ${qi + 1}: ${q.text}`);

    q.lotItems.forEach((item, oi) => {
      console.log(`  Option ${oi + 1}: ${item.text}`);
      console.log(`  Explanation: ${item.explaination}`);
      console.log("   ");
    });
  });

  let ques = quesConvert(questions);
  ////////////////////////////
  async function fetchAllAnswers(ques, token) {
    // const finalResults = [];
    // for (const q of ques) {
    //   const result = [];
    //   const { questionId, options } = q;
    //   for (const op of options) {
    //     const d = await getAnswer(questionId, op.id, token);
    //     result.push(d);
    //   }
    //   finalResults.push(result);
    //   console.log(finalResults);
    // }
    const finalResults = await Promise.all(
      ques.map(async (q) => {
        const { questionId, options } = q;

        // Parallelize all option requests for this specific question
        const results = await Promise.all(
          options.map((op) => getAnswer(questionId, op.id, token)),
        );
        return results; // Becomes the result for this question
      }),
    );
    console.log(finalResults);
    // console.log(ques.length);
    // console.log(ques[0]);
    for (let i = 0; i < ques.length; i++) {
      const { options } = ques[i];
      console.log(options);
      const tempObj = options.map((op, j) => ({
        ...op,
        answer: finalResults[i][j],
      }));

      ques[i].options = tempObj;
    }

    ///////////////////////////
    fs.writeFileSync(
      `${__dirname}/data/data.json`,
      JSON.stringify(ques, null, 2),
    );
    console.log("--------------------------------");
    res.status(200).send("Data Captured");
  }
  fetchAllAnswers(ques, token);
});
app.get("/favicon.ico", (req, res) => res.status(204).end());
app.get("/", (req, res) => {
  const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
  const dataObj = JSON.parse(data);

  res.status(200).json(dataObj);
});

app.listen(3000, () => console.log("Listening on Port:3000"));
