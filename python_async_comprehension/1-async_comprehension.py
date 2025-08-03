#!/usr/bin/env python3

"""Async Comprehensions."""

async_generator = __import__('0-async_generator').async_generator

async def async_comprehension():
    """Collect 10 numbers from async_generator and return them as a list."""
    return [num async for num in async_generator()]
