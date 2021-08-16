import ContactItem from './ContactItem';

function ContactList(props:any){
    // console.log("ContactPage props: " + JSON.stringify(props.contacts));

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
            })};
        </ul>
    )
}

export default ContactList;