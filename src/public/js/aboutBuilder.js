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

    // Builders for Our Values Section
    static #buildValueItem(icon, title, description) {
        const valueItem = ElementBuilder.createElement({ elementTag: "div", classNames: [ "value-item" ] });
        const valueIcon = ElementBuilder.createElement({ elementTag: "p", classNames: [ "value-icon" ], textContent: icon });
        const valueTitle = ElementBuilder.createElement({ elementTag: "p", classNames: [ "value-title" ], textContent: title });
        const valueDescription = ElementBuilder.createElement({ elementTag: "p", classNames: [ "value-description" ], textContent: description });

        valueItem.append( valueIcon, valueTitle, valueDescription );
        return valueItem;
    }

    static #buildValueItems() {
        const valueItems = [];
        for (const item of aboutPageContent.ourValues) {
            const valueItem = this.#buildValueItem( item.icon, item.title, item.description );
            valueItems.push(valueItem);
        }
        return valueItems;
    }

    static #buildOurValuesSection() {
        const ourValuesSection = ElementBuilder.createElement({ elementTag: "section", id: "our-values-section" });
        ourValuesSection.append(...this.#buildValueItems());
        return ourValuesSection;
    }

    // Builders for The Team Section
    static #buildTeamHeader() {
        const teamHeader = ElementBuilder.createElement({ elementTag: "div", id: "team-header" });
        const teamSubtitle = ElementBuilder.createElement({ elementTag: "p", id: "team-subtitle", textContent: aboutPageContent.theTeam.teamHeader.subtitle });
        const teamTitle = ElementBuilder.createElement({ elementTag: "p", id: "team-title", textContent: aboutPageContent.theTeam.teamHeader.title });

        teamHeader.append( teamSubtitle, teamTitle );
        return teamHeader;
    }

    static #buildMemberDetails(name, role) {
        const memberDetails = ElementBuilder.createElement({ elementTag: "div", classNames: [ "member-details" ] });
        const memberName = ElementBuilder.createElement({ elementTag: "p", classNames: [ "member-name" ], textContent: name });
        const memberRole = ElementBuilder.createElement({ elementTag: "p", classNames: [ "member-role" ], textContent: role });

        memberDetails.append( memberName, memberRole );
        return memberDetails;
    }

    static #buildMember(photo, name, role) {
        const teamMember = ElementBuilder.createElement({ elementTag: "div", classNames: [ "team-member" ] });
        const memberPhoto = ElementBuilder.createElement({ elementTag: "p", classNames: [ "member-photo" ], textContent: photo });
        const memberDetails = this.#buildMemberDetails( name, role );

        teamMember.append( memberPhoto, memberDetails );
        return teamMember;
    }

    static #buildAllMembers() {
        const members = []
        for (const memberDetails of aboutPageContent.theTeam.teamMembers) {
            const member = this.#buildMember( memberDetails.photo, memberDetails.name, memberDetails.role );
            members.push(member)
        }
        return members;
    };

    static #buildTeamMembers() {
        const teamMembers = ElementBuilder.createElement({ elementTag: "div", id: "team-members" });
        teamMembers.append(...this.#buildAllMembers());
        return teamMembers;
    }

    static #buildTheTeamSection() {
        const theTeamSection = ElementBuilder.createElement({ elementTag: "section", id: "the-team-section" });
        const teamHeader = this.#buildTeamHeader();
        const teamMembers = this.#buildTeamMembers();

        theTeamSection.append( teamHeader, teamMembers );
        return theTeamSection;
    }

    /* Final Page Assembly */

    // Assembles the full aboutPage by building and appending each section
    static buildAboutPage() {
        const aboutPage = ElementBuilder.createElement({ elementTag: "main", id: "about-page" });
        const ourStorySection = this.#buildOurStorySection();
        const ourValuesSection = this.#buildOurValuesSection();
        const theTeamSection = this.#buildTheTeamSection();
        // const quoteSection = ElementBuilder.createElement({ elementTag: "section", id: "quote-section" });

        aboutPage.append(
            ourStorySection,
            ourValuesSection,
            theTeamSection,
            // quoteSection
        )

        return aboutPage;
    }
}

export default AboutBuilder;