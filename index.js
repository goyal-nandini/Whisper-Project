// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
    try{
        const result = await axios.get(API_URL);
        const response = result.data;
        res.render("index.ejs", 
            {
                // secret: JSON.stringify(response.secret),MISTAKE
                // user: JSON.stringify(response.username) MISTAKE
                // why you want data in json?? don't you remember we discussed today only.
                // if u want dynamic data then no need to stringify!!
                secret: response.secret,
                user: response.username
            });
    } catch (error){
        res.status(500);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, function () {console.log(`Server is listening on port ${port}`)});
