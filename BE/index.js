const server = require('./api/server');

const port = 4500;


server.listen(port, () => { console.log(`\n ** SERVER LISTENING ON PORT: ${port} ** \n`) })


//start server locally with npm start