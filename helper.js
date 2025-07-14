import axios from "axios";

async function callChatGPT(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const s = "너는 지금부터 나랑 디미고 시뮬레이터를 하는거야 너가 나한테 적절한 상황과 선택지를 제시하면 내가 선택하고 그러면 내 선택에 따른 결과를 행복, 공부, 전공, 운동 각 지수를 적절하게 올리거나 내려줘 그걸 반복하다가 특정 지수가 300에 도달하면 반복을 멈추고 결말을 제시해줘\n출력 틀은: \n몇일차 - 타이틀\n<상황제시>\n선택지\n1. \n2.\n3.\n선택지의 예시는 \"입학을 했더니 옆자리의 예쁜 여자애가 나한테 인사한다! 대답은?\"\n이런식으로 하고 행복 지수가 오르는 거야 그리고 결말의 예시는 만약에 행복지수가 최대로 되고 공부가 낮으면 지방대여도 행복해 살짝이런식\n그리고 처음 시작할 때는 이름/성별/학과 를 입력해서 캐릭터를 생성하고 시작하는걸로하자"
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {role: "system", content: s},
      {role: "user", content: prompt},
    ],
  };

  try {
    const response = await axios.post(url, data, { headers });
    const result = response.data.choices[0].message.content;
    return result;
  } catch (error) {
    console.error(
      "Error calling ChatGPT API:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

export default callChatGPT;
