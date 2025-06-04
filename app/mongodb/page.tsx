import { CodeBlock } from "@/components/ui/code-block";

export default function MongoDBPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">MongoDB with Node.js</h1>
        <p className="text-xl text-zinc-400 mb-10">
          Connect, model, and query MongoDB databases in your Node.js applications
        </p>

        <div className="space-y-16">
          {/* MongoDB Intro Section */}
          <section id="mongodb-intro" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              MongoDB Basics
            </h2>
            <p className="text-zinc-300">
              MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents.
              It's popular in Node.js applications due to its flexible schema design and native JSON support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">Key Concepts</h3>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li><span className="text-yellow-400 font-semibold">Document:</span> A record in MongoDB, similar to a JSON object</li>
                  <li><span className="text-yellow-400 font-semibold">Collection:</span> A group of documents (like a table in SQL)</li>
                  <li><span className="text-yellow-400 font-semibold">Database:</span> A container for collections</li>
                  <li><span className="text-yellow-400 font-semibold">Field:</span> A key-value pair in a document</li>
                  <li><span className="text-yellow-400 font-semibold">_id:</span> Unique identifier automatically added to each document</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-lg font-medium mb-2">MongoDB vs SQL</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left py-2 px-3 font-medium">SQL</th>
                        <th className="text-left py-2 px-3 font-medium">MongoDB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      <tr>
                        <td className="py-2 px-3">Table</td>
                        <td className="py-2 px-3">Collection</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Row</td>
                        <td className="py-2 px-3">Document</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Column</td>
                        <td className="py-2 px-3">Field</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Primary Key</td>
                        <td className="py-2 px-3">_id Field</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">JOIN</td>
                        <td className="py-2 px-3">$lookup, embedding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Connecting to MongoDB</h3>
            <p className="text-zinc-300 mb-4">
              You can connect to MongoDB using the native driver or an ODM like Mongoose. Here's how to connect using both approaches:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CodeBlock
                language="javascript"
                title="MongoDB Native Driver"
                code={`// Using the MongoDB native driver
import { MongoClient } from 'mongodb';

// Connection URI
const uri = 'mongodb://localhost:27017/myapp';
const client = new MongoClient(uri);

const connect = async () => {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Get a reference to the database
    const db = client.db('myapp');
    
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Usage
connect()
  .then(db => {
    // Work with your database
    const usersCollection = db.collection('users');
    
    // Your database operations here...
  })
  .catch(console.error)
  .finally(() => client.close());`}
              />

              <CodeBlock
                language="javascript"
                title="Mongoose ODM"
                code={`// Using Mongoose ODM
import mongoose from 'mongoose';

// Connection URI
const uri = 'mongodb://localhost:27017/myapp';

// Connect with options
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB with Mongoose'))
  .catch(err => console.error('Mongoose connection error:', err));

// Connection events
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Gracefully close the connection when the app is terminated
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});`}
              />
            </div>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Connection Best Practices</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Store connection strings in environment variables</li>
                <li>Use connection pooling for optimal performance</li>
                <li>Implement error handling and reconnection strategies</li>
                <li>Close connections when your application shuts down</li>
                <li>Use SSL/TLS for production connections</li>
              </ul>
            </div>
          </section>

          {/* Mongoose Models Section */}
          <section id="mongoose-models" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Mongoose Models
            </h2>
            <p className="text-zinc-300 mb-4">
              Mongoose is an elegant MongoDB object modeling tool that provides schema validation, middleware, type casting, and more.
            </p>

            <h3 className="text-xl font-medium mb-3">Defining Schemas and Models</h3>

            <CodeBlock
              language="javascript"
              title="Creating a Mongoose Schema and Model"
              code={`// User schema and model example
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define a schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: Date,
  // Array of strings
  skills: [String],
  // Embedded document / sub-document
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: {
      type: String,
      default: 'USA'
    }
  },
  // Array of embedded documents
  education: [{
    school: String,
    degree: String,
    graduationYear: Number
  }],
  // Reference to another model
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  // Schema options
  timestamps: true, // adds createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Instance method
userSchema.methods.getFullName = function() {
  return this.name;
};

// Static method (on the model)
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

// Virtual property (derived field)
userSchema.virtual('displayName').get(function() {
  return this.name;
});

// Middleware (pre-save hook)
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  // Example: hash the password before saving
  try {
    // We would normally use bcrypt here
    this.password = \`hashed_\${this.password}\`;
    next();
  } catch (error) {
    next(error);
  }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

export default User;`}
            />

            <h3 className="text-xl font-medium mt-8 mb-3">Schema Types and Validation</h3>
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h4 className="text-lg font-medium mb-2">Available Schema Types</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    <li>String</li>
                    <li>Number</li>
                    <li>Date</li>
                    <li>Boolean</li>
                    <li>Buffer</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    <li>Mixed</li>
                    <li>ObjectId</li>
                    <li>Array</li>
                    <li>Decimal128</li>
                    <li>Map</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                    <li>UUID</li>
                    <li>BigInt</li>
                    <li>Schema</li>
                    <li>Subdocument</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 mt-4">
              <h4 className="text-lg font-medium mb-2">Schema Validation Options</h4>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 px-3 font-medium">Option</th>
                    <th className="text-left py-2 px-3 font-medium">Description</th>
                    <th className="text-left py-2 px-3 font-medium">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">required</td>
                    <td className="py-2 px-3">Field must be present</td>
                    <td className="py-2 px-3"><code>required: true</code> or <code>[true, 'Error message']</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">default</td>
                    <td className="py-2 px-3">Default value if not specified</td>
                    <td className="py-2 px-3"><code>default: 'Guest'</code> or function</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">min/max</td>
                    <td className="py-2 px-3">Min/max for Numbers</td>
                    <td className="py-2 px-3"><code>min: 18</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">minlength/maxlength</td>
                    <td className="py-2 px-3">Min/max length for Strings</td>
                    <td className="py-2 px-3"><code>maxlength: 100</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">enum</td>
                    <td className="py-2 px-3">List of allowed values</td>
                    <td className="py-2 px-3"><code>enum: ['admin', 'user']</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">match</td>
                    <td className="py-2 px-3">RegExp pattern validation</td>
                    <td className="py-2 px-3"><code>match: /pattern/</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-yellow-400">validate</td>
                    <td className="py-2 px-3">Custom validation function</td>
                    <td className="py-2 px-3"><code>validate: {'{function(v) { return v > 0; }'}</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CRUD Operations Section */}
          <section id="crud-operations" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              CRUD Operations
            </h2>
            <p className="text-zinc-300 mb-4">
              Let's look at common Create, Read, Update, and Delete operations with Mongoose.
            </p>

            <CodeBlock
              language="javascript"
              title="Create Operations"
              code={`// Create a new document
import User from './models/User';

// Method 1: Create instance and save
const createUser = async () => {
  try {
    const user = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secret123',
      skills: ['JavaScript', 'Node.js', 'MongoDB']
    });
    
    // Save to database
    const savedUser = await user.save();
    console.log('User created:', savedUser);
    return savedUser;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

// Method 2: Model.create()
const createMultipleUsers = async () => {
  try {
    const users = await User.create([
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123'
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        password: 'securepass'
      }
    ]);
    
    console.log(\`Created \${users.length} users\`);
    return users;
  } catch (error) {
    console.error('Error creating users:', error.message);
    throw error;
  }
};

// Method 3: insertMany (faster for bulk operations)
const insertManyUsers = async (usersData) => {
  try {
    const result = await User.insertMany(usersData, { ordered: false });
    console.log(\`Inserted \${result.length} users\`);
    return result;
  } catch (error) {
    console.error('Error bulk inserting users:', error.message);
    throw error;
  }
};`}
            />

            <CodeBlock
              language="javascript"
              title="Read Operations"
              code={`// Basic queries
import User from './models/User';

// Find all users
const findAllUsers = async () => {
  try {
    const users = await User.find();
    console.log(\`Found \${users.length} users\`);
    return users;
  } catch (error) {
    console.error('Error finding users:', error.message);
    throw error;
  }
};

// Find one user by ID
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found');
      return null;
    }
    return user;
  } catch (error) {
    console.error('Error finding user by ID:', error.message);
    throw error;
  }
};

// Find one user by criteria
const findOneUser = async (criteria) => {
  try {
    const user = await User.findOne(criteria);
    return user; // Returns null if not found
  } catch (error) {
    console.error('Error finding user:', error.message);
    throw error;
  }
};

// Advanced queries with filtering
const findActiveAdmins = async () => {
  try {
    const admins = await User.find({
      role: 'admin',
      active: true
    });
    return admins;
  } catch (error) {
    console.error('Error finding active admins:', error.message);
    throw error;
  }
};

// Projection (selecting specific fields)
const getUsersNameAndEmail = async () => {
  try {
    // Include only name and email (exclude _id)
    const users = await User.find({}, { name: 1, email: 1, _id: 0 });
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error.message);
    throw error;
  }
};

// Sorting, pagination, and limiting results
const getPaginatedUsers = async (page = 1, limit = 10) => {
  try {
    const users = await User.find()
      .sort({ createdAt: -1 }) // Sort by createdAt descending (newest first)
      .skip((page - 1) * limit) // Skip pages
      .limit(limit); // Limit results per page
      
    // Get total count for pagination info
    const total = await User.countDocuments();
    
    return {
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalUsers: total
    };
  } catch (error) {
    console.error('Error retrieving paginated users:', error.message);
    throw error;
  }
};

// Population (joining related documents)
const getUserWithPosts = async (userId) => {
  try {
    const user = await User.findById(userId)
      .populate('posts'); // Populate the posts array with actual Post documents
      
    return user;
  } catch (error) {
    console.error('Error retrieving user with posts:', error.message);
    throw error;
  }
};`}
            />

            <CodeBlock
              language="javascript"
              title="Update Operations"
              code={`// Update operations
import User from './models/User';

// Update a user by ID using findByIdAndUpdate
const updateUserById = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { 
        new: true, // Return the updated document
        runValidators: true // Run schema validators
      }
    );
    
    if (!updatedUser) {
      console.log('User not found');
      return null;
    }
    
    console.log('User updated:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
};

// Update one document
const updateOneUser = async (filter, updateData) => {
  try {
    const result = await User.updateOne(filter, updateData);
    console.log(\`Matched: \${result.matchedCount}, Modified: \${result.modifiedCount}\`);
    return result;
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
};

// Update many documents
const updateManyUsers = async (filter, updateData) => {
  try {
    const result = await User.updateMany(
      filter, // e.g., { role: 'user' }
      updateData // e.g., { $set: { active: true } }
    );
    console.log(\`Updated \${result.modifiedCount} of \${result.matchedCount} matching users\`);
    return result;
  } catch (error) {
    console.error('Error updating users:', error.message);
    throw error;
  }
};

// Update with atomic operators
const atomicUpdates = async (userId) => {
  try {
    // $set - Set field values
    await User.updateOne(
      { _id: userId },
      { $set: { 'address.city': 'New York' } }
    );
    
    // $inc - Increment field values
    await User.updateOne(
      { _id: userId },
      { $inc: { loginCount: 1 } }
    );
    
    // $push - Add to array
    await User.updateOne(
      { _id: userId },
      { $push: { skills: 'MongoDB' } }
    );
    
    // $addToSet - Add to array if doesn't exist
    await User.updateOne(
      { _id: userId },
      { $addToSet: { skills: 'Express.js' } }
    );
    
    // $pull - Remove from array
    await User.updateOne(
      { _id: userId },
      { $pull: { skills: 'jQuery' } }
    );
    
    // Using findOneAndUpdate with upsert
    const result = await User.findOneAndUpdate(
      { email: 'new@example.com' },
      { name: 'New User', role: 'user' },
      { upsert: true, new: true } // Create if doesn't exist
    );
    
    return result;
  } catch (error) {
    console.error('Error with atomic updates:', error.message);
    throw error;
  }
};`}
            />

            <CodeBlock
              language="javascript"
              title="Delete Operations"
              code={`// Delete operations
import User from './models/User';

// Delete one user by ID
const deleteUserById = async (userId) => {
  try {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      console.log('User not found');
      return null;
    }
    console.log('User deleted');
    return result;
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
};

// Delete one document matching criteria
const deleteOneUser = async (filter) => {
  try {
    const result = await User.deleteOne(filter);
    console.log(\`Deleted \${result.deletedCount} user\`);
    return result;
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
};

// Delete multiple documents
const deleteInactiveUsers = async () => {
  try {
    const result = await User.deleteMany({ active: false });
    console.log(\`Deleted \${result.deletedCount} inactive users\`);
    return result;
  } catch (error) {
    console.error('Error deleting inactive users:', error.message);
    throw error;
  }
};

// Soft delete (updating instead of deleting)
const softDeleteUser = async (userId) => {
  try {
    const result = await User.findByIdAndUpdate(
      userId,
      { active: false, deletedAt: new Date() },
      { new: true }
    );
    return result;
  } catch (error) {
    console.error('Error soft-deleting user:', error.message);
    throw error;
  }
};`}
            />
          </section>

          {/* Advanced MongoDB Section */}
          <section id="advanced-mongodb" className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-zinc-800 pb-2">
              Advanced MongoDB Features
            </h2>
            <p className="text-zinc-300 mb-4">
              Explore more advanced MongoDB features and techniques.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Aggregation Framework</h3>
            <p className="text-zinc-300 mb-4">
              MongoDB's aggregation framework allows for complex data processing and analysis on the database side.
            </p>

            <CodeBlock
              language="javascript"
              title="Aggregation Pipeline Example"
              code={`// Using the aggregation pipeline
const Order = require('./models/Order');

const getOrderStatistics = async () => {
  try {
    const stats = await Order.aggregate([
      // Stage 1: Match documents (similar to find)
      {
        $match: {
          status: 'completed',
          orderDate: {
            $gte: new Date('2024-01-01'),
            $lte: new Date('2024-12-31')
          }
        }
      },
      
      // Stage 2: Group documents
      {
        $group: {
          _id: { month: { $month: "$orderDate" } },
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: "$total" },
          averageOrderValue: { $avg: "$total" },
          minOrderValue: { $min: "$total" },
          maxOrderValue: { $max: "$total" }
        }
      },
      
      // Stage 3: Sort results
      {
        $sort: { "_id.month": 1 }
      },
      
      // Stage 4: Add calculated fields
      {
        $addFields: {
          monthName: {
            $let: {
              vars: {
                monthNames: [
                  "January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                ]
              },
              in: {
                $arrayElemAt: ["$$monthNames", { $subtract: ["$_id.month", 1] }]
              }
            }
          }
        }
      },
      
      // Stage 5: Project (reshape) documents
      {
        $project: {
          _id: 0,
          month: "$monthName",
          totalOrders: 1,
          totalRevenue: { $round: ["$totalRevenue", 2] },
          averageOrderValue: { $round: ["$averageOrderValue", 2] },
          minOrderValue: 1,
          maxOrderValue: 1
        }
      }
    ]);
    
    return stats;
  } catch (error) {
    console.error('Error in aggregation pipeline:', error);
    throw error;
  }
};

// Example of $lookup (similar to SQL JOIN)
const getUsersWithOrders = async () => {
  try {
    const usersWithOrders = await User.aggregate([
      {
        $lookup: {
          from: "orders", // Collection name to join with
          localField: "_id", // Field from users collection
          foreignField: "userId", // Field from orders collection
          as: "userOrders" // Array containing the orders
        }
      },
      {
        $project: {
          name: 1,
          email: 1,
          orderCount: { $size: "$userOrders" },
          totalSpent: { $sum: "$userOrders.total" }
        }
      }
    ]);
    
    return usersWithOrders;
  } catch (error) {
    console.error('Error looking up user orders:', error);
    throw error;
  }
};`}
            />
            
            <h3 className="text-xl font-medium mt-8 mb-3">Indexing for Performance</h3>

            <CodeBlock
              language="javascript"
              title="Creating and Managing Indexes"
              code={`// Working with indexes in Mongoose
const mongoose = require('mongoose');

// Create an index in the schema definition
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true, // Creates a unique index
    required: true
  },
  location: {
    type: String,
    index: true // Creates a simple index
  },
  // Compound index will be created separately
  createdAt: Date
});

// Create a compound index
userSchema.index({ createdAt: -1, name: 1 });

// Create a text index for full text search
userSchema.index({ name: 'text', bio: 'text' });

// Create a geospatial index
const placeSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number] } // [longitude, latitude]
  }
});

placeSchema.index({ location: '2dsphere' });

// Find places near a location using a geospatial query
const findPlacesNearby = async (longitude, latitude, maxDistance = 5000) => {
  try {
    const places = await Place.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: maxDistance // in meters
        }
      }
    });
    
    return places;
  } catch (error) {
    console.error('Error finding nearby places:', error);
    throw error;
  }
};

// Get information about existing indexes
const getCollectionIndexes = async () => {
  try {
    const indexes = await User.collection.getIndexes();
    console.log('Collection indexes:', indexes);
    return indexes;
  } catch (error) {
    console.error('Error getting indexes:', error);
    throw error;
  }
};

// Drop a specific index
const dropIndex = async (indexName) => {
  try {
    await User.collection.dropIndex(indexName);
    console.log(\`Dropped index: \${indexName}\`);
  } catch (error) {
    console.error('Error dropping index:', error);
    throw error;
  }
};`}
            />

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">MongoDB Performance Tips</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li>Create indexes for frequently queried fields</li>
                <li>Use projection to return only needed fields</li>
                <li>Limit results with pagination</li>
                <li>Consider embedding related data that's frequently queried together</li>
                <li>Use compound indexes for queries with multiple conditions</li>
                <li>Avoid large arrays in documents (create references instead)</li>
                <li>Use batch operations for bulk inserts/updates</li>
                <li>Be careful with regex queries, especially those without an anchored beginning (^)</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Transactions</h3>
            <p className="text-zinc-300 mb-4">
              MongoDB supports multi-document transactions since version 4.0 for replica sets and 4.2 for sharded clusters.
            </p>

            <CodeBlock
              language="javascript"
              title="Using Transactions"
              code={`// Using transactions with Mongoose
const mongoose = require('mongoose');
const User = require('./models/User');
const Account = require('./models/Account');

// Function to transfer money between accounts
const transferMoney = async (fromAccountId, toAccountId, amount) => {
  // Start a session
  const session = await mongoose.startSession();
  
  try {
    // Start transaction
    session.startTransaction();
    
    // Perform operations in the transaction
    const fromAccount = await Account.findById(fromAccountId, null, { session });
    if (!fromAccount || fromAccount.balance < amount) {
      throw new Error('Insufficient funds or account not found');
    }
    
    const toAccount = await Account.findById(toAccountId, null, { session });
    if (!toAccount) {
      throw new Error('Recipient account not found');
    }
    
    // Update both accounts
    await Account.findByIdAndUpdate(
      fromAccountId,
      { $inc: { balance: -amount } },
      { new: true, session }
    );
    
    await Account.findByIdAndUpdate(
      toAccountId,
      { $inc: { balance: amount } },
      { new: true, session }
    );
    
    // Create transaction record (optional)
    await Transaction.create(
      [{
        fromAccount: fromAccountId,
        toAccount: toAccountId,
        amount,
        timestamp: new Date()
      }],
      { session }
    );
    
    // Commit the transaction
    await session.commitTransaction();
    console.log('Transaction committed successfully');
    
    return { success: true };
  } catch (error) {
    // Abort transaction on error
    await session.abortTransaction();
    console.error('Transaction aborted:', error.message);
    throw error;
  } finally {
    // End session
    session.endSession();
  }
};`}
            />

            <div className="bg-green-900/30 border border-green-800 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">MongoDB and Mongoose Resources</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300">
                <li><a href="https://mongoosejs.com/docs/" target="_blank" rel="noopener" className="text-green-400 hover:underline">Mongoose Documentation</a></li>
                <li><a href="https://docs.mongodb.com/manual/" target="_blank" rel="noopener" className="text-green-400 hover:underline">MongoDB Documentation</a></li>
                <li><a href="https://university.mongodb.com/" target="_blank" rel="noopener" className="text-green-400 hover:underline">MongoDB University - Free Courses</a></li>
                <li><a href="https://www.mongodb.com/try/download/compass" target="_blank" rel="noopener" className="text-green-400 hover:underline">MongoDB Compass - GUI Tool</a></li>
                <li><a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener" className="text-green-400 hover:underline">MongoDB Atlas - Cloud Database</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}