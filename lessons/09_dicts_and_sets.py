"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 09: DICTIONARIES & SETS                     ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Creating and using dictionaries (key-value pairs)
   - Dictionary methods
   - Sets (unique collections)
   - When to use each data structure
"""

# ── PART 1: Creating Dictionaries ──
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "coding"]
}
print(f"Person: {person}")

# ── PART 2: Accessing Values ──
print(person["name"])              # Alice
print(person.get("age"))           # 30
print(person.get("phone", "N/A")) # N/A (default if missing)

# ── PART 3: Modifying Dictionaries ──
person["email"] = "alice@email.com"  # add new key
person["age"] = 31                    # update existing
del person["city"]                    # delete key
print(f"Modified: {person}")

# ── PART 4: Dictionary Methods ──
student = {"name": "Bob", "grade": "A", "score": 95}

print(f"Keys:   {list(student.keys())}")
print(f"Values: {list(student.values())}")
print(f"Items:  {list(student.items())}")

# Looping through a dictionary
print("\n📋 Student Info:")
for key, value in student.items():
    print(f"  {key}: {value}")

# ── PART 5: Dictionary Comprehensions ──
squares = {x: x**2 for x in range(1, 6)}
print(f"\nSquares dict: {squares}")

# ── PART 6: Nested Dictionaries ──
classroom = {
    "Alice": {"grade": "A", "score": 95},
    "Bob": {"grade": "B", "score": 85},
    "Charlie": {"grade": "A", "score": 92},
}
print(f"\nAlice's score: {classroom['Alice']['score']}")

# ── PART 7: Sets (Unique Items Only) ──
colors = {"red", "blue", "green", "red", "blue"}
print(f"\nSet: {colors}")  # duplicates removed!

set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

print(f"Union:        {set_a | set_b}")        # all items
print(f"Intersection: {set_a & set_b}")        # common items
print(f"Difference:   {set_a - set_b}")        # in a, not in b

# ── PART 8: Practical Example ──
print("\n📊 Word Frequency Counter:")
text = "the cat sat on the mat the cat"
words = text.split()
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1
for word, count in sorted(freq.items(), key=lambda x: -x[1]):
    print(f"  '{word}': {'█' * count} ({count})")

# 📝 SUMMARY:
# ✅ Dicts: {key: value} — fast lookup by key
# ✅ .get(key, default), .keys(), .values(), .items()
# ✅ Sets: {item} — unique items, set operations
# 🏋️ Now try: exercises/ex_09_dicts_and_sets.py
