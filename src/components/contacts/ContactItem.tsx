import {useContext} from 'react';

import ContactContext from '../Contact-Context';

function ContactItem(props:any){
    const contactCtx = useContext(ContactContext);
    
    function SelectedContactHandler(props:any){
        contactCtx.replaceContact(props);
    }

    return(
        <section>
            <li>
                <div>
                    <button onClick={() => SelectedContactHandler(props)}>
                        {props.firstName + " " + props.lastName}
                    </button> 
                </div>
            </li>
        </section>
    )
}

export default ContactItem;