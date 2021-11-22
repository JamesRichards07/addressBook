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
                <div>
                    <div>
                        <div className="flex text-xs xl:space-x-80 xl:pl-80 lg:pl-44 lg:space-x-80 md:space-x-48 md:pl-36 sm:space-x-40">
                            <h3>* First name</h3>
                            <h3>* Last name</h3>
                        </div>
                        <div className="flex pb-10 xl:space-x-52 xl:pl-80 lg:pl-44 lg:space-x-40 lg:pl-32 md:space-x-10 md:pl-36 space-x-10">
                            <div className="bg-blue-100 border-solid border-2 border-blue-200">
                                <label htmlFor="firstname"></label>
                                <input className="pr-12 sm:pr-3" type="text" required id="firstname" name="firstName" 
                                    ref={firstNameInputRef} 
                                />
                            </div>
                            <div className="bg-blue-100 border-solid border-2 border-blue-200">
                                <label htmlFor="lastname"></label>
                                <input className="pr-12 sm:pr-3" type="text" required id="lastname" name="LastName" 
                                    ref={lastNameInputRef} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:pl-80 lg:pl-44 md:pl-36">
                        <div className="text-xs">
                            Email
                        </div>
                        <div>
                            {emails.map((email:any, i:any)=>{
                                return(
                                    <div key={"email" + i}>
                                        <label htmlFor="email"></label>
                                            <input className="border-solid border-2 border-blue-200 pr-3" 
                                            type="text" id={"email" + i} name={"email" + i} ref={addToEmailInputRef} 
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <button className="text-green-500 pb-10" onClick={AddEmail} type="button">
                                + Add Email
                            </button>
                        </div>
                    </div>
                </div>
                <div className="xl:space-x-60 xl:pl-96 lg:pl-64 lg:space-x-56 md:pl-48 md:space-x-36 sm:pl-14 sm:space-x-32"> 
                    <Link className="border-2 border-gray-300 px-6 py-2 rounded text-yellow-600" to="/addressBook">Cancel</Link>
                    <button className="bg-green-600 px-2 py-1 text-white text-left rounded">Save</button>
                </div>
            </div>
        </form>
    ) 
}

export default NewContactForm;