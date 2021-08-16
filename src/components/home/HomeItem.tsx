import react from 'react';

function HomeItem(props:any){

    console.log("HomeItem: " + JSON.stringify(props));

    return(
        <section>
                <div>
                    <h3>First Name: {props.contact.firstName}</h3>
                    <h3>Last Name: {props.contact.lastName}</h3>
                    <h3>Email:</h3>
                    {props.contact.emails !== undefined ? props.contact.emails.map((email: any) => {
                      return (<h3>{email}</h3>)}) : null}
                </div>
        </section>
    )
}

export default HomeItem;