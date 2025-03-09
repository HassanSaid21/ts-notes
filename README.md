# ![TypeScript Logo](./images/ts-logo.png) TypeScript Notes

Welcome to the **TypeScript Notes** repository! This guide provides an overview of key TypeScript concepts with supporting images for better understanding.

## 📌 Overview
This repository contains detailed notes on TypeScript, including:
- TypeScript Basics
- Data Types
- Interfaces & Types
- Functions & Generics
- Object-Oriented Programming (OOP) in TypeScript
- Advanced TypeScript Features
- Compilation & Configuration

## 🚀 Getting Started
To use this repository effectively, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ts-notes.git
   ```
2. Navigate to the directory:
   ```bash
   cd ts-notes
   ```
3. Open the `index.md` file or browse the structured notes.

## 📖 TypeScript Concepts

### 1️⃣ TypeScript Basics
**Definition**: TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript.

![TypeScript Basics](./images/typescript-basics.png)

### 2️⃣ Data Types
TypeScript provides static types for better code safety. Common types include:
- `string`, `number`, `boolean`
- `array`, `tuple`
- `enum`, `any`, `void`, `unknown`, `never`

![Data Types](./images/data-types.png)

### 3️⃣ Interfaces & Types
Interfaces and types allow you to define the structure of objects.

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}
```

![Interfaces](./images/interfaces.png)

### 4️⃣ Functions & Generics
Generics make functions and classes reusable for different data types.

```typescript
function identity<T>(value: T): T {
  return value;
}
```

![Generics](./images/generics.png)

### 5️⃣ Object-Oriented Programming (OOP)
TypeScript supports OOP principles:
- Classes
- Inheritance
- Interfaces
- Access Modifiers

```typescript
class Person {
  constructor(private name: string) {}
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

![OOP](./images/oop.png)

### 6️⃣ Advanced Features
Explore features like:
- Type Assertions
- Mapped Types
- Conditional Types
- Utility Types

![Advanced Features](./images/advanced.png)

### 7️⃣ Compilation & Configuration
Compile TypeScript using:
```bash
tsc filename.ts
```

Configure TypeScript using `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true
  }
}
```

![Compilation](./images/compilation.png)

## 📂 Project Structure
```
ts-notes/
│── images/              # Images for documentation
│── notes/               # Detailed TypeScript Notes
│── index.md             # Main documentation file
│── tsconfig.json        # TypeScript configuration file
```

## 🎯 Contribution
Feel free to contribute to this repository by submitting pull requests or reporting issues.

## 📜 License
This project is licensed under the MIT License.

Happy Coding! 🚀

