const express = require('express');
const app = express();
const path = require('path');
const color = require('colors');
const PORT = process.env.PORT || 7878;

app.use(express.static(path.join(__dirname, 'client', 'build')));

try {
    app.listen(PORT, () => {
        console.log(color.bgGreen.white(`the listen on http://localhost:${PORT}`))
    })
} catch (err) {
    console.log(color.red(err))
}