import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'This is also joke'
        },
        {
            id: 4,
            title: 'A 4 joke',
            content: 'This is alone joke'
        },
        {
            id: 5,
            title: 'A 5 joke',
            content: 'This is aligator joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 6060;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});