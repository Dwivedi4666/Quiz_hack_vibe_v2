const ques = [
  {
    questionId: "6968e130bf2860d6e390554d",
    question: "What are the possible values in the StudentStatus enum?",
    options: [
      {
        id: "693cf7b8e827c654414acfa1",
        text: "Active-Graduated",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acf9e",
        text: "Active-Inactive-Suspended",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acfa0",
        text: "New-Current-Alumni",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acf9f",
        text: "Pending-Active-Graduated",
        explaination: "No explanation provided",
      },
    ],
  },
  {
    questionId: "6968e130bf2860d6e390554e",
    question: "Student | null is a ___?",
    options: [
      {
        id: "693cf7b8e827c654414acfa1",
        text: "Active-Graduated",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acf9e",
        text: "Active-Inactive-Suspended",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acfa0",
        text: "New-Current-Alumni",
        explaination: "No explanation provided",
      },
      {
        id: "693cf7b8e827c654414acf9f",
        text: "Pending-Active-Graduated",
        explaination: "No explanation provided",
      },
    ],
  },
];

const finalResults = [
  ["CORRECT", "INCORRECT", "INCORRECT", "INCORRECT"],
  ["INCORRECT", "INCORRECT", "CORRECT", "INCORRECT"],
];

for (let i = 0; i < ques.length; i++) {
  const { options } = ques[i];
  const tempObj = options.map((op, j) => ({
    ...op,
    answer: finalResults[0][j],
  }));
}
