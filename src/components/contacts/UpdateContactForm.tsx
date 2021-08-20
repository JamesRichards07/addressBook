// import {useRef, useContext} from 'react';
// import {Link} from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import ContactPage from "../../pages/Contacts";

// import ContactContext from "../Contact-Context";
// import UpdateContactConfirm from './UpdateContactConfirm';

function UpdateContactForm(props: any){
    // const contactCtx = useContext(ContactContext);
    // const contact = contactCtx.contact;

    // console.log("Contact: " + JSON.stringify(contact.firstName);

    // const firstNameInputRef = contact[0].firstName;
    // const lastNameInputRef = contact[0].lastName;

    // console.log(JSON.stringify(firstNameInputRef));
    // console.log(JSON.stringify(lastNameInputRef));
    
    // let selectedContact = {};

    // function SubmitUpdateHandler(event: React.FormEvent<HTMLFormElement>){
    //     event.preventDefault();

    //     const enteredFirstName = firstNameInputRef;
    //     const enteredLastName = lastNameInputRef;

        // const currentContact:object = {
        //     key: contact.id,
        //     id: contact.id,
        //     firstName: contact.firstName,
        //     lastName: contact.lastName
        // }

    //     const currentContact:object = {
    //         firstName: enteredFirstName,
    //         lastName: enteredLastName
    //     }

    //     props.onContactUpdate(currentContact);
    // }

    // const {register} = useForm<Inputs>({
    //     defaultValues: selectedContact
    // })

    return(
        <section>
            {/* <UpdateContactConfirm onContactUpdateConfirm={SubmitUpdateHandler}/>
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
            </div> */}
            <div>
                <button>Confirm</button>
                {/* <Link to="/">Cancel</Link> */}
            </div>
            {/* </form> */}
        </section>
    )
}

export default UpdateContactForm;