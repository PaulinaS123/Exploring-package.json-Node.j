# Exploring-package.json-Node.j
Assignment: Exploring package.json in Node.js understanding the structure and functionality of the package.json file in a Node.js project.

# Exploring package.json in Node.js

## Objective
The objective of this project is to explore the structure and functionality of the `package.json` file in a Node.js project. This includes understanding dependencies, devDependencies, scripts, versioning, and testing.

---

## Project Structure

Explorepackage.json/
├── index.js # Main Node.js program (Express server)
├── index.test.js # Jest test cases (3 normal + 3 edge)
├── package.json # Project metadata, dependencies, scripts
├── package-lock.json # Locks exact dependency versions
└── node_modules/ # Installed dependencies


---

## Dependencies

- **express**: ^4.18.2  
- **jest**: ^29.7.0 (devDependency)

---

## Scripts

| Command           | Description                                     |
|------------------|-------------------------------------------------|
| `npm start`       | Runs the Node.js server (`index.js`)           |
| `npm test`        | Runs Jest tests (`index.test.js`)              |

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PaulinaS123/Exploring-package.json-Node.j.git
cd Explorepackage.json
```
2. Install dependencies:

```bash
npm install
```
3. Usage
Run the Server

```bash
npm start
```
Open your browser at http://localhost:3000

You should see: Hello World! Package.json demo running.

4. Run Tests

```bash
npm test
```

Jest will run all test cases in index.test.js

Output should show all 6 tests passing (3 normal + 3 edge cases)

## Test Cases
### Normal Cases

2 + 3 = 5

0 + 0 = 0

-1 + 1 = 0

### Edge Cases

1e9 + 1e9 = 2e9

-1e9 + -1e9 = -2e9

123 + 0 = 123

## Notes

package.json contains all project metadata, dependencies, devDependencies, scripts, and engine requirements.

package-lock.json ensures consistent installs across environments.

ESLint can be configured separately to maintain code style consistency (optional).


