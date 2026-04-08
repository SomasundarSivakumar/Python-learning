"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 13: MODULES & PACKAGES                      ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Importing built-in modules
   - Creating your own modules
   - Useful standard library modules
"""

# ── PART 1: Importing Modules ──
import math
print(f"Pi: {math.pi}")
print(f"sqrt(144): {math.sqrt(144)}")

# Import specific items
from random import randint, choice
print(f"\nRandom 1-100: {randint(1, 100)}")
print(f"Random pick: {choice(['Python', 'Java', 'Go'])}")

# Import with alias
import datetime as dt
now = dt.datetime.now()
print(f"Now: {now.strftime('%Y-%m-%d %H:%M')}")

# ── PART 2: Useful Standard Library Modules ──

# os — file system operations
import os
print(f"\nCurrent dir: {os.getcwd()}")
print(f"Files here: {os.listdir('.')[:5]}")

# json — work with JSON data
import json
data = {"name": "Alice", "scores": [95, 87, 92]}
json_str = json.dumps(data, indent=2)
print(f"\nJSON:\n{json_str}")

parsed = json.loads(json_str)
print(f"Parsed name: {parsed['name']}")

# collections — advanced data structures
from collections import Counter
words = "the cat sat on the mat the cat".split()
word_count = Counter(words)
print(f"\nWord counts: {word_count}")
print(f"Most common: {word_count.most_common(2)}")

# ── PART 3: Random Module Fun ──
import random

# Shuffle a list
deck = list(range(1, 11))
random.shuffle(deck)
print(f"\nShuffled: {deck}")

# Random sample
lottery = random.sample(range(1, 50), 6)
print(f"Lottery: {sorted(lottery)}")

# ── PART 4: String & Math Extras ──
import string
print(f"\nAlphabet: {string.ascii_lowercase}")
print(f"Digits: {string.digits}")

# Generate a simple password
password = ''.join(random.choices(
    string.ascii_letters + string.digits, k=12
))
print(f"Password: {password}")

# 📝 SUMMARY:
# ✅ import module, from module import item
# ✅ Key modules: math, random, os, json, datetime
# ✅ collections.Counter for counting things
# ✅ You can create your own modules (any .py file)
# 🏋️ Now try: exercises/ex_13_modules.py
