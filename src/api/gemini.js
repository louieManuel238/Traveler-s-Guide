import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import schema from './schema.json';

async function GenerateResponse(){
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENERATIVE_LANGUAGE_API_KEY);

   

    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash" ,
        generationConfig:{
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    
    });

    const prompt = "Create a travel itinerary for 7 days to Amsterdam focus on adventure, food, include top attractions.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
} 

export default GenerateResponse;