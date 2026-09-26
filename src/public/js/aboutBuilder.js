import { aboutPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class AboutBuilder {
    static #navName = "About"

    static get name() {
        return this.#navName;
    }

    /* Build all UI components for About page: ourStory, ourValues, theTeam and quote sections */

    // Builders for Our Story Section
    static #buildAboutTextBlock() {
        const aboutTextBlock = ElementBuilder.createElement({ elementTag: "div", id: "about-text-block" });
        const aboutSubtitle = ElementBuilder.createElement({ elementTag: "p", id: "about-subtitle", textContent: aboutPageContent.ourStory.subtitle });
        const aboutTitle = ElementBuilder.createElement({ elementTag: "p", id: "about-title", textContent: aboutPageContent.ourStory.title });
        const aboutDescription = ElementBuilder.createElement({ elementTag: "p", id: "about-description", textContent: aboutPageContent.ourStory.description });
        const aboutAction = ElementBuilder.createElement({ elementTag: "button", type: "button", id: "about-action", textContent: aboutPageContent.ourStory.action });
        
        aboutTextBlock.append(
            aboutSubtitle,
            aboutTitle,
            aboutDescription,
            aboutAction
        )
        return aboutTextBlock;
    }

    static #buildAboutPhoto() {
        const aboutPhoto = ElementBuilder.createElement({ elementTag: "div", id: "about-photo" });
        const aboutIcon = ElementBuilder.createElement({ elementTag: "p", id: "about-icon", textContent: aboutPageContent.ourStory.icon });
        const aboutLabel = ElementBuilder.createElement({ elementTag: "p", id: "about-label", textContent: aboutPageContent.ourStory.label });

        aboutPhoto.append(aboutIcon, aboutLabel);
        return aboutPhoto;
    }

    static #buildOurStorySection() {
        const ourStorySection = ElementBuilder.createElement({ elementTag: "section", id: "our-story-section" });
        const aboutTextBlock = this.#buildAboutTextBlock();
        const aboutPhoto = this.#buildAboutPhoto();

        ourStorySection.append(aboutTextBlock, aboutPhoto);
        return ourStorySection;
    }

    /* Final Page Assembly */

    // Assembles the full aboutPage by building and appending each section
    static buildAboutPage() {
        const aboutPage = ElementBuilder.createElement({ elementTag: "main", id: "about-page" });
        const ourStorySection = this.#buildOurStorySection();
        // const ourValuesSection = ElementBuilder.createElement({ elementTag: "section", id: "our-values-section" });
        // const theTeamSection = ElementBuilder.createElement({ elementTag: "section", id: "the-team-section" });
        // const quoteSection = ElementBuilder.createElement({ elementTag: "section", id: "quote-section" });

        aboutPage.append(
            ourStorySection,
            // ourValuesSection,
            // theTeamSection,
            // quoteSection
        )

        return aboutPage;
    }
}

export default AboutBuilder;