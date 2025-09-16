const errorHandler = (exception, ctx = null, optionalMessage) => {
    console.error({ exception });

    // Handle MongoDB validation errors
    if (exception && exception.keyPattern && MongoError.includes(exception.name)) {
        const message = `ValidationError: ${Object.keys(exception.keyPattern).join(",")} is not valid`;
        return {
            status: 422,
            message: message,
        };
    }

    let status = 500;
    let message = "Internal Server Error";
    let code = "InternalServerError";

    switch (exception.message) {
        case "400":
            status = 400;
            message = optionalMessage || "Bad Request";
            code = "BadRequest";
            break;
        case "403":
            status = 403;
            message = optionalMessage || "Access forbidden";
            code = "Forbidden";
            break;
        case "404":
            status = 404;
            message = optionalMessage || "Record not found.";
            code = "NotFound";
            break;
        case "409":
            status = 409;
            message = optionalMessage || "Record conflicts with existing records in place.";
            code = "Conflict";
            break;
        case "412":
            status = 412;
            message = optionalMessage || "Pre condition to create this request, failed";
            code = "PreconditionFailed";
            break;
        case "422":
            status = 422;
            message = optionalMessage || "Record cannot be saved with the current params";
            code = "UnprocessableEntity";
            break;
        case "423":
            status = 423;
            message = optionalMessage || "The resource that is being accessed is locked";
            code = "Locked";
            break;
        case "451":
            status = 451;
            message = optionalMessage || "The endpoint does not contain the data requested";
            code = "NotFound";
            break;
        case "500":
            status = 500;
            message = optionalMessage || "Server error.";
            code = "InternalServerError";
            break;
        case "504":
            status = 504;
            message = optionalMessage || "Endpoint timed out, try again later.";
            code = "Timeout";
            break;
        default:
            if (exception.message) {
                const exceptionArray = exception.message.split(":");

                if (exceptionArray.length === 2) {
                    return errorHandler(
                        {
                            message: exceptionArray[0],
                        },
                        ctx,
                        exceptionArray[1]
                    );
                }
            }

            status = 500;
            message = exception?.message || "Internal Server Error";
            code = "InternalServerError";
            break;
    }

    return {
        status,
        message,
        code,
    };
};

export { errorHandler };
