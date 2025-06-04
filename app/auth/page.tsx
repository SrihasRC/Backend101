import { CodeBlock } from "@/components/ui/code-block";

export default function AuthenticationSecurityPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Authentication & Security</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Implement JWT, OAuth, and secure password handling in your Node.js applications
        </p>

        <div className="space-y-16">
          {/* User Authentication Basics Section */}
          <section id="auth-basics" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Authentication Basics
            </h2>
            <p className="text-zinc-300">
              Authentication verifies user identity, while authorization determines what they can access. These are 
              fundamental security concepts for any application.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Authentication Methods</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    <span className="text-yellow-400 font-semibold">Session-based:</span> Uses cookies and server-side sessions
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Token-based:</span> Uses JWT or similar tokens
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">OAuth/OAuth2:</span> Uses third-party providers
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">API Keys:</span> Simple key-based authentication
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Passwordless:</span> Magic links, OTP, etc.
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Common Security Threats</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    <span className="text-red-400 font-semibold">Cross-Site Scripting (XSS)</span>: Injecting malicious scripts
                  </li>
                  <li>
                    <span className="text-red-400 font-semibold">Cross-Site Request Forgery (CSRF)</span>: Unauthorized commands from trusted users
                  </li>
                  <li>
                    <span className="text-red-400 font-semibold">SQL Injection</span>: Inserting malicious SQL code
                  </li>
                  <li>
                    <span className="text-red-400 font-semibold">Man-in-the-Middle</span>: Intercepting communication
                  </li>
                  <li>
                    <span className="text-red-400 font-semibold">Brute Force Attacks</span>: Trying many passwords
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Password Management Section */}
          <section id="password-management" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Password Management
            </h2>
            <p className="text-zinc-300 mb-4">
              Secure password handling is crucial for application security. Never store passwords in plain text.
              Always use strong hashing algorithms with salting.
            </p>

            <CodeBlock
              language="javascript"
              title="Secure Password Handling with bcrypt (ES Modules)"
              code={`import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';

// Register a new user with password hashing
async function registerUser(email, password) {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    
    // Hash password with salt
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Store user in database with hashed password
    const user = await User.create({
      email,
      password: hashedPassword
    });
    
    return user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

// Verify password during login
async function verifyUser(email, password) {
  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }
    
    // Compare provided password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return { success: false, message: 'Invalid credentials' };
    }
    
    return { success: true, user };
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
}

export { registerUser, verifyUser };`}
            />

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Password Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Never store passwords in plain text</li>
                <li>Use strong, industry-standard hashing algorithms (bcrypt, Argon2)</li>
                <li>Implement password complexity requirements</li>
                <li>Add rate limiting to prevent brute force attacks</li>
                <li>Consider account lockout after multiple failed attempts</li>
                <li>Enforce password rotation for sensitive applications</li>
                <li>Implement two-factor authentication (2FA)</li>
              </ul>
            </div>
          </section>

          {/* JWT Authentication Section */}
          <section id="jwt-auth" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              JWT Authentication
            </h2>
            <p className="text-zinc-300 mb-4">
              JSON Web Tokens (JWT) provide a stateless way to handle authentication. They consist of a header, payload, and signature.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">JWT Structure</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    <span className="text-yellow-400 font-semibold">Header:</span> Token type and signing algorithm
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Payload:</span> Claims (user data and metadata)
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Signature:</span> Verifies token integrity
                  </li>
                </ul>
                <p className="mt-4 text-zinc-300">
                  Format: <code className="bg-zinc-800 px-1 py-0.5 rounded">xxxxx.yyyyy.zzzzz</code>
                </p>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">JWT Pros & Cons</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-400">Advantages:</h4>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>Stateless - no server-side session storage</li>
                      <li>Works well with microservices architecture</li>
                      <li>Scalable across multiple servers</li>
                      <li>Cross-domain / CORS compatible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-400">Disadvantages:</h4>
                    <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
                      <li>Cannot be invalidated before expiration</li>
                      <li>Size can become large with many claims</li>
                      <li>Secret key compromise risks</li>
                      <li>Payload is base64 encoded (not encrypted)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Implementing JWT Authentication</h3>

            <CodeBlock
              language="javascript"
              title="Express.js JWT Implementation (ES Modules)"
              code={`import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const JWT_EXPIRES_IN = '1h';

// User login endpoint - generates JWT
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user (assuming User is your DB model)
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Create JWT payload (don't include sensitive info)
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    };
    
    // Sign the token
    jwt.sign(
      payload,
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Middleware to verify JWT token
const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');
  
  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Add user from payload
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Protected route example
app.get('/api/profile', auth, async (req, res) => {
  try {
    // req.user.id comes from the auth middleware
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

// Export for testing purposes
export { app, auth };`}
            />

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">JWT Security Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Use strong, unique secret keys stored in environment variables</li>
                <li>Set appropriate expiration times (short-lived tokens)</li>
                <li>Implement token refresh mechanisms</li>
                <li>Store tokens securely (httpOnly cookies, localStorage with caution)</li>
                <li>Validate all incoming tokens</li>
                <li>Consider implementing a token blacklist for critical systems</li>
                <li>Use HTTPS to prevent token theft via MITM attacks</li>
              </ul>
            </div>
          </section>

          {/* OAuth Integration Section */}
          <section id="oauth-integration" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              OAuth Integration
            </h2>
            <p className="text-zinc-300">
              OAuth allows users to grant limited access to their resources on one site to another site,
              without sharing credentials. OAuth 2.0 is the industry standard for authorization.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Implementing Google OAuth with Passport.js</h3>

            <CodeBlock
              language="javascript"
              title="Google OAuth with Passport.js (ES Modules)"
              code={`import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Serialize/deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// Configure Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
  // This function runs after successful Google authentication
  // Here you would typically:
  // 1. Check if the user exists in your database
  // 2. If not, create a new user
  // 3. Return the user object
  
  const userData = {
    googleId: profile.id,
    displayName: profile.displayName,
    firstName: profile.name?.givenName,
    lastName: profile.name?.familyName,
    email: profile.emails?.[0]?.value,
    avatar: profile.photos?.[0]?.value
  };
  
  // In a real app, you would do something like:
  // User.findOrCreate({ googleId: profile.id }, userData, (err, user) => {
  //   return done(err, user);
  // });
  
  // For this example, we'll just return the userData
  return done(null, userData);
}));

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to the desired page
    res.redirect('/dashboard');
  }
);

// Check authentication middleware
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

// Protected route example
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(\`Welcome, \${req.user.displayName}! <a href="/logout">Logout</a>\`);
});

// Logout route
app.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

export { app };`}
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Google OAuth</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Enable Google sign-in for your application.
                </p>
                <ol className="list-decimal list-inside space-y-1 text-zinc-300 text-sm">
                  <li>Create project in Google Developer Console</li>
                  <li>Enable Google+ API</li>
                  <li>Create OAuth credentials</li>
                  <li>Configure authorized redirect URIs</li>
                  <li>Implement with passport-google-oauth20</li>
                </ol>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">GitHub OAuth</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Allow users to sign in with their GitHub accounts.
                </p>
                <ol className="list-decimal list-inside space-y-1 text-zinc-300 text-sm">
                  <li>Register OAuth app in GitHub Developer Settings</li>
                  <li>Get Client ID and Secret</li>
                  <li>Set Authorization callback URL</li>
                  <li>Implement with passport-github2</li>
                  <li>Request appropriate scopes</li>
                </ol>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Facebook OAuth</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Integrate Facebook Login into your app.
                </p>
                <ol className="list-decimal list-inside space-y-1 text-zinc-300 text-sm">
                  <li>Create app in Facebook Developer Portal</li>
                  <li>Configure Facebook Login product</li>
                  <li>Set Valid OAuth Redirect URIs</li>
                  <li>Implement with passport-facebook</li>
                  <li>Request permissions (email, public_profile)</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Security Best Practices Section */}
          <section id="security-best-practices" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Security Best Practices
            </h2>
            <p className="text-zinc-300 mb-4">
              Implement these Node.js security best practices to protect your applications from common vulnerabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">Headers & CORS Security</h3>
                <CodeBlock
                  language="javascript"
                  title="Security Headers with Helmet (ES Modules)"
                  code={`import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

// Basic security headers
app.use(helmet());

// Configure CORS
app.use(cors({
  origin: 'https://yourtrustedsite.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// More specific helmet configurations
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com'],
    styleSrc: ["'self'", 'trusted-cdn.com'],
    imgSrc: ["'self'", 'data:', 'trusted-cdn.com'],
    connectSrc: ["'self'", 'api.yourdomain.com']
  }
}));

// Prevent clickjacking
app.use(helmet.frameguard({ action: 'deny' }));

// Enable strict-transport-security header
app.use(helmet.hsts({
  maxAge: 15552000, // 180 days in seconds
  includeSubDomains: true,
  preload: true
}));

export { app };`}
                />
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">Input Validation & Sanitization</h3>
                <CodeBlock
                  language="javascript"
                  title="Validation with express-validator (ES Modules)"
                  code={`import express from 'express';
import { body, validationResult } from 'express-validator';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';

const app = express();

// Body parser middleware
app.use(express.json());

// Prevent NoSQL injection
app.use(mongoSanitize());

// Prevent XSS attacks
app.use(xss());

// API route with validation
app.post(
  '/api/users',
  [
    // Validation rules
    body('name').not().isEmpty().trim().escape().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Please include a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long')
      .matches(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])/)
      .withMessage('Password must contain a number, lowercase and uppercase letter')
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Process validated data
    const { name, email, password } = req.body;
    
    // Rest of the handler...
    res.status(201).json({ message: 'User validated successfully' });
  }
);

export { app };`}
                />
              </div>
            </div>

            <div className="bg-red-900/30 border border-red-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Security Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-zinc-200 mb-2">Application Security</h4>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    <li>Keep dependencies updated</li>
                    <li>Use security linters (like ESLint security plugins)</li>
                    <li>Implement proper error handling</li>
                    <li>Use HTTPS everywhere</li>
                    <li>Add rate limiting (express-rate-limit)</li>
                    <li>Validate and sanitize all user inputs</li>
                    <li>Implement proper CORS policy</li>
                    <li>Use security headers (Helmet.js)</li>
                    <li>Store secrets in environment variables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200 mb-2">Authentication & Data Protection</h4>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    <li>Hash passwords with bcrypt/Argon2</li>
                    <li>Implement MFA when possible</li>
                    <li>Set secure, httpOnly cookies</li>
                    <li>Use short-lived JWT tokens</li>
                    <li>Implement proper session management</li>
                    <li>Encrypt sensitive data</li>
                    <li>Use parameterized queries</li>
                    <li>Rotate API keys and secrets regularly</li>
                    <li>Implement proper role-based access control (RBAC)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Rate Limiting Section */}
          <section id="rate-limiting" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Rate Limiting
            </h2>
            <p className="text-zinc-300 mb-4">
              Protect your API from abuse and DoS attacks by implementing rate limiting.
            </p>

            <CodeBlock
              language="javascript"
              title="Rate Limiting with express-rate-limit (ES Modules)"
              code={`import express from 'express';
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Create Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});
redisClient.connect().catch(console.error);

// Basic rate limiter - 100 requests per 15 minutes
const basicLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the 'RateLimit-*' headers
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
  message: 'Too many requests, please try again later'
});

// Apply rate limiting to all requests
app.use(basicLimiter);

// More strict limiter for authentication routes
const authLimiter = rateLimit({
  // Use Redis as store for better rate limiting in clustered environment
  store: new RedisStore({
    client: redisClient,
    prefix: 'auth-limit:'
  }),
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 10, // limit each IP to 10 login attempts per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many login attempts, please try again later'
});

// Apply stricter rate limit to authentication routes
app.use('/api/auth', authLimiter);

// API endpoint example
app.get('/api/data', (req, res) => {
  res.json({ message: 'API data accessed successfully' });
});

app.post('/api/auth/login', (req, res) => {
  // Login logic...
  res.json({ message: 'Login endpoint' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));

export { app };`}
            />

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Rate Limiting Strategies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-zinc-200">Fixed Window</h4>
                  <p className="text-zinc-300 text-sm">
                    Simple approach that counts requests over a fixed time window (e.g., 100 requests per hour).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Sliding Window</h4>
                  <p className="text-zinc-300 text-sm">
                    More precise approach that tracks requests over a rolling time window.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Token Bucket</h4>
                  <p className="text-zinc-300 text-sm">
                    Allows for bursts of traffic while maintaining a consistent average rate.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Scaling Considerations</h4>
                  <p className="text-zinc-300 text-sm">
                    For distributed systems, use Redis or another shared storage to track rate limits across instances.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}