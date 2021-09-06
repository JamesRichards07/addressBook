import {useContext} from 'react';

import ContactContext from '../ContactContext';
import HomeItem from './HomeItem';

function HomePage(props: any){
    const contactCtx = useContext(ContactContext);
    
    let content; 

    if(contactCtx.contact.length === 0){
        content = <HomeItem contact={props.firstContact}/>;
        contactCtx.replaceContact(props.firstContact);
    }
    else{ 
        content = <HomeItem contact={contactCtx.contact}/>
    }

    return(
        <section>
            <div>
                {content}
            </div>
        </section>
    )
}

export default HomePage;