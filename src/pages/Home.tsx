import {useContext, useState} from 'react';

import ContactContext from '../components/Contact-Context';
import HomeItem from '../components/home/HomeItem';

function HomePage(props: any){
    const contactCtx = useContext(ContactContext);
    const [count, setCount] = useState(0);

    let content;

    if(count === 0){
        content = <HomeItem contact={props.firstContact[0]}/>;
        contactCtx.replaceContact(props.firstContact[0]);
        setCount(count + 1);   
    }
    else{ 
        content = <HomeItem contact={contactCtx.contact}/>
    }
    
    return(
        <section>
            <h1>Home Page</h1>
            {content}
        </section>
    )
}

export default HomePage;