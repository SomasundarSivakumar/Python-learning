"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 07: LOOPS (for & while)                     ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - for loops — iterate over sequences
   - while loops — repeat while a condition is true
   - range() function
   - break, continue, and else in loops
   - Nested loops

💡 Key Concept:
   Loops let you repeat actions without writing the same code
   over and over. They're one of programming's superpowers!
"""

# ──────────────────────────────────────────────────────────────
# PART 1: The for Loop
# ──────────────────────────────────────────────────────────────

# Iterate over a list
fruits = ["apple", "banana", "cherry", "mango"]

print("🍎 My favorite fruits:")
for fruit in fruits:
    print(f"  - {fruit}")

# Iterate over a string
for char in "PYTHON":
    print(char, end=" ")  # P Y T H O N
print()  # new line

# ──────────────────────────────────────────────────────────────
# PART 2: The range() Function
# ──────────────────────────────────────────────────────────────

# range(stop) — 0 to stop-1
print("\nrange(5):", end=" ")
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4
print()

# range(start, stop) — start to stop-1
print("range(2, 7):", end=" ")
for i in range(2, 7):
    print(i, end=" ")  # 2 3 4 5 6
print()

# range(start, stop, step)
print("range(0, 20, 3):", end=" ")
for i in range(0, 20, 3):
    print(i, end=" ")  # 0 3 6 9 12 15 18
print()

# Counting backwards
print("Countdown:", end=" ")
for i in range(5, 0, -1):
    print(i, end=" ")  # 5 4 3 2 1
print("🚀 Liftoff!")

# ──────────────────────────────────────────────────────────────
# PART 3: The while Loop
# ──────────────────────────────────────────────────────────────

# Repeats as long as the condition is True
count = 0
print("\nWhile loop:")
while count < 5:
    print(f"  Count is {count}")
    count += 1  # IMPORTANT: always update the variable!

# ⚠️ Be careful! Forgetting to update creates an infinite loop:
# while True:
#     print("This never stops!")  ← DON'T DO THIS

# ──────────────────────────────────────────────────────────────
# PART 4: break and continue
# ──────────────────────────────────────────────────────────────

# break — exit the loop immediately
print("\n🔍 Finding the first even number:")
numbers = [1, 3, 7, 8, 5, 2]
for num in numbers:
    if num % 2 == 0:
        print(f"  Found it: {num}")
        break  # stop the loop
    print(f"  {num} is odd, keep looking...")

# continue — skip the rest of this iteration, go to next
print("\n📢 Odd numbers only:")
for i in range(1, 11):
    if i % 2 == 0:
        continue  # skip even numbers
    print(f"  {i}", end="")
print()

# ──────────────────────────────────────────────────────────────
# PART 5: Loop with else
# ──────────────────────────────────────────────────────────────

# The else block runs when the loop finishes naturally (without break)
print("\n🔎 Password search:")
passwords = ["123456", "qwerty", "abc123"]
target = "admin"

for pwd in passwords:
    if pwd == target:
        print(f"  ⚠️ Found '{pwd}'!")
        break
else:
    print(f"  ✅ '{target}' not found in compromised list.")

# ──────────────────────────────────────────────────────────────
# PART 6: Enumerate — Get Index AND Value
# ──────────────────────────────────────────────────────────────

languages = ["Python", "JavaScript", "Go", "Rust"]

print("\n📚 Programming Languages:")
for index, lang in enumerate(languages, start=1):
    print(f"  {index}. {lang}")

# ──────────────────────────────────────────────────────────────
# PART 7: Nested Loops
# ──────────────────────────────────────────────────────────────

# Multiplication table
print("\n✖️ Multiplication Table (1-5):")
print("    ", end="")
for i in range(1, 6):
    print(f"{i:4}", end="")
print()
print("   " + "─" * 20)

for i in range(1, 6):
    print(f"{i} │ ", end="")
    for j in range(1, 6):
        print(f"{i*j:4}", end="")
    print()

# Pattern printing
print("\n⭐ Star Pattern:")
for i in range(1, 6):
    print("  " + "⭐" * i)

print("\n⭐ Pyramid:")
for i in range(1, 6):
    spaces = " " * (5 - i)
    stars = "⭐" * i
    print(f"  {spaces}{stars}")

# ──────────────────────────────────────────────────────────────
# PART 8: Practical Examples
# ──────────────────────────────────────────────────────────────

# 🎯 FizzBuzz (classic coding challenge!)
print("\n🎯 FizzBuzz (1-20):")
for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print("  FizzBuzz", end="")
    elif i % 3 == 0:
        print("  Fizz", end="")
    elif i % 5 == 0:
        print("  Buzz", end="")
    else:
        print(f"  {i}", end="")
    if i % 10 == 0:
        print()  # new line every 10

# 📊 Simple bar chart
print("\n\n📊 Weekly Steps (bar chart):")
steps = {"Mon": 8000, "Tue": 12000, "Wed": 6500, "Thu": 9500, "Fri": 11000}
max_steps = max(steps.values())

for day, count in steps.items():
    bar_length = int(count / max_steps * 20)
    bar = "█" * bar_length
    print(f"  {day} │ {bar} {count:,}")

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ for loop: iterate over lists, strings, range()
# ✅ while loop: repeat while condition is True
# ✅ range(start, stop, step) generates number sequences
# ✅ break exits the loop; continue skips to next iteration
# ✅ enumerate() gives both index and value
# ✅ Nested loops: a loop inside a loop
#
# 🏋️ Now try: exercises/ex_07_loops.py
# ──────────────────────────────────────────────────────────────
