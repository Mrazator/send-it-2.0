export const errorActionFactory = (id, actionType) =>
  (errorMessage, error = {}) => ({
    type: actionType,
    payload: {
      error: {
        id,
        message: errorMessage,
        statusText: error.message,
        statusCode: error.statusCode
      }
    }
  })
