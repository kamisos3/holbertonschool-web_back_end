#!/usr/bin/env python3
"""
Async Generator module
"""
import asyncio
import random


async def async_generator():
    """Loops 10 times, printing a float every second"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
