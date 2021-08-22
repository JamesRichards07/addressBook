import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import ContactContext from '../components/Contact-Context';
import NewContactForm from '../components/contacts/NewContactForm';

function NewContactPage(){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);

    function newContactHandler(newContactData: any){
        // console.log(JSON.stringify(newContactData));
        fetch(
            'https://avb-contacts-api.herokuapp.com/contacts',
            {
                method: "POST",
                body: JSON.stringify(newContactData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(() => {
            contactCtx.replaceContact([]);
            history.replace("/")
        })
    };

    return (
        <section>
            <h1>New Contact</h1>
            <NewContactForm onNewContact={newContactHandler} />
        </section>
    );
}

export default NewContactPage;