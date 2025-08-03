#!/usr/bin/env python3

"""
Async routine wait_n that spawns wait_random n times and returns the delays
in ascending order.
"""

import asyncio
from typing import List
import importlib

task_wait_random = importlib.import_module("3-tasks").wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay.

    Args:
        n (int): The number of times to call wait_random.
        max_delay (int): The maximum delay in seconds for wait_random.

    Returns:
        List[float]: A list of all the delays in ascending order.
    """
    delays = []
    for _ in range(n):
        delays.append(asyncio.create_task(task_wait_random(max_delay)))

    completed, _ = await asyncio.wait(delays)
    results = [task.result() for task in completed]

    # Manually insert each delay into the correct position in a new list
    sorted_results = []
    for delay in results:
        inserted = False
        # Find the correct position to insert this delay
        for i in range(len(sorted_results)):
            if delay < sorted_results[i]:
                sorted_results.insert(i, delay)
                inserted = True
                break
        # If delay is greater than all elements in sorted_results, append it
        if not inserted:
            sorted_results.append(delay)

    return sorted_results
