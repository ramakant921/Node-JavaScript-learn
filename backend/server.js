import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send('Server is ready');
});

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content:'This is joke'
        },
        {
            id: 2,
            title: 'Aother joke',
            content:'This another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content:'This is also a joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 6060;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});