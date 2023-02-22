import Card from "../models/card.js";

const seed = async () => {
    await Card.destroy({truncate: true});

    const cards = [
        {
            slug: "voldermort",
            image: "tile000.png",
        },
        {
            slug: "drago",
            image: "tile001.png",
        },
        {
            slug: "snape",
            image: "tile002.png",
        },
        {
            slug: "mcgonagall",
            image: "tile003.png",
        },
        {
            slug: "narcissa",
            image: "tile004.png",
        },
        {
            slug: "george",
            image: "tile005.png",
        },
        {
            slug: "dean",
            image: "tile006.png",
        },
        {
            slug: "luna",
            image: "tile007.png",
        },
        {
            slug: "cedric",
            image: "tile008.png",
        },
        {
            slug: "viktor",
            image: "tile009.png",
        },
        {
            slug: "foloeil",
            image: "tile010.png",
        },
        {
            slug: "molly",
            image: "tile011.png",
        },
        {
            slug: "fred",
            image: "tile012.png",
        },
        {
            slug: "rusard",
            image: "tile013.png",
        },
        {
            slug: "fleur",
            image: "tile014.png",
        },
        {
            slug: "dudley",
            image: "tile015.png",
        },
        {
            slug: "harry",
            image: "tile016.png",
        },
        {
            slug: "quirrel",
            image: "tile017.png",
        },
    ];

    await Card.bulkCreate(cards);
};

export default seed;