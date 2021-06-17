//check the readme.md file
const port = null;


//have you set your port?
if (port == null) {
    console.log('==================================================')
    console.log('\x1b[41m', "Fail: you have not set up your port.");
    console.log('\x1b[41m', "please look at the readme.md file under the topic \"seting port\"");
    console.log('==================================================')
    process.exit(9);
}


//express server
const express = require('express');
const app = express();
app.use(express.static('html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.get('*', function(req, res) {
    res.status(404).sendFile(__dirname + '/html/404.html');
});

try {
    app.listen(port, () => {
        //keep this here or your server wont know it is running
        console.log('running')
        console.log(`Server running at port ${port}`);
        console.log("\n\n\nremember to check the readme.md file if you are stuck with anything or get an error")
    })
} catch (error) {
    console.log("there has been an error trying to start the express server\nerror: " + error)
}
