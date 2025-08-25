# JavaScript ES6 - Classes

▶ **Introduction**
This project demonstrates the use of JavaScript ES6 Classes to implement object-oriented programming concepts. ES6 Classes provide a cleaner, more intuitive syntax for creating and managing objects, making code easier to read, maintain, and extend. This project is designed to help you understand how to define classes, use inheritance, and implement methods in modern JavaScript.

▶ **Table of Contents**

- Overview[#overview]
- Concepts[#concepts]
- Example[#example]
- Installation[#installation]
- Author[#author]

▶ **Overview**
This project explores ES6 Classes in JavaScript, showcasing how to create reusable blueprints for objects, implement inheritance, and use methods for encapsulating behavior.

▶ **Concepts**

- ES6 Class Syntax
- Constructors and Properties
- Getter and Setter Methods
- Inheritance (Extending Classes)
- Instance Methods
- The `cloneCar` Method
- Symbols in ES6

▶ **Example**

```javascript
export default class Car {
	constructor(brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	cloneCar() {
		return new this.constructor();
	}
}
```

▶ **Installation**

Clone this repository in your terminal:

```bash
git clone https://github.com/kamisos3/holbertonschool-web_back_end/tree/main/ES6_classes
```

▶ **Author**

Kami Sostre [https://github.com/kamisos3]