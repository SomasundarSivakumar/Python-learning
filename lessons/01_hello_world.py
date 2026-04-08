"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 01: HELLO WORLD & THE PRINT FUNCTION        ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - How to write your very first Python program
   - How the print() function works
   - How to print different things
   - What comments are and why they matter

💡 Key Concept:
   Python reads your code line by line, from top to bottom.
   The print() function displays text on the screen.
"""

# ──────────────────────────────────────────────────────────────
# PART 1: Your First Program
# ──────────────────────────────────────────────────────────────

# This is a comment — Python ignores lines starting with #
# Comments are notes for humans reading the code

print("Hello, World!")  # This is the classic first program!

# ──────────────────────────────────────────────────────────────
# PART 2: Printing Different Things
# ──────────────────────────────────────────────────────────────

# You can print text (called "strings") using quotes
print("Welcome to Python!")
print('Single quotes work too!')

# You can print numbers without quotes
print(42)
print(3.14)

# You can print multiple things separated by commas
print("My age is", 25)
print("Python", "is", "awesome!")

# ──────────────────────────────────────────────────────────────
# PART 3: Print Formatting Options
# ──────────────────────────────────────────────────────────────

# By default, print adds a newline at the end
print("Line 1")
print("Line 2")

# You can change the ending character
print("Same", end=" ")  # end with a space instead of newline
print("Line!")           # this continues on the same line

# You can change what separates multiple items
print("apple", "banana", "cherry", sep=", ")   # Output: apple, banana, cherry
print("2025", "04", "08", sep="-")              # Output: 2025-04-08

# ──────────────────────────────────────────────────────────────
# PART 4: Empty Lines and Special Characters
# ──────────────────────────────────────────────────────────────

print()  # prints an empty line

# Special characters use backslash (\)
print("She said \"hello\"")      # \" puts a quote inside quotes
print("First line\nSecond line") # \n creates a new line
print("Column1\tColumn2")        # \t creates a tab space

# ──────────────────────────────────────────────────────────────
# PART 5: Multi-line Strings
# ──────────────────────────────────────────────────────────────

# Triple quotes let you write text across multiple lines
print("""
    ╭─────────────────╮
    │  I'm learning   │
    │    Python! 🐍   │
    ╰─────────────────╯
""")

# ──────────────────────────────────────────────────────────────
# 📝 SUMMARY
# ──────────────────────────────────────────────────────────────
# 
# ✅ print() displays output to the screen
# ✅ Strings go inside quotes: "text" or 'text'
# ✅ Numbers don't need quotes: 42, 3.14
# ✅ Comments start with # and are ignored by Python
# ✅ Special characters: \n (newline), \t (tab), \" (quote)
# ✅ Triple quotes """ allow multi-line strings
#
# 🏋️ Now try: exercises/ex_01_hello_world.py
# ──────────────────────────────────────────────────────────────
