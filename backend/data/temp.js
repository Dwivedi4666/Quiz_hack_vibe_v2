
https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e131bf2860d6e3905691/attempt


{"watchItemId":"696facf2840876e0c31c881c"}

https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e12fbf2860d6e39053c2/attempt

https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e12fbf2860d6e39053c2/attempt


step-1
------------------
quizid
GET
https://vibe-backend-production-239934307367.asia-south1.run.app/api/courses/6968e12cbf2860d6e39051ae/versions/6968e12cbf2860d6e39051af/item/6968e12fbf2860d6e39053c2

step - 2
---------
attempt
POST
https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e12fbf2860d6e39053c2/attempt

response 

attemptId

----------
step -3
--------
items
GET
https://vibe-backend-production-239934307367.asia-south1.run.app/api/courses/versions/6968e12cbf2860d6e39051af/modules/6968e12ebf2860d6e39052c2/sections/6968e131bf2860d6e39055e1/items

step -4
--------
handleSendStartItem() in quiz.tsx
Start
POST
https://vibe-backend-production-239934307367.asia-south1.run.app/api/users/progress/courses/6968e12cbf2860d6e39051ae/versions/6968e12cbf2860d6e39051af/start
onst result = api.useMutation("post", "/users/progress/courses/{courseId}/versions/{courseVersionId}/start");

payload
  {
    "itemId":"6968e12fbf2860d6e39053c2","moduleId":"6968e12ebf2860d6e39052c2","sectionId":"6968e131bf2860d6e39055e1"
  }

response
  {"watchItemId":"696fc32d576ae344a2c46961"}

step -5
--------------------
save
POST
https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/6968e12fbf2860d6e39053c2/attempt/696fc32dde952c12cfcf2ee2/save

submit
https://vibe-backend-production-239934307367.asia-south1.run.app/api/quizzes/{itemId}/attempt/{attemptId}}


payload
{
  "answers":[
    {
      "questionId":"6968e12ebf2860d6e3905337","questionType":"SELECT_ONE_IN_LOT",
      "answer":{"lotItemId":"693d367ad1ce1661284049dc"}
    }
  ]
}
response 
{"result":"INCORRECT","explanation":"No explanation provided"}

step - 6

stop
https://vibe-backend-production-239934307367.asia-south1.run.app/api/users/progress/courses/6968e12cbf2860d6e39051ae/versions/6968e12cbf2860d6e39051af/stop

payload 
  {"watchItemId":"696fc32d576ae344a2c46961","itemId":"6968e12fbf2860d6e39053c2","moduleId":"6968e12ebf2860d6e39052c2","sectionId":"6968e131bf2860d6e39055e1","attemptId":"696fc32dde952c12cfcf2ee2","isSkipped":false}