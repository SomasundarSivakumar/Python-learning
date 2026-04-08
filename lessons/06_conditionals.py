"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 06: CONDITIONALS (if / elif / else)         ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - How to make decisions in code
   - if, elif, and else statements
   - Comparison and logical operators
   - Nested conditions and ternary operator

💡 Key Concept:
   Conditionals let your program make decisions.
   Code inside an if block only runs when the condition is True.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: Comparison Operators
# ──────────────────────────────────────────────────────────────

a = 10
b = 20

print(f"{a} == {b} → {a == b}")   # Equal to:              False
print(f"{a} != {b} → {a != b}")   # Not equal to:          True
print(f"{a} > {b}  → {a > b}")    # Greater than:          False
print(f"{a} < {b}  → {a < b}")    # Less than:             True
print(f"{a} >= {b} → {a >= b}")   # Greater than or equal: False
print(f"{a} <= {b} → {a <= b}")   # Less than or equal:    True

# ──────────────────────────────────────────────────────────────
# PART 2: Basic if Statement
# ──────────────────────────────────────────────────────────────

temperature = 35

# The code inside 'if' only runs when the condition is True
if temperature > 30:
    print("🔥 It's hot outside!")
    print("   Stay hydrated!")

# Nothing happens if the condition is False
if temperature < 0:
    print("❄️ It's freezing!")  # This won't print

# ──────────────────────────────────────────────────────────────
# PART 3: if / else
# ──────────────────────────────────────────────────────────────

age = 17

if age >= 18:
    print("✅ You can vote!")
else:
    print("❌ You're too young to vote.")
    print(f"   Come back in {18 - age} year(s)!")

# ──────────────────────────────────────────────────────────────
# PART 4: if / elif / else (Multiple Conditions)
# ──────────────────────────────────────────────────────────────

score = 85

if score >= 90:
    grade = "A"
    emoji = "⭐"
elif score >= 80:
    grade = "B"
    emoji = "👍"
elif score >= 70:
    grade = "C"
    emoji = "👌"
elif score >= 60:
    grade = "D"
    emoji = "😐"
else:
    grade = "F"
    emoji = "📚"

print(f"Score: {score} → Grade: {grade} {emoji}")

# ──────────────────────────────────────────────────────────────
# PART 5: Logical Operators (and, or, not)
# ──────────────────────────────────────────────────────────────

age = 25
has_id = True
is_vip = False

# and — BOTH conditions must be True
if age >= 18 and has_id:
    print("✅ Entry allowed!")

# or — AT LEAST ONE condition must be True
if is_vip or age >= 21:
    print("🍷 Access to VIP lounge!")

# not — flips True to False and vice versa
is_banned = False
if not is_banned:
    print("Welcome aboard! 🚀")

# Combining operators
has_ticket = True
if (age >= 18 or is_vip) and has_ticket and not is_banned:
    print("🎫 Enjoy the show!")

# ──────────────────────────────────────────────────────────────
# PART 6: Nested Conditionals
# ──────────────────────────────────────────────────────────────

has_account = True
balance = 5000
amount = 3000

print("\n💰 ATM Withdrawal System")
print("─" * 30)

if has_account:
    if balance >= amount:
        balance -= amount
        print(f"✅ Withdrew ${amount:,}")
        print(f"   Remaining balance: ${balance:,}")
    else:
        print(f"❌ Insufficient funds!")
        print(f"   Balance: ${balance:,}, Requested: ${amount:,}")
else:
    print("❌ No account found!")

# ──────────────────────────────────────────────────────────────
# PART 7: Ternary Operator (One-Line if/else)
# ──────────────────────────────────────────────────────────────

# Syntax: value_if_true if condition else value_if_false

age = 20
status = "Adult" if age >= 18 else "Minor"
print(f"Age {age}: {status}")

number = 7
parity = "Even" if number % 2 == 0 else "Odd"
print(f"{number} is {parity}")

# ──────────────────────────────────────────────────────────────
# PART 8: Practical Example — Movie Ticket Pricer
# ──────────────────────────────────────────────────────────────

print("\n🎬 Movie Ticket Price Calculator")
print("=" * 35)

age = 15
is_student = True
is_weekend = True

# Base price
if age < 5:
    price = 0
    category = "Free (Under 5)"
elif age < 13:
    price = 8
    category = "Child"
elif age < 18:
    price = 10
    category = "Teen"
elif age >= 65:
    price = 7
    category = "Senior"
else:
    price = 15
    category = "Adult"

# Discounts
if is_student and age >= 13:
    price *= 0.8  # 20% student discount
    category += " + Student Discount"

# Weekend surcharge
if is_weekend:
    price += 3
    category += " + Weekend"

print(f"  Age: {age}")
print(f"  Category: {category}")
print(f"  Final Price: ${price:.2f}")

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ Comparison: ==, !=, >, <, >=, <=
# ✅ if/elif/else for branching decisions
# ✅ Logical: and (both), or (either), not (flip)
# ✅ Indentation defines code blocks (use 4 spaces)
# ✅ Ternary: x if condition else y
# ✅ You can nest if statements inside each other
#
# 🏋️ Now try: exercises/ex_06_conditionals.py
# ──────────────────────────────────────────────────────────────
