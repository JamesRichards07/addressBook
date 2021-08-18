import {useContext} from 'react';
import { Link } from 'react-router-dom';

import ContactContext from '../Contact-Context';
import HomeItem from './HomeItem';

function HomePage(props: any){
    const contactCtx = useContext(ContactContext);

    let content;

    if(contactCtx.contact.length === 0){
        content = <HomeItem contact={props.firstContact[0]}/>;
        contactCtx.replaceContact(props.firstContact[0]);
    }
    else{ 
        content = <HomeItem contact={contactCtx.contact}/>
    }
    
    // function DeleteContact(contact:any){
    //     const id = contact.id;
    //     const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

    //     console.log(url);
    
    //     fetch(
    //         url, 
    //         {
    //             method:"DELETE"
    //         }
    //     )
    //     .then(() => {
    //         history.replace("/");
    //     });
    // }

    return(
        <section>
            <h1>Home Page</h1>
            {content}
            <button>Edit</button>
            <Link to='/contacts/edit/deleteContact'>
                Delete
            </Link>
        </section>
    )
}

export default HomePage;