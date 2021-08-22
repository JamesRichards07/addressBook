// import {useContext} from 'react';
import { useHistory } from 'react-router-dom';

// import ContactContext from '../components/Contact-Context';
import UpdateContactForm from '../components/contacts/UpdateContactForm';

function UpdateContact(props: any){
    const history = useHistory();

    function UpdateContactHandler(updateContactData:any){
        const id = updateContactData.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        console.log("updateContactData: " + JSON.stringify(updateContactData));
        console.log("id: " + id);

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
            history.replace("/")
        })
    } 

    return(
        <section>
            <UpdateContactForm onContactUpdate={UpdateContactHandler}/>
        </section>
    );
}

export default UpdateContact;