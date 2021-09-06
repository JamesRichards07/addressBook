function FetchGetById(url: string, method: string, setIsLoading: any, setLoadedContacts: any){
    const fetchResponse = (response:any) => {
        return (
            response.json()
        );
    };

    const fetchData = ((data: any) => {
        const contacts:any = data;

        return(
            setLoadedContacts(contacts),
            setIsLoading(false)
        );
    });

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