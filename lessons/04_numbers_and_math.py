"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 04: NUMBERS & MATH                          ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Arithmetic operators (+, -, *, /, etc.)
   - Integer vs float behavior
   - The math module
   - Practical math examples

💡 Key Concept:
   Python is a powerful calculator! It follows standard
   math rules (PEMDAS/BODMAS) for order of operations.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: Arithmetic Operators
# ──────────────────────────────────────────────────────────────

a = 15
b = 4

print(f"{a} + {b} = {a + b}")   # Addition:       19
print(f"{a} - {b} = {a - b}")   # Subtraction:    11
print(f"{a} * {b} = {a * b}")   # Multiplication: 60
print(f"{a} / {b} = {a / b}")   # Division:       3.75 (always returns float)
print(f"{a} // {b} = {a // b}") # Floor Division: 3 (rounds down)
print(f"{a} % {b} = {a % b}")   # Modulo:         3 (remainder)
print(f"{a} ** {b} = {a ** b}") # Exponent:       50625 (15 to the power of 4)

# ──────────────────────────────────────────────────────────────
# PART 2: Order of Operations (PEMDAS)
# ──────────────────────────────────────────────────────────────

# P - Parentheses first
# E - Exponents
# M/D - Multiplication/Division (left to right)
# A/S - Addition/Subtraction (left to right)

result1 = 2 + 3 * 4        # 14 (not 20!)
result2 = (2 + 3) * 4      # 20 (parentheses change order)
result3 = 2 ** 3 + 1       # 9 (8 + 1)

print(f"2 + 3 * 4 = {result1}")
print(f"(2 + 3) * 4 = {result2}")
print(f"2 ** 3 + 1 = {result3}")

# ──────────────────────────────────────────────────────────────
# PART 3: Assignment Operators (Shortcuts)
# ──────────────────────────────────────────────────────────────

score = 100

score += 10   # same as: score = score + 10
print(f"After +10: {score}")  # 110

score -= 5    # same as: score = score - 5
print(f"After -5:  {score}")  # 105

score *= 2    # same as: score = score * 2
print(f"After *2:  {score}")  # 210

score //= 3   # same as: score = score // 3
print(f"After //3: {score}")  # 70

# ──────────────────────────────────────────────────────────────
# PART 4: Useful Built-in Functions
# ──────────────────────────────────────────────────────────────

numbers = [10, 25, 3, 47, 8]

print(f"Absolute value of -7: {abs(-7)}")       # 7
print(f"Maximum: {max(numbers)}")                # 47
print(f"Minimum: {min(numbers)}")                # 3
print(f"Sum: {sum(numbers)}")                    # 93
print(f"Rounded 3.7: {round(3.7)}")             # 4
print(f"Rounded 3.14159 to 2 places: {round(3.14159, 2)}")  # 3.14
print(f"Power: {pow(2, 10)}")                    # 1024

# ──────────────────────────────────────────────────────────────
# PART 5: The math Module
# ──────────────────────────────────────────────────────────────

import math

print(f"Pi:            {math.pi}")          # 3.141592653589793
print(f"Euler's number:{math.e}")           # 2.718281828459045
print(f"Square root:   {math.sqrt(144)}")   # 12.0
print(f"Ceiling of 4.2:{math.ceil(4.2)}")   # 5 (round up)
print(f"Floor of 4.8:  {math.floor(4.8)}")  # 4 (round down)
print(f"Log base 10:   {math.log10(1000)}") # 3.0
print(f"Factorial 5!:  {math.factorial(5)}")# 120

# ──────────────────────────────────────────────────────────────
# PART 6: Type Conversion
# ──────────────────────────────────────────────────────────────

# int to float
x = 5
print(float(x))    # 5.0

# float to int (truncates, doesn't round)
y = 3.99
print(int(y))       # 3

# string to number
age_str = "25"
age_num = int(age_str)
print(age_num + 5)  # 30

price_str = "19.99"
price_num = float(price_str)
print(price_num * 2)  # 39.98

# ──────────────────────────────────────────────────────────────
# PART 7: Practical Examples
# ──────────────────────────────────────────────────────────────

# 🔢 Calculate average
grades = [85, 92, 78, 95, 88]
average = sum(grades) / len(grades)
print(f"\nGrades: {grades}")
print(f"Average: {average:.1f}")

# 💰 Simple interest calculator
principal = 10000
rate = 5.5       # percentage
time = 3         # years
interest = (principal * rate * time) / 100
print(f"\nSimple Interest Calculator:")
print(f"  Principal: ${principal:,}")
print(f"  Rate: {rate}%")
print(f"  Time: {time} years")
print(f"  Interest: ${interest:,.2f}")
print(f"  Total: ${principal + interest:,.2f}")

# 🌡️ Temperature converter
celsius = 100
fahrenheit = (celsius * 9/5) + 32
print(f"\n{celsius}°C = {fahrenheit}°F")

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ Operators: +, -, *, /, //, %, **
# ✅ / always returns float; // returns integer division
# ✅ Shortcuts: +=, -=, *=, /=
# ✅ Built-ins: abs(), max(), min(), sum(), round(), pow()
# ✅ math module: sqrt(), pi, ceil(), floor(), factorial()
# ✅ Convert types: int(), float(), str()
#
# 🏋️ Now try: exercises/ex_04_numbers_and_math.py
# ──────────────────────────────────────────────────────────────
