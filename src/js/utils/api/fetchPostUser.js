import {validateResponseLogin} from "./validateResponseLogin";

export const fetchPostUser = (uri, email) => {
    const bodyJson = {
        email,
        customData: email.slice(0, email.indexOf('@'))
    }

    return fetch(
        uri,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson)
        })
        .then(validateResponseLogin);
}