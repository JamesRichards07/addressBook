import React, { useRef } from "react";

function NewContactForm(props: any){
    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailsInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        
        const enteredFirstName = firstNameInputRef.current?.value;
        const enteredLastName = lastNameInputRef.current?.value;
        const enteredEmails = emailsInputRef.current?.value;

        const contactData: object ={
            firstName: enteredFirstName,
            lastname: enteredLastName,
            emails: enteredEmails,
        };

        props.onAddMeetup(contactData);
    }
        
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" required id="firstname" ref={firstNameInputRef}/>
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="url" required id="lastname" ref={lastNameInputRef}/>
            </div>
            <div>
                <label htmlFor="emails">Address</label>
                <input type="text" required id="emails" ref={emailsInputRef}/>
            </div>
            <div>
                <button>Add Contact</button>
            </div>
        </form>
    ) 
}

export default NewContactForm;