import heroImage from "../../assets/img/signature-meal.jpg"
import aboutImage from "../../assets/img/restaurant-interior.jpg";
import favoriteOne from "../../assets/img/favorite-one.jpg";
import favoriteTwo from "../../assets/img/favorite-two.jpg";
import favoriteThree from "../../assets/img/favorite-three.jpg";

const landingPageContent = {
    hero: {
        subheading: "Handcrafted. Every Day",
        heading: "A sandwich<br>worth the label",
        text: `Fresh-baked bread, honest ingredients, built to order —<br>no 
        shortcuts, no filler. Just a really good sandwich.`,
        action: "Order ahead",
        imageContents: { src: heroImage, alt: "Signature Meal" }
    },
    craftHighlights: [
        { icon: "🍞", title: "Fresh baked bread", description: "Baked in-house each morning, never trucked in."},
        { icon: "🌿", title: "Local Ingredients", description: "Sourced from growers and farms within 50 miles."},
        { icon: "🔪", title: "Made to Order", description: "Every sandwich built fresh when you order it."},
    ],
    aboutUs: {
        subheading: "About us",
        heading: "Welcome to<br>The Oaken Label",
        text: `Started in a small corner kitchen with one recipe and a wood-fired oven,<br>
        The Oaken Label is built on the idea that a sandwich deserves the same care<br>
        as any other meal — good bread, real ingredients, made by hand.`,
        "aboutLink": "Read our story ➜",
        imageContents: { src: aboutImage, alt: "Restaurant Interior" }
    }
};


export {
    landingPageContent
};