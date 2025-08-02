# Conference Call
A conference call implementation using WebRTC, Socket.io and Node.js. This demo is ideal for not more than 4 devices.


# Getting Started
- Run `npm ci`
- `cd src`
- `node app.js`

## Configuration

Before starting the server, set the following environment variables with
your Xirsys account details:

- `XIRSYS_USERNAME` – your Xirsys username
- `XIRSYS_CREDENTIAL` – the matching credential or secret
# Features
- Multi-participants
- Toggling of video stream
- Toggling of audio stream (mute & unmute)
- Screen sharing
- Text chat
- Mute individual participant
- Expand participants' stream
- Screen Recording
- Video Recording

 
# Demo
You can test at https://chat.1410inc.xyz.


# Note
You can create a free xirsys account and use their free ice server. You can replace the one used with your own at `src/assets/js/helpers.js`, function `getIceServer()`. The demo may not work as my xirsys account has been deactivated for reasons best known to them (perhaps the hits were too much) and I am not ready to create a new one. Create yours or look for an alternative.

# Note new
You can create a free xirsys account and use their free ice server. Supply your credentials through the `XIRSYS_USERNAME` and `XIRSYS_CREDENTIAL` environment variables. The demo may not work as my xirsys account has been deactivated for reasons best known to them (perhaps the hits were too much) and I am not ready to create a new one. Create yours or look for an alternative.

# Alternative
If you prefer to use PHP Web socket (Ratchet) instead of socket.io and NodeJS, check out the PHP version [here](https://github.com/amirsanni/conference-call-ratchet).
