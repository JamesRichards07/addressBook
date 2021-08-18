import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ContactList from '../components/contacts/ContactList';
import FetchAll from '../components/functions/FetchAll';
import Home from '../components/home/Home';

function MainPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedContacts, setLoadedContacts] = useState([]);

    useEffect(() => {
        console.log("use effect");
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
            <Link to="/Contacts/edit/newContact">Plus Sign</Link>
            <ContactList contacts={loadedContacts}/>
            <Home firstContact={loadedContacts}/>
        </section>
    );
};

export default MainPage;