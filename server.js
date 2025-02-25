const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://James:OVUAkdgHTp6RB5YQ@cluster0.q8gos.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database");
        module.exports = client;


        const app = require("./app");
        let PORT = 3000;
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`this app is running in port: ${PORT},n https://localhost:${PORT}`);
        });
    }
});