import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import ContactContext from '../components/Contact-Context';
import NewContactForm from '../components/contacts/NewContactForm';
import Contacts from './Contacts';

function NewContactPage(){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);

    function newContactHandler(newContactData: any){
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
            history.replace("/");
        })
    };

    return (
        <section className="relative">
            <div className="md:flex">
                <div>
                    <Contacts/>
                </div>
                <div className="fixed left-44 right-0 p-10 space-y-20">
                    <h1 className="text-center">New Contact</h1>
                    <NewContactForm onNewContact={newContactHandler} />
                </div>
            </div>
        </section>
    );
}

export default NewContactPage;