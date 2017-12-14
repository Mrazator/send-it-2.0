import { uuid } from './uuid';

export const errorActionFactory = (actionType) =>
    (errorMessage, error = {}) => ({
        type: actionType,
        payload: {
            error: {
                id: uuid(),
                message: errorMessage,
                statusText: error.message,
                statusCode: error.statusCode,
            },
        }
    });