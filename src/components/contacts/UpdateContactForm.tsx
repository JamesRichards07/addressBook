
import {useRef} from 'react';
// import { useForm } from "react-hook-form";
// import ContactPage from "../../pages/Contacts";

// import ContactContext from "../Contact-Context";
// import UpdateContactConfirm from './UpdateContactConfirm';

// type Inputs = {
//     firstName: string;
//     lastname: string;
//     email: string[];
// }

function UpdateContactForm(props: any){
    // const contactCtx = useContext(ContactContext);
    // const contact = contactCtx.contact;

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    
    // let selectedContact = {};

    function SubmitUpdateHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current?.value;
        const enteredLastName = lastNameInputRef.current?.value;

        // const currentContact:object = {
        //     key: contact.id,
        //     id: contact.id,
        //     firstName: contact.firstName,
        //     lastName: contact.lastName
        // }

        const currentContact:object = {
            firstName: enteredFirstName,
            lastName: enteredLastName
        }

        props.onContactUpdate(currentContact);
    }

    // const {register} = useForm<Inputs>({
    //     defaultValues: selectedContact
    // })

    return(
        <section>
            {/* <UpdateContactConfirm onContactUpdateConfirm={SubmitUpdateHandler}/> */}
            <form onSubmit={SubmitUpdateHandler}>
            <div>
                <label htmlFor="firstname"></label>
                <input type="text" required id="firstname" ref={firstNameInputRef} 
                    placeholder={"First Name"}
                />
            </div>
            <div>
                <label htmlFor="lastname"></label>
                <input type="text" required id="lastname" ref={lastNameInputRef} 
                    placeholder={"Last Name"}
                />
            </div>
            </form>
        </section>
    )
}

export default UpdateContactForm;