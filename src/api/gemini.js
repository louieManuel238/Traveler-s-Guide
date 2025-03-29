import axios from "axios";

class GeminiAI{
    constructor(){
    }
    async GenerateNewResponse(prompt){
        const url = `https://travelers-guide-backend.azurewebsites.net/api/gemini/itinerary`;
        try{
            const response = await axios.post(url, {"message":prompt});
            return response.data;
        }catch(error){
            console.error('Error fetching itinerary:', error);
            throw error;
        }
        
    }
}




export default GeminiAI;