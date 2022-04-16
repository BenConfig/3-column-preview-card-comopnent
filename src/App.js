import React from 'react';
import Card from './Card';
import data from './data'
import './index.css';

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
            />
        )
    })

    return (
        <>
            <h1 className="sr-only">3-column Preview Card Component</h1>
            {cards}
        </>
    )
}