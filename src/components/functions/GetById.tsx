function FetchGetById(url: string, method: string, setIsLoading: any, setLoadedContacts: any){
    const fetchResponse = (response:any) => {
        return (
            response.json()
        );
    };

    const fetchData = ((data: any) => {
        const contacts:any = data;

        // for(const key in data.contacts){
        //     const contact = {
        //         id: key,
        //         ...data.contacts[key]
        //     };

        //     contacts.push(contact);
        // };

        // sortData(contacts);

        return(
            setLoadedContacts(contacts),
            setIsLoading(false)
        );
    });

    // const sortData = ((data:any) => {
    //     data.sort(function (a:any, b:any){
    //         return a.firstName.localeCompare(b.firstName) || 
    //                a.lastName.localeCompare(b.lastName)
    //     });
    // })

    fetch(
        url,
        {
            method: method,
        }
    )
    .then(response => fetchResponse(response))
    .then(data => fetchData(data));
};

export default FetchGetById;