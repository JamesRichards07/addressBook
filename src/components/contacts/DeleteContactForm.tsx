import { Link } from 'react-router-dom';
import {useContext} from 'react';

import ContactContext from "../Contact-Context";

function ContactDeletionForm(props: any){

    const contactCtx = useContext(ContactContext);
    const contact = contactCtx.contact;

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        props.onContactDeletion(contact);
    }

    return(
    <form onSubmit={submitHandler}>
        <div>
            <button>Confirm</button>
            <Link to="/">Cancel</Link>
        </div>
    </form>
    )
}

export default ContactDeletionForm;