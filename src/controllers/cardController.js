import axios from 'axios';

const getCardDetails = async (req, res) => {
    // Get card number from params
    const { cardNumber } = req.params;
    try {
        // Fetch card validity and state from endpoints
        const [validityResponse, stateResponse] = await Promise.all([
            // [CR]
            // base url by mělo být v konfiguraci, ne v kódu
            axios.get(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity`),
            axios.get(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`)
        ]);

        // [CR]
        // tady je potřeba zkontrolovat, jestli se vrací data, nebo ne a taky jestli jsou data v očekávaném formátu

        // Format date to correct format
        const formattedDate = new Date(validityResponse.data.validity_end).toLocaleDateString('cs-CZ');

        // Return json response with data
        res.json({
            validity: formattedDate,
            state: stateResponse.data.state_description
        });
    } catch (error) {
        // [CR]
        // bylo by dobré zalogovat chybu ať je jasné, co se stalo
        // Error occurred while fetching data, return error
        res.status(500).send('Error fetching card details');
    }
};

export { getCardDetails };
