
const {REGION} = process.env

module.exports.mainHandler = (event, context) => {
    
    // get the event method
    const method = event.httpMethod;

    if (method === 'GET') {
        // return a 200 response with the body
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Hello from the main handler'
            })
        };
    }

    else if (method === 'POST') {
        // return a 200 response with the body
        const body = JSON.stringify(event.body);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
            },
            body: JSON.stringify({
                message: 'Hello from the main handler',
                body: body
            })
        };
    }
};