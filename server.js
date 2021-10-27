const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
    });

    console.log("LOG: Production mode...");

} else {
    app.use(express.static(path.join(__dirname, 'dist')));

    console.log("LOG: Development mode...");
}

app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
    console.log('listening on port ', server.address().port);
});