
import { useHistory } from 'react-router-dom';
import {useContext} from 'react';

import ContactContext from '../components/ContactContext';
import UpdateContactForm from '../components/contacts/UpdateContactForm';
import Contacts from './Contacts';

function UpdateContact(props: any){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);
    const content = contactCtx.contact;

    function UpdateContactHandler(updateContactData:any){
        const id = updateContactData.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        fetch(
            url, 
            {
                method:"PUT",
                body: JSON.stringify(updateContactData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(() => {
            contactCtx.replaceContact([]);
            history.replace("/")
        })
    } 

    return(
        <section className="relative">
            <div className="md:flex">
                <div>
                    <Contacts/>
                </div>
                <div className="fixed left-44 right-0 p-10 space-y-20">
                    <h1 className="text-center">Update Contact</h1>
                    <UpdateContactForm contactData={content} onContactUpdate={UpdateContactHandler}/>
                </div>
            </div>
        </section>
    );
}

export default UpdateContact;