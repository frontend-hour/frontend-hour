# Frontend Hour

![Frontend Hour](./assets/Frontend-Hour.png "Frontend Hour")

**Frontend Hour** is a concept of one hour learning everyday. This repository is a comprehensive collection of frontend concepts, algorithms, and interview resources, organized to help you master modern web development.

[**🔴 LIVE WEBSITE**](https://frontend-hour.github.io/frontend-hour/)

## 📚 Repository Structure

### 1. [Data Structures & Algorithms (DSA)](./dsa/)
Master the foundations of computer science in JavaScript.
- **[Algorithms](./dsa/algorithms/)**: Sorting (Bubble, Merge, Quick), Searching, and more.
- **[Data Structures](./dsa/data-structures/)**: Arrays, Linked Lists, Trees, Graphs.
- **[Challenges](./dsa/challenges/)**: Solutions to common coding problems (LeetCode style).

### 2. [Frontend Knowledge](./frontend-knowledge/)
Deep dives into the core technologies of the web.

#### JavaScript
- **[Async Programming](./frontend-knowledge/javascript/async-programming/)**: Promises, Async/Await, Event Loop.
- **[Prototypes & OOP](./frontend-knowledge/javascript/prototypes-oop/)**: Inheritance, Classes, `this` keyword.
- **[Closures & Scope](./frontend-knowledge/javascript/closures-and-scope/)**: Lexical scope, Hoisting, TDZ.
- **[Functions](./frontend-knowledge/javascript/functions-and-this/)**: Currying, Composition, Memoization.
- **[Performance](./frontend-knowledge/javascript/performance-optimization/)**: Debounce, Throttle, Rendering.
- **[Internals](./frontend-knowledge/javascript/internals/)**: V8 Engine, Recursion, Iterators.

#### Frameworks & Design
- **[React](./frontend-knowledge/react/)**: Hooks, Lifecycle, Interview Questions.
- **[System Design](./frontend-knowledge/system-design/)**: Designing scalable frontend applications.
- **[Design Patterns](./frontend-knowledge/design-patterns/)**: Observer, Singleton, Module patterns.

### 3. [Interview Resources](./interview-resources/)
Tools to help you crack the interview.
- **[Common Questions](./interview-resources/common-questions/)**: Behavioral and technical FAQs.
- **[Coding Drills](./interview-resources/js-coding-drills/)**: Rapid-fire JS exercises and utility implementations.
- **[Checklists](./interview-resources/checklists/)**: What to review before the big day.

---

## 🚀 Interactive Website
This repository is also available as an interactive learning hub!

👉 **[Visit the Live Site](https://frontend-hour.github.io/frontend-hour/)**

### How to Run Locally
The website uses a **Single Page Application (SPA)** architecture that loads content dynamically.

1. **Install Dependencies** (if you want to regenerate the index):
   ```bash
   npm install
   ```
2. **Start a Local Server**:
   You **cannot** just open `index.html` file directly due to browser security restrictions (CORS).
   ```bash
   # Python
   python3 -m http.server

   # OR Node.js
   npx http-server .
   ```
3. **Open in Browser**:
   Visit `http://localhost:8000`

### Updating Content
If you add new Markdown files, run the index generator to update the website structure:
```bash
node scripts/generate-index.js
```

---
*Happy Learning!*
