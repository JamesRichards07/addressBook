import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ContactList from '../components/contacts/ContactList';
import FetchAll from '../components/functions/FetchAll';

function ContactPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedContacts, setLoadedContacts] = useState([]);

    useEffect(() => {
        console.log("Effect")
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
            <div className="fixed top-0 left-0 bottom-0 space-y-5 bg-gray-50 p-5">                        
                <div className="space-x-3 flex">
                    <h1 className="text-2xl">Contacts</h1>
                    <Link className="bg-green-400 px-1 text-white rounded-full h-8 w-8 text-2xl text-center" to="/addressBook/edit/newContact">+</Link>
                </div>
                <div>
                    <ContactList contacts={loadedContacts}/>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;