function DeleteById(deleteContactData:any, contactCtx:any, history:any){
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

export default DeleteById;