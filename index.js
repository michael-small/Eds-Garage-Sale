const express = require('express');
const path = require('path');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session');
// const passport = require('passport');
// const keys = require('./config/keys');

// require('./models/User');
// require('./services/passport');

// mongoose.connect(keys.mongoURI);

const app = express();

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in ms
//     keys: [keys.cookieKey],
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// require('./routes/authRoutes')(app); //require returns a function, so app is its arg

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
