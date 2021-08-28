// import {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {useContext} from 'react';

import ContactContext from '../components/Contact-Context';
import UpdateContactForm from '../components/contacts/UpdateContactForm';

function UpdateContact(props: any){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);
    const content = contactCtx.contact;

    function UpdateContactHandler(updateContactData:any){
        const id = updateContactData.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        console.log("updateContactData: " + JSON.stringify(updateContactData));

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
        <section>
            <UpdateContactForm contactData={content} onContactUpdate={UpdateContactHandler}/>
        </section>
    );
}

export default UpdateContact;