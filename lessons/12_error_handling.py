"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 12: ERROR HANDLING                          ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - What exceptions are
   - try/except/else/finally
   - Common error types
   - Raising your own exceptions
"""

# ── PART 1: Common Errors ──
# Without handling, these would crash your program:

# ZeroDivisionError
try:
    result = 10 / 0
except ZeroDivisionError:
    print("❌ Can't divide by zero!")

# ValueError
try:
    number = int("hello")
except ValueError:
    print("❌ 'hello' is not a valid number!")

# KeyError
try:
    data = {"name": "Alice"}
    print(data["age"])
except KeyError:
    print("❌ Key 'age' not found!")

# IndexError
try:
    items = [1, 2, 3]
    print(items[10])
except IndexError:
    print("❌ Index out of range!")

# ── PART 2: try/except/else/finally ──
print("\n🔧 Full Error Handling Structure:")

try:
    num = int("42")
    result = 100 / num
except ValueError:
    print("  ❌ Invalid number!")
except ZeroDivisionError:
    print("  ❌ Division by zero!")
else:
    print(f"  ✅ Success! Result: {result}")
finally:
    print("  🏁 This always runs (cleanup)")

# ── PART 3: Catching Multiple Exceptions ──
def safe_divide(a, b):
    try:
        return a / b
    except (ZeroDivisionError, TypeError) as e:
        return f"Error: {e}"

print(f"\n10 / 3 = {safe_divide(10, 3)}")
print(f"10 / 0 = {safe_divide(10, 0)}")
print(f"10 / 'a' = {safe_divide(10, 'a')}")

# ── PART 4: Raising Exceptions ──
def set_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer!")
    if age < 0 or age > 150:
        raise ValueError("Age must be between 0 and 150!")
    return f"Age set to {age}"

try:
    print(set_age(25))
    print(set_age(-5))
except ValueError as e:
    print(f"❌ {e}")

# ── PART 5: Practical — Safe Input Function ──
def get_number(prompt, min_val=None, max_val=None):
    while True:
        try:
            value = float(input(prompt))
            if min_val is not None and value < min_val:
                print(f"  Must be >= {min_val}")
                continue
            if max_val is not None and value > max_val:
                print(f"  Must be <= {max_val}")
                continue
            return value
        except ValueError:
            print("  Please enter a valid number!")

# Uncomment to test interactively:
# score = get_number("Enter score (0-100): ", 0, 100)
# print(f"Score: {score}")

# 📝 SUMMARY:
# ✅ try/except catches errors gracefully
# ✅ else runs if no error; finally always runs
# ✅ raise creates your own exceptions
# ✅ Common: ValueError, TypeError, KeyError, IndexError
# 🏋️ Now try: exercises/ex_12_error_handling.py
