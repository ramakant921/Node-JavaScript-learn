import express from 'express';

const app = express();

// List of jokes
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

// Endpoints
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log(`Server listening like google at http://localhost:${port}`);
});
