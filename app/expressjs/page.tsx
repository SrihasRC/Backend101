import { CodeBlock } from "@/components/ui/code-block";

export default function ExpressjsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Express.js Fundamentals</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Build robust web servers and APIs with Express.js
        </p>

        <div className="space-y-16">
          {/* Creating a Server Section */}
          <section id="creating-server" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Creating an Express Server
            </h2>
            <p className="text-zinc-300">
              Express.js makes it simple to create web servers in Node.js with minimal code. Here's how to set up a basic server:
            </p>
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 my-4">
              <h3 className="text-lg font-medium mb-2">Installation</h3>
              <div className="font-mono text-sm bg-black p-3 rounded">
                $ npm install express
              </div>
            </div>

            <CodeBlock
              language="javascript"
              title="Basic Express Server"
              code={`// Import the express module
import express from 'express';

// Create an Express application
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
            />
            
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-6">
              <h3 className="text-lg font-medium mb-2">Key Concepts</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li><span className="text-green-400 font-semibold">Express application:</span> Created using the <code>express()</code> function</li>
                <li><span className="text-green-400 font-semibold">Routes:</span> Define endpoints and handle HTTP methods</li>
                <li><span className="text-green-400 font-semibold">Middleware:</span> Functions that process requests before reaching route handlers</li>
                <li><span className="text-green-400 font-semibold">Response methods:</span> <code>res.send()</code>, <code>res.json()</code>, <code>res.render()</code>, etc.</li>
              </ul>
            </div>
          </section>

          {/* Routing Section */}
          <section id="routing" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Routing
            </h2>
            <p className="text-zinc-300 mb-4">
              Routing refers to how an application's endpoints respond to client requests. Express provides a clean way to define routes for different HTTP methods.
            </p>

            <CodeBlock
              language="javascript"
              title="HTTP Methods in Express"
              code={`// Basic route methods
app.get('/users', (req, res) => {
  // Handle GET request to /users
  res.json({ users: ['John', 'Jane', 'Bob'] });
});

app.post('/users', (req, res) => {
  // Handle POST request to /users
  res.status(201).json({ message: 'User created' });
});

app.put('/users/:id', (req, res) => {
  // Handle PUT request to /users/:id
  const userId = req.params.id;
  res.json({ message: \`User \${userId} updated\` });
});

app.delete('/users/:id', (req, res) => {
  // Handle DELETE request to /users/:id
  const userId = req.params.id;
  res.json({ message: \`User \${userId} deleted\` });
});

app.patch('/users/:id', (req, res) => {
  // Handle PATCH request to /users/:id
  const userId = req.params.id;
  res.json({ message: \`User \${userId} partially updated\` });
});

// Special method for all HTTP methods
app.all('/api/*', (req, res, next) => {
  // Runs for all requests to paths starting with /api/
  console.log('API request received');
  next(); // Pass control to the next handler
});`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Route Parameters</h3>
            <p className="text-zinc-300 mb-4">
              Route parameters are named URL segments used to capture values at specific positions in the URL.
            </p>

            <CodeBlock
              language="javascript"
              title="Working with Route Parameters"
              code={`// Route with parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
  // Access parameters using req.params
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  
  res.json({
    userId: userId,
    bookId: bookId,
    message: \`Fetching book \${bookId} for user \${userId}\`
  });
});

// Optional parameters with ?
app.get('/products/:category/:id?', (req, res) => {
  const category = req.params.category;
  const productId = req.params.id || 'all';
  
  if (productId === 'all') {
    res.json({ message: \`All products in \${category}\` });
  } else {
    res.json({ message: \`Product \${productId} in \${category}\` });
  }
});

// Pattern matching with regular expressions
app.get(/^\/users\/(\d+)$/, (req, res) => {
  // Will match /users/42 but not /users/john
  const userId = req.params[0]; // Capture groups become params array
  res.json({ numericUserId: userId });
});`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Route Handlers</h3>
            <p className="text-zinc-300 mb-4">
              Route handlers can be a single function, an array of functions, or a combination of both.
            </p>

            <CodeBlock
              language="javascript"
              title="Route Handler Patterns"
              code={`// Multiple callback functions
app.get('/complex-route', 
  (req, res, next) => {
    // First handler
    console.log('First handler');
    req.user = { id: 1, name: 'John' };
    next();
  },
  (req, res, next) => {
    // Second handler
    console.log('Second handler');
    req.user.role = 'admin';
    next();
  },
  (req, res) => {
    // Final handler sends response
    res.json({ user: req.user });
  }
);

// Array of handlers
const validateUser = (req, res, next) => {
  if (req.query.token === '1234') {
    next(); // Continue to next handler
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

const getUser = (req, res) => {
  res.json({ user: { id: 1, name: 'John' } });
};

app.get('/profile', [validateUser, getUser]);

// Chaining route methods
app.route('/books')
  .get((req, res) => {
    res.json({ message: 'Get all books' });
  })
  .post((req, res) => {
    res.json({ message: 'Add a book' });
  })
  .put((req, res) => {
    res.json({ message: 'Update all books' });
  });`}
            />
          </section>

          {/* Middleware Section */}
          <section id="middleware" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Middleware
            </h2>
            <p className="text-zinc-300 mb-4">
              Middleware functions have access to the request and response objects, and the next middleware function in the application's request-response cycle. They can execute code, modify request and response objects, end the cycle, or call the next middleware.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Middleware Can:</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Execute any code</li>
                  <li>Modify request and response objects</li>
                  <li>End the request-response cycle</li>
                  <li>Call the next middleware function</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Types of Middleware:</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Application-level (app.use)</li>
                  <li>Router-level (router.use)</li>
                  <li>Error-handling</li>
                  <li>Built-in (express.static)</li>
                  <li>Third-party (body-parser, morgan)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Application-level Middleware</h3>
            <CodeBlock
              language="javascript"
              title="Middleware Examples"
              code={`// Simple logging middleware
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  next(); // Pass control to the next middleware
});

// Middleware with a mount path
app.use('/api', (req, res, next) => {
  // Runs only for requests that start with /api
  console.log('API request detected');
  next();
});

// Custom authorization middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];
  // Validate token (simplified)
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'John' };
    next();
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply authentication to specific routes
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Built-in and Third-party Middleware</h3>
            <CodeBlock
              language="javascript"
              title="Using Common Middleware"
              code={`// Built-in middleware for serving static files
app.use(express.static('public'));

// JSON body parsing middleware
app.use(express.json());

// URL-encoded body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Third-party middleware
import morgan from 'morgan';
app.use(morgan('dev')); // HTTP request logger

import cors from 'cors';
app.use(cors()); // Enable CORS for all routes

import cookieParser from 'cookie-parser';
app.use(cookieParser()); // Parse cookies`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Error-handling Middleware</h3>
            <p className="text-zinc-300 mb-4">
              Error-handling middleware functions take four arguments instead of the usual three: (err, req, res, next).
            </p>
            
            <CodeBlock
              language="javascript"
              title="Error Handling"
              code={`// Regular middleware
app.get('/user/:id', (req, res, next) => {
  // Simulate database error
  const userId = parseInt(req.params.id);
  
  if (isNaN(userId)) {
    // Create and pass an error to the error handler
    const err = new Error('Invalid user ID');
    err.status = 400;
    return next(err);
  }
  
  if (userId === 0) {
    // Simulate a server error
    throw new Error('Server error occurred');
  }
  
  res.json({ id: userId, name: 'User ' + userId });
});

// Custom 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error-handling middleware (always has 4 parameters)
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Send error response
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});`}
            />
          </section>

          {/* Request and Response Objects Section */}
          <section id="req-res" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Request and Response Objects
            </h2>
            <p className="text-zinc-300 mb-4">
              Express extends the Node.js request and response objects with additional methods and properties.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Request Object (req)</h3>
            <CodeBlock
              language="javascript"
              title="Working with the Request Object"
              code={`app.get('/example', (req, res) => {
  // URL information
  console.log(req.path);           // Path part of URL: /example
  console.log(req.hostname);       // Hostname from Host header: example.com
  console.log(req.ip);             // Client's IP address
  
  // Query parameters (?name=John&age=30)
  console.log(req.query.name);     // "John"
  console.log(req.query.age);      // "30"
  
  // Route parameters
  // For route: /users/:id
  console.log(req.params.id);      // The value of the :id parameter
  
  // Request body (requires body-parsing middleware)
  console.log(req.body);           // POST/PUT request body
  
  // Headers
  console.log(req.get('Content-Type'));  // Value of Content-Type header
  console.log(req.headers);              // All headers
  
  // Cookies (requires cookie-parser middleware)
  console.log(req.cookies);        // All cookies
  
  // HTTP method
  console.log(req.method);         // GET, POST, etc.
  
  // Authentication (if middleware sets it)
  console.log(req.user);           // User object from auth middleware
  
  // Original URL and base URL
  console.log(req.originalUrl);    // Full original URL
  console.log(req.baseUrl);        // Base URL for the route
  
  // Session (requires express-session middleware)
  console.log(req.session);        // Session object
  
  res.send('Check server console for output');
});`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Response Object (res)</h3>
            <CodeBlock
              language="javascript"
              title="Working with the Response Object"
              code={`app.get('/response-examples', (req, res) => {
  // Basic response
  // res.send('Hello World!');  // Sends a string response
  
  // Sending JSON
  // res.json({ message: 'Hello World' });  // Automatically sets Content-Type
  
  // Setting status code
  // res.status(201).json({ message: 'Resource created' });
  
  // Chaining methods
  // res.status(200).set('Content-Type', 'text/plain').send('OK');
  
  // Redirect
  // res.redirect('/new-page');  // 302 redirect by default
  // res.redirect(301, '/permanent-page');  // 301 permanent redirect
  
  // Setting headers
  // res.set('X-Custom-Header', 'Custom Value');
  // res.set({
  //   'Content-Type': 'text/plain',
  //   'X-Custom-Header': 'Custom Value'
  // });
  
  // Setting cookies
  // res.cookie('name', 'value', { maxAge: 900000, httpOnly: true });
  
  // Clearing cookies
  // res.clearCookie('name');
  
  // Send files
  // res.sendFile('/path/to/file.pdf');
  
  // Download files
  // res.download('/path/to/file.pdf', 'user-facing-filename.pdf');
  
  // Rendering templates (requires view engine setup)
  // res.render('index', { title: 'Express', message: 'Hello!' });
  
  // Sending status only
  // res.sendStatus(200);  // Equivalent to res.status(200).send('OK')
  
  // More complex example
  res.format({
    'text/plain': () => {
      res.send('Hello World as text');
    },
    'text/html': () => {
      res.send('<h1>Hello World as HTML</h1>');
    },
    'application/json': () => {
      res.json({ message: 'Hello World as JSON' });
    },
    default: () => {
      res.status(406).send('Not Acceptable');
    }
  });
});`}
            />

            <div className="bg-cyan-900/30 border border-cyan-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Pro Tips: Request & Response</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-200">
                <li>Always set proper status codes (200 for success, 201 for created, 400 for bad request, etc.)</li>
                <li>Set appropriate Content-Type headers</li>
                <li>Use <code>res.locals</code> to pass data between middleware</li>
                <li>Close the response cycle with <code>res.send()</code>, <code>res.json()</code>, <code>res.end()</code>, etc.</li>
                <li>Parse incoming request bodies using appropriate middleware</li>
                <li>Validate and sanitize request parameters and body content</li>
              </ul>
            </div>
          </section>

          {/* Express Router Section */}
          <section id="express-router" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Express Router
            </h2>
            <p className="text-zinc-300 mb-4">
              Express Router is a mini-Express application that provides routing APIs like <code>.use()</code>, <code>.get()</code>, <code>.post()</code>, and <code>.route()</code>. It helps organize your routes into modular, mountable route handlers.
            </p>
            
            <div className="flex flex-col gap-6">
              <CodeBlock
                language="javascript"
                title="users.js - Router File"
                code={`// users.js - A dedicated router module
import express from 'express';
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Users Router Time:', Date.now());
  next();
});

// Define routes on the router
router.get('/', (req, res) => {
  res.json({ users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]});
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User ' + req.params.id });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'User created', user: req.body });
});

// Use route() for route chaining
router.route('/:id/profile')
  .get((req, res) => {
    res.json({ userId: req.params.id, profile: { /* profile data */ } });
  })
  .put((req, res) => {
    res.json({ message: \`Profile updated for user \${req.params.id}\` });
  });

export default router;`}
              />

              <CodeBlock
                language="javascript"
                title="app.js - Main Application"
                code={`// app.js - Main application file
import express from 'express';
import usersRouter from './users.js';
import productsRouter from './products.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mount routers at specific paths
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('API server is running');
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

export default app;`}
              />
            </div>
            
            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Benefits of Using Router</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-200">
                <li>Better code organization with modular routes</li>
                <li>Reusable route groups</li>
                <li>Middleware scoped to specific routes</li>
                <li>Easier maintenance and testing</li>
                <li>More readable code structure</li>
              </ul>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}