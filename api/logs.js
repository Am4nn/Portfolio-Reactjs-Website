const fs = require('fs');
const path = require("path");

export default function handler(request, response) {
    try {
        const logData = fs.readFileSync(path.join(__dirname, "./server.logs")).toString();
        return response.status(200).send(logData);
    } catch (error) {
        return response.status(400).json({ msg: 'Internal Error', error });
    }
}