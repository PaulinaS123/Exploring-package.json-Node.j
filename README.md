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


