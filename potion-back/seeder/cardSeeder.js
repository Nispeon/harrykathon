import Card from "../models/card.js";

const seed = async () => {
    await Card.destroy({truncate: true});

    const cards = [
        {
            slug: "the-fool",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-magician",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-high-priestess",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-empress",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-emperor",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-hierophant",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-lovers",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-chariot",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "strength",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "the-hermit",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "wheel-of-fortune",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        },
        {
            slug: "justice",
            image: "https://i.imgur.com/9ZQ9Z9u.jpg",
        }
}
