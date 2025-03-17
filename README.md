# Traveler's Guide  

## Overview  

**Traveler's Guide** is a comprehensive application designed to assist travelers in planning and managing their trips efficiently. The app generates an itinerary based on users' preferences and provides essential information about destinations, including attractions, accommodations, and local tips, ensuring a seamless travel experience.  

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

### Backend (Optional)  
- Node.js with Express.js for server-side logic and API management  

### Libraries  
- Axios for API requests  

### Database (Optional)  
- Using **Local Storage** to save itineraries  

## APIs  

🔹 **Gemini AI** → Generates travel itineraries  
🔹 **Google Places API** → Retrieves information about attractions, restaurants, and points of interest  
🔹 **Google Maps API** → Displays map and markers for selected locations  
🔹 **Pexels API** → Provides image assets  

## Sitemap  

📌 **Single Page Application (SPA)**  

- **Header**: Logo and main view when the app is opened  
- **Search Section**: Search form to specify itinerary parameters (Location, Start & End Dates, Preferences)  
- **Discover Section**: A section featuring pre-determined or top travel destinations (Optional)  
- **Itinerary Section**: Displays a list of generated activities for each day in the itinerary  
- **Map Section**: Displays a map with markers for each location in the itinerary  

## Mockups  

![Mockup 1](https://github.com/user-attachments/assets/5fa24940-6c18-4a4a-81c3-243830c311ac)  
![Mockup 2](https://github.com/user-attachments/assets/24257313-d07f-49a7-ba5b-60c0fc6e231d)  
![Mockup 3](https://github.com/user-attachments/assets/01d4e998-022e-42cd-b8ae-d860805d0a0e)  
![Mockup 4](https://github.com/user-attachments/assets/8fa73330-aa89-40cb-9b38-e58a73f1b643)  
![Mockup 5](https://github.com/user-attachments/assets/d1f9e18b-df43-4b52-88e4-70c58bfdfb36)  

## Data  

- Generated **itinerary** stored in **local storage**  

## API Endpoints (If Backend is Implemented)  

📌 **GET /destinations** → Retrieves a list of destinations  
📌 **POST /itineraries** → Creates a new itinerary based on a user-provided prompt  

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
🔹 **Backend Development** → Implementing a backend for better data management  
🔹 **Database Integration** → Storing user and itinerary information in a database  
🔹 **Integration with Booking.com API** → Enables users to search and book accommodations  

## Installation  

### Prerequisites  
- Node.js installed  
- Git installed  

### Steps to Run Locally  

1. Clone the repository:  
   ```sh
   git clone https://github.com/louiemanuel238/travelers-guide.git
   
