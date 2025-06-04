import { CodeBlock } from "@/components/ui/code-block";

export default function SnippetsPage() {
  return (
    <div className="container relative">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <main className="flex-1 prose prose-invert max-w-full py-8">
          <h1 className="mb-8">Snippets & References</h1>
          
          <section id="common-patterns">
            <h2>Common Express Patterns</h2>
            
            <div className="my-6">
              <h3>Basic Express Server</h3>
              <CodeBlock
                language="javascript"
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

            <div className="my-6">
              <h3>Environment Variables</h3>
              <CodeBlock
                language="javascript"
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
          </section>
          
          <section id="middleware-patterns">
            <h2>Middleware Patterns</h2>
            
            <div className="my-6">
              <h3>Authentication Middleware</h3>
              <CodeBlock
                language="javascript"
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

            <div className="my-6">
              <h3>Error Handling Middleware</h3>
              <CodeBlock
                language="javascript"
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

            <div className="my-6">
              <h3>Request Validation</h3>
              <CodeBlock
                language="javascript"
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
          </section>
          
          <section id="common-errors">
            <h2>Common Errors & Fixes</h2>
            
            <div className="my-6">
              <h3>CORS Issues</h3>
              <CodeBlock
                language="javascript"
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
              <p>Common Error: <code>Access to fetch at 'https://api.example.com/data' from origin 'https://app.example.com' has been blocked by CORS policy</code></p>
            </div>

            <div className="my-6">
              <h3>Unhandled Promise Rejections</h3>
              <CodeBlock
                language="javascript"
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

            <div className="my-6">
              <h3>MongoDB Connection Issues</h3>
              <CodeBlock
                language="javascript"
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
          </section>
          
          <section id="utility-functions">
            <h2>Utility Functions</h2>
            
            <div className="my-6">
              <h3>Pagination Helper</h3>
              <CodeBlock
                language="javascript"
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

            <div className="my-6">
              <h3>File Upload Helper</h3>
              <CodeBlock
                language="javascript"
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
          </section>
        </main>
      </div>
    </div>
  );
}