#!/usr/bin/python3
from typing import Tuple
"""Imports tuple"""

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return the start offset and end index for a given page and page size

    page: This is the page number
    page_size: Is the number of items per page

    """
    start = (page - 1) * page_size
    end = start + page_size

    return (start, end)
