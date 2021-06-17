const express = require('express')
const app = express()
    //replace 5000 with the port you are assigned
const port = process.env.PORT || 5000

app.use(express.static('html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.get('*', function(req, res) {
    res.status(404).sendFile(__dirname + '/html/404.html')
});

try {
    app.listen(port, () => {
        console.log(`Server running at port ${port}`);
    })
} catch (error) {
    console.log("there has been an error trying to start the express server\nerror: " + error)
}