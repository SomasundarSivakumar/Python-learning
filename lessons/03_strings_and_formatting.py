"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 03: STRINGS & FORMATTING                    ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - String operations (joining, repeating, slicing)
   - Useful string methods
   - f-strings for clean formatting
   - String indexing

💡 Key Concept:
   Strings are sequences of characters. Each character has
   a position (index) starting from 0.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: String Basics
# ──────────────────────────────────────────────────────────────

# Creating strings
single = 'Hello'
double = "World"
multi = """This is a
multi-line string"""

# String length
message = "Python"
print(len(message))  # 6

# ──────────────────────────────────────────────────────────────
# PART 2: String Concatenation & Repetition
# ──────────────────────────────────────────────────────────────

# Joining strings with +
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# Repeating strings with *
line = "─" * 30
print(line)        # ──────────────────────────────────

star_pattern = "⭐" * 5
print(star_pattern)  # ⭐⭐⭐⭐⭐

# ──────────────────────────────────────────────────────────────
# PART 3: String Indexing & Slicing
# ──────────────────────────────────────────────────────────────

text = "PYTHON"
#       P Y T H O N
#       0 1 2 3 4 5    ← positive index (left to right)
#      -6-5-4-3-2-1    ← negative index (right to left)

# Accessing single characters
print(text[0])   # P (first character)
print(text[5])   # N (last character)
print(text[-1])  # N (last character using negative index)

# Slicing: text[start:end] — end is NOT included
print(text[0:3])   # PYT (characters 0, 1, 2)
print(text[2:5])   # THO
print(text[:3])    # PYT (from beginning)
print(text[3:])    # HON (to the end)
print(text[:])     # PYTHON (full copy)

# Step slicing: text[start:end:step]
print(text[::2])   # PTO (every 2nd character)
print(text[::-1])  # NOHTYP (reversed!)

# ──────────────────────────────────────────────────────────────
# PART 4: Useful String Methods
# ──────────────────────────────────────────────────────────────

sample = "  Hello, World!  "

# Case methods
print(sample.upper())       # "  HELLO, WORLD!  "
print(sample.lower())       # "  hello, world!  "
print(sample.title())       # "  Hello, World!  "
print(sample.capitalize())  # "  hello, world!  "

# Whitespace methods
print(sample.strip())       # "Hello, World!" (removes spaces from both ends)
print(sample.lstrip())      # "Hello, World!  " (left strip)
print(sample.rstrip())      # "  Hello, World!" (right strip)

# Search methods
sentence = "Python is fun and Python is powerful"
print(sentence.find("Python"))     # 0 (first occurrence position)
print(sentence.count("Python"))    # 2 (how many times it appears)
print(sentence.startswith("Py"))   # True
print(sentence.endswith("ful"))    # True

# Replace method
print(sentence.replace("Python", "Java"))  # Java is fun and Java is powerful

# Split and Join
csv_data = "apple,banana,cherry"
fruits = csv_data.split(",")       # ['apple', 'banana', 'cherry']
print(fruits)

words = ["I", "love", "Python"]
result = " ".join(words)           # "I love Python"
print(result)

# Check methods
print("hello123".isalnum())   # True (letters and numbers only)
print("hello".isalpha())      # True (letters only)
print("12345".isdigit())      # True (digits only)
print("hello".islower())      # True
print("HELLO".isupper())      # True

# ──────────────────────────────────────────────────────────────
# PART 5: String Formatting (f-strings) ⭐ MOST IMPORTANT!
# ──────────────────────────────────────────────────────────────

name = "Alice"
age = 30
score = 95.5

# f-strings — the modern and best way (Python 3.6+)
print(f"My name is {name} and I am {age} years old.")
print(f"Score: {score}")

# You can put expressions inside {}
print(f"Next year I'll be {age + 1}")
print(f"Name in uppercase: {name.upper()}")

# Formatting numbers
price = 49.99
print(f"Price: ${price:.2f}")        # Price: $49.99 (2 decimal places)
print(f"Big number: {1000000:,}")    # Big number: 1,000,000
print(f"Percentage: {0.856:.1%}")    # Percentage: 85.6%

# Padding and alignment
for item in ["Apple", "Banana", "Cherry"]:
    print(f"{item:<15} {'$1.99':>8}")  # left-align name, right-align price

# ──────────────────────────────────────────────────────────────
# PART 6: Checking if Text is in a String
# ──────────────────────────────────────────────────────────────

quote = "The only way to learn Python is to write Python"

print("Python" in quote)      # True
print("Java" in quote)        # False
print("Java" not in quote)    # True

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
#
# ✅ Strings can be joined (+) and repeated (*)
# ✅ Indexing starts at 0: text[0] is the first character
# ✅ Slicing: text[start:end] (end not included)
# ✅ Useful methods: upper(), lower(), strip(), split(), join()
# ✅ f-strings are the best way to format: f"Hello {name}"
# ✅ Use 'in' to check if text contains something
#
# 🏋️ Now try: exercises/ex_03_strings_and_formatting.py
# ──────────────────────────────────────────────────────────────
