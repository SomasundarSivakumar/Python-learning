"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 05: USER INPUT & TYPE CONVERSION            ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - How to get input from the user
   - Converting input to the right type
   - Building interactive programs
   - Input validation basics

💡 Key Concept:
   input() always returns a STRING, even if the user types a number.
   You must convert it to int or float if you need a number.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: Basic Input
# ──────────────────────────────────────────────────────────────

# input() pauses the program and waits for the user to type something
name = input("What is your name? ")
print(f"Hello, {name}! 👋")

# ──────────────────────────────────────────────────────────────
# PART 2: Input is Always a String!
# ──────────────────────────────────────────────────────────────

# Watch what happens if we try math with input directly
age_str = input("How old are you? ")
print(f"Type of input: {type(age_str)}")  # <class 'str'>

# This would NOT work correctly:
# print(age_str + 5)  ← TypeError!

# We need to convert it first:
age = int(age_str)
print(f"In 5 years, you'll be {age + 5}!")

# ──────────────────────────────────────────────────────────────
# PART 3: Converting Input Types
# ──────────────────────────────────────────────────────────────

# Integer input
year = int(input("What year were you born? "))
current_year = 2026
print(f"You are approximately {current_year - year} years old.")

# Float input
height = float(input("Your height in meters (e.g., 1.75): "))
print(f"Your height: {height}m")

# Boolean-like input
answer = input("Do you like Python? (yes/no): ")
likes_python = answer.lower() in ("yes", "y", "true")
print(f"Likes Python: {likes_python}")

# ──────────────────────────────────────────────────────────────
# PART 4: Interactive Mini Programs
# ──────────────────────────────────────────────────────────────

print("\n" + "=" * 40)
print("   🧮 SIMPLE CALCULATOR")
print("=" * 40)

num1 = float(input("Enter first number: "))
operator = input("Enter operator (+, -, *, /): ")
num2 = float(input("Enter second number: "))

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Cannot divide by zero!"
else:
    result = "Invalid operator!"

print(f"\n{num1} {operator} {num2} = {result}")

# ──────────────────────────────────────────────────────────────
# PART 5: Input Validation (Basic)
# ──────────────────────────────────────────────────────────────

print("\n" + "=" * 40)
print("   📊 GRADE CHECKER")
print("=" * 40)

grade_input = input("Enter your grade (0-100): ")

# Check if the input is a valid number
if grade_input.isdigit():
    grade = int(grade_input)
    if 0 <= grade <= 100:
        if grade >= 90:
            letter = "A ⭐"
        elif grade >= 80:
            letter = "B 👍"
        elif grade >= 70:
            letter = "C 👌"
        elif grade >= 60:
            letter = "D 😐"
        else:
            letter = "F 📚"
        print(f"Grade: {grade} → {letter}")
    else:
        print("❌ Grade must be between 0 and 100!")
else:
    print("❌ Please enter a valid number!")

# ──────────────────────────────────────────────────────────────
# PART 6: Getting Multiple Inputs
# ──────────────────────────────────────────────────────────────

print("\n" + "=" * 40)
print("   📋 MAD LIBS GAME")
print("=" * 40)

adjective = input("Enter an adjective: ")
noun = input("Enter a noun: ")
verb = input("Enter a verb (past tense): ")
place = input("Enter a place: ")

story = f"""
Once upon a time, there was a {adjective} {noun}
who {verb} all the way to {place}.
Everyone was amazed! 🎉
"""
print(story)

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ input("prompt") reads text from the user
# ✅ input() ALWAYS returns a string
# ✅ Convert with int() for whole numbers
# ✅ Convert with float() for decimal numbers
# ✅ Use .isdigit() to check if input is a number
# ✅ Always validate user input before using it
#
# 🏋️ Now try: exercises/ex_05_user_input.py
# ──────────────────────────────────────────────────────────────
