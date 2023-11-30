const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const dotenv = require('dotenv');

const express = require('express');
// Start up an instance of app
const app = express();

dotenv.config();

/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('public'));
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

// A unique identifier for the given session
const sessionId = uuid.v4();
const projectId = process.env.projectId;
const sessionClient = new dialogflow.SessionsClient({
  credentials: require('./credentials.json'),
});
const sessionPath = sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
);
async function runSample(userQuery) {    
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: userQuery,
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };
  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;
  const fulfillmentText = result.fulfillmentText;
  const intent = result.intent.displayName;
  return {fulfillmentText, intent};
}


app.get('/', (req, res) => res.sendFile(__dirname + '/public/Home.html'));

app.post('/speech', async (req, res) => {
  try {
      const speechText = req.body.speech;
      let result = await runSample(speechText);
      res.status(200).send(result);
  } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
  }
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});


