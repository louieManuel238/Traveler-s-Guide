import { GoogleGenerativeAI } from "@google/generative-ai";

async function GenerateResponse(){
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENERATIVE_LANGUAGE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = "Create a travel itinerary for 7 days to Amsterdam focus on adventure, food, include top attractions. return a JSON format with {title,date:[{activity, place, location(lat,lang)}]}";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
} 

export default GenerateResponse;