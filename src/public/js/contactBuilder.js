import { contactPageContent } from "./content.js";
import ElementBuilder from "./elementBuilder.js";

class ContactBuilder {
    static #navName = "Contact"

    static get name() {
        return this.#navName;
    }

    /* Build all UI components for Contact page: contactForm and visitPanel sections */

    /* Builders for Contact Form Section */

    // Form Header Builders
    static #buildFormHeader() {
        const formHeader = ElementBuilder.createElement({ elementTag: "div", id: "form-header" });
        const formSubtitle = ElementBuilder.createElement({ elementTag: "p", id: "form-subtitle", textContent: contactPageContent.formHeader.subtitle });
        const formTitle = ElementBuilder.createElement({ elementTag: "p", id: "form-title", textContent: contactPageContent.formHeader.title });

        formHeader.append( formSubtitle, formTitle );
        return formHeader;
    }

    // Form Fields Builders
    static #buildFormGroup({ groupName, inputType, inputID, labelText }) {
        const formGroup = ElementBuilder.createElement({ elementTag: "div", id: groupName,  classNames: [ "form-group" ]});
        const groupInput = ElementBuilder.createElement({ 
            elementTag: "input", 
            classNames: [ "form-input" ], 
            type: inputType, 
            id: inputID,  
            requiredAttr: true
        })
        const groupLabel = ElementBuilder.createElement({ 
            elementTag: "label", 
            classNames: [ "form-label" ], 
            forAttr: inputID, 
            textContent: labelText 
        });

        formGroup.append( groupInput, groupLabel );
        return formGroup;
    }

    static #buildAllFormGroups() {
        const formGroups = []
        for (const group of contactPageContent.formFields.formGroups) {
            const groupDetails = { 
                groupName: group.groupName, 
                inputType: group.inputType,  
                inputID: group.inputID,
                labelText: group.labelText
            }
            const formGroup = this.#buildFormGroup(groupDetails);
            formGroups.push(formGroup)
        }
        return formGroups;
    }

    static #buildFormFields() {
        const formFields = ElementBuilder.createElement({ elementTag: "div", id: "form-fields" });

        formFields.append( ...this.#buildAllFormGroups() )
        return formFields;
    }

    static #buildContactFormSection() {
        const contactForm = ElementBuilder.createElement({ elementTag: "form", id: "contact-form" });
        const formHeader = this.#buildFormHeader();
        const formFields = this.#buildFormFields();
        const formAction = ElementBuilder.createElement({ elementTag: "button", id: "form-action", type: "submit", textContent: contactPageContent.formFields.formSubmit.submitLabel });

        contactForm.append( formHeader, formFields, formAction );
        return contactForm;
    }


    /* Final Page Assembly */

    // Assembles the full contactPage by building and appending each section

    static buildContactPage() {
        const contactPage = ElementBuilder.createElement({ elementTag: "main", id: "main-page" });
        const contactForm = this.#buildContactFormSection();
        // const contactForm = ElementBuilder.createElement({ elementTag: "form", id: "contact-form" });
        // const visitPanel = ElementBuilder.createElement({ elementTag: "section", id: "visit-panel" });

        contactPage.append( 
            contactForm, 
            // visitPanel
         )

        return contactPage;
    }

}

export default ContactBuilder;