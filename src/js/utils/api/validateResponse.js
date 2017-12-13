export const validateResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.json()
    }
    else {
        console.log(3, "az druhy fail")
        console.log(response)
        const errorMessge = response.statusText || `Something went wrong (ending up in ${response.status})`

        const error = new Error(errorMessge)
        error.statusCode = response.status

        throw error
    }
}