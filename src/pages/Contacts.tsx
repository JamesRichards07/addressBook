import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ContactList from '../components/contacts/ContactList';
import FetchAll from '../components/functions/FetchAll';

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
            <Link to="/contacts/edit/newContact">Plus Sign</Link>
            <ContactList contacts={loadedContacts}/>
        </section>
    );
};

export default ContactPage;