import ContactItem from './ContactItem';

function ContactList(props:any){

    return (
        <ul>
            {props.contacts.map((contact:any) => {
                return (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    emails={contact.emails}
                />
                );
            })}
        </ul>
    );
}

export default ContactList;