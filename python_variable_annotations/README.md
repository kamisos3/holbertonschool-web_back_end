# Python - Variable Annotations

▶ **Introduction**

This project explores Python's variable annotations feature introduced in Python 3.5 through PEP 484. Variable annotations provide a way to specify the expected types of variables, function parameters, and return values, making code more readable, self-documenting, and enabling static type checking tools like mypy. This project demonstrates various annotation techniques from basic types to complex generic types, helping developers understand how to write more robust and maintainable Python code.

▶ **Table of Contents**

- [Overview](#overview)
- [Concepts](#concepts)
- [Example](#example)
- [Installation](#installation)
- [Author](#author)

▶ **Overview**

This project contains 9 tasks that progressively introduce different aspects of Python type annotations. Starting with basic type annotations for simple data types (int, float, str, bool), it advances to complex types including lists, tuples, unions, callable functions, and duck typing with iterables. Each task demonstrates practical applications of type annotations and shows how they improve code clarity and enable better tooling support.

▶ **Concepts**

- **Basic Type Annotations**: Annotating variables and function parameters with simple types
- **Function Return Type Annotations**: Specifying what type a function returns
- **Complex Type Annotations**: Using typing module for generic types like List, Tuple, Union
- **Duck Typing**: Using abstract types like Iterable and Sequence for flexible interfaces
- **Callable Types**: Annotating functions that return other functions
- **Union Types**: Allowing multiple possible types for a parameter
- **Generic Types**: Creating type-safe containers with specific element types
- **Type Checking**: Enabling static analysis tools to verify type correctness

▶ **Example**

```python
def add(a: float, b: float) -> float:
    """Add two floats and return their sum"""
    return a + b
```

▶ **Installation**

Clone this repository in your terminal:

```bash
git clone https://github.com/kamisos3/holbertonschool-web_back_end/tree/main/python_variable_annotations
```

▶ **Author**

Kami Sostre [https://github.com/kamisos3]