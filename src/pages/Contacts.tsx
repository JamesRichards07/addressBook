import {useState, useEffect} from 'react';

import ContactList from '../components/contacts/ContactList';
import FetchAll from '../components/functions/FetchAll';
import HomePage from './Home';
import NewContact from './NewContact';

function ContactPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedContacts, setLoadedContacts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/paginated';

        FetchAll(url, "GET", setIsLoading, setLoadedContacts);
    },[]);    

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    };

    return(
        <section>
            <h1>Contacts</h1>
            <button onClick={NewContact}>Plus Sign</button>
            <ContactList contacts={loadedContacts}/>
            <HomePage firstContact={loadedContacts}/>
        </section>
    );
};

export default ContactPage;