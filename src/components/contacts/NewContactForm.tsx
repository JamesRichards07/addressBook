import React, { useRef } from "react";
import { Link } from 'react-router-dom';

function NewContactForm(props: any){
    // const [email, setEmail] = useState<string[]>([]);
    // const [firstName, setFirstName] = useState<string>("");
    // const [lastName, setLasttName] = useState<string>("");
    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    // const emailsInputRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        
        const enteredFirstName = firstNameInputRef.current?.value;
        const enteredLastName = lastNameInputRef.current?.value;
        // const enteredEmails = emailsInputRef.current?.value;
        
        const contactData: object ={
            firstName: enteredFirstName,
            lastName: enteredLastName,
            // emails: enteredEmails,
        };

        props.onNewContact(contactData);
    }
        
    
    return(
        <form onSubmit={submitHandler}>
            <div>
                {/* {firstName}         */}
                <label htmlFor="firstname"></label>
                <input type="text" required id="firstname" ref={firstNameInputRef} 
                    placeholder={"First Name"}
                />
                {/* {setFirstName(firstNameInputRef.current?.value)
                        <div>
                            <input type="text" required id="firstname" ref={firstNameInputRef} 
                                placeholder={"Add first Name"}
                            />
                        </div> */}
            </div>
            <div>
                <label htmlFor="lastname"></label>
                <input type="text" required id="lastname" ref={lastNameInputRef} 
                    placeholder={"Last Name"}
                />
            </div>
            {/* <div>
                {email.map((p, index) => {
                    return (
                        <div>
                            <input type="text" id="emails" ref={emailsInputRef}/>
                        </div>          
                    )
                })}
                <button 
                    onClick={() => {
                        setEmail(currentEmail => [
                            ...currentEmail, 
                            ""
                        ]);
                    }}
                >
                    Add email
                </button>
                <label htmlFor="emails"></label>
                <input type="text" id="emails" ref={emailsInputRef}
                    placeholder={"Email"} />
            </div> */}
            <div>
                <button>Save</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    ) 
}

export default NewContactForm;