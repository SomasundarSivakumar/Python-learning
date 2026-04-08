"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 08: LISTS & TUPLES                          ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Creating and accessing lists
   - List methods (add, remove, sort)
   - List comprehensions
   - Tuples and when to use them
"""

# ── PART 1: Creating Lists ──
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [42, "hello", True, 3.14]
print(f"Fruits: {fruits}, Length: {len(fruits)}")

# ── PART 2: Accessing & Slicing ──
colors = ["red", "green", "blue", "yellow", "purple"]
print(colors[0])     # red
print(colors[-1])    # purple
print(colors[1:3])   # ['green', 'blue']
print("blue" in colors)  # True

# ── PART 3: Modifying Lists ──
shopping = ["milk", "bread", "eggs"]
shopping[0] = "almond milk"        # change item
shopping.append("butter")          # add to end
shopping.insert(1, "cheese")       # add at position
shopping.extend(["juice", "cereal"])  # add multiple
shopping.remove("bread")           # remove by value
popped = shopping.pop()            # remove last
print(f"Shopping: {shopping}")

# ── PART 4: Sorting & Copying ──
scores = [88, 95, 67, 72, 91]
scores.sort()                      # ascending
print(f"Sorted: {scores}")
scores.sort(reverse=True)          # descending
print(f"Descending: {scores}")

list_a = [1, 2, 3]
list_b = list_a.copy()             # independent copy
list_b.append(4)
print(f"list_a: {list_a}, list_b: {list_b}")

# ── PART 5: List Comprehensions ⭐ ──
squares = [x ** 2 for x in range(1, 6)]
print(f"Squares: {squares}")

even_nums = [x for x in range(20) if x % 2 == 0]
print(f"Evens: {even_nums}")

upper = [w.upper() for w in ["hello", "world"]]
print(f"Upper: {upper}")

# ── PART 6: Useful Operations ──
nums = [10, 20, 30, 40, 50]
print(f"Sum: {sum(nums)}, Min: {min(nums)}, Max: {max(nums)}")

names = ["Alice", "Bob"]
ages = [30, 25]
print(f"Zipped: {list(zip(names, ages))}")

# ── PART 7: Tuples (Immutable) ──
point = (3, 5)
x, y = point  # unpacking
print(f"Point: x={x}, y={y}")
# point[0] = 10  ← Error! Tuples can't be changed

# Use tuples for fixed data, lists for changeable data

# 📝 SUMMARY:
# ✅ Lists [], Tuples ()
# ✅ append(), insert(), remove(), pop(), sort()
# ✅ List comprehensions: [expr for x in iter if cond]
# ✅ Tuples are immutable (unchangeable)
# 🏋️ Now try: exercises/ex_08_lists_and_tuples.py
