import React from 'react';

export default function Card(props) {
    return (
        <section className={`card card--${props.title.toLowerCase()}`}>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
            <img className="card__image" src={require(`./images/${props.image}`)} alt="" aria-hidden="true" />
            <button className="card__button" type="button">Learn More</button>
        </section>
    )
}