async function sendMultipleRequests(endpoint, payloads) {
    const requests = payloads.map(payload =>
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(response => response.json())
    );


    const results = await Promise.allSettled(requests);


   
    const responses = results.map(result => {
        if (result.status === 'fulfilled') {
            return { success: true, data: result.value };
        } else {
            return { success: false, error: result.reason };
        }
    });


    return responses;
}
const endpoint = 'https://example.com/api';
const payloads = [
    { foo: 'bar1' },
    { foo: 'bar2' },
    { foo: 'bar3' }
];


sendMultipleRequests(endpoint, payloads)
    .then(responses => {
        console.log('Responses:', responses);
    })
    .catch(error => {
        console.error('An unexpected error occurred:', error);
    });
