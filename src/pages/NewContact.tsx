import {useHistory} from 'react-router-dom';
import NewContactForm from '../components/contacts/NewContactForm';

function NewContactPage(){
    const history = useHistory();

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