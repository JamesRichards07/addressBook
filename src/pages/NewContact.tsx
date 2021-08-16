import {useHistory} from 'react-router-dom';
import NewContactForm from '../components/home/NewContactForm';

function NewContactPage(props:any){
    const history = useHistory();

    function newContactHandler(loginData: any){
        fetch(
            'https://avb-contacts-api.herokuapp.com/contacts',
            {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            history.replace("/contacts")
        })
    };

    return (
        <section>
            <h1>Add New Contact</h1>
            <NewContactForm onLogin={newContactHandler} />
    </section>
    );
}

export default NewContactPage;