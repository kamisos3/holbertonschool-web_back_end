#!/usr/bin/env python3
"""Type-annotated function that sums a list of floats"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Returns the sum of a list of floats"""
    return sum(input_list)
