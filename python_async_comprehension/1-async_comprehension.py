#!/usr/bin/env python3
"""Async Comprehensions module"""
import typing
from importlib import import_module

async_generator = import_module('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """Collects and returns 10 random numbers"""
    return [i async for i in async_generator()]
