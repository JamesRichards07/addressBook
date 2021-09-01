import {useContext} from 'react';

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

    return(
        <section>
            <div>
                {content}
            </div>
        </section>
    )
}

export default HomePage;