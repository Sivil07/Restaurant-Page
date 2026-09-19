import heroImage from "../../assets/img/signature-meal.jpg"
import aboutImage from "../../assets/img/restaurant-interior.jpg";
import favoriteOne from "../../assets/img/favorite-one.jpg";
import favoriteTwo from "../../assets/img/favorite-two.jpg";
import favoriteThree from "../../assets/img/favorite-three.jpg";
import counterDisplay from "../../assets/img/counter-display.jpg";


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
        aboutLink : "Read our story ➜",
        imageContents: { src: aboutImage, alt: "Restaurant Interior" }
    },
    menuPreview: {
        subheading: "Our Menu",
        heading: "Fan Favorites",
        menuItems: [
            {
                title: "The Rustic Oak<span>$13</span>",
                description: "Cured prosciutto, provolone, fresh tomato, and leafy greens on artisan country bread.",
                src: favoriteOne,
                alt: "The Rustic Oak",
            },
            {
                title: "Garden Press<span>$11</span>",
                description: "Roasted potatoes, mixed seasonal vegetables, and grilled sausages served warm and hearty.",
                src: favoriteTwo,
                alt: "Garden Press",
            },
            {
                title: "Fig & Brie Toast<span>$12</span>",
                description: "Creamy brie on toasted artisan bread topped with fresh figs, walnuts, mint, and a drizzle of honey.",
                src: favoriteThree,
                alt: "Fig & Brie Toast",
            }
        ]
    },
    orderAhead: {
        subheading: "Skip the line",
        heading: "Order ahead,<br>pick up fresh",
        action: "Order Online",
        src: counterDisplay,
        alt: "Counter Display"
    },
    siteInfo: [
        {
            title: "The Oaken Label", textArray: ["Handcrafted sandwiches, fresh bread daily, made with ingredients you can pronounce."],
        },
        {
            title: "Hours", textArray: ["Mon - Fri: 8am - 7pm", "Sat - Sun: 9am - 5pm"]
        },
        {
            title: "Contact", textArray: ["47 Willow Bend Road, Brookhaven", "(000) 123-9999", "contact@oakandharbor.com"]
        }
    ]
};

const menuPageContent = {
    menuHeader: {
        subheading: "Our Menu",
        heading: "Build Your Order"
    },
    menuOptions: {
        options: [ 
            { textName: "Signature Classics", dataValue: "classics"}, 
            { textName: "Hot Grilled", dataValue: "grilled"}, 
            { textName: "Cold Crafted", dataValue: "cold"}, 
            { textName: "Sides", dataValue: "sides"}, 
            { textName: "Drinks", dataValue: "drinks"} 
        ],
        dataName: "option"
    },
    menuCards: {
        classics: [
            {
                icon: "🥪", label: "Hearthside Melt", title: "The Hearthside Melt<span>$12</span>", description: "Roasted turkey, sharp cheddar, and garlic aioli on toasted sourdough."
            },
            {
                icon: "🥪", label: "Maplewood Stack", title: "The Maplewood Stack<span>$11</span>", description: "Smoked ham, Swiss, and caramelized onion on farmhouse bread."
            },
            {
                icon: "🥪", label: "Briar Patch", title: "Briar Patch<span>$12</span>", description: "Egg salad, paprika, and greens on toasted brioche."
            },
            {
                icon: "🥪", label: "Country Lane", title: "The Country Lane<span>$13</span>", description: "Roast beef, provolone, and herb mayo on a crusty loaf."
            }
        ],
        grilled: [
            {
                icon: "🥪", label: "Ashwood Sizzler", title: "Ashwood Sizzler<span>$11</span>", description: "Pastrami, mozzarella, and spicy mustard on toasted rye."
            },
            {
                icon: "🥪", label: "Embercrest Grill", title: "Embercrest Grill<span>$15</span>", description: "Beef, caramelized onion, and provolone on a toasted baguette."
            },
            {
                icon: "🥪", label: "Flamebrook Crunch", title: "Flamebrook Crunch<span>$11</span>", description: "Chicken, crispy bacon, and chipotle ranch on toasted wheat."
            },
            {
                icon: "🥪", label: "Charstone Melt", title: "Charstone Melt<span>$11</span>", description: "Turkey, smoked gouda, and herb aioli on grilled sourdough."
            }
        ],
        coldPress: [
            {
                icon: "🥪", label: "Polar Vine", title: "Polar Vine<span>$12</span>", description: "Marinated peppers, feta, olives, and chilled oregano dressing on rustic wheat."
            },
            {
                icon: "🥪", label: "Alpine Breeze", title: "The Alpine Breeze<span>$16</span>", description: "Smoked salmon, capers, cucumber ribbons, and herb cream on chilled rye."
            },
            {
                icon: "🥪", label: "Cool Creek", title: "Cool Creek<span>$9</span>", description: "Roasted chicken, lemon herb vinaigrette, tomato, and arugula on cold ciabatta."
            },
            {
                icon: "🥪", label: "Glacier Club", title: "The Glacier Club<span>$14</span>", description: "Turkey, chilled bacon, iceberg crunch, and citrus mayo on country white."
            }
        ]
    }
}

export {
    landingPageContent,
    menuPageContent
};