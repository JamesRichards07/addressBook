import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ContactContext from './Contact-Context';

function Modal(props:any){
    const history = useHistory();
    const contactCtx = useContext(ContactContext);

    function confirmHandler(){
        const id = props.contactData.id;
        const url = 'https://avb-contacts-api.herokuapp.com/contacts/' + id;

        fetch(
            url, 
            {
                method:"DELETE"
            }
        )
        .then(()=> {
            history.replace("/");
            contactCtx.replaceContact([]);
        })
    }

    return (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center text-center">
            <div className="bg-white rounded z-50">
                <div className="m-2 pb-2">
                    <h1>Delete contact?</h1>
                </div>
                <div className="m-2">
                    <div className="space-x-5">
                        <button className="border-2 border-gray-300 px-2 py-1 rounded text-yellow-600" onClick={props.onCancel}>Cancel</button>
                        <button className="bg-red-600 px-2 py-1 text-white rounded" onClick={confirmHandler}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Modal;