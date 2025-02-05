import express from 'express';
import routes from './routes/index';

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/', routes);

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default server;
