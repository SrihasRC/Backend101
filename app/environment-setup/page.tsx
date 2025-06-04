import { CodeBlock } from "@/components/ui/code-block";

export default function EnvironmentSetupPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Environment & Setup</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Setting up your development environment for Node.js and backend development
        </p>

        <div className="space-y-16">
          {/* Node.js Installation Section */}
          <section id="nodejs-installation" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Installing Node.js & npm
            </h2>
            <p className="text-zinc-300">
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. npm (Node Package Manager)
              comes bundled with Node.js and helps you manage packages and dependencies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Installation Methods</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    <span className="text-yellow-400 font-semibold">Official Installer:</span> Download and install from{" "}
                    <a
                      href="https://nodejs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      nodejs.org
                    </a>
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">nvm (Node Version Manager):</span> Recommended for managing multiple Node.js versions
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Package Managers:</span> Using apt, brew, chocolatey, etc.
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Docker:</span> Using containerized Node.js environments
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">LTS vs Current</h3>
                <p className="text-zinc-300 mb-4">
                  Node.js offers two release types:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-400">LTS (Long Term Support)</h4>
                    <p className="text-zinc-300 text-sm">
                      Recommended for most users. Stable, with active support for ~30 months. Even-numbered versions (e.g., 18.x, 20.x).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-400">Current</h4>
                    <p className="text-zinc-300 text-sm">
                      Latest features but less stable. Shorter support window. Use if you need cutting-edge features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Installation by Platform</h3>

            <div className="space-y-4">
              <CodeBlock
                language="bash"
                title="Linux (Ubuntu/Debian)"
                code={`# Using apt (not always the latest version)
sudo apt update
sudo apt install nodejs npm

# Using NodeSource repository (recommended)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version`}
              />

              <CodeBlock
                language="bash"
                title="macOS"
                code={`# Using Homebrew
brew install node

# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc  # or source ~/.zshrc
nvm install --lts
nvm use --lts

# Verify installation
node --version
npm --version`}
              />

              <CodeBlock
                language="powershell"
                title="Windows"
                code={`# Using Chocolatey
choco install nodejs-lts

# Using winget
winget install OpenJS.NodeJS.LTS

# Using nvm-windows (recommended)
# Download and install from: https://github.com/coreybutler/nvm-windows/releases
nvm install lts
nvm use lts

# Verify installation
node --version
npm --version`}
              />

              <CodeBlock
                language="bash"
                title="Using NVM (any platform)"
                code={`# Install nvm (Node Version Manager)
# Linux/macOS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# List available Node.js versions
nvm ls-remote

# Install specific version
nvm install 20.10.0

# Install and use latest LTS version
nvm install --lts
nvm use --lts

# Switch between installed versions
nvm use 18
nvm use 20

# Set a default Node.js version
nvm alias default 20`}
              />
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Why Use NVM?</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Easily switch between Node.js versions for different projects</li>
                <li>Test your code on multiple Node.js versions</li>
                <li>Install global packages per Node.js version, avoiding permission issues</li>
                <li>Update to new versions without system-wide impacts</li>
                <li>Roll back easily if a new version causes issues</li>
              </ul>
            </div>
          </section>

          {/* Package Management Section */}
          <section id="package-management" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              npm & Package Management
            </h2>
            <p className="text-zinc-300">
              npm is the default package manager for Node.js. It allows you to install, share, and manage dependencies for your projects.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-3">Essential npm Commands</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodeBlock
                language="bash"
                title="Project Initialization"
                code={`# Create a new package.json with defaults
npm init -y

# Create a package.json interactively
npm init

# Install dependencies from package.json
npm install`}
              />

              <CodeBlock
                language="bash"
                title="Installing Packages"
                code={`# Install a package as dependency
npm install express

# Install a specific version
npm install express@4.18.2

# Install as dev dependency
npm install --save-dev nodemon

# Install globally
npm install -g typescript`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <CodeBlock
                language="bash"
                title="Managing Dependencies"
                code={`# Update packages
npm update

# List outdated packages
npm outdated

# Show dependency tree
npm ls

# Show top-level dependencies
npm ls --depth=0

# Remove a package
npm uninstall express`}
              />

              <CodeBlock
                language="bash"
                title="npm Scripts"
                code={`# List available scripts
npm run

# Run a script from package.json
npm run start
npm run dev
npm run test

# npm shortcuts
npm start
npm test`}
              />
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Package.json Explained</h3>
            
            <CodeBlock
              language="json"
              title="package.json"
              code={`{
  "name": "my-backend-app",
  "version": "1.0.0",
  "description": "A Node.js backend application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "lint": "eslint ."
  },
  "keywords": ["node", "express", "api"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.2",
    "eslint": "^8.47.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}`}
            />

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-6">
              <h3 className="text-lg font-medium mb-2">Understanding Semantic Versioning</h3>
              <p className="text-zinc-300 mb-4">
                Node.js packages use semantic versioning (SemVer): <span className="text-yellow-400">MAJOR.MINOR.PATCH</span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li><span className="text-yellow-400 font-semibold">MAJOR:</span> Breaking changes</li>
                <li><span className="text-yellow-400 font-semibold">MINOR:</span> New features, backward-compatible</li>
                <li><span className="text-yellow-400 font-semibold">PATCH:</span> Bug fixes, backward-compatible</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Version Ranges:</h4>
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-2 px-3 font-medium">Notation</th>
                      <th className="text-left py-2 px-3 font-medium">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="py-2 px-3"><code>^4.18.2</code></td>
                      <td className="py-2 px-3">Compatible with 4.x.x (not 5.0.0+)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3"><code>~4.18.2</code></td>
                      <td className="py-2 px-3">Compatible with 4.18.x (not 4.19.0+)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3"><code>4.18.2</code></td>
                      <td className="py-2 px-3">Exact version only</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3"><code>*</code> or <code>x</code></td>
                      <td className="py-2 px-3">Any version (not recommended)</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3"><code>&gt;=4.18.2</code></td>
                      <td className="py-2 px-3">Version 4.18.2 or higher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">npm Alternatives</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-zinc-200">Yarn</h4>
                  <p className="text-zinc-300 text-sm">
                    Faster, more secure alternative to npm. Commands: <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">yarn add</code>, <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">yarn install</code>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">pnpm</h4>
                  <p className="text-zinc-300 text-sm">
                    Fast, disk space efficient with a unique approach to node_modules. Commands: <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">pnpm add</code>, <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">pnpm install</code>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">bun</h4>
                  <p className="text-zinc-300 text-sm">
                    Ultra-fast JavaScript runtime, bundler, test runner and package manager. Commands: <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">bun add</code>, <code className="text-xs bg-zinc-800 px-1 py-0.5 rounded">bun install</code>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* IDE Setup Section */}
          <section id="ide-setup" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              IDE & Code Editor Setup
            </h2>
            <p className="text-zinc-300 mb-4">
              A well-configured code editor can significantly improve your development workflow. 
              Visual Studio Code is the most popular choice for Node.js development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">Essential VS Code Extensions</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    <span className="text-yellow-400 font-semibold">ESLint</span> - JavaScript linting
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Prettier</span> - Code formatting
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">JavaScript (ES6) code snippets</span> - Helpful snippets
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Node.js Extension Pack</span> - Collection of extensions
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">REST Client</span> - Test API endpoints right from VSCode
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Thunder Client</span> - Postman-like API client
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">GitLens</span> - Git supercharged
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">Auto Rename Tag</span> - Auto rename HTML/JSX tags
                  </li>
                  <li>
                    <span className="text-yellow-400 font-semibold">npm Intellisense</span> - Autocompletes npm modules
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">VS Code Settings for Node.js</h3>
                <CodeBlock
                  language="json"
                  title="settings.json"
                  code={`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.suggest.autoImports": true,
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "files.eol": "\\n",
  "files.insertFinalNewline": true,
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}`}
                />
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Code Quality Tools Configuration</h3>

            <div className="grid grid-cols-1 gap-6">
              <CodeBlock
                language="json"
                title=".eslintrc.json"
                code={`{
  "env": {
    "node": true,
    "es2022": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": ["warn"],
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }]
  }
}`}
              />

              <CodeBlock
                language="json"
                title=".prettierrc"
                code={`{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}`}
              />
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Alternative IDEs for Node.js</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-zinc-100">WebStorm</h4>
                  <p className="text-zinc-300 text-sm">Commercial IDE with deep integration for Node.js and JavaScript. Includes debugging, testing, and code quality tools out of the box.</p>
                </div>
                <div>
                  <h4 className="text-zinc-100">Atom</h4>
                  <p className="text-zinc-300 text-sm">Customizable text editor with many packages for Node.js development.</p>
                </div>
                <div>
                  <h4 className="text-zinc-100">Vim / Neovim</h4>
                  <p className="text-zinc-300 text-sm">Powerful text editors with plugins like coc.nvim for IDE-like features, popular among experienced developers.</p>
                </div>
                <div>
                  <h4 className="text-zinc-100">Sublime Text</h4>
                  <p className="text-zinc-300 text-sm">Fast, lightweight editor with packages for Node.js development.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common CLI Commands Section */}
          <section id="cli-commands" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Common CLI Commands
            </h2>
            <p className="text-zinc-300 mb-4">
              Command-line tools are essential for Node.js development. Here are some common CLI commands you'll use frequently.
            </p>

            <h3 className="text-xl font-medium mb-3">Node.js Commands</h3>

            <CodeBlock
              language="bash"
              title="Node.js CLI"
              code={`# Run a JavaScript file
node app.js

# Interactive REPL (Read-Eval-Print Loop)
node

# Run with environment variables
NODE_ENV=production node app.js

# Evaluate JavaScript from command line
node -e "console.log('Hello, World!')"

# Check syntax without running
node --check app.js

# Run with inspect flag for debugging
node --inspect app.js

# Run with additional V8 options
node --max-old-space-size=4096 app.js`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Project Management Commands</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodeBlock
                language="bash"
                title="Git Commands"
                code={`# Initialize a git repository
git init

# Add files to staging area
git add .

# Commit changes
git commit -m "Initial commit"

# Create and checkout a new branch
git checkout -b feature/my-feature

# Push to remote repository
git push origin main

# Pull latest changes
git pull origin main

# Merge branch
git merge feature/my-feature`}
              />

              <CodeBlock
                language="bash"
                title="Directory & File Operations"
                code={`# Create directory
mkdir my-project

# Change directory
cd my-project

# List files
ls -la

# Create a file
touch .env

# Show file content
cat .env

# Edit a file
nano .env  # or vim .env

# Search in files
grep "searchTerm" ./*.js

# Find files by name
find . -name "*.js"`}
              />
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">HTTP Testing Commands</h3>

            <CodeBlock
              language="bash"
              title="cURL Commands for API Testing"
              code={`# GET request
curl http://localhost:3000/api/users

# POST request with JSON data
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John", "email": "john@example.com"}'

# PUT request with JSON data
curl -X PUT http://localhost:3000/api/users/1 \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John Updated", "email": "john@example.com"}'

# DELETE request
curl -X DELETE http://localhost:3000/api/users/1

# GET request with authorization header
curl -X GET http://localhost:3000/api/profile \\
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`}
            />

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">Process Management Tools</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-zinc-200">PM2</h4>
                  <p className="text-zinc-300 text-sm mb-2">
                    Process manager for Node.js applications with built-in load balancing
                  </p>
                  <CodeBlock
                    language="bash"
                    title="PM2 Commands"
                    code={`# Install PM2
npm install -g pm2

# Start an application
pm2 start app.js

# List running applications
pm2 list

# Monitor all applications
pm2 monit

# Restart an application
pm2 restart app.js

# Stop an application
pm2 stop app.js

# Set up application to run on system start
pm2 startup`}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Nodemon</h4>
                  <p className="text-zinc-300 text-sm">
                    Utility that monitors for changes and automatically restarts the server (development only)
                  </p>
                  <CodeBlock
                    language="bash"
                    title="Nodemon Usage"
                    code={`# Install nodemon
npm install -g nodemon

# Run application with nodemon
nodemon app.js

# Run with specific file extensions to watch
nodemon --watch src --ext js,json app.js

# Ignore specific directories
nodemon --ignore tests/ app.js`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Debugging Section */}
          <section id="debugging" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Debugging Techniques
            </h2>
            <p className="text-zinc-300 mb-4">
              Effective debugging is essential for Node.js development. Here are some techniques and tools to help you debug your applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">Debug with Chrome DevTools</h3>
                <p className="text-zinc-300 mb-4">
                  Use Chrome DevTools to debug Node.js applications:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                  <li>Run your app with the inspect flag: <code>node --inspect app.js</code></li>
                  <li>Open Chrome and navigate to <code>chrome://inspect</code></li>
                  <li>Click "Open dedicated DevTools for Node"</li>
                  <li>Set breakpoints and debug as you would in the browser</li>
                </ol>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-3">VS Code Debugging</h3>
                <p className="text-zinc-300 mb-4">
                  Debug directly in VS Code using the built-in debugger:
                </p>
                <CodeBlock
                  language="json"
                  title="launch.json (VS Code)"
                  code={`{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "\${workspaceFolder}/app.js"
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Process",
      "port": 9229
    }
  ]
}`}
                />
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Console Debugging Techniques</h3>

            <CodeBlock
              language="javascript"
              title="Advanced Console Debugging"
              code={`// Basic logging
console.log('Hello world');

// Different log levels
console.info('Information message');
console.warn('Warning message');
console.error('Error message');

// Structured data
console.log('User:', { id: 1, name: 'John', role: 'admin' });

// Table format for arrays/objects
console.table([
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
]);

// Grouping logs
console.group('User Authentication');
console.log('Checking credentials...');
console.log('Validating permissions...');
console.groupEnd();

// Timing operations
console.time('database-query');
// ... database operation here
console.timeEnd('database-query');

// Stack trace
console.trace('Trace message');

// Conditional logging
console.assert(user.age >= 18, 'User is underage');

// Format specifiers
console.log('%c Bold red text', 'color: red; font-weight: bold;');`}
            />

            <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Professional Debugging Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>
                  <span className="text-yellow-400 font-semibold">debug</span>: Tiny debugging utility (<code>npm install debug</code>)
                </li>
                <li>
                  <span className="text-yellow-400 font-semibold">winston</span>: Multi-transport logging library
                </li>
                <li>
                  <span className="text-yellow-400 font-semibold">pino</span>: Very low overhead Node.js logger
                </li>
                <li>
                  <span className="text-yellow-400 font-semibold">ndb</span>: Improved debugging experience with Chrome DevTools
                </li>
                <li>
                  <span className="text-yellow-400 font-semibold">node-inspector</span>: Debug using the Chrome DevTools GUI
                </li>
                <li>
                  <span className="text-yellow-400 font-semibold">New Relic</span>: Performance monitoring for production
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}