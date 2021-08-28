import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

function NewContactForm(props: any){
    const [emails, setEmails] = useState<string[]>([]);

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement[]>([]);

    function submitContactHandler(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        
        const enteredFirstName = firstNameInputRef.current?.value;
        const enteredLastName = lastNameInputRef.current?.value;
        const enteredEmailList = [];

        for(let i = 0; i < emails.length; i++){
            if(emailInputRef.current[i].value !== ""){
                enteredEmailList.push(emailInputRef.current[i].value);
            }   
        }

        const contactData: object = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            emails: enteredEmailList,
        };

        props.onNewContact(contactData);
    }
        
    function AddEmail(){
        setEmails([...emails, ""]);
    }

    function addToEmailInputRef(email: any){
        if(email && !emailInputRef.current.includes(email)){
            emailInputRef.current.push(email);
        } 
    }

    return(
        <form onSubmit={submitContactHandler}>
            <div>
                <label htmlFor="firstname"></label>
                <input type="text" required id="firstname" name="firstName" ref={firstNameInputRef} 
                    placeholder={"First Name"}
                />
            </div>
            <div>
                <label htmlFor="lastname"></label>
                <input type="text" required id="lastname" name="LastName" ref={lastNameInputRef} 
                    placeholder={"Last Name"}
                />
            </div>
            <div>
                {emails.map((email:any, i:any)=>{
                    return(
                        <div key={"email" + i}>
                            <label htmlFor="email"></label>
                            <input type="text" id={"email" + i} name={"email" + i} ref={addToEmailInputRef} 
                                placeholder={"Email"}
                            />
                        </div>
                    )
                })}
                <button onClick={AddEmail} type="button">
                    Add Email
                </button>
            </div>
            <div> 
                <button>Save</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    ) 
}

export default NewContactForm;