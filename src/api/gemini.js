import { GoogleGenerativeAI } from "@google/generative-ai";
import schema from './schema.json';

class GeminiAI{
    constructor(){
        this.API_KEY = import.meta.env.VITE_GOOGLE_GENERATIVE_LANGUAGE_API_KEY;
        this.schema = schema;
    }
    async GenerateResponse(prompt){
        const genAI = new GoogleGenerativeAI(this.API_KEY);
    
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.0-flash" ,
            generationConfig:{
            responseMimeType: "application/json",
            responseSchema: this.schema,
          },
        
        });
        const result = await model.generateContent(prompt);
        return JSON.parse(result.response.text());
    } 
}



export default GeminiAI;