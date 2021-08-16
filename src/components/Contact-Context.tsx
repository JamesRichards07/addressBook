import { createContext, useState } from 'react';

const ContactContext = createContext({
    contact: [],
    replaceContact: (contactId: object) => {}
})

export function ContactContextProvider(props:any){
    const [contact, setContact] = useState([]);

    function replaceContactHandler(contactId:any){
        return setContact(contactId);
    };

    const context = {
        contact: contact,
        replaceContact: replaceContactHandler
    };

    return(
    <ContactContext.Provider value={context}>
        {props.children}
    </ContactContext.Provider>
    );
}

export default ContactContext;

