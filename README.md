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
- **Backend**: Node.js with Express.js for server-side logic and API management.
- **Database**: MongoDB for storing user data, travel information, and itineraries.
- **Libraries**: Axios for API requests, Framer Motion

### APIs
- **Gemini AI**: For generating the travel itenerary
- **Google Places API**: For retrieving information about attractions, restaurants, and other points of interest.
- **Google Maps API**: For displaying a map for the user
- **Pixels API**: To generate image assets

### Sitemap

- **Home Page**: Introduction to the app and featured destinations.
- *Search Page**: Search tool for finding destinations and accommodations.
- **Destination Page**: Detailed information about a selected destination.
- **Itinerary Page**: Tool for creating and managing travel itineraries.
- **Profile Page**: User account management and saved *trips.

### Mockups

Visuals of the app's screens will be provided using Figma, showcasing the layout and design of key pages such as the home page, search page, and itinerary planner.

### Data

The app will store data on destinations, user profiles, itineraries, and accommodation bookings. Relationships between data points include user profiles linked to their saved itineraries and bookings.

### Endpoints

- **GET /destinations**: Retrieve a list of destinations.
- **POST /itineraries**: Create a new itinerary.
- **GET /itineraries/:id**: Retrieve a specific itinerary.
- **PUT /itineraries/:id**: Update an existing itinerary.
- **DELETE /itineraries/:id**: Delete an itinerary.

## Roadmap

The project will be scoped as a sprint with the following tasks:
- Week 1-2: Research and planning, including tech stack selection and API research.
- Week 3-4: Frontend development, focusing on the home page and search functionality.
- Week 5-6: Backend development, including API integration and database setup.
- Week 7-8: Itinerary planner and user profile features.
- Week 9-10: Testing, debugging, and final adjustments.

---

## Future Implementations

- **Social Sharing**: Allow users to share their itineraries and travel experiences on social media.
- **User Reviews**: Enable users to leave reviews and ratings for destinations and accommodations.
- **Enhanced Personalization**: Use machine learning to provide personalized travel recommendations based on user preferences and past behavior.
- **Integration with Travel Services**: Partner with airlines, car rental services, and local tour operators to offer comprehensive travel packages.


What is your app? Give a brief description in a couple of sentences.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

### APIs

List any external sources of data that will be used in your app.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

