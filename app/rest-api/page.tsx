import { CodeBlock } from "@/components/ui/code-block";

export default function RestApiPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">REST API Design</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Best practices for designing clean, efficient REST APIs
        </p>

        <div className="space-y-16">
          {/* REST Principles Section */}
          <section id="rest-principles" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              REST Principles
            </h2>
            <p className="text-zinc-300">
              REST (Representational State Transfer) is an architectural style for designing networked applications. 
              RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Core REST Principles</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><span className="text-green-400 font-semibold">Client-Server Architecture:</span> Separation of concerns</li>
                  <li><span className="text-green-400 font-semibold">Statelessness:</span> No client context stored on server</li>
                  <li><span className="text-green-400 font-semibold">Cacheability:</span> Responses declare themselves cacheable or not</li>
                  <li><span className="text-green-400 font-semibold">Layered System:</span> Client can't tell if connected directly to server</li>
                  <li><span className="text-green-400 font-semibold">Uniform Interface:</span> Standardized resource identification and manipulation</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Resource Naming Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Use nouns, not verbs for resources</li>
                  <li>Use plural nouns for collections</li>
                  <li>Use lowercase and hyphens for URLs</li>
                  <li>Keep URLs simple and hierarchical</li>
                  <li>Be consistent in naming conventions</li>
                  <li>Use query parameters for filtering/sorting</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-4">
              <h3 className="text-lg font-medium mb-2">HTTP Methods for CRUD Operations</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-2 px-3 font-medium">HTTP Method</th>
                      <th className="text-left py-2 px-3 font-medium">CRUD Operation</th>
                      <th className="text-left py-2 px-3 font-medium">Example</th>
                      <th className="text-left py-2 px-3 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="py-2 px-3 text-green-400">GET</td>
                      <td className="py-2 px-3">Read</td>
                      <td className="py-2 px-3"><code>GET /users</code></td>
                      <td className="py-2 px-3">Retrieve all users</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-green-400">GET</td>
                      <td className="py-2 px-3">Read</td>
                      <td className="py-2 px-3"><code>GET /users/123</code></td>
                      <td className="py-2 px-3">Retrieve user with ID 123</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-cyan-400">POST</td>
                      <td className="py-2 px-3">Create</td>
                      <td className="py-2 px-3"><code>POST /users</code></td>
                      <td className="py-2 px-3">Create a new user</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-yellow-400">PUT</td>
                      <td className="py-2 px-3">Update</td>
                      <td className="py-2 px-3"><code>PUT /users/123</code></td>
                      <td className="py-2 px-3">Replace user with ID 123</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-purple-400">PATCH</td>
                      <td className="py-2 px-3">Update</td>
                      <td className="py-2 px-3"><code>PATCH /users/123</code></td>
                      <td className="py-2 px-3">Partially update user with ID 123</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-red-400">DELETE</td>
                      <td className="py-2 px-3">Delete</td>
                      <td className="py-2 px-3"><code>DELETE /users/123</code></td>
                      <td className="py-2 px-3">Delete user with ID 123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* HTTP Status Codes Section */}
          <section id="http-status-codes" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              HTTP Status Codes
            </h2>
            <p className="text-zinc-300 mb-4">
              Using appropriate HTTP status codes helps clients understand the result of their requests. Here are key status codes to use in your REST APIs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-green-400">2xx Success</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li><span className="font-semibold">200 OK:</span> Standard success response</li>
                  <li><span className="font-semibold">201 Created:</span> Resource created successfully</li>
                  <li><span className="font-semibold">204 No Content:</span> Success with no content to return</li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-blue-400">3xx Redirection</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li><span className="font-semibold">301 Moved Permanently:</span> Resource moved permanently</li>
                  <li><span className="font-semibold">302 Found:</span> Resource temporarily moved</li>
                  <li><span className="font-semibold">304 Not Modified:</span> Resource not modified since last request</li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">4xx Client Errors</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li><span className="font-semibold">400 Bad Request:</span> Malformed request syntax</li>
                  <li><span className="font-semibold">401 Unauthorized:</span> Authentication required</li>
                  <li><span className="font-semibold">403 Forbidden:</span> Not enough permissions</li>
                  <li><span className="font-semibold">404 Not Found:</span> Resource not found</li>
                  <li><span className="font-semibold">422 Unprocessable Entity:</span> Validation errors</li>
                  <li><span className="font-semibold">429 Too Many Requests:</span> Rate limit exceeded</li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-5 border border-zinc-800 sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-medium mb-2 text-red-400">5xx Server Errors</h3>
                <ul className="space-y-2 text-zinc-300 text-sm">
                  <li><span className="font-semibold">500 Internal Server Error:</span> Generic server error</li>
                  <li><span className="font-semibold">502 Bad Gateway:</span> Invalid response from upstream</li>
                  <li><span className="font-semibold">503 Service Unavailable:</span> Server temporarily unavailable</li>
                  <li><span className="font-semibold">504 Gateway Timeout:</span> Upstream server timeout</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-900/20 border border-blue-900 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Status Code Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Always return appropriate status codes, not just 200 for everything</li>
                <li>Use 400 Bad Request for validation errors in the request</li>
                <li>Use 401 Unauthorized when authentication is required but not provided</li>
                <li>Use 403 Forbidden when the user is authenticated but doesn't have permissions</li>
                <li>Use 404 Not Found when a resource doesn't exist</li>
                <li>Use 201 Created when a resource is created via POST</li>
                <li>Use 204 No Content for successful DELETE operations</li>
              </ul>
            </div>
          </section>

          {/* Sample CRUD API Section */}
          <section id="sample-crud-api" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Sample CRUD REST API
            </h2>
            <p className="text-zinc-300 mb-6">
              Here's a complete example of a RESTful CRUD API for a users resource using Express.js.
            </p>

            <CodeBlock
              language="javascript"
              title="User Controller (controllers/userController.js)"
              code={`// User controller with CRUD operations
const User = require('../models/User');

// GET /api/users - Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    // Support pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    // Support filtering
    const filter = {};
    if (req.query.role) filter.role = req.query.role;
    
    // Execute query with pagination
    const users = await User.find(filter)
      .skip(skip)
      .limit(limit)
      .select('-password');
    
    // Get total count for pagination info
    const total = await User.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      count: users.length,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      },
      data: users
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/users/:id - Get single user
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: \`User not found with id of \${req.params.id}\`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    // Check for valid ID format
    if (err.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid user ID format'
      });
    }
    next(err);
  }
};

// POST /api/users - Create new user
exports.createUser = async (req, res, next) => {
  try {
    // Validate request body (simplified)
    if (!req.body.email || !req.body.name) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name and email'
      });
    }
    
    // Check for existing user
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'User with this email already exists'
      });
    }
    
    // Create user
    const user = await User.create(req.body);
    
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id - Update user (full replacement)
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return updated user
        runValidators: true // Run model validators
      }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: \`User not found with id of \${req.params.id}\`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/users/:id - Update user (partial update)
exports.patchUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: \`User not found with id of \${req.params.id}\`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/users/:id - Delete user
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: \`User not found with id of \${req.params.id}\`
      });
    }
    
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};`}
            />

            <CodeBlock
              language="javascript"
              title="User Routes (routes/userRoutes.js)"
              code={`const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require('../controllers/userController');

// Middleware example: Authentication
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getAllUsers)
  .post(protect, authorize('admin'), createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(protect, authorize('admin'), updateUser)
  .patch(protect, authorize('admin', 'user'), patchUser)
  .delete(protect, authorize('admin'), deleteUser);

module.exports = router;`}
            />

            <CodeBlock
              language="javascript"
              title="Main App (app.js)"
              code={`const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting - protect against brute force/DoS attacks
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Mount routers
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: \`Cannot find \${req.originalUrl} on this server\`
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`}
            />
          </section>

          {/* API Architecture Section */}
          <section id="api-architecture" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Modular API Architecture
            </h2>
            <p className="text-zinc-300 mb-6">
              A well-structured API separates concerns and follows either MVC (Model-View-Controller) or service-based patterns.
            </p>

            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mb-6">
              <h3 className="text-lg font-medium mb-4 text-purple-400">Recommended API Project Structure</h3>
              <div className="font-mono text-sm text-zinc-300">
                <pre className="whitespace-pre-wrap">
{`project-root/
├── config/               # Configuration files
│   ├── db.js            # Database connection
│   └── config.js        # Environment variables
├── controllers/          # Request handlers
│   ├── authController.js
│   ├── userController.js
│   └── productController.js
├── middleware/           # Custom middleware
│   ├── auth.js          # Authentication middleware
│   ├── errorHandler.js  # Error handling middleware
│   └── validators.js    # Request validation middleware
├── models/               # Data models
│   ├── User.js
│   └── Product.js
├── routes/               # Route definitions
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── productRoutes.js
├── services/             # Business logic (optional)
│   ├── emailService.js
│   └── paymentService.js
├── utils/                # Helper functions
│   ├── apiFeatures.js   # Query building, filtering
│   ├── errorResponse.js # Error class
│   └── logger.js        # Logging utility
├── tests/                # Unit and integration tests
├── app.js               # Express application setup
├── server.js            # Entry point
└── package.json`}
                </pre>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Error Handling Middleware</h3>
            <p className="text-zinc-300 mb-4">
              A centralized error handling middleware provides consistent error responses across your API.
            </p>
            
            <CodeBlock
              language="javascript"
              title="middleware/errorHandler.js"
              code={`// Custom error response class
class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Centralized error handler middleware
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  
  console.log(err.stack);
  
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = \`Resource not found with id of \${err.value}\`;
    error = new ErrorResponse(message, 404);
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 409);
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }
  
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = errorHandler;`}
            />
            
            <h3 className="text-xl font-medium mt-8 mb-3">Authentication Middleware</h3>
            <CodeBlock
              language="javascript"
              title="middleware/auth.js"
              code={`const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {
  let token;
  
  // Get token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } 
  // Optional: Check for token in cookies
  else if (req.cookies.token) {
    token = req.cookies.token;
  }
  
  // Make sure token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user to request
    req.user = await User.findById(decoded.id);
    
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: 'Not authorized to access this route'
    });
  }
};

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to access this route'
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: \`User role \${req.user.role} is not authorized to access this route\`
      });
    }
    
    next();
  };
};`}
            />
          </section>

          {/* API Documentation Section */}
          <section id="api-documentation" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              API Documentation
            </h2>
            <p className="text-zinc-300 mb-6">
              Good documentation is crucial for API adoption. Consider using tools like Swagger/OpenAPI to document your endpoints.
            </p>

            <CodeBlock
              language="javascript"
              title="Setting up Swagger for Express API"
              code={`const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Documentation',
      version: '1.0.0',
      description: 'A REST API built with Express',
      contact: {
        name: 'API Developer',
        email: 'developer@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  // Path to the API docs
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Use swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Your API routes here...

app.listen(3000, () => console.log('Server running on port 3000'));`}
            />

            <CodeBlock
              language="javascript"
              title="Documenting Routes with Swagger JSDoc Comments"
              code={`/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: The user email
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           description: User role
 *       example:
 *         id: 60d21b4967d0d8992e610c85
 *         name: John Doe
 *         email: john@example.com
 *         role: user
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Server error
 */

// This would go in userRoutes.js file
const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/userController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);

module.exports = router;`}
            />

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">REST API Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-200">
                <li>Use plural nouns for resource endpoints (e.g., <code>/users</code> not <code>/user</code>)</li>
                <li>Use appropriate HTTP status codes for different scenarios</li>
                <li>Version your API (e.g., <code>/v1/users</code>)</li>
                <li>Implement pagination for collection endpoints</li>
                <li>Use query parameters for filtering, sorting, and pagination</li>
                <li>Implement proper authentication and authorization</li>
                <li>Provide comprehensive error responses</li>
                <li>Document your API with tools like Swagger/OpenAPI</li>
                <li>Use HATEOAS (Hypermedia as the Engine of Application State) for discoverability</li>
                <li>Implement rate limiting to prevent abuse</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}