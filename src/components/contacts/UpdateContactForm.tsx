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
            <div>
                <label htmlFor="firstname"></label>
                <input type="text" required id="firstname" name="firstName" defaultValue={props.contactData.firstName}
                    ref={firstNameInputRef} placeholder="First Name"
                />
            </div>
            <div>
                <label htmlFor="lastname"></label>
                <input type="text" required id="lastname" name="lastName" defaultValue={props.contactData.lastName}
                    ref={lastNameInputRef} placeholder={"Last Name"}
                />
            </div>
            <div>
                {props.contactData.emails !== undefined ? 
                    props.contactData.emails.map((email: any, k:any) => {
                        return ( 
                        <div key={"email" + k}>
                        <label htmlFor="email"></label>
                        <input type="text" id={"email" + k} name={"email" + k} defaultValue={props.contactData.emails[k]}
                            ref={addToEmailInputRef} placeholder={"Email"}
                        />
                        </div>
                        )
                    }) : null }
            </div>
            <div>
                {emails.map((email:any, i:any)=>{
                    return(
                        <div key={"email" + i}>
                            <label htmlFor="email"></label>
                            <input type="text" id={"email" + i} name={"email" + i}
                                ref={addToEmailInputRef} placeholder={"Email"}
                            />
                        </div>
                    )
                })}
                <button className="btn-new"onClick={AddEmail} type="button">
                    Add Email
                </button>
            </div>
            <div>
                <button className="btn-sumbit">Save</button>
                <Link className="btn-cancel" to="/">Cancel</Link>
            </div>
            </form>
        </section>
    )
}

export default UpdateContactForm;