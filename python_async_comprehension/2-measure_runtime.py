#!/usr/bin/env python3

"""Run time for four parallel comprehensions."""

import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """Measure the total runtime for four parallel async_comprehension executions."""
    start = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.time()
    return end - start
