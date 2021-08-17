import {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';

import ContactContext from '../components/Contact-Context';
import HomeItem from '../components/home/HomeItem';

function HomePage(props: any){
    const contactCtx = useContext(ContactContext);
    const [count, setCount] = useState(0);
    const history = useHistory();

    let content;

    if(count === 0){
        content = <HomeItem contact={props.firstContact[0]}/>;
        contactCtx.replaceContact(props.firstContact[0]);
        setCount(count + 1);   
    }
    else{ 
        content = <HomeItem contact={contactCtx.contact}/>
    }
    
    function DeleteContact(contact:any){
        const id = contact.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        console.log(url);
    
        fetch(
            url, 
            {
                method:"DELETE"
            }
        )
        .then(() => {
            setCount(0);
            history.replace("/");
        });
    }

    return(
        <section>
            <h1>Home Page</h1>
            {content}
            <button>Edit</button>
            <button onClick={()=>DeleteContact(contactCtx.contact)}>Delete</button>
        </section>
    )
}

export default HomePage;