import {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import ContactList from '../components/contacts/ContactList';
import FetchAll from '../components/functions/FetchAll';
import Home from '../components/home/Home';

function MainPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedContacts, setLoadedContacts] = useState([]);

    useEffect(() => {
        console.log("Effect");
        
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
                <div>
                    <div className="fixed top-0 left-0 bottom-0 space-y-5 bg-gray-50 p-5">
                        <div className="space-x-3 flex">
                            <h1 className="text-2xl">Contacts</h1>
                            <Link className="bg-green-400 px-1 text-white rounded-full h-8 w-8 text-2xl text-center" to="/edit/newContact">+</Link>
                        </div>
                        <div>
                            <ContactList contacts={loadedContacts}/>
                        </div>
                    </div>
                    <div className="fixed left-44 right-0 p-10">
                        <div className="text-sm text-right text-blue-400 pt-10 pr-10">
                            <Link to="/edit/updateContact">
                                Edit
                            </Link>
                        </div>
                        <div className="fixed left-44 right-0 p-10">
                            <div>
                                <Home firstContact={loadedContacts[0]}/>
                            </div>
                            <div className="text-center object-bottom pt-10">
                                <Link className="text-red-600" to="/edit/DeleteContact">
                                    Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default MainPage;