export default (req, res, next) => {
    // Get api key from headers
    const apiKey = req.headers['x-api-key'];
    if (apiKey === process.env.API_KEY) {
        // The key is included and valid, continue
        next();
    } else {
        // The key is not included or is nod valid, return error
        res.status(401).send('Unauthorized');
    }
};
