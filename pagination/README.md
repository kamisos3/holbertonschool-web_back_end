# Pagination

▶ **Introduction**

This project implements comprehensive pagination techniques in Python for handling large datasets efficiently. The project demonstrates three different pagination approaches: simple pagination, hypermedia pagination, and deletion-resilient pagination. The purpose of this project is to showcase best practices for data pagination in web applications and APIs.


▶ **Table of Contents**

- [Overview](#overview)
- [Concepts](#concepts)
- [Example](#example)
- [Installation](#installation)
- [Author](#author)


▶ **Overview**

This project contains a complete pagination system implementation using Python and CSV data handling. It processes the Popular Baby Names dataset and provides different pagination strategies to efficiently serve data in manageable chunks. The implementation includes input validation, error handling, and type annotations.


▶ **Concepts**

- **Simple Pagination**: Basic offset-based pagination using start and end indexes
- **Index Range Calculation**: Mathematical approach to determine data boundaries for each page
- **CSV Data Processing**: Reading and caching large datasets from CSV files
- **Hypermedia Pagination**: RESTful pagination with metadata including next/previous page information
- **Deletion-Resilient Pagination**: Advanced pagination that handles data deletions gracefully
- **Type Annotations**: Full type hinting for better code documentation and IDE support
- **Error Handling**: Comprehensive input validation using assertions
- **Caching**: Dataset caching to improve performance for repeated requests


▶ **Example**

```python
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return the start offset and end index for a given page and page size

    page: This is the page number thats 3
    page_size: Is the number of items per page thats 15

    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
```


▶ **Installation**


Clone this repository in your terminal:

```bash
git clone https://github.com/kamisos3/holbertonschool-web_back_end/tree/main/pagination
```

▶ **Author**


Kami Sostre [https://github.com/kamisos3]
