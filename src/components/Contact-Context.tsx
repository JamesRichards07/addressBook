import { createContext, useState } from 'react';

const ContactContext = createContext({
    contact: [],
    // contactId: "",
    // contactFirstName: "",
    // contactLastName: "",
    replaceContact: (contactId: object) => {}
})

export function ContactContextProvider(props:any){
    const [contact, setContact] = useState([]);

    function replaceContactHandler(contactId:any){
        return (
            setContact(contactId)
            // contactId = contactId.id,
            // contactFirstName = contactId.firstName,
            // contactLastName = contactId.lastName,
            // contactEmail = contactId.email
        )
    };

    const context = {
        contact: contact,
        // contactId: contact.id,
        // contactFirstName: contact.firstName,
        // contactLastName: contact.lastName,
        replaceContact: replaceContactHandler
    };

    return(
    <ContactContext.Provider value={context}>
        {props.children}
    </ContactContext.Provider>
    );
}

export default ContactContext;

