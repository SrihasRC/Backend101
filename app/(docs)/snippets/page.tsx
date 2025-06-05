import { CodeBlock } from "@/components/ui/code-block";

export default function SnippetsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Snippets & References</h1>
        <p className="text-xl text-zinc-400 mb-10">
          A collection of ready-to-use code patterns and solutions for common backend tasks
        </p>

        <div className="space-y-16">
          {/* Common Patterns Section */}
          <section id="common-patterns" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Common Express Patterns
            </h2>
            <p className="text-zinc-300">
              Essential patterns for building Express.js applications quickly and efficiently.
            </p>
            
            <div className="space-y-8 py-4">
              <div>
                <h3 className="text-xl font-medium mb-3">Basic Express Server</h3>
                <CodeBlock
                  language="javascript"
                  title="Basic Express Setup"
                  code={`import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Environment Variables</h3>
                <CodeBlock
                  language="javascript"
                  title="Environment Configuration"
                  code={`// Install dotenv
// npm install dotenv

// In your main server file
import 'dotenv/config';
// Alternative: import dotenv from 'dotenv'; dotenv.config();

const DB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;

// Example .env file
// MONGODB_URI=mongodb://localhost:27017/myapp
// JWT_SECRET=your_jwt_secret_key
// PORT=3000`}
                />
              </div>
            </div>
          </section>
          
          {/* Middleware Patterns Section */}
          <section id="middleware-patterns" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Middleware Patterns
            </h2>
            <p className="text-zinc-300">
              Reusable middleware functions for authentication, error handling, and validation.
            </p>
            
            <div className="space-y-8 py-4">
              <div>
                <h3 className="text-xl font-medium mb-3">Authentication Middleware</h3>
                <CodeBlock
                  language="javascript"
                  title="JWT Authentication"
                  code={`import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Usage
router.get('/protected-route', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});`}
                />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Error Handling Middleware</h3>
                <CodeBlock
                  language="javascript"
                  title="Global Error Handler"
                  code={`// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  
  // Development error response (detailed)
  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      error: err,
      stack: err.stack
    });
  }
  
  // Production error response (limited details)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message
    });
  }
  
  // For unknown errors in production
  console.error('ERROR 💥', err);
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong'
  });
};

// Usage
app.use(errorHandler);

// Throwing custom errors
app.get('/item/:id', (req, res, next) => {
  try {
    const item = findItem(req.params.id);
    if (!item) {
      throw new AppError('Item not found', 404);
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
});`}
                />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Request Validation</h3>
                <CodeBlock
                  language="javascript"
                  title="Express Validator Setup"
                  code={`// Install express-validator
// npm install express-validator

import { body, validationResult } from 'express-validator';

// Validation middleware
const validateUser = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('name').notEmpty().withMessage('Name is required'),
  
  // Validation result handling
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Usage
router.post('/users', validateUser, userController.createUser);`}
                />
              </div>
            </div>
          </section>
          
          {/* Common Errors Section */}
          <section id="common-errors" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Common Errors & Fixes
            </h2>
            <p className="text-zinc-300">
              Solutions to frequent backend development challenges and error scenarios.
            </p>
            
            <div className="space-y-8 py-4">
              <div>
                <h3 className="text-xl font-medium mb-3">CORS Issues</h3>
                <p className="text-zinc-300 mb-4">
                  Cross-Origin Resource Sharing errors are common when your frontend and backend are on different domains or ports.
                </p>
                <CodeBlock
                  language="javascript"
                  title="CORS Configuration"
                  code={`// Install cors
// npm install cors

import cors from 'cors';

// Basic usage (allow all origins)
app.use(cors());

// Configured usage
const corsOptions = {
  origin: ['http://localhost:3000', 'https://yourfrontend.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));`}
                />
                <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800 mt-2">
                  <p className="text-amber-400">Common Error:</p>
                  <code className="text-sm text-zinc-300">Access to fetch at 'https://api.example.com/data' from origin 'https://app.example.com' has been blocked by CORS policy</code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">Unhandled Promise Rejections</h3>
                <p className="text-zinc-300 mb-4">
                  Failing to handle promise rejections can cause Node.js applications to crash unexpectedly.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Promise Error Handling"
                  code={`// BAD: Not handling promise rejection
app.get('/users/:id', (req, res) => {
  findUserById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    });
  // Missing .catch() - this will crash your server on error!
});

// GOOD: Using async/await with try-catch
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err); // Pass to error handling middleware
  }
});

// GOOD: Using promises with catch
app.get('/users/:id', (req, res, next) => {
  findUserById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    })
    .catch(err => next(err));
});`}
                />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">MongoDB Connection Issues</h3>
                <p className="text-zinc-300 mb-4">
                  Proper MongoDB connection setup with error handling and graceful shutdown.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Robust MongoDB Connection"
                  code={`// Robust MongoDB connection setup
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Options for MongoDB driver 4.0+
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error connecting to MongoDB: \${error.message}\`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('error', err => {
  console.error(\`MongoDB connection error: \${err}\`);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

export default connectDB;`}
                />
              </div>
            </div>
          </section>
          
          {/* Utility Functions Section */}
          <section id="utility-functions" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Utility Functions
            </h2>
            <p className="text-zinc-300">
              Ready-to-use helpers for common backend tasks like pagination and file handling.
            </p>
            
            <div className="space-y-8 py-4">
              <div>
                <h3 className="text-xl font-medium mb-3">Pagination Helper</h3>
                <p className="text-zinc-300 mb-4">
                  Clean implementation of pagination for MongoDB queries with flexible options.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Reusable Pagination Function"
                  code={`// Pagination middleware/utility
const paginate = async (model, req, options = {}) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  
  const results = {
    currentPage: page,
    itemsPerPage: limit,
    totalPages: 0,
    totalItems: 0,
    data: []
  };
  
  results.totalItems = await model.countDocuments(options.filter || {}).exec();
  results.totalPages = Math.ceil(results.totalItems / limit);
  
  try {
    let query = model.find(options.filter || {});
    
    if (options.select) {
      query = query.select(options.select);
    }
    
    if (options.populate) {
      query = query.populate(options.populate);
    }
    
    if (options.sort) {
      query = query.sort(options.sort);
    }
    
    results.data = await query.skip(startIndex).limit(limit).exec();
    
    return results;
  } catch (error) {
    throw error;
  }
};

// Usage
router.get('/posts', async (req, res, next) => {
  try {
    const paginatedResults = await paginate(Post, req, {
      select: 'title content createdAt',
      populate: { path: 'author', select: 'name' },
      sort: { createdAt: -1 }
    });
    
    res.json(paginatedResults);
  } catch (error) {
    next(error);
  }
});`}
                />
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">File Upload Helper</h3>
                <p className="text-zinc-300 mb-4">
                  Manage file uploads securely with validation and configurable storage options.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Multer File Upload Configuration"
                  code={`// Install multer
// npm install multer

import multer from 'multer';
import path from 'path';

// Configure storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, \`\${Date.now()}-\${file.originalname}\`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPG, PNG, GIF and PDF allowed.'), false);
  }
};

// Setup upload middleware
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  }
});

// Usage for single file
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    message: 'File uploaded successfully',
    file: req.file
  });
});

// Usage for multiple files
router.post('/upload-multiple', upload.array('files', 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }
  
  res.json({
    message: \`\${req.files.length} files uploaded successfully\`,
    files: req.files
  });
});`}
                />
              </div>

              <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Pro Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-200">
                  <li>Keep utility functions in separate modules for better organization</li>
                  <li>Use TypeScript interfaces to document expected parameters</li>
                  <li>Add proper error handling to all utility functions</li>
                  <li>Write thorough tests for utility functions as they're often critical infrastructure</li>
                  <li>Consider publishing frequently used utilities as internal npm packages</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}