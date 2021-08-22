import {useContext} from 'react';
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";

import ContactContext from "../Contact-Context";

function UpdateContactConfirm(props: any){
    
    const contactCtx = useContext(ContactContext);
    const content = contactCtx.contact;

    console.log("content: " + JSON.stringify(content));
    console.log("props: " + JSON.stringify(props));

    function submitConfirmHandler(event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault();
        props.onContactUpdateConfirm(content);
    }

    return (
        <section>
            {submitConfirmHandler}
        </section>
    //         <input
    //             ref={register}
    //     <div>
    //         <button>Confirm</button>
    //         <Link to="/">Cancel</Link>
    //     </div>
    // </form>
    )
}

export default UpdateContactConfirm;