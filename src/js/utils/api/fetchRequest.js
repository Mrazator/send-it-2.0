import { validateResponse } from './validateResponse';

export const fetchRequest = (uri, token, method, bodyJson) =>
    fetch(
        uri,
        {
            method: method,
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson)
        })
        .then(validateResponse);
