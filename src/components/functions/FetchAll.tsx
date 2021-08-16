function FetchAll(url: string, method: string, setIsLoading: any, setLoadedContacts: any){
    console.log(url, method, setLoadedContacts,setIsLoading);
    const fetchResponse = (response:any) => {
        return (
            response.json()
        );
    };

    const fetchData = ((data: any) => {
        const contacts:any = [];

        for(const key in data.contacts){
            const contact = {
                id: key,
                ...data.contacts[key]
            };

            contacts.push(contact);
        };

        sortData(contacts);

        return(
            setLoadedContacts(contacts),
            setIsLoading(false)
        );
    });

    const sortData = ((data:any) => {
        data.sort(function (a:any, b:any){
            return a.firstName.localeCompare(b.firstName) || 
                   a.lastName.localeCompare(b.lastName)
        });
    })

    fetch(
        url,
        {
            method: method,
        }
    )
    .then(response => fetchResponse(response))
    .then(data => fetchData(data));
};

export default FetchAll;