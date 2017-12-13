export const validateResponseLogin = (response) => {
    if (response.status === 200 || response.status === 201) {
        return true
    }
    else if(response.status === 400){
        return true
    }
    else {
        console.log("prvni fail")
        const errorMessge = response.statusText || `Something went wrong (ending up in ${response.status})`

        const error = new Error(errorMessge)
        error.statusCode = response.status

        throw error
    }
}