#!/usr/bin/env python3
"""Module that contains task_wait_random function"""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Regular function that takes an integer and returns asyncio.Task"""
    return asyncio.create_task(wait_random(max_delay))
