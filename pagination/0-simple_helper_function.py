#!/usr/bin/python3
"""Function that calculates pagination"""

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
