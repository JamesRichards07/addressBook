import {useContext} from 'react';
// import { useHistory, Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ContactContext from '../components/Contact-Context';
import DeleteContactForm from '../components/contacts/DeleteContactForm';

function DeleteContactPage(props: any){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);

    // const location = useLocation();
    // console.log(location);

    function DeleteContactHandler(deleteContactData:any){
        const id = deleteContactData.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        fetch(
            url, 
            {
                method:"DELETE"
            }
        )
        .then(() => {
            contactCtx.replaceContact([]);
            history.replace("/")
        })
    } 

    return(
        <section>
            <h1>Are you sure?</h1>
            <DeleteContactForm onContactDeletion={DeleteContactHandler}/>
            {/* <Link to="/">Cancel</Link>
            <button onClick={()=>DeleteContact(contactCtx.contact)}>
                Confirm
            </button> */}
        </section>
    );
}

export default DeleteContactPage;