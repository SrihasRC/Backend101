import { CodeBlock } from "@/components/ui/code-block";

export default function ProjectStructurePage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Project Structure</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Learn how to organize your Node.js and Express.js projects for maintainability and scalability
        </p>

        <div className="space-y-16">
          {/* Basic Structure Section */}
          <section id="basic-structure" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Basic Project Structure
            </h2>
            <p className="text-zinc-300">
              A well-organized project structure is crucial for maintainability as your application grows. 
              Here's a foundation that works well for most Node.js applications.
            </p>
            
            <CodeBlock
              language="text"
              title="Basic Node.js Project Structure"
              code={`project-root/
├── src/                    # Application source code
│   ├── index.js            # Application entry point
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Data models
│   ├── routes/             # Route definitions
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── middleware/         # Custom middleware
├── public/                 # Static files (images, CSS, etc.)
├── tests/                  # Test files
├── node_modules/           # Dependencies (git ignored)
├── .env                    # Environment variables (git ignored)
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Key Directories</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><strong>src/</strong> - Source code separated by responsibility</li>
                  <li><strong>config/</strong> - Application configuration</li>
                  <li><strong>controllers/</strong> - Request handlers</li>
                  <li><strong>models/</strong> - Data models and database schema</li>
                  <li><strong>routes/</strong> - API route definitions</li>
                  <li><strong>middleware/</strong> - Custom Express middleware</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Keep related code together</li>
                  <li>Use descriptive directory names</li>
                  <li>Maintain separation of concerns</li>
                  <li>Isolate third-party integrations</li>
                  <li>Store configuration separately</li>
                  <li>Include comprehensive documentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Express.js Structure Section */}
          <section id="express-structure" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Express.js Application Structure
            </h2>
            <p className="text-zinc-300">
              Express.js applications benefit from a clear structure that separates routes, controllers, and business logic.
              Here's a recommended structure for Express applications.
            </p>
            
            <CodeBlock
              language="text"
              title="Express.js Project Structure"
              code={`express-app/
├── src/
│   ├── app.js              # Express app setup
│   ├── server.js           # Server startup
│   ├── api/                # API routes and controllers
│   │   ├── users/          # User resource
│   │   │   ├── user.routes.js
│   │   │   ├── user.controller.js
│   │   │   ├── user.service.js
│   │   │   ├── user.model.js
│   │   │   └── user.validation.js
│   │   ├── posts/          # Post resource
│   │   │   ├── post.routes.js
│   │   │   └── ...
│   │   └── index.js        # API routes entry
│   ├── config/
│   │   ├── index.js        # Config exports
│   │   ├── db.config.js    # Database config
│   │   └── env.config.js   # Environment variables
│   ├── middleware/
│   │   ├── auth.js         # Authentication middleware
│   │   ├── error.js        # Error handling middleware
│   │   ├── validate.js     # Validation middleware
│   │   └── index.js        # Middleware exports
│   ├── utils/
│   │   ├── logger.js       # Logging utility
│   │   └── helpers.js      # Helper functions
│   └── database/
│       ├── index.js        # Database connection
│       └── migrations/     # Database migrations
├── public/                 # Static assets
├── tests/                  # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── fixtures/           # Test fixtures
├── logs/                   # Application logs
├── .env
├── .env.example
├── package.json
└── README.md`}
            />

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mb-6">
              <h3 className="text-lg font-medium mb-3">Feature-based Organization</h3>
              <p className="text-zinc-300 mb-3">
                Instead of organizing by technical role (routes, controllers, models), consider organizing by feature or resource.
                This approach groups all related files together, making it easier to understand and maintain a specific feature.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Technical Organization</h4>
                  <pre className="bg-zinc-950 p-3 rounded text-sm text-zinc-300">
                    src/<br/>
                    ├── routes/<br/>
                    │   ├── users.js<br/>
                    │   └── posts.js<br/>
                    ├── controllers/<br/>
                    │   ├── users.js<br/>
                    │   └── posts.js<br/>
                    ├── models/<br/>
                    │   ├── User.js<br/>
                    │   └── Post.js<br/>
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Feature Organization</h4>
                  <pre className="bg-zinc-950 p-3 rounded text-sm text-zinc-300">
                    src/<br/>
                    ├── features/<br/>
                    │   ├── users/<br/>
                    │   │   ├── routes.js<br/>
                    │   │   ├── controller.js<br/>
                    │   │   └── model.js<br/>
                    │   └── posts/<br/>
                    │       ├── routes.js<br/>
                    │       ├── controller.js<br/>
                    │       └── model.js<br/>
                  </pre>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-3">Express App Setup Example</h3>
            <p className="text-zinc-300 mb-4">
              Here's how to structure your main Express application file (app.js):
            </p>
            <CodeBlock
              language="javascript"
              title="src/app.js"
              code={`// Import dependencies
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';

// Import routes
import apiRoutes from './api';

// Import middleware
import { errorHandler, notFound } from './middleware/error';

// Import configuration
import config from './config';

// Initialize Express app
const app = express();

// Security and utility middleware
app.use(helmet());                                // Set security-related HTTP headers
app.use(cors());                                  // Enable CORS
app.use(compression());                           // Compress responses
app.use(morgan(config.environment === 'development' ? 'dev' : 'combined')); // HTTP request logging

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', apiRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Error handling middleware (should be last)
app.use(notFound);
app.use(errorHandler);

export default app;
`}
            />
          </section>

          {/* MVC Pattern Section */}
          <section id="mvc-pattern" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              MVC Pattern for Express Applications
            </h2>
            <p className="text-zinc-300">
              The Model-View-Controller (MVC) pattern is a popular architectural pattern that can be applied to Express.js applications.
              It separates your application into three interconnected components.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Model</h3>
                <p className="text-zinc-300">
                  Represents your data structures and handles database interactions.
                  Models define how data is stored, retrieved, and modified.
                </p>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">View</h3>
                <p className="text-zinc-300">
                  Represents the presentation layer. In REST APIs, this is typically the JSON response.
                  For web applications, views are often templated HTML files.
                </p>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Controller</h3>
                <p className="text-zinc-300">
                  Acts as an interface between Model and View. Controllers process incoming requests,
                  interact with models, and return appropriate responses.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-3">MVC Structure Example</h3>
            <CodeBlock
              language="text"
              title="MVC Project Structure"
              code={`mvc-express-app/
├── src/
│   ├── models/             # Data models
│   │   ├── user.model.js
│   │   └── post.model.js
│   ├── views/              # Templates (if rendering HTML)
│   │   ├── layouts/
│   │   ├── partials/
│   │   └── pages/
│   ├── controllers/        # Request handlers
│   │   ├── user.controller.js
│   │   └── post.controller.js
│   ├── routes/             # Route definitions
│   │   ├── user.routes.js
│   │   └── post.routes.js
│   ├── services/           # Business logic
│   │   ├── user.service.js
│   │   └── post.service.js
│   ├── middleware/         # Custom middleware
│   ├── config/             # Configuration
│   └── app.js              # Express setup
└── server.js               # Application entry point`}
            />

            <h4 className="text-lg font-medium mt-6 mb-3">Example Files</h4>
            <div className="space-y-6">
              <CodeBlock
                language="javascript"
                title="src/models/user.model.js"
                code={`import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to check password
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;`}
              />

              <CodeBlock
                language="javascript"
                title="src/controllers/user.controller.js"
                code={`import userService from '../services/user.service.js';

// Controller methods
const userController = {
  // Get all users
  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  },

  // Get user by ID
  getUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  },

  // Create new user
  createUser: async (req, res, next) => {
    try {
      const userData = req.body;
      const newUser = await userService.createUser(userData);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      next(error);
    }
  },

  // Update user
  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await userService.updateUser(id, userData);
      
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
      next(error);
    }
  },

  // Delete user
  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await userService.deleteUser(id);
      
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      
      res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
};

export default userController;`}
              />

              <CodeBlock
                language="javascript"
                title="src/services/user.service.js"
                code={`import User from '../models/user.model.js';

// Service layer for user operations
const userService = {
  // Get all users
  getAllUsers: async () => {
    return await User.find().select('-password');
  },

  // Get user by ID
  getUserById: async (id) => {
    return await User.findById(id).select('-password');
  },

  // Create new user
  createUser: async (userData) => {
    const user = new User(userData);
    await user.save();
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
  },

  // Update user
  updateUser: async (id, updateData) => {
    // Don't let password be updated through this method
    if (updateData.password) {
      delete updateData.password;
    }
    
    return await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');
  },

  // Delete user
  deleteUser: async (id) => {
    const user = await User.findByIdAndDelete(id);
    return !!user;
  }
};

export default userService;`}
              />

              <CodeBlock
                language="javascript"
                title="src/routes/user.routes.js"
                code={`import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router = Router();

// Public routes
router.post('/register', userController.createUser);

// Protected routes
router.use(authMiddleware);

router.get('/profile', userController.getUserById);
router.put('/profile', userController.updateUser);

// Admin only routes
router.use(adminMiddleware);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;`}
              />
            </div>

            <div className="bg-amber-900/30 border border-amber-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-2">When to Use MVC</h3>
              <p className="text-zinc-200 mb-3">
                The MVC pattern works well for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Applications with complex business logic</li>
                <li>Projects where multiple developers work on different layers</li>
                <li>Applications that render both API responses and HTML views</li>
                <li>Larger projects that need clear separation of concerns</li>
              </ul>
            </div>
          </section>

          {/* Advanced Structures Section */}
          <section id="advanced-structures" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Advanced Project Structures
            </h2>
            <p className="text-zinc-300">
              For larger applications, consider these more advanced organizational patterns.
            </p>

            <h3 className="text-xl font-medium mt-4 mb-3">Domain-Driven Design (DDD)</h3>
            <p className="text-zinc-300 mb-4">
              DDD organizes code around business domains and concepts, rather than technical layers.
            </p>
            <CodeBlock
              language="text"
              title="Domain-Driven Design Structure"
              code={`express-ddd-app/
├── src/
│   ├── domains/
│   │   ├── users/                # Users domain
│   │   │   ├── user.entity.js    # Domain entity
│   │   │   ├── user.repository.js # Data access
│   │   │   ├── user.service.js   # Business logic
│   │   │   ├── user.controller.js # API endpoints
│   │   │   ├── user.routes.js    # Route definitions
│   │   │   ├── dto/              # Data Transfer Objects
│   │   │   │   ├── create-user.dto.js
│   │   │   │   └── update-user.dto.js
│   │   │   └── index.js          # Domain exports
│   │   ├── billing/              # Billing domain
│   │   ├── notifications/        # Notifications domain
│   │   └── products/             # Products domain
│   ├── infrastructure/           # Technical concerns
│   │   ├── database/             # Database connection/setup
│   │   ├── logger/               # Logging setup
│   │   ├── cache/                # Caching mechanism
│   │   ├── messaging/            # Message queues
│   │   └── monitoring/           # Application monitoring
│   ├── interfaces/               # Interface adapters
│   │   ├── http/                 # HTTP-specific code
│   │   │   ├── middleware/       # Express middleware
│   │   │   ├── errors/           # Error handling
│   │   │   └── app.js            # Express setup
│   │   └── jobs/                 # Background jobs
│   ├── application/              # Application services
│   │   ├── auth/                 # Authentication logic
│   │   └── search/               # Search functionality
│   ├── config/                   # Configuration
│   └── shared/                   # Shared utilities
│       ├── utils/
│       ├── constants/
│       └── types/
└── server.js                     # Application entry point`}
            />

            <h3 className="text-xl font-medium mt-6 mb-3">Clean Architecture</h3>
            <p className="text-zinc-300 mb-4">
              Clean Architecture emphasizes separation of concerns with layers that depend only on inner layers.
            </p>
            <CodeBlock
              language="text"
              title="Clean Architecture Structure"
              code={`clean-express-app/
├── src/
│   ├── entities/                 # Enterprise business rules
│   │   ├── user.entity.js
│   │   └── product.entity.js
│   ├── use-cases/                # Application business rules
│   │   ├── user/
│   │   │   ├── create-user.js
│   │   │   ├── get-user.js
│   │   │   └── update-user.js
│   │   └── product/
│   │       ├── create-product.js
│   │       └── get-product.js
│   ├── interfaces/               # Interface adapters
│   │   ├── controllers/
│   │   │   ├── user.controller.js
│   │   │   └── product.controller.js
│   │   ├── repositories/
│   │   │   ├── user.repository.js
│   │   │   └── product.repository.js
│   │   └── presenters/
│   │       ├── user.presenter.js
│   │       └── product.presenter.js
│   ├── frameworks/               # Frameworks & drivers
│   │   ├── web/
│   │   │   ├── routes/
│   │   │   ├── middleware/
│   │   │   └── app.js
│   │   ├── database/
│   │   │   ├── mongodb/
│   │   │   └── redis/
│   │   └── external-services/
│   │       ├── payment-gateway/
│   │       └── email-service/
│   └── config/
└── server.js`}
            />

            <h3 className="text-xl font-medium mt-6 mb-3">Microservices Architecture</h3>
            <p className="text-zinc-300 mb-4">
              In a microservices approach, your application is divided into multiple independent services.
            </p>
            <CodeBlock
              language="text"
              title="Microservices Project"
              code={`microservices-project/
├── gateway-service/              # API Gateway
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── user-service/                 # User management
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── product-service/              # Product catalog
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── order-service/                # Order processing
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── payment-service/              # Payment processing
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── notification-service/         # Notifications
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml            # Service orchestration
└── README.md                     # Project documentation`}
            />

            <div className="bg-cyan-900/30 border border-cyan-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Project Structure Evolution</h3>
              <p className="text-zinc-200 mb-3">
                Your project structure should evolve with your application:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>Small projects</strong>: Start with a simple structure</li>
                <li><strong>Growing projects</strong>: Adopt MVC or feature-based organization</li>
                <li><strong>Large applications</strong>: Consider DDD or Clean Architecture</li>
                <li><strong>Scaling further</strong>: Break into microservices when appropriate</li>
              </ul>
              <p className="text-zinc-300 mt-3">
                Don't over-engineer at the beginning—let your structure grow with your needs.
              </p>
            </div>
          </section>

          {/* Tooling and Config Files Section */}
          <section id="config-files" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Configuration Files and Tooling
            </h2>
            <p className="text-zinc-300">
              Modern Node.js projects use several configuration files to manage dependencies, linting, testing, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Essential Configuration Files</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><code>package.json</code> - Dependencies and scripts</li>
                  <li><code>.env</code> - Environment variables</li>
                  <li><code>.gitignore</code> - Files to ignore in Git</li>
                  <li><code>tsconfig.json</code> - TypeScript configuration</li>
                  <li><code>.eslintrc</code> - Linting rules</li>
                  <li><code>.prettierrc</code> - Code formatting</li>
                  <li><code>jest.config.js</code> - Testing configuration</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Development Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><strong>nodemon</strong> - Auto-restart during development</li>
                  <li><strong>eslint</strong> - Code linting</li>
                  <li><strong>prettier</strong> - Code formatting</li>
                  <li><strong>husky</strong> - Git hooks</li>
                  <li><strong>lint-staged</strong> - Run linters on staged files</li>
                  <li><strong>jest</strong> / <strong>mocha</strong> - Testing</li>
                  <li><strong>dotenv</strong> - Environment variables</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-3">Example Configuration Files</h3>
            <div className="space-y-6">
              <CodeBlock
                language="json"
                title="package.json"
                code={`{
  "name": "express-api",
  "version": "1.0.0",
  "description": "Express.js API with best practices",
  "main": "dist/server.js",
  "scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon --exec babel-node src/server.js",
    "build": "babel src -d dist",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write 'src/**/*.js'"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^6.0.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.1",
    "morgan": "^1.10.0",
    "winston": "^3.8.2"
  },
  "devDependencies": {
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.0",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "eslint": "^8.35.0",
    "eslint-config-prettier": "^8.7.0",
    "husky": "^8.0.3",
    "jest": "^29.5.0",
    "lint-staged": "^13.1.2",
    "nodemon": "^2.0.21",
    "prettier": "^2.8.4",
    "supertest": "^6.3.3"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}`}
              />

              <CodeBlock
                language="javascript"
                title=".eslintrc.js"
                code={`module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': ['error', {
      singleQuote: true,
      semi: true,
      trailingComma: 'es5',
    }],
  },
};`}
              />

              <CodeBlock
                language="javascript"
                title=".env.example"
                code={`# Server Configuration
NODE_ENV=development
PORT=3000
API_PREFIX=/api/v1

# JWT Secret
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/my_database
MONGODB_TEST_URI=mongodb://localhost:27017/test_database

# Logging
LOG_LEVEL=debug

# External Services
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=user@example.com
MAIL_PASS=your_password_here

# Redis Cache (optional)
REDIS_HOST=localhost
REDIS_PORT=6379`}
              />

              <CodeBlock
                language="javascript"
                title="jest.config.js"
                code={`module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'lcov', 'clover'],
  verbose: true,
};`}
              />

              <CodeBlock
                language="javascript"
                title="babel.config.js"
                code={`module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};`}
              />
            </div>
          </section>

          {/* Project Structure Best Practices */}
          <section id="best-practices" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Project Structure Best Practices
            </h2>
            <p className="text-zinc-300">
              Follow these best practices to maintain a clean and scalable project structure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Code Organization</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Separate business logic from route handlers</li>
                  <li>Group related functionality together</li>
                  <li>Use clear, consistent naming conventions</li>
                  <li>Keep files small and focused on single responsibility</li>
                  <li>Create abstractions for database operations</li>
                  <li>Export public interfaces from directories</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Configuration & Security</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Keep environment variables in .env files (not in code)</li>
                  <li>Use config files for different environments</li>
                  <li>Never commit secrets or credentials to version control</li>
                  <li>Validate and sanitize all external inputs</li>
                  <li>Store validation schemas separately</li>
                  <li>Use middleware for cross-cutting concerns</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Final Recommendations</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>Start simple</strong> - Don't over-architect early on</li>
                <li><strong>Be consistent</strong> - Follow the same patterns throughout</li>
                <li><strong>Document decisions</strong> - Explain why certain architectural choices were made</li>
                <li><strong>Refactor early</strong> - Don't wait until technical debt becomes overwhelming</li>
                <li><strong>Embrace modularity</strong> - Keep components loosely coupled for easier changes</li>
                <li><strong>Test thoroughly</strong> - Well-structured code is easier to test</li>
              </ul>
            </div>
          </section>

          {/* Starter Templates */}
          <section id="starter-templates" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Recommended Starter Templates
            </h2>
            <p className="text-zinc-300 mb-6">
              Instead of starting from scratch, consider using these well-structured templates:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-cyan-600 transition-all">
                <h3 className="text-xl font-medium mb-2">Express Generator</h3>
                <p className="text-zinc-400 mb-4">Official Express.js application generator</p>
                <div className="mb-4">
                  <code className="bg-zinc-950 px-2 py-1 rounded text-sm">npx express-generator --no-view my-app</code>
                </div>
                <a href="https://expressjs.com/en/starter/generator.html" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                  Learn more →
                </a>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-cyan-600 transition-all">
                <h3 className="text-xl font-medium mb-2">Express TypeScript Boilerplate</h3>
                <p className="text-zinc-400 mb-4">TypeScript starter with best practices</p>
                <div className="mb-4">
                  <code className="bg-zinc-950 px-2 py-1 rounded text-sm">git clone https://github.com/w3tecch/express-typescript-boilerplate.git</code>
                </div>
                <a href="https://github.com/w3tecch/express-typescript-boilerplate" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                  Learn more →
                </a>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-cyan-600 transition-all">
                <h3 className="text-xl font-medium mb-2">Nest.js</h3>
                <p className="text-zinc-400 mb-4">Progressive Node.js framework</p>
                <div className="mb-4">
                  <code className="bg-zinc-950 px-2 py-1 rounded text-sm">npm i -g @nestjs/cli && nest new project-name</code>
                </div>
                <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}