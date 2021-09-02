import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

type Inputs = {
    firstName: string,
    lastName: string,
}

function UpdateContactForm(props: any){
    const [emails, setEmails] = useState<string[]>([]);
    const {handleSubmit} = useForm<Inputs>();

    const firstNameInputRef = useRef<HTMLInputElement>(null);
    const lastNameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement[]>([]);

    function SubmitUpdateHandler(event: React.FormEvent<HTMLFormElement>){
        const currentFirstName = props.contactData.firstName;
        const currentLastName = props.contactData.lastName;
        const currentEmails = [...props.contactData.emails];

        let updatedFirstName = "";
        let updatedLastName = "";
        let updatedEmails = [];

        firstNameInputRef.current === null ? 
            updatedFirstName = currentFirstName : updatedFirstName = firstNameInputRef.current.value;

        lastNameInputRef.current === null ?
            updatedLastName = currentLastName : updatedLastName = lastNameInputRef.current.value;

        currentEmails.map((email: any) => {
            return addToEmailInputRef(email);
        });

        console.log(emailInputRef.current);

        for(let i = 0; i < emailInputRef.current.length; i++){
            if(emailInputRef.current[i].value !== ""){
                updatedEmails.push(emailInputRef.current[i].value);
            }   
        }   
            
        const newContactData: object = {
            id: props.contactData.id,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            emails: updatedEmails,
        };

        props.onContactUpdate(newContactData);
    };

    function AddEmail(){
        setEmails([...emails, ""]);
    }

    function addToEmailInputRef(email: any){
        if(email && !emailInputRef.current.includes(email) && !props.contactData.emails.includes(email)){
            emailInputRef.current.push(email);
        } 
    }

    return(
        <section>
            <form onSubmit={handleSubmit(SubmitUpdateHandler)}>
            <div className="flex text-xs xl:space-x-80 xl:pl-80 lg:pl-44 lg:space-x-80 md:space-x-48 md:pl-36 sm:space-x-40">
                <h3>* First name</h3>
                <h3>* Last name</h3>
            </div>
            <div>
                <div className="flex pb-10 xl:space-x-52 xl:pl-80 lg:pl-44 lg:space-x-40 lg:pl-32 md:space-x-10 md:pl-36 space-x-10">
                    <div className="bg-blue-100 border-solid border-2 border-blue-200">
                        <label htmlFor="firstname"></label>
                        <input type="text" required id="firstname" name="firstName" defaultValue={props.contactData.firstName}
                        ref={firstNameInputRef} placeholder="First Name"
                    />
                    </div>
                    <div className="bg-blue-100 border-solid border-2 border-blue-200">
                        <label htmlFor="lastname"></label>
                        <input type="text" required id="lastname" name="lastName" defaultValue={props.contactData.lastName}
                            ref={lastNameInputRef} placeholder={"Last Name"}
                        />
                    </div>
                </div>
            </div>
            <div className="xl:pl-80 lg:pl-44 md:pl-36">
                <div>
                    <div className="text-xs">
                        Email
                    </div>
                    <div>
                        {props.contactData.emails !== undefined ? 
                            props.contactData.emails.map((email: any, k:any) => {
                                return ( 
                                <div key={"email" + k}>
                                <label htmlFor="email"></label>
                                <input className="border-solid border-2 border-blue-200" type="text" id={"email" + k} name={"email" + k} defaultValue={props.contactData.emails[k]}
                                    ref={addToEmailInputRef} placeholder={"Email"}
                                />
                                </div>
                                )
                            }) : null }
                    </div>
                </div>
                <div>
                    {emails.map((email:any, i:any)=>{
                        return(
                            <div key={"email" + i}>
                                <label htmlFor="email"></label>
                                <input className="border-solid border-2 border-blue-200" type="text" id={"email" + i} name={"email" + i}
                                    ref={addToEmailInputRef} placeholder={"Email"}
                            />
                            </div>
                        )
                    })}
                    <div>
                        <button className="text-green-500 pb-10" onClick={AddEmail} type="button">
                            + Add Email
                        </button>
                    </div>
                </div>
            </div>
            <div className="xl:space-x-60 xl:pl-96 lg:pl-64 lg:space-x-56 md:pl-48 md:space-x-36 sm:pl-14 sm:space-x-32">
                <Link className="border-2 border-gray-300 px-6 py-2 rounded text-yellow-600" to="/">Cancel</Link>
                <button className="bg-green-600 px-2 py-1 text-white text-left rounded">Save</button>
            </div>
            </form>
        </section>
    )
}

export default UpdateContactForm;