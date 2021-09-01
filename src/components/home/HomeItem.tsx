
function HomeItem(props:any){

    return(
        <section className="xl:pl-96 lg:pl-60 md:pl-32 sm:pl-5">
                <div className="space-y-10 pt-10">
                    <div className="flex space-x-72">
                        <div>
                            <h3 className="text-xs">First name:</h3>
                            <div>{props.contact.firstName}</div>
                        </div>
                        <div className="flex-auto">
                            <h3 className="text-xs">Last name:</h3> 
                            <div>{props.contact.lastName}</div>
                        </div>
                    </div>           
                    <div>
                        <h3>Email:</h3>
                        {props.contact.emails !== undefined ? props.contact.emails.map((email: any) => {
                            return (<h3 className="">{email}</h3>)}) : null}
                    </div>
                </div>
        </section>
    )
}

export default HomeItem;