"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 02: VARIABLES & DATA TYPES                  ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - What variables are and how to create them
   - Python's basic data types
   - How to check the type of a variable
   - Rules for naming variables

💡 Key Concept:
   A variable is like a labeled box that stores a value.
   You can put something in, take it out, or replace it.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: Creating Variables
# ──────────────────────────────────────────────────────────────

# Use = to assign a value to a variable
name = "Somasundar"
age = 25
height = 5.9
is_student = True

# Now we can use these variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Student?", is_student)

# ──────────────────────────────────────────────────────────────
# PART 2: The Four Basic Data Types
# ──────────────────────────────────────────────────────────────

# 1. str (string) — text
greeting = "Hello, Python!"
print(type(greeting))  # <class 'str'>

# 2. int (integer) — whole numbers
score = 100
print(type(score))     # <class 'int'>

# 3. float — decimal numbers
price = 19.99
print(type(price))     # <class 'float'>

# 4. bool (boolean) — True or False
is_active = True
is_deleted = False
print(type(is_active)) # <class 'bool'>

# ──────────────────────────────────────────────────────────────
# PART 3: Variables Can Change
# ──────────────────────────────────────────────────────────────

# Variables can be reassigned (that's why they're called "variables"!)
points = 10
print("Points:", points)  # 10

points = 20
print("Points:", points)  # 20 — the old value is gone

# You can even change the type!
x = 42          # x is an integer
print(type(x))  # <class 'int'>

x = "forty-two" # now x is a string
print(type(x))  # <class 'str'>

# ──────────────────────────────────────────────────────────────
# PART 4: Variable Naming Rules
# ──────────────────────────────────────────────────────────────

# ✅ Good names (follow Python convention: snake_case)
user_name = "John"
total_score = 95
is_valid = True
MAX_RETRIES = 3  # ALL_CAPS for constants (values that shouldn't change)

# ❌ These would cause errors (don't run them):
# 2fast = "nope"      ← can't start with a number
# my-name = "nope"    ← can't use hyphens
# class = "nope"      ← can't use Python keywords

# Python is case-sensitive
Name = "Alice"
name = "Bob"
print(Name)  # Alice
print(name)  # Bob — different variable!

# ──────────────────────────────────────────────────────────────
# PART 5: Multiple Assignment
# ──────────────────────────────────────────────────────────────

# Assign multiple variables at once
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Same value to multiple variables
x = y = z = 0
print(x, y, z)  # 0 0 0

# Swap two variables (Python makes this easy!)
first = "apple"
second = "banana"
first, second = second, first
print(first)   # banana
print(second)  # apple

# ──────────────────────────────────────────────────────────────
# PART 6: The None Type
# ──────────────────────────────────────────────────────────────

# None represents "no value" or "nothing"
result = None
print(result)       # None
print(type(result)) # <class 'NoneType'>

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ Variables store values: name = "Python"
# ✅ Four basic types: str, int, float, bool
# ✅ type() tells you what type a variable is
# ✅ Use snake_case for variable names
# ✅ Variables can be reassigned and even change type
# ✅ None means "no value"
#
# 🏋️ Now try: exercises/ex_02_variables_and_types.py
# ──────────────────────────────────────────────────────────────
