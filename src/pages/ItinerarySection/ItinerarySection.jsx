import {useState} from 'react';
import Itinerary from '../../Components/Itinerary/Itinerary';
import Map from '../../Components/Maps/Maps';
import './ItinerarySection.scss';
import { Typography, Box } from '@mui/material';

const data1 = {
    "Activities": [
        {
            "activity": [
                {
                    "description": "Arrive in Kyoto, check into hostel. Take a walk around Gion, known for its preserved wooden machiya houses and geishas.",
                    "location": {
                        "lat": 35.003781599999996,
                        "lng": 135.777245
                    },
                    "place": "Gion District"
                },
                {
                    "description": "Enjoy a traditional Japanese dinner at a local restaurant in Gion.",
                    "location": {
                        "lat": 35.0055366,
                        "lng": 135.7751069
                    },
                    "place": "Gion District Restaurant"
                }
            ],
            "day": "2025-03-18T05:36:08.032Z",
            "noteForTheDay": "Arrival and exploration of Gion."
        },
        {
            "activity": [
                {
                    "description": "Visit Fushimi Inari Shrine, famous for its thousands of vibrant red torii gates.",
                    "location": {
                        "lat": 34.9676945,
                        "lng": 135.7791876
                    },
                    "place": "Fushimi Inari Shrine"
                },
                {
                    "description": "Explore Nishiki Market, known as 'Kyoto's Kitchen,' and sample local delicacies.",
                    "location": {
                        "lat": 35.0050258,
                        "lng": 135.764723
                    },
                    "place": "Nishiki Market"
                }
            ],
            "day": "2025-03-19T05:36:08.032Z",
            "noteForTheDay": "Shrines, markets, and local food."
        },
        {
            "activity": [
                {
                    "description": "Visit Kinkaku-ji (Golden Pavilion), a stunning Zen Buddhist temple covered in gold leaf.",
                    "location": {
                        "lat": 35.03937,
                        "lng": 135.7292431
                    },
                    "place": "Kinkaku-ji (Golden Pavilion)"
                },
                {
                    "description": "Explore Ryoan-ji Temple, famous for its enigmatic rock garden.",
                    "location": {
                        "lat": 35.0344943,
                        "lng": 135.71826339999998
                    },
                    "place": "Ryoan-ji Temple"
                }
            ],
            "day": "2025-03-20T05:36:08.032Z",
            "noteForTheDay": "Golden temples and rock gardens."
        },
        {
            "activity": [
                {
                    "description": "Take a day trip to Arashiyama Bamboo Grove, a magical and enchanting path through towering bamboo stalks.",
                    "location": {
                        "lat": 35.0168187,
                        "lng": 135.67130129999998
                    },
                    "place": "Arashiyama Bamboo Grove"
                },
                {
                    "description": "Visit Tenryu-ji Temple in Arashiyama, known for its beautiful Zen garden.",
                    "location": {
                        "lat": 35.0158379,
                        "lng": 135.6737654
                    },
                    "place": "Tenryu-ji Temple"
                }
            ],
            "day": "2025-03-21T05:36:08.032Z",
            "noteForTheDay": "Bamboo forest and Zen gardens."
        },
        {
            "activity": [
                {
                    "description": "Visit Kiyomizu-dera Temple, known for its wooden stage offering stunning views of the city.",
                    "location": {
                        "lat": 34.9946662,
                        "lng": 135.784661
                    },
                    "place": "Kiyomizu-dera Temple"
                },
                {
                    "description": "Stroll through Higashiyama District, with its traditional shops and tea houses.",
                    "location": {
                        "lat": 34.9926102,
                        "lng": 135.7748632
                    },
                    "place": "Higashiyama District"
                }
            ],
            "day": "2025-03-22T05:36:08.032Z",
            "noteForTheDay": "Scenic views and traditional crafts."
        },
        {
            "activity": [
                {
                    "description": "Relax and enjoy the peaceful atmosphere of the Kyoto Imperial Palace (Kyoto Gosho).",
                    "location": {
                        "lat": 35.0240977,
                        "lng": 135.76214360000003
                    },
                    "place": "Kyoto Imperial Palace"
                },
                {
                    "description": "Wander through the serene Shisen-do Temple, known for its meticulously maintained gardens.",
                    "location": {
                        "lat": 35.043738499999996,
                        "lng": 135.79619839999998
                    },
                    "place": "Shisen-do Temple"
                }
            ],
            "day": "2025-03-23T05:36:08.032Z",
            "noteForTheDay": "Imperial Gardens and serene temples"
        },
        {
            "activity": [
                {
                    "description": "Optional activity: Attend a traditional tea ceremony to experience Japanese culture.",
                    "location": {
                        "lat": 34.997696399999995,
                        "lng": 135.7740186
                    },
                    "place": "Tea Ceremony House"
                },
                {
                    "description": "Enjoy a final stroll through your favorite Kyoto neighborhood, picking up souvenirs.",
                    "location": {
                        "lat": 35.011564,
                        "lng": 135.7681489
                    },
                    "place": "Favorite Kyoto Neighborhood"
                }
            ],
            "day": "2025-03-24T05:36:08.032Z",
            "noteForTheDay": "Final exploration and souvenirs."
        },
        {
            "activity": [
                {
                    "description": "Depart from Kyoto.",
                    "location": {
                        "lat": 34.985849,
                        "lng": 135.7587667
                    },
                    "place": "Kyoto Station"
                }
            ],
            "day": "2025-03-25T05:36:08.032Z",
            "noteForTheDay": "Departure day."
        }
    ],
    "Title": "Kyoto Solo Travel Itinerary",
    "NoteForItinerary": "This itinerary focuses on relaxation, culture, and food, suitable for a solo traveler on a budget, staying in hostels, with a balanced pace. Transportation is flexible. No dietary restrictions considered."
}

const ItinerarySection = ({data}) => {
    const [filteredActivityByDay,setFilteredActivityByDay] = useState([]);
    console.log(filteredActivityByDay)
    return (
        <div className='itinerary-map'>
            {data && Object.keys(data).length !== 0 &&
             <Box className='itinerary-panel__header'>
                <Typography variant="h2" gutterBottom className='itinerary-panel__main-header'>{data.Title}</Typography>
                <h3 className='itinerary-panel__sub-header'>{data.NoteForItinerary}</h3>
            </Box>}
           
            {/* {data && Object.keys(data).length !== 0 && <Itinerary data={data} />} */}

            <Map data={data} filteredActivityByDay={filteredActivityByDay}/>
            {data && Object.keys(data).length !== 0 && <Itinerary data={data} setFilteredActivityByDay={setFilteredActivityByDay}/>}
      
        </div>
    );
};

export default ItinerarySection;