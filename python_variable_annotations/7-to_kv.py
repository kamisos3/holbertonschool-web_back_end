#!/usr/bin/env python3
"""Type-annotated function that returns a tuple of string and squared number"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with string k and the square of v as a float"""
    return (k, v ** 2)
