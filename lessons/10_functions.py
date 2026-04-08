"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 10: FUNCTIONS                               ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Defining and calling functions
   - Parameters, arguments, return values
   - Default & keyword arguments
   - *args, **kwargs
   - Lambda functions
"""

# ── PART 1: Basic Functions ──
def greet():
    print("Hello! 👋")

greet()  # call the function

# ── PART 2: Parameters & Return Values ──
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")

def get_full_name(first, last):
    return f"{first} {last}"

print(get_full_name("John", "Doe"))

# ── PART 3: Default Parameters ──
def greet_user(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet_user("Alice"))           # Hello, Alice!
print(greet_user("Bob", "Hey"))      # Hey, Bob!

# ── PART 4: Keyword Arguments ──
def create_profile(name, age, city="Unknown"):
    return {"name": name, "age": age, "city": city}

# You can name arguments to be clear
profile = create_profile(name="Alice", age=30, city="NYC")
print(f"Profile: {profile}")

# ── PART 5: Multiple Return Values ──
def min_max(numbers):
    return min(numbers), max(numbers)

lowest, highest = min_max([5, 2, 8, 1, 9])
print(f"Min: {lowest}, Max: {highest}")

# ── PART 6: *args and **kwargs ──
def total(*args):
    """Accept any number of arguments"""
    return sum(args)

print(f"Total: {total(1, 2, 3, 4, 5)}")

def print_info(**kwargs):
    """Accept any number of keyword arguments"""
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

print("User Info:")
print_info(name="Alice", age=30, language="Python")

# ── PART 7: Lambda (Anonymous Functions) ──
square = lambda x: x ** 2
print(f"\nSquare of 5: {square(5)}")

# Useful with sorted(), map(), filter()
students = [("Alice", 92), ("Bob", 85), ("Charlie", 95)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
print(f"Ranked: {by_score}")

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, nums))
doubled = list(map(lambda x: x * 2, nums))
print(f"Evens: {evens}")
print(f"Doubled: {doubled}")

# ── PART 8: Docstrings ──
def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index (BMI).

    Args:
        weight_kg: Weight in kilograms
        height_m: Height in meters

    Returns:
        BMI value and category as a tuple
    """
    bmi = weight_kg / (height_m ** 2)
    if bmi < 18.5:
        category = "Underweight"
    elif bmi < 25:
        category = "Normal"
    elif bmi < 30:
        category = "Overweight"
    else:
        category = "Obese"
    return round(bmi, 1), category

bmi, cat = calculate_bmi(70, 1.75)
print(f"\nBMI: {bmi} ({cat})")
print(f"Docstring: {calculate_bmi.__doc__[:50]}...")

# 📝 SUMMARY:
# ✅ def function_name(params): ... return value
# ✅ Default params, *args, **kwargs
# ✅ Lambda: lambda x: expression
# ✅ Use docstrings to document functions
# 🏋️ Now try: exercises/ex_10_functions.py
