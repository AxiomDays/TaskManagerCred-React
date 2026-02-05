# LocalStorage Documentation

## Overview
This TaskManager application uses the browser's `localStorage` API to persist user data between sessions. The application maintains two primary data stores: task lists and user coin counts.

## Implementation

### Storage Utility Module
**Location:** [src/components/utils/localStorage.js](src/components/utils/localStorage.js)

The localStorage functionality is abstracted into a utility module with two main functions:

#### `setItem(key, value)`
- **Purpose:** Stores a value in localStorage with automatic JSON serialization
- **Parameters:**
  - `key` (string): The storage key identifier
  - `value` (any): The value to store (automatically converted to JSON)
- **Error Handling:** Wrapped in try-catch to log errors to console
- **Usage:** `setItem("tasklist", taskArray)`

#### `getItem(key)`
- **Purpose:** Retrieves and deserializes a value from localStorage
- **Parameters:**
  - `key` (string): The storage key identifier
- **Returns:** Parsed JSON object or `undefined` if key doesn't exist
- **Error Handling:** Wrapped in try-catch to log errors to console
- **Usage:** `const tasks = getItem("tasklist")`

## Data Schema

### Storage Key: `"tasklist"`
**Type:** Array of Task Objects

**Task Object Structure:**
```javascript
{
  id: number,              // Unique identifier, correlates with array position
  name: string,            // Task title
  description: string,     // Task description/details
  difficulty: string,      // Task difficulty ("Easy", "Normal", "Hard")
  done: boolean           // Completion status
}