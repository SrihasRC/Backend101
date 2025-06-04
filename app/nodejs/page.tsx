import { CodeBlock } from "@/components/ui/code-block";

export default function NodejsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Node.js Essentials</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Master the core concepts and features of Node.js
        </p>

        <div className="space-y-16">
          {/* Event Loop Section */}
          <section id="event-loop" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Understanding the Event Loop
            </h2>
            <p className="text-zinc-300">
              The event loop is the core mechanism that allows Node.js to perform non-blocking I/O
              operations despite JavaScript being single-threaded. It works by offloading operations
              to the system kernel whenever possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Key Components</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>Call Stack - LIFO queue of function calls</li>
                  <li>Callback Queue - FIFO queue of callback functions</li>
                  <li>Event Loop - Moves callbacks to the stack</li>
                  <li>Node.js APIs - Thread pool for async operations</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Execution Phases</h3>
                <ol className="list-decimal list-inside space-y-2 text-zinc-300">
                  <li>Timers - <code>setTimeout()</code>, <code>setInterval()</code></li>
                  <li>Pending callbacks - I/O callbacks</li>
                  <li>Idle, prepare - internal operations</li>
                  <li>Poll - I/O events, execute callbacks</li>
                  <li>Check - <code>setImmediate()</code> callbacks</li>
                  <li>Close callbacks - <code>socket.on('close')</code></li>
                </ol>
              </div>
            </div>

            <CodeBlock
              language="javascript"
              title="Event Loop Example"
              code={`console.log('Script start');

// Timeout scheduling
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// Immediate scheduling (check phase)
setImmediate(() => {
  console.log('setImmediate');
});

// I/O operation
import { readFile } from 'fs';
readFile(import.meta.url, () => {
  console.log('I/O callback');
  
  // Inside I/O callback
  setTimeout(() => {
    console.log('Inner setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('Inner setImmediate');
  });
});

// Process next tick (highest priority)
process.nextTick(() => {
  console.log('nextTick');
});

console.log('Script end');

/* Output (roughly):
Script start
Script end
nextTick
setTimeout
setImmediate
I/O callback
Inner setImmediate
Inner setTimeout
*/`}
            />
          </section>

          {/* Modules Section */}
          <section id="modules" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Modules: CommonJS vs ESModules
            </h2>
            <p className="text-zinc-300">
              Node.js supports two module systems: the original CommonJS (CJS) modules and the newer ECMAScript (ES) modules.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div>
                <h3 className="text-xl font-medium mb-3">CommonJS (CJS)</h3>
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                  <ul className="list-disc list-inside space-y-1 text-zinc-300">
                    <li>Default in Node.js</li>
                    <li>Synchronous loading</li>
                    <li>Uses <code>require()</code> and <code>module.exports</code></li>
                    <li>File extension is <code>.js</code> by default</li>
                  </ul>
                </div>
                <CodeBlock
                  language="javascript"
                  title="math.js (CommonJS)"
                  code={`// Exporting in CommonJS
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = {
  add,
  subtract
};`}
                />
                <CodeBlock
                  language="javascript"
                  title="app.js (CommonJS)"
                  code={`// Importing in CommonJS
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2

// Destructuring import
const { add, subtract } = require('./math');
console.log(add(10, 5));         // 15`}
                />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">ES Modules (ESM)</h3>
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                  <ul className="list-disc list-inside space-y-1 text-zinc-300">
                    <li>Modern standard JavaScript modules</li>
                    <li>Asynchronous loading</li>
                    <li>Uses <code>import</code> and <code>export</code></li>
                    <li>Need <code>"type": "module"</code> in package.json</li>
                    <li>File extension can be <code>.mjs</code> to explicitly use ESM</li>
                  </ul>
                </div>
                <CodeBlock
                  language="javascript"
                  title="math.mjs (ESM)"
                  code={`// Exporting in ES Modules
export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

// Default export
export default {
  add,
  subtract
};`}
                />
                <CodeBlock
                  language="javascript"
                  title="app.mjs (ESM)"
                  code={`// Importing in ES Modules
import { add, subtract } from './math.mjs';
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

// Default import
import math from './math.mjs';
console.log(math.add(10, 5)); // 15

// Import everything
import * as mathLib from './math.mjs';
console.log(mathLib.add(2, 2)); // 4`}
                />
              </div>
            </div>
          </section>

          {/* Core Modules Section */}
          <section id="core-modules" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Core Modules: fs, http, path
            </h2>
            <p className="text-zinc-300 mb-6">
              Node.js comes with a rich set of built-in modules that provide essential functionality.
              Here are examples of some of the most commonly used core modules.
            </p>

            <div className="space-y-8">
              {/* FS Module */}
              <div>
                <h3 className="text-xl font-medium mb-3">File System (fs) Module</h3>
                <p className="text-zinc-300 mb-4">
                  The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
                </p>
                <CodeBlock
                  language="javascript"
                  title="fs-examples.js"
                  code={`import * as fs from 'fs';
import { promises as fsPromises } from 'fs';

// Synchronous read (blocking)
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('Sync read:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Asynchronous read with callback (non-blocking)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Async read:', data);
});

// Using promises with fs.promises (Node.js >= 10)
const readFileAsync = async () => {
  try {
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log('Promise read:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
readFileAsync();

// Writing to files
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written');
});

// Directory operations
fs.mkdir('new-directory', { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created');
});

// Check if a file exists
fs.access('example.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist' : 'File exists');
});

// Watch file changes
fs.watch('example.txt', (eventType, fileName) => {
  console.log(\`File \${fileName} changed: \${eventType}\`);
});`}
                />
              </div>

              {/* HTTP Module */}
              <div>
                <h3 className="text-xl font-medium mb-3">HTTP Module</h3>
                <p className="text-zinc-300 mb-4">
                  The HTTP module allows Node.js to transfer data over HTTP, making it possible to create web servers.
                </p>
                <CodeBlock
                  language="javascript"
                  title="http-server.js"
                  code={`import http from 'http';

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');

  // Get request information
  const url = req.url;
  const method = req.method;

  // Basic routing
  if (url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: 'Welcome to the Home page',
      status: 200
    }));
  } else if (url === '/api/users') {
    if (method === 'GET') {
      res.statusCode = 200;
      res.end(JSON.stringify({
        users: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' }
        ],
        status: 200
      }));
    } else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const userData = JSON.parse(body);
        res.statusCode = 201;
        res.end(JSON.stringify({
          message: 'User created',
          user: userData,
          status: 201
        }));
      });
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({
      message: 'Route not found',
      status: 404
    }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});

// Making HTTP requests
http.get('http://example.com', (res) => {
  let data = '';
  
  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error('Error: ' + err.message);
});`}
                />
              </div>

              {/* Path Module */}
              <div>
                <h3 className="text-xl font-medium mb-3">Path Module</h3>
                <p className="text-zinc-300 mb-4">
                  The path module provides utilities for working with file and directory paths in a cross-platform way.
                </p>
                <CodeBlock
                  language="javascript"
                  title="path-examples.js"
                  code={`import path from 'path';

// Platform-specific separator
console.log(\`Path separator: \${path.sep}\`);  // '\' on Windows, '/' on UNIX

// Join path segments
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log(fullPath);  // '/users/john/documents/file.txt' (UNIX)

// Resolve absolute path (works from current directory)
const absolutePath = path.resolve('file.txt');
console.log(absolutePath);  // /current/working/directory/file.txt

// Get base filename
console.log(path.basename(fullPath));  // file.txt
console.log(path.basename(fullPath, '.txt'));  // file

// Get directory name
console.log(path.dirname(fullPath));  // /users/john/documents

// Get file extension
console.log(path.extname(fullPath));  // .txt

// Parse path into components
const pathInfo = path.parse(fullPath);
console.log(pathInfo);
// {
//   root: '/',
//   dir: '/users/john/documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Format path from components
const newPath = path.format({
  dir: '/users/john/documents',
  base: 'report.pdf'
});
console.log(newPath);  // /users/john/documents/report.pdf

// Normalize a path (resolves '..' and '.')
console.log(path.normalize('/users/./john/../john/documents/'));
// '/users/john/documents/'

// Check if path is absolute
console.log(path.isAbsolute(fullPath));  // true
console.log(path.isAbsolute('file.txt'));  // false

// Calculate relative path
console.log(path.relative('/users/john', '/users/john/documents'));
// 'documents'`}
                />
              </div>
            </div>
          </section>

          {/* Async Programming Section */}
          <section id="async-programming" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Async Programming: Callbacks, Promises, and async/await
            </h2>
            <p className="text-zinc-300">
              Node.js provides several ways to work with asynchronous operations. Understanding these patterns is crucial for effective Node.js development.
            </p>

            <div className="space-y-8">
              {/* Callbacks */}
              <div>
                <h3 className="text-xl font-medium mb-3">1. Callbacks</h3>
                <p className="text-zinc-300 mb-4">
                  Callbacks are the oldest pattern for handling asynchronous operations in Node.js.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Callback Pattern"
                  code={`import { readFile, writeFile } from 'fs';

// Reading a file with callbacks
readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  // Process the file data
  console.log('File content:', data);
  
  // Nested callback (callback hell begins)
  writeFile('output.txt', data.toUpperCase(), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    
    console.log('File written successfully');
    
    // Another nested callback
    readFile('output.txt', 'utf8', (err, newData) => {
      if (err) {
        console.error('Error reading new file:', err);
        return;
      }
      
      console.log('New file content:', newData);
    });
  });
});

// Custom function with callback
const fetchUserData = (userId, callback) => {
  // Simulate API call
  setTimeout(() => {
    if (userId < 1) {
      callback(new Error('Invalid user ID'));
      return;
    }
    
    const user = {
      id: userId,
      name: 'User ' + userId,
      email: \`user\${userId}@example.com\`
    };
    
    callback(null, user);
  }, 1000);
};

// Using the custom callback function
fetchUserData(1, (err, user) => {
  if (err) {
    console.error('Error fetching user:', err);
    return;
  }
  
  console.log('User data:', user);
});`}
                />
              </div>

              {/* Promises */}
              <div>
                <h3 className="text-xl font-medium mb-3">2. Promises</h3>
                <p className="text-zinc-300 mb-4">
                  Promises provide a more elegant way to handle asynchronous operations and avoid callback hell.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Promise Pattern"
                  code={`import { promises as fs } from 'fs';

// Reading a file with promises
fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File content:', data);
    // Return a new promise
    return fs.writeFile('output.txt', data.toUpperCase());
  })
  .then(() => {
    console.log('File written successfully');
    // Return another promise
    return fs.readFile('output.txt', 'utf8');
  })
  .then(newData => {
    console.log('New file content:', newData);
  })
  .catch(err => {
    console.error('Error in promise chain:', err);
  });

// Create a custom promise
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      if (userId < 1) {
        reject(new Error('Invalid user ID'));
        return;
      }
      
      const user = {
        id: userId,
        name: 'User ' + userId,
        email: \`user\${userId}@example.com\`
      };
      
      resolve(user);
    }, 1000);
  });
};

// Using custom promise
fetchUserData(1)
  .then(user => {
    console.log('User data:', user);
    return fetchUserData(user.id + 1);
  })
  .then(secondUser => {
    console.log('Second user:', secondUser);
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    console.log('Promise chain completed');
  });

// Parallel promises
Promise.all([
  fetchUserData(1),
  fetchUserData(2),
  fetchUserData(3)
])
  .then(users => {
    console.log('All users:', users);
  })
  .catch(err => {
    console.error('Error in any promise:', err);
  });

// First to complete
Promise.race([
  fetchUserData(1),
  fetchUserData(2)
])
  .then(firstUser => {
    console.log('First user to resolve:', firstUser);
  })
  .catch(err => {
    console.error('Error in race:', err);
  });`}
                />
              </div>

              {/* Async/Await */}
              <div>
                <h3 className="text-xl font-medium mb-3">3. Async/Await</h3>
                <p className="text-zinc-300 mb-4">
                  Async/await is a modern syntax for handling promises, making asynchronous code look and behave more like synchronous code.
                </p>
                <CodeBlock
                  language="javascript"
                  title="Async/Await Pattern"
                  code={`import { promises as fs } from 'fs';

// Using async/await for file operations
const processFile = async () => {
  try {
    // Await each promise sequentially
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('File content:', data);
    
    await fs.writeFile('output.txt', data.toUpperCase());
    console.log('File written successfully');
    
    const newData = await fs.readFile('output.txt', 'utf8');
    console.log('New file content:', newData);
    
    return newData; // This will be a resolved promise
  } catch (err) {
    console.error('Error processing file:', err);
    throw err; // Re-throwing for promise rejection
  }
};

// Call the async function
processFile()
  .then(result => {
    console.log('Async function completed with result:', result);
  })
  .catch(err => {
    console.error('Async function failed:', err);
  });

// Using the custom promise function with async/await
const getMultipleUsers = async () => {
  try {
    // Sequential requests
    const user1 = await fetchUserData(1);
    console.log('First user:', user1);
    
    const user2 = await fetchUserData(2);
    console.log('Second user:', user2);
    
    // Parallel requests with Promise.all
    const [user3, user4, user5] = await Promise.all([
      fetchUserData(3),
      fetchUserData(4),
      fetchUserData(5)
    ]);
    
    console.log('Multiple users:', { user3, user4, user5 });
    
    return 'All users loaded';
  } catch (err) {
    console.error('Error getting users:', err);
    throw err;
  } finally {
    console.log('User loading completed');
  }
};

// Self-executing async function
(async () => {
  try {
    const result = await getMultipleUsers();
    console.log(result);
  } catch (err) {
    console.error('Main execution failed:', err);
  }
})();`}
                />
              </div>

              <div className="bg-green-900/30 border border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-200">
                  <li>Use async/await for most new code (cleaner, easier to debug)</li>
                  <li>Always handle errors properly with try/catch or .catch()</li>
                  <li>Use Promise.all() for concurrent operations</li>
                  <li>Avoid nested callbacks (callback hell)</li>
                  <li>Promisify callback-based APIs with util.promisify</li>
                  <li>Remember that await can only be used inside async functions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}