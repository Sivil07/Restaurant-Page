import { contactPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class ContactBuilder {
    static #navName = "Contact"

    static get name() {
        return this.#navName;
    }

    /* Final Page Assembly */

    // Assembles the full contactPage by building and appending each section

    static buildContactPage() {
        const contactPage = ElementBuilder.createElement({ elementTag: "main", id: "main-page" });
        const contactForm = ElementBuilder.createElement({ elementTag: "form", id: "contact-form" });
        const visitPanel = ElementBuilder.createElement({ elementTag: "section", id: "visit-panel" });

        contactPage.append( 
            contactForm, 
            visitPanel
         )

        return contactPage;
    }

}

export default ContactBuilder;