"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 11: FILE HANDLING                           ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Reading and writing text files
   - The 'with' statement (context manager)
   - File modes (r, w, a)
   - Working with CSV-like data
"""

import os

# ── PART 1: Writing to a File ──
with open("example.txt", "w") as file:
    file.write("Hello, File!\n")
    file.write("Python is fun.\n")
    file.write("Line number 3.\n")

print("✅ File written!")

# ── PART 2: Reading a File ──
# Read entire file
with open("example.txt", "r") as file:
    content = file.read()
    print(f"\n📄 Full content:\n{content}")

# Read line by line
with open("example.txt", "r") as file:
    print("📄 Line by line:")
    for line_num, line in enumerate(file, 1):
        print(f"  {line_num}: {line.strip()}")

# ── PART 3: Appending (Adding to End) ──
with open("example.txt", "a") as file:
    file.write("This line was appended!\n")

with open("example.txt", "r") as file:
    print(f"\n📄 After append:\n{file.read()}")

# ── PART 4: Writing Lists to Files ──
shopping = ["Milk", "Bread", "Eggs", "Butter", "Cheese"]

with open("shopping.txt", "w") as file:
    for item in shopping:
        file.write(f"- {item}\n")

print("✅ Shopping list saved!")

# Reading it back
with open("shopping.txt", "r") as file:
    print(f"\n🛒 Shopping List:\n{file.read()}")

# ── PART 5: Checking if File Exists ──
if os.path.exists("example.txt"):
    print("📁 example.txt exists!")
    size = os.path.getsize("example.txt")
    print(f"   Size: {size} bytes")

# ── PART 6: Practical Example — Simple Log ──
def log_message(message, filename="app.log"):
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(filename, "a") as f:
        f.write(f"[{timestamp}] {message}\n")

log_message("Application started")
log_message("User logged in")
log_message("Processing data...")

with open("app.log", "r") as f:
    print(f"\n📋 Application Log:\n{f.read()}")

# Clean up demo files
for f in ["example.txt", "shopping.txt", "app.log"]:
    if os.path.exists(f):
        os.remove(f)
print("🧹 Demo files cleaned up!")

# 📝 SUMMARY:
# ✅ open(file, mode) — "r" read, "w" write, "a" append
# ✅ Always use 'with' statement (auto-closes file)
# ✅ .read(), .readline(), .readlines()
# ✅ os.path.exists() to check if file exists
# 🏋️ Now try: exercises/ex_11_file_handling.py
