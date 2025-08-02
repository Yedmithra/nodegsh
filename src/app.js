//Importer les differents modules dont le serveur aura besion
let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );
const { normalize } = require('path');

// Supprimer l'en-tête X-Powered-By pour une meilleure sécurité
app.disable('x-powered-by');

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

//Appel de la page d'accueil
app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );
app.get( '/dessin', ( req, res ) => {
    res.sendFile( __dirname + '/bord.html' );
} );
//active le stream en arrëttant celui en cours
io.of( '/stream' ).on( 'connection', stream ); 


//Connection au port
var port = normalizePort(process.env.PORT || '3000');
app.set('port',port);

//server.listen( port );
//console.log("le serveur est joingnable sur le port 3000");
server.listen(port, () => {
    console.log(`le serveur est joingnable sur le port ${port}`);
});
server.on('error', (err) => {
    console.error('Erreur de binding:', err);
});

//Fonction de gestion des ports
function normalizePort(val){
    var port = parseInt(val, 10);

    if(isNaN(port)){ 
        return val
    }

    if(port >= 0){
        return port;
    }

    return false;
}
