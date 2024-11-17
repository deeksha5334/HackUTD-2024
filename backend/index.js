import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import cors from 'cors';

const users = [];

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: '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'
});

var userIsAuthorised = false;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// Add this new route
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password, terms } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !password || !terms) {
      return res.status(400).send("All fields are required");
  }

  // Check if user already exists
  const userExists = users.find(user => user.email === email);
  if (userExists) {
      return res.status(400).send("User already exists");
  }

  // Store new user
  const newUser = {
      firstName,
      lastName,
      email,
      password,
      registeredAt: new Date()
  };
  users.push(newUser);

  // Set user as authorized
  userIsAuthorised = true;

  // Redirect to dashboard
  res.sendFile(__dirname + "/public/dashboard.html");
});



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/goals", (req, res) => {
  res.sendFile(__dirname + "/public/goals.html");
});

// Add this with your other routes
app.get("/leaderboard", (req, res) => {
  res.sendFile(__dirname + "/public/leaderboard.html");
});


app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "HackUTD20") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

// New chat route for AI integration
app.post("/chat", async (req, res) => {
  try {
      const userMessage = req.body.message;

      // Create a system message to give context about Eco Track
      const systemMessage = `You are EcoBot, a helpful assistant for Eco Track - an energy management platform. 
      Key features include: real-time monitoring, goal setting & tracking, graphical analysis, and competitive benchmarking. 
      Keep responses brief and friendly. If asked about pricing or specific technical details, 
      guide users to contact the sales team through the contact form.`;

      const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
              { role: "system", content: systemMessage },
              { role: "user", content: userMessage }
          ],
          max_tokens: 150, // Keep responses concise
          temperature: 0.7
      });

      res.json({ 
          success: true, 
          message: completion.choices[0].message.content 
      });

  } catch (error) {
      console.error('Error:', error);
      res.json({ 
          success: false, 
          message: "Sorry, I'm having trouble connecting right now. Please try again later." 
      });
  }
});


app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/dashboard.html");
  } else {
    res.sendFile(__dirname + "/public/register.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});