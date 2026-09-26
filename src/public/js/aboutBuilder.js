import { aboutPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class AboutBuilder {
    static #navName = "About"

    static get name() {
        return this.#navName;
    }

    /* Final Page Assembly */

    // Assembles the full aboutPage by building and appending each section
    static buildAboutPage() {
        const aboutPage = ElementBuilder.createElement({ elementTag: "main", id: "about-page" });
        const ourStorySection = ElementBuilder.createElement({ elementTag: "section", id: "our-story-section" });
        const ourValuesSection = ElementBuilder.createElement({ elementTag: "section", id: "our-values-section" });
        const theTeamSection = ElementBuilder.createElement({ elementTag: "section", id: "the-team-section" });
        const quoteSection = ElementBuilder.createElement({ elementTag: "section", id: "quote-section" });

        aboutPage.append(
            ourStorySection,
            ourValuesSection,
            theTeamSection,
            quoteSection
        )

        return aboutPage;
    }
}

export default AboutBuilder;