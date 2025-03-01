import axios from "axios";
class Pexels{
    constructor(){
        this.API_KEY = import.meta.env.VITE_PIXELS_API_KEY;
        this.BASE_URL = 'https://api.pexels.com/v1/';
    }
    async getImageByLocation(query) {
        try{
            const response = await axios.get(`https://api.pexels.com/v1/search/?query=${query}&per_page=10`, {headers: {Authorization: this.API_KEY}});
            return response.data.photos;
        }catch(error){
            console.error('Error fetching images:', error);
            return [];
        }
    }
    async getPhotoById(id){
        try{
            const response = await axios.get(`${this.BASE_URL}/photos/${id}`, {headers: {Authorization: this.API_KEY}});
            return response.data;
        }catch(error){
            console.error('Error fetching images:', error);
            return {};
        }
    }
}
export default Pexels;