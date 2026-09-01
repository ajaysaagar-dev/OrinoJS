<div align="center">

# ⚡ Orino.js

**A lightweight, reactive JavaScript framework for building modern user interfaces.**

[![CI](https://github.com/ajaysaagar-dev/OrinoJS/actions/workflows/ci.yml/badge.svg)](https://github.com/ajaysaagar-dev/OrinoJS/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node: >=18.0.0](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

</div>

---

## 📖 Overview

**Orino.js** is designed for simplicity and performance. It provides a clean, reactive programming model for developing web applications without the overhead of heavy virtual DOM abstractions. With built-in CSS-in-JS style synthesis, component lifecycle hooks, reactive state primitives, and theme switching, Orino.js empowers developers to create interactive apps with minimal boilerplate.

---

## ✨ Features

- **🚀 Reactive State Management**: Built-in `ReactiveState` primitive for predictable, mutation-tracked state changes.
- **🎨 Dynamic Style Engine**: Type-safe CSS generation and scoped styling via `Styles` and runtime style converters.
- **📄 Component Pages**: Intuitive `Page` abstraction for single-page application views and lifecycle management.
- **🌗 Built-in Theme Engine**: Seamless dark/light theme switching with `Theme` and `ThemeColor`.
- **🏷️ Tagged Template Literals**: Expressive, zero-overhead HTML templating using native tagged templates (`html` helper).
- **⚡ Fast Development Server**: Integrated Vite runtime environment for instant hot module reloading.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ajaysaagar-dev/OrinoJS.git
cd OrinoJS
npm install
```

---

## 🚀 Quick Start

### Starting the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run dist
```

---

## 🛠️ Usage Example

```javascript
import { Page, Styles, ReactiveState, html } from 'orinojs';

// 1. Define Reactive State
const counter = new ReactiveState(0);

// 2. Define Scoped Styles
const cardStyle = Styles({
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: '#1e1e2e',
  color: '#ffffff',
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
});

// 3. Render Component
const view = html`
  <div class="${cardStyle}">
    <h1>Orino.js App</h1>
    <p>Current Count: ${counter.state}</p>
    <button onclick="${() => counter.increment()}">Increment</button>
  </div>
`;
```

---

## 🧪 Testing

Orino.js includes an automated unit test suite:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please check out [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
