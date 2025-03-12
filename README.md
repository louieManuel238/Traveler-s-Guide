# Project Title
Traveler's Guide
## Overview

Traveler's Guide is a comprehensive application designed to assist travelers in planning and managing their trips efficiently. The app generates an itenerary based on users perference and provides essential information about destinations, including attractions, accommodations, and local tips, ensuring a seamless travel experience.

### Problem Space

With the rise of Gen AI, planning has been so much easier, yet a recent study suggests that although there has been a rise in travel amongs GenZ and millenials, the demographic are now shifting from DIY to travel agencies. Although there are a lot of perks booking a package with an agency, The extra costs could be out of the budget for most as well as losing some flexibility in the itenerary.

Generating an itenerary using GenAI like ChatGPT could still be a lot of work when checking for the places suggested, Traveler's Guide addresses these pain points for DIY travelers by offering a centralized platform to plan your own trip using Maps and GenAI

### User Profile

The primary users of Traveler's Guide are individuals or groups planning trips, ranging from casual tourists to seasoned travelers. The app is designed to be user-friendly, catering to users with varying levels of tech-savviness. 

### Features

- **Itinerary Planner**: A feature to generate travel itineraries based on user preference, including day-by-day plans and activity suggestions.
- **Map View**: A feature to mark the destinations in a map, including displaying information of the destination

## Implementation

### Tech Stack

- **Frontend**: React.js, , SCSS
- **Backend**: Node.js with Express.js for server-side logic and API management. (Optional)
- **Libraries**: Axios for API requests, Framer Motion, Material UI
- **Database**: (database is optional) I Will be using Local storage to save itenerary

### APIs
- **Gemini AI**: For generating the travel itenerary
- **Google Places API**: For retrieving information about attractions, restaurants, and other points of interest.
- **Google Maps API**: For displaying a map for the user
- **Pixels API**: To generate image assets

### Sitemap

**SINGLE PAGE APPLICATION**
- **Header**: Logo and initial view when the app is opened
- **Search Section**: Search form to specify the parameters of itineraries (Place/Location, start and end date, preferences).
- **Discover Section**: A section with pre-determined / top travel destinations (optional)
- **Itinerary Section**: List of generated activities for each day in the itenerary
- **Map Section**: Map with markers for each place in the itenerary

### Mockups

![1](https://github.com/user-attachments/assets/5fa24940-6c18-4a4a-81c3-243830c311ac)
![2](https://github.com/user-attachments/assets/24257313-d07f-49a7-ba5b-60c0fc6e231d)
![3](https://github.com/user-attachments/assets/01d4e998-022e-42cd-b8ae-d860805d0a0e)
![4](https://github.com/user-attachments/assets/8fa73330-aa89-40cb-9b38-e58a73f1b643)
![5](https://github.com/user-attachments/assets/d1f9e18b-df43-4b52-88e4-70c58bfdfb36)

### Data

Generated itenerary

### Endpoints (If Backend is implemented)

- **GET /destinations**: Retrieve a list of destinations.
- **POST /itineraries**: Create a new itinerary using posted prompt.

## Roadmap

The project will be scoped as a sprint with the following tasks:
- Week 1: Research and planning, including tech stack selection and API research, search functionality, and Itenerary Generation.
- Week 2: Frontend development, continue search functionality, and Itenerary Generation; Map markers, places information, UI/UX design.

---

## Future Implementations

- **Login Feature**: Allow users to login, and have their itineraries saved
- **Backend**
- **Database Implementation**:Having a database to save information of user and iteneraries
- **Integration with Booking.com API**: Booking API to add function of searching and booking accomodations

