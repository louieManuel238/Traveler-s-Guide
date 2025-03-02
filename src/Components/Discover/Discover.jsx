import React from 'react';
import DiscoverCard from '../DiscoverCards/DiscoverCards';

import './Discover.scss';

const Discover = () => {
    const discoverItems = [
        { id: 1, title: 'Discover Item 1', description: 'Description for item 1' },
        { id: 2, title: 'Discover Item 2', description: 'Description for item 2' },
        { id: 3, title: 'Discover Item 3', description: 'Description for item 3' },
        // Add more items as needed
    ];

    return (
        <section className="discover-container" >
            <h2 id='discover'>Top Destinations</h2>
            {discoverItems.map(item => (
                <DiscoverCard key={item.id} title={item.title} description={item.description} />
            ))}
        </section>
    );
};

export default Discover;