
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getCatFact = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "고양이에 대한 학술적이거나 흥미로운 사실 한 가지만 말해줘. (한국어로, 전문적이고 신뢰감 있는 문체로)",
      config: {
        systemInstruction: "당신은 고양이 행동학 및 생물학 전문가입니다. 간결하고 지적인 톤으로 답변하세요.",
        temperature: 0.7,
      }
    });
    return response.text || "고양이의 가청 주파수는 최대 64kHz에 달하며, 이는 인간이나 개보다 훨씬 뛰어난 수준입니다.";
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    return "고양이는 수천 년간 인간과 공존하며 독특한 소통 체계를 발전시켜 왔습니다.";
  }
};

export const chatWithMeowBot = async (history: { role: string; parts: { text: string }[] }[], message: string) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "당신은 '고양이 연구소(Feline Studies Lab)'의 AI 연구 어시스턴트입니다. 정중하고 전문적인 어조를 유지하세요. 고양이에 대한 과학적 정보나 돌봄 지식을 제공합니다. 가끔 고양이의 관점을 빌려 지적으로 답변해도 좋지만, 지나친 애교는 지양하세요.",
      }
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "시스템 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주십시오.";
  }
};
