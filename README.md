# Traveler's Guide  

## Overview  

**Traveler's Guide** is a comprehensive application designed to assist travellers in planning and managing their trips efficiently. The app generates an itinerary based on users' preferences and provides essential information about destinations, including attractions, accommodations, and local tips, ensuring a seamless travel experience.  

## Problem Space  

With the rise of **Gen AI**, trip planning has become easier. However, a recent study suggests that although travel among **Gen Z** and **Millennials** has increased, many are shifting from **DIY trip planning** to using travel agencies. While booking a package with an agency has its perks, the extra costs may be out of budget for many travelers, and the lack of flexibility in the itinerary can be a drawback.  

Generating an itinerary using **Gen AI tools** like ChatGPT can still be time-consuming, as users need to verify the suggested places. **Traveler's Guide** addresses these pain points for **DIY travelers** by offering a **centralized platform** that integrates **Maps and Gen AI** to streamline trip planning.  

## User Profile  

The primary users of **Traveler's Guide** are individuals or groups planning trips, ranging from casual tourists to seasoned travelers. The app is designed to be **user-friendly**, catering to users with varying levels of tech-savviness.  

## Features  

✅ **Itinerary Planner**: Generates travel itineraries based on user preferences, including day-by-day plans and activity suggestions.  
✅ **Map View**: Displays destinations on a map, including detailed information about each location.  

## Tech Stack  

### Frontend  
- React.js  
- SCSS  
- Material UI  
- Framer Motion  

### Backend 
- Node.js with Express.js for server-side logic and API management  
- Axios for API requests 

## APIs  

🔹 **Gemini AI** → Generates travel itineraries  
🔹 **Google Places API** → Retrieves GeoLocation and information about attractions, restaurants, and points of interest
🔹 **Google Maps API** → Displays map and markers for selected locations  

## Sitemap  

📌 **Single Page Application (SPA)**  

- **Header**: Logo and main view when the app is opened  
- **Search Section**: Search form to specify itinerary parameters (Location, Start & End Dates, Preferences)    
- **Itinerary Section**: Displays a list of generated activities for each day in the itinerary  
- **Map Section**: Displays a map with markers for each location in the itinerary  

## Mockups  

![Screenshot 2025-03-22 140151](https://github.com/user-attachments/assets/57b2f563-199a-4029-98d0-7d0da843b629)
![Screenshot 2025-03-22 135758](https://github.com/user-attachments/assets/e77be692-2acc-430b-b77e-580f7183c410)


![Screenshot 2025-03-22 140248](https://github.com/user-attachments/assets/a8022856-778e-4fb7-9bd4-f0bff2cd816d)
![Screenshot 2025-03-22 140618](https://github.com/user-attachments/assets/3c2c5e5e-13f0-4d7c-b255-f7f0045a3478)


![Screenshot 2025-03-22 140331](https://github.com/user-attachments/assets/d1ec8f2f-e651-4f5a-92a3-6f003698b08c)
![Screenshot 2025-03-22 140631](https://github.com/user-attachments/assets/6c485ff4-7440-43d9-891b-f532f75d65fa)
![Screenshot 2025-03-22 140643](https://github.com/user-attachments/assets/fc076c38-b147-4f36-95c4-9d8d35280d41)

## Data  

- Generated **itinerary** By Gemini and Places API

## API Endpoints (https://github.com/louieManuel238/Traveler-s-Guide-Backend)  
-📌 **GET /api/gemini/itinerary** → Creates a new itinerary based on a user-provided prompt
-📌 **POST /api/gemini/itinerary** → Creates a new itinerary based on a user-provided prompt  

## Roadmap  

🚀 **Week 1**:  
- Research and planning  
- Tech stack selection  
- API research  
- Search functionality  
- Itinerary generation  

🚀 **Week 2**:  
- Frontend development  
- Continue search functionality  
- Itinerary generation  
- Map markers & place information  
- UI/UX design  

---

## Future Implementations  

🔹 **Login Feature** → Users can create accounts and save their itineraries   
🔹 **Database Integration** → Storing user and itinerary information in a database  
🔹 **Integration with Booking.com API** → Enables users to search and book accommodations 
🔹 **Integration with Amadeus API** → Enables users to search Flights and other POI information

## Installation  

### Prerequisites  
- Node.js installed  
- Git installed  

### Steps to Run Locally  

1. Clone the repository:  
   ```sh
   git clone https://github.com/louiemanuel238/travelers-guide.git

2. Get your Places API Key:
      **https://developers.google.com/maps/documentation/javascript/get-api-key

3. Get your Google Gemini Key:
      **https://aistudio.google.com/apikey
   
5. .env:
      PLACES_API_KEY="YOUR API KEY"
      GEMINI_API_KEY="YOUR API KEY"
