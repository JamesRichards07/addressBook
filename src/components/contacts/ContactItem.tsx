import {useContext} from 'react';

import { useHistory } from 'react-router-dom';

import ContactContext from '../Contact-Context';

function ContactItem(props:any){
    const contactCtx = useContext(ContactContext);
    const history = useHistory();
    
    function SelectedContactHandler(props:any){
        contactCtx.replaceContact(props);
        history.replace('/contacts');
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