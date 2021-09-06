import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Main from '../pages/Main';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';
import ContactContext from '../components/ContactContext';

function DeleteContactPage(){
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const history = useHistory();
    const contactCtx = useContext(ContactContext);

    const content = contactCtx.contact;

    function closeModalHandler(){
        setModalIsOpen(false);
        history.replace("/");
    }

    return(
        <section>
            <div>
                <Main/>
                <div>
                { modalIsOpen && <Modal contactData={content} onCancel={closeModalHandler}/>}
                { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
                </div>
            </div>
        </section>
    );
};

export default DeleteContactPage;