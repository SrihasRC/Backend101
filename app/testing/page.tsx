import { CodeBlock } from "@/components/ui/code-block";

export default function TestingStrategiesPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Testing Strategies</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Master unit, integration, and API testing with Jest, Mocha, and Supertest
        </p>

        <div className="space-y-16">
          {/* Testing Fundamentals Section */}
          <section id="testing-fundamentals" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Testing Fundamentals
            </h2>
            <p className="text-zinc-300">
              Testing is crucial for maintaining code quality and preventing regressions. Different types of tests serve different purposes in your testing strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-green-500">Unit Tests</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Test individual units of code in isolation.
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                  <li>Test single functions or methods</li>
                  <li>Mock dependencies</li>
                  <li>Fast to execute</li>
                  <li>Easy to write and maintain</li>
                  <li>High level of code coverage</li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-blue-500">Integration Tests</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Test how multiple units work together.
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                  <li>Test interactions between components</li>
                  <li>Fewer mocks, more real implementations</li>
                  <li>Catch interface issues</li>
                  <li>Slower than unit tests</li>
                  <li>More complex setup</li>
                </ul>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-purple-500">End-to-End Tests</h3>
                <p className="text-zinc-300 text-sm mb-3">
                  Test entire application flow.
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                  <li>Test from user perspective</li>
                  <li>Minimal mocking</li>
                  <li>Validate complete workflows</li>
                  <li>Slow and resource intensive</li>
                  <li>Difficult to debug</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Testing Pyramid</h3>
              <p className="text-zinc-300 mb-3">
                The testing pyramid is a guideline for balancing different types of tests:
              </p>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li><strong>Top:</strong> Few E2E tests (slow, expensive, but high confidence)</li>
                <li><strong>Middle:</strong> More integration tests (better balance of speed and confidence)</li>
                <li><strong>Bottom:</strong> Many unit tests (fast, cheap, less confidence)</li>
              </ul>
            </div>
          </section>

          {/* Jest Framework Section */}
          <section id="jest" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Testing with Jest
            </h2>
            <p className="text-zinc-300 mb-4">
              Jest is a delightful JavaScript testing framework with a focus on simplicity. It's widely used for testing React applications, but it's also great for Node.js projects.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Setting Up Jest</h3>

            <CodeBlock
              language="javascript"
              title="Installing and configuring Jest (ES Modules)"
              code={`// Install Jest
npm install --save-dev jest @types/jest ts-jest

// jest.config.mjs
export default {
  preset: 'ts-jest/preset/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts',
    '!src/types/**',
  ],
};

// Add to package.json
{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch",
    "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
  }
}`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Writing Unit Tests with Jest</h3>

            <CodeBlock
              language="javascript"
              title="Example arithmetic functions and tests (ES Modules)"
              code={`// src/utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// src/utils/__tests__/math.test.ts
import { describe, expect, test } from '@jest/globals';
import { add, subtract, multiply, divide } from '../math.js';

describe('Math Utils', () => {
  describe('add function', () => {
    test('adds two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract function', () => {
    test('subtracts two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply function', () => {
    test('multiplies two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-1, 3)).toBe(-3);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide function', () => {
    test('divides two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(5, 2)).toBe(2.5);
      expect(divide(0, 5)).toBe(0);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});`}
            />

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Jest Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Use descriptive test and describe blocks</li>
                <li>Test both expected and edge cases</li>
                <li>Keep tests isolated from each other</li>
                <li>Mock external dependencies appropriately</li>
                <li>Use beforeEach/afterEach for setup and teardown</li>
                <li>Group related tests using describe blocks</li>
                <li>Aim for 70-80% code coverage</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Mocking with Jest</h3>

            <CodeBlock
              language="javascript"
              title="Jest mocks example (ES Modules)"
              code={`// src/services/userService.ts
import { db } from '../db.js';

export async function getUserById(id: string) {
  return db.users.findOne({ _id: id });
}

export async function createUser(userData: any) {
  return db.users.insert(userData);
}

// src/services/__tests__/userService.test.ts
import { describe, expect, test, jest, afterEach } from '@jest/globals';
import { getUserById, createUser } from '../userService.js';
import { db } from '../../db.js';

// Mock the db module
jest.mock('../../db.js', () => ({
  db: {
    users: {
      findOne: jest.fn(),
      insert: jest.fn()
    }
  }
}));

describe('User Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserById', () => {
    test('calls findOne with correct id and returns the result', async () => {
      const mockUser = { _id: '123', name: 'John' };
      (db.users.findOne as jest.Mock).mockResolvedValue(mockUser);

      const result = await getUserById('123');
      
      expect(db.users.findOne).toHaveBeenCalledWith({ _id: '123' });
      expect(result).toEqual(mockUser);
    });

    test('returns null when user not found', async () => {
      (db.users.findOne as jest.Mock).mockResolvedValue(null);

      const result = await getUserById('456');
      
      expect(db.users.findOne).toHaveBeenCalledWith({ _id: '456' });
      expect(result).toBeNull();
    });
  });

  describe('createUser', () => {
    test('calls insert with user data and returns the result', async () => {
      const userData = { name: 'John', email: 'john@example.com' };
      const createdUser = { _id: '123', ...userData };
      
      (db.users.insert as jest.Mock).mockResolvedValue(createdUser);

      const result = await createUser(userData);
      
      expect(db.users.insert).toHaveBeenCalledWith(userData);
      expect(result).toEqual(createdUser);
    });
  });
});`}
            />
          </section>

          {/* Mocha & Chai Section */}
          <section id="mocha-chai" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Testing with Mocha & Chai
            </h2>
            <p className="text-zinc-300 mb-4">
              Mocha is a flexible testing framework that can be paired with Chai, a powerful assertion library, to create expressive tests.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Setting Up Mocha & Chai</h3>

            <CodeBlock
              language="javascript"
              title="Installing and configuring Mocha & Chai (ES Modules)"
              code={`// Install dependencies
npm install --save-dev mocha chai @types/mocha @types/chai ts-node

// Create .mocharc.json
{
  "require": "ts-node/register",
  "extension": ["ts"],
  "node-option": [
    "experimental-specifier-resolution=node",
    "loader=ts-node/esm"
  ],
  "spec": "src/**/*.spec.ts"
}

// Add to package.json
{
  "type": "module",
  "scripts": {
    "test": "mocha",
    "test:watch": "mocha --watch"
  }
}`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Writing Tests with Mocha & Chai</h3>

            <CodeBlock
              language="javascript"
              title="Mocha & Chai test example (ES Modules)"
              code={`// src/utils/validators.ts
export function validateEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 8 && 
    /[A-Z]/.test(password) && 
    /[a-z]/.test(password) && 
    /[0-9]/.test(password);
}

// src/utils/validators.spec.ts
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validateEmail, validatePassword } from './validators.js';

describe('Validators', () => {
  describe('validateEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(validateEmail('user@example.com')).to.be.true;
      expect(validateEmail('name.surname@domain.co.uk')).to.be.true;
      expect(validateEmail('user123@domain.org')).to.be.true;
    });

    it('should return false for invalid email addresses', () => {
      expect(validateEmail('user@domain')).to.be.false;
      expect(validateEmail('user@.com')).to.be.false;
      expect(validateEmail('user@domain.')).to.be.false;
      expect(validateEmail('user domain.com')).to.be.false;
      expect(validateEmail('')).to.be.false;
    });
  });

  describe('validatePassword', () => {
    it('should return true for valid passwords', () => {
      expect(validatePassword('Password123')).to.be.true;
      expect(validatePassword('SecureP@ss1')).to.be.true;
      expect(validatePassword('StrongPassword123')).to.be.true;
    });

    it('should return false for passwords that are too short', () => {
      expect(validatePassword('Pass1')).to.be.false;
    });

    it('should return false for passwords without uppercase letters', () => {
      expect(validatePassword('password123')).to.be.false;
    });

    it('should return false for passwords without lowercase letters', () => {
      expect(validatePassword('PASSWORD123')).to.be.false;
    });

    it('should return false for passwords without numbers', () => {
      expect(validatePassword('PasswordNoNumbers')).to.be.false;
    });
  });
});`}
            />

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Chai Assertion Styles</h3>
              <p className="text-zinc-300 mb-3">
                Chai offers three different assertion styles:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-zinc-200 mb-2">Assert</h4>
                  <pre className="text-sm text-zinc-300">
                    <code>{`assert.equal(foo, 'bar');
assert.lengthOf(foo, 3);
assert.property(foo, 'bar');`}</code>
                  </pre>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-zinc-200 mb-2">Expect</h4>
                  <pre className="text-sm text-zinc-300">
                    <code>{`expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(foo).to.have.property('bar');`}</code>
                  </pre>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-medium text-zinc-200 mb-2">Should</h4>
                  <pre className="text-sm text-zinc-300">
                    <code>{`foo.should.equal('bar');
foo.should.have.lengthOf(3);
foo.should.have.property('bar');`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* API Testing Section */}
          <section id="api-testing" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              API Testing with Supertest
            </h2>
            <p className="text-zinc-300 mb-4">
              Supertest is a library that allows you to test HTTP servers by making requests and asserting responses.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Setting Up Supertest</h3>

            <CodeBlock
              language="javascript"
              title="Installing and using Supertest (ES Modules)"
              code={`// Install dependencies
npm install --save-dev supertest @types/supertest

// Sample Express app to test
// src/app.ts
import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ]);
});

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 1) {
    res.json({ id: 1, name: 'User 1' });
  } else if (id === 2) {
    res.json({ id: 2, name: 'User 2' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  const newUser = { id: 3, name };
  res.status(201).json(newUser);
});

export default app;

// Start the server
// src/server.ts
import app from './app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// Write API tests
// src/app.spec.ts
import { describe, it } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import app from './app.js';

describe('API Tests', () => {
  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const response = await request(app).get('/api/users');
      
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.lengthOf(2);
      expect(response.body[0]).to.have.property('id');
      expect(response.body[0]).to.have.property('name');
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return a user if valid id is provided', async () => {
      const response = await request(app).get('/api/users/1');
      
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.id).to.equal(1);
      expect(response.body.name).to.equal('User 1');
    });

    it('should return 404 if user not found', async () => {
      const response = await request(app).get('/api/users/999');
      
      expect(response.status).to.equal(404);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.equal('User not found');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user when valid data is provided', async () => {
      const userData = { name: 'New User' };
      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .set('Accept', 'application/json');
      
      expect(response.status).to.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.equal('New User');
    });

    it('should return 400 when name is missing', async () => {
      const userData = {};
      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .set('Accept', 'application/json');
      
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.equal('Name is required');
    });
  });
});`}
            />

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">API Testing Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Test all API endpoints and HTTP methods</li>
                <li>Test both success and error scenarios</li>
                <li>Check status codes, response formats, and content</li>
                <li>Use environment-specific configuration</li>
                <li>Isolate tests with proper setup and teardown</li>
                <li>Mock external services when needed</li>
                <li>Test with valid and invalid authentication</li>
                <li>Validate schema using JSON Schema or similar tools</li>
              </ul>
            </div>
          </section>

          {/* Test-Driven Development Section */}
          <section id="tdd" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Test-Driven Development (TDD)
            </h2>
            <p className="text-zinc-300 mb-4">
              Test-Driven Development is a software development process that relies on the repetition of a very short development cycle where requirements are turned into test cases, then the code is improved to pass the tests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-red-500">Red</h3>
                <p className="text-zinc-300 text-sm">
                  Write a failing test that defines a desired improvement or new function.
                </p>
                <div className="mt-4 text-zinc-300 text-sm">
                  <pre className="bg-zinc-800 p-3 rounded-lg overflow-x-auto">
                    <code>{`// This test should fail initially
import { expect, test } from '@jest/globals';
import { sum } from '../math.js';

test('sum adds numbers correctly', 
  () => {
    expect(sum(1, 2)).toBe(3);
  }
);`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-green-500">Green</h3>
                <p className="text-zinc-300 text-sm">
                  Write the minimal amount of code necessary to make the test pass.
                </p>
                <div className="mt-4 text-zinc-300 text-sm">
                  <pre className="bg-zinc-800 p-3 rounded-lg overflow-x-auto">
                    <code>{`// Minimal implementation
export function sum(a, b) {
  return a + b;
}`}</code>
                  </pre>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2 text-blue-500">Refactor</h3>
                <p className="text-zinc-300 text-sm">
                  Optimize the code without changing its behavior.
                </p>
                <div className="mt-4 text-zinc-300 text-sm">
                  <pre className="bg-zinc-800 p-3 rounded-lg overflow-x-auto">
                    <code>{`// Improved implementation
export function sum(...numbers) {
  return numbers.reduce(
    (total, n) => total + n, 0
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-6 text-zinc-300">
              <h3 className="text-xl font-medium mb-3">Benefits of TDD</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Ensures testable code by design</li>
                <li>Provides immediate feedback during development</li>
                <li>Creates a comprehensive test suite automatically</li>
                <li>Encourages simpler designs and modularity</li>
                <li>Acts as living documentation</li>
                <li>Reduces debugging time</li>
                <li>Builds confidence in code changes</li>
              </ul>
            </div>
          </section>

          {/* Code Coverage Section */}
          <section id="code-coverage" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Code Coverage
            </h2>
            <p className="text-zinc-300 mb-4">
              Code coverage measures how much of your source code is executed during testing. It helps identify untested parts of your codebase.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Setting Up Coverage Reports</h3>

            <CodeBlock
              language="javascript"
              title="Setting up code coverage with Jest (ES Modules)"
              code={`// jest.config.mjs with coverage options
export default {
  preset: 'ts-jest/preset/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  // Coverage configuration
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts',
    '!src/types/**',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  // Generate coverage in multiple formats
  coverageReporters: ['text', 'lcov', 'html']
};

// Add to package.json
{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
  }
}`}
            />

            <div className="mt-8 bg-blue-900/30 border border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Types of Coverage Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-zinc-200">Statement Coverage</h4>
                  <p className="text-zinc-300 text-sm">
                    Measures which statements in the program have been executed
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Branch Coverage</h4>
                  <p className="text-zinc-300 text-sm">
                    Measures which branches (e.g., if/else) have been executed
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Function Coverage</h4>
                  <p className="text-zinc-300 text-sm">
                    Measures which functions have been called
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-zinc-200">Line Coverage</h4>
                  <p className="text-zinc-300 text-sm">
                    Measures which executable lines have been executed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-zinc-300">
              <p>
                High code coverage doesn't necessarily mean high-quality tests. Focus on testing behavior, edge cases, and error conditions in addition to achieving good coverage numbers.
              </p>
            </div>
          </section>

          {/* Testing in CI/CD Section */}
          <section id="testing-cicd" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Testing in CI/CD Pipelines
            </h2>
            <p className="text-zinc-300 mb-4">
              Integrating tests into your CI/CD pipelines ensures code quality and prevents regressions when deploying changes.
            </p>

            <CodeBlock
              language="yaml"
              title="GitHub Actions workflow example"
              code={`# .github/workflows/node-test.yml
name: Node.js Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Lint code
      run: npm run lint
      
    - name: Run unit tests
      run: npm test
      
    - name: Run integration tests
      run: npm run test:integration
      
    - name: Generate coverage report
      run: npm run test:coverage
      
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        token: \${{ secrets.CODECOV_TOKEN }}
        
    - name: Build
      run: npm run build
      
    # Add more steps as needed (e.g., E2E tests, deployment)`}
            />

            <div className="bg-purple-900/30 border border-purple-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">CI/CD Testing Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Run fast tests first (unit tests before integration/E2E)</li>
                <li>Fail builds that don't meet coverage thresholds</li>
                <li>Test against multiple Node.js versions</li>
                <li>Cache dependencies to speed up builds</li>
                <li>Save test results as artifacts</li>
                <li>Run security scanning tools (npm audit)</li>
                <li>Include visual regression tests for UIs</li>
                <li>Run smoke tests after deployment</li>
                <li>Set up alerts for failing tests</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}