/* ═══════════════════════════════════════════════════════════
   LEARN PYTHON — DASHBOARD APPLICATION
   ═══════════════════════════════════════════════════════════ */

// ── Lesson Data ──
const lessons = [
    {
        id: 1, title: "Hello World & Print", difficulty: "⭐ Beginner",
        desc: "Write your very first Python program and learn the print() function.",
        concepts: ["How to write your first Python program", "How the print() function works", "How to print different things", "What comments are and why they matter"],
        sections: [
            { title: "Your First Program", code: `# This is a comment — Python ignores lines starting with #\nprint("Hello, World!")  # The classic first program!\n\n# You can print text using quotes\nprint("Welcome to Python!")\nprint('Single quotes work too!')` },
            { title: "Printing Different Things", code: `# Print numbers without quotes\nprint(42)\nprint(3.14)\n\n# Print multiple things with commas\nprint("My age is", 25)\nprint("Python", "is", "awesome!")` },
            { title: "Print Formatting", code: `# Change the ending character\nprint("Same", end=" ")  # space instead of newline\nprint("Line!")\n\n# Change the separator\nprint("apple", "banana", "cherry", sep=", ")\n# Output: apple, banana, cherry\n\nprint("2025", "04", "08", sep="-")\n# Output: 2025-04-08` },
            { title: "Special Characters", code: `print()  # empty line\n\n# Escape characters\nprint("She said \\"hello\\"")\nprint("First line\\nSecond line")  # \\n = newline\nprint("Col1\\tCol2")              # \\t = tab\n\n# Multi-line strings with triple quotes\nprint("""\n    I'm learning\n    Python! 🐍\n""")` }
        ],
        summary: ["print() displays output to the screen", "Strings go inside quotes: \"text\" or 'text'", "Numbers don't need quotes: 42, 3.14", "Comments start with # and are ignored", "Special characters: \\n (newline), \\t (tab)"]
    },
    {
        id: 2, title: "Variables & Data Types", difficulty: "⭐ Beginner",
        desc: "Learn how to store data in variables and understand Python's type system.",
        concepts: ["What variables are and how to create them", "Python's basic data types (str, int, float, bool)", "How to check the type of a variable", "Rules for naming variables"],
        sections: [
            { title: "Creating Variables", code: `name = "Somasundar"\nage = 25\nheight = 5.9\nis_student = True\n\nprint("Name:", name)\nprint("Age:", age)` },
            { title: "Four Basic Data Types", code: `greeting = "Hello!"      # str (string)\nscore = 100              # int (integer)\nprice = 19.99            # float (decimal)\nis_active = True         # bool (boolean)\n\nprint(type(greeting))    # <class 'str'>\nprint(type(score))       # <class 'int'>\nprint(type(price))       # <class 'float'>\nprint(type(is_active))   # <class 'bool'>` },
            { title: "Variable Naming Rules", code: `# ✅ Good names (use snake_case)\nuser_name = "John"\ntotal_score = 95\nMAX_RETRIES = 3  # ALL_CAPS for constants\n\n# ❌ Bad names:\n# 2fast = "nope"    ← can't start with number\n# my-name = "nope"  ← can't use hyphens\n\n# Python is case-sensitive!\nName = "Alice"\nname = "Bob"    # different variable!` },
            { title: "Multiple Assignment & Swapping", code: `# Assign multiple at once\na, b, c = 1, 2, 3\nprint(a, b, c)  # 1 2 3\n\n# Swap two variables\nfirst = "apple"\nsecond = "banana"\nfirst, second = second, first\nprint(first)    # banana` }
        ],
        summary: ["Variables store values: name = \"Python\"", "Four basic types: str, int, float, bool", "type() tells you what type a variable is", "Use snake_case for variable names", "None represents \"no value\""]
    },
    {
        id: 3, title: "Strings & Formatting", difficulty: "⭐ Beginner",
        desc: "Master string operations, slicing, methods, and the powerful f-string formatting.",
        concepts: ["String operations (joining, repeating, slicing)", "Useful string methods", "f-strings for clean formatting", "String indexing"],
        sections: [
            { title: "String Concatenation & Length", code: `first_name = "John"\nlast_name = "Doe"\nfull_name = first_name + " " + last_name\nprint(full_name)       # John Doe\nprint(len(full_name))  # 8\n\nline = "─" * 30\nprint(line)  # ──────────────────────────────────` },
            { title: "String Indexing & Slicing", code: `text = "PYTHON"\n#       P Y T H O N\n#       0 1 2 3 4 5\n\nprint(text[0])     # P (first)\nprint(text[-1])    # N (last)\nprint(text[0:3])   # PYT\nprint(text[::-1])  # NOHTYP (reversed!)` },
            { title: "String Methods", code: `sample = "  Hello, World!  "\nprint(sample.upper())       # "  HELLO, WORLD!  "\nprint(sample.lower())       # "  hello, world!  "\nprint(sample.strip())       # "Hello, World!"\n\nsentence = "Python is fun"\nprint(sentence.replace("fun", "awesome"))\nprint(sentence.split(" "))  # ['Python', 'is', 'fun']\nprint("-".join(["a","b","c"]))  # a-b-c` },
            { title: "f-strings ⭐", code: `name = "Alice"\nage = 30\n\n# The modern way to format strings\nprint(f"I'm {name}, age {age}")\nprint(f"Next year: {age + 1}")\nprint(f"Upper: {name.upper()}")\n\n# Number formatting\nprice = 49.99\nprint(f"Price: \${price:.2f}")        # $49.99\nprint(f"Big: {1000000:,}")           # 1,000,000\nprint(f"Percent: {0.856:.1%}")       # 85.6%` }
        ],
        summary: ["Strings can be joined (+) and repeated (*)", "Indexing starts at 0", "Slicing: text[start:end]", "Methods: upper(), lower(), strip(), split(), join()", "f-strings: f\"Hello {name}\" — the best way to format"]
    },
    {
        id: 4, title: "Numbers & Math", difficulty: "⭐ Beginner",
        desc: "Arithmetic, math module, and practical calculations in Python.",
        concepts: ["Arithmetic operators (+, -, *, /, etc.)", "Order of operations (PEMDAS)", "The math module", "Type conversion between numbers"],
        sections: [
            { title: "Arithmetic Operators", code: `a, b = 15, 4\nprint(f"{a} + {b} = {a + b}")    # 19\nprint(f"{a} - {b} = {a - b}")    # 11\nprint(f"{a} * {b} = {a * b}")    # 60\nprint(f"{a} / {b} = {a / b}")    # 3.75\nprint(f"{a} // {b} = {a // b}")  # 3  (floor)\nprint(f"{a} % {b} = {a % b}")    # 3  (remainder)\nprint(f"{a} ** {b} = {a ** b}")  # 50625  (power)` },
            { title: "Math Module & Built-ins", code: `import math\n\nprint(f"Pi: {math.pi}")\nprint(f"sqrt(144): {math.sqrt(144)}")\nprint(f"ceil(4.2): {math.ceil(4.2)}")   # 5\nprint(f"floor(4.8): {math.floor(4.8)}") # 4\n\nnums = [10, 25, 3, 47, 8]\nprint(f"max: {max(nums)}, min: {min(nums)}")\nprint(f"sum: {sum(nums)}")` },
            { title: "Practical Example", code: `# Temperature converter\ncelsius = 100\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius}°C = {fahrenheit}°F")\n\n# Average calculator\ngrades = [85, 92, 78, 95, 88]\navg = sum(grades) / len(grades)\nprint(f"Average: {avg:.1f}")` }
        ],
        summary: ["Operators: +, -, *, /, //, %, **", "/ returns float; // returns integer division", "Built-ins: abs(), max(), min(), sum(), round()", "math module: sqrt(), pi, ceil(), floor()", "Convert types: int(), float(), str()"]
    },
    {
        id: 5, title: "User Input & Type Conversion", difficulty: "⭐⭐ Elementary",
        desc: "Build interactive programs that respond to user input.",
        concepts: ["How to get input from the user", "Converting input to the right type", "Building interactive programs", "Input validation basics"],
        sections: [
            { title: "Getting Input", code: `name = input("What is your name? ")\nprint(f"Hello, {name}! 👋")\n\n# ⚠️ input() ALWAYS returns a string!\nage_str = input("Your age? ")\nprint(type(age_str))  # <class 'str'>` },
            { title: "Converting Types", code: `# Convert to integer\nage = int(input("Your age? "))\nprint(f"In 5 years: {age + 5}")\n\n# Convert to float\nheight = float(input("Height in meters: "))\nprint(f"Height: {height}m")\n\n# Boolean-like input\nanswer = input("Like Python? (yes/no): ")\nlikes = answer.lower() in ("yes", "y")\nprint(f"Likes Python: {likes}")` },
            { title: "Input Validation", code: `grade_input = input("Grade (0-100): ")\n\nif grade_input.isdigit():\n    grade = int(grade_input)\n    if 0 <= grade <= 100:\n        print(f"Grade: {grade} ✅")\n    else:\n        print("Must be 0-100! ❌")\nelse:\n    print("Enter a number! ❌")` }
        ],
        summary: ["input(\"prompt\") reads text from user", "input() ALWAYS returns a string", "Convert with int() or float()", "Use .isdigit() to validate", "Always validate before using input"]
    },
    {
        id: 6, title: "Conditionals (if/else)", difficulty: "⭐⭐ Elementary",
        desc: "Make decisions in your code with if, elif, and else statements.",
        concepts: ["Comparison operators (==, !=, >, <)", "if, elif, else statements", "Logical operators (and, or, not)", "Ternary operator"],
        sections: [
            { title: "Comparison & Basic if", code: `temperature = 35\n\nif temperature > 30:\n    print("🔥 It's hot!")\n    print("Stay hydrated!")\n\nage = 17\nif age >= 18:\n    print("✅ You can vote!")\nelse:\n    print("❌ Too young to vote")` },
            { title: "if / elif / else", code: `score = 85\n\nif score >= 90:\n    grade = "A ⭐"\nelif score >= 80:\n    grade = "B 👍"\nelif score >= 70:\n    grade = "C 👌"\nelse:\n    grade = "F 📚"\n\nprint(f"Score {score} → {grade}")` },
            { title: "Logical Operators", code: `age = 25\nhas_id = True\n\n# and — BOTH must be True\nif age >= 18 and has_id:\n    print("✅ Entry allowed!")\n\n# or — AT LEAST ONE True\nis_vip = False\nif is_vip or age >= 21:\n    print("🍷 VIP access!")\n\n# not — flips the value\nis_banned = False\nif not is_banned:\n    print("Welcome! 🚀")\n\n# Ternary (one-line if/else)\nstatus = "Adult" if age >= 18 else "Minor"` }
        ],
        summary: ["Comparison: ==, !=, >, <, >=, <=", "if/elif/else for decisions", "Logical: and, or, not", "Indentation defines code blocks", "Ternary: x if condition else y"]
    },
    {
        id: 7, title: "Loops (for & while)", difficulty: "⭐⭐ Elementary",
        desc: "Repeat actions efficiently with for and while loops.",
        concepts: ["for loops over sequences", "while loops with conditions", "range() function", "break, continue, enumerate"],
        sections: [
            { title: "for Loop & range()", code: `fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"  - {fruit}")\n\n# range(stop), range(start, stop, step)\nfor i in range(5):\n    print(i, end=" ")  # 0 1 2 3 4\n\nfor i in range(5, 0, -1):\n    print(i, end=" ")  # 5 4 3 2 1\nprint("🚀 Liftoff!")` },
            { title: "while Loop", code: `count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1  # IMPORTANT!\n\n# ⚠️ Don't forget to update!\n# while True: print("infinite!")  ← BAD` },
            { title: "break, continue, enumerate", code: `# break — exit early\nfor num in [1, 3, 7, 8, 5]:\n    if num % 2 == 0:\n        print(f"Found even: {num}")\n        break\n\n# continue — skip this iteration\nfor i in range(10):\n    if i % 2 == 0:\n        continue  # skip evens\n    print(i, end=" ")  # 1 3 5 7 9\n\n# enumerate — index + value\nlangs = ["Python", "JS", "Go"]\nfor i, lang in enumerate(langs, 1):\n    print(f"{i}. {lang}")` }
        ],
        summary: ["for: iterate over lists, strings, range()", "while: repeat while condition is True", "range(start, stop, step)", "break exits; continue skips", "enumerate() gives index + value"]
    },
    {
        id: 8, title: "Lists & Tuples", difficulty: "⭐⭐ Elementary",
        desc: "Work with ordered collections of data using lists and tuples.",
        concepts: ["Creating and accessing lists", "List methods (add, remove, sort)", "List comprehensions", "Tuples (immutable lists)"],
        sections: [
            { title: "Lists — Creating & Modifying", code: `fruits = ["apple", "banana", "cherry"]\nprint(fruits[0])    # apple\nprint(fruits[-1])   # cherry\n\nfruits.append("mango")     # add to end\nfruits.insert(1, "grape")  # add at index\nfruits.remove("banana")    # remove by value\npopped = fruits.pop()      # remove last\nprint(fruits)` },
            { title: "Sorting & Useful Operations", code: `nums = [5, 2, 8, 1, 9]\nnums.sort()             # ascending\nprint(nums)             # [1, 2, 5, 8, 9]\n\nprint(f"Sum: {sum(nums)}")\nprint(f"Min: {min(nums)}, Max: {max(nums)}")\n\nnames = ["Alice", "Bob"]\nages = [30, 25]\nprint(list(zip(names, ages)))  # paired` },
            { title: "List Comprehensions ⭐", code: `# Traditional way\nsquares = []\nfor x in range(1, 6):\n    squares.append(x ** 2)\n\n# Comprehension — same thing, one line!\nsquares = [x ** 2 for x in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# With condition\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)` },
            { title: "Tuples", code: `# Tuples use () and CANNOT be changed\npoint = (3, 5)\nx, y = point  # unpacking\nprint(f"x={x}, y={y}")\n\n# point[0] = 10  ← Error!\n\n# Use tuples for fixed data\nrgb = (255, 128, 0)\ncoords = (40.71, -74.00)` }
        ],
        summary: ["Lists: ordered, mutable — use []", "Key: append(), remove(), pop(), sort()", "Comprehensions: [expr for x in iter if cond]", "Tuples: ordered, immutable — use ()", "zip() combines lists; unpacking splits them"]
    },
    {
        id: 9, title: "Dictionaries & Sets", difficulty: "⭐⭐ Elementary",
        desc: "Store key-value pairs with dictionaries and unique items with sets.",
        concepts: ["Creating and using dictionaries", "Dictionary methods", "Sets for unique collections", "Set operations (union, intersection)"],
        sections: [
            { title: "Dictionaries", code: `person = {\n    "name": "Alice",\n    "age": 30,\n    "city": "New York"\n}\n\nprint(person["name"])              # Alice\nprint(person.get("phone", "N/A"))  # N/A\n\nperson["email"] = "alice@mail.com"  # add\nperson["age"] = 31                   # update\ndel person["city"]                   # delete` },
            { title: "Looping & Comprehensions", code: `student = {"name": "Bob", "grade": "A", "score": 95}\n\nfor key, value in student.items():\n    print(f"  {key}: {value}")\n\n# Dict comprehension\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1:1, 2:4, 3:9, 4:16, 5:25}` },
            { title: "Sets", code: `colors = {"red", "blue", "green", "red"}\nprint(colors)  # duplicates removed!\n\nset_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\nprint(set_a | set_b)   # union (all)\nprint(set_a & set_b)   # intersection ({4, 5})\nprint(set_a - set_b)   # difference ({1, 2, 3})` }
        ],
        summary: ["Dicts: {key: value} — fast lookup", ".get(key, default), .keys(), .values(), .items()", "Sets: unique items only, use {}", "Set ops: | union, & intersection, - difference"]
    },
    {
        id: 10, title: "Functions", difficulty: "⭐⭐⭐ Intermediate",
        desc: "Write reusable code with functions, parameters, and return values.",
        concepts: ["Defining and calling functions", "Parameters and return values", "Default & keyword arguments", "*args, **kwargs, lambda"],
        sections: [
            { title: "Basic Functions", code: `def greet(name):\n    return f"Hello, {name}! 👋"\n\nprint(greet("Alice"))\n\ndef add(a, b):\n    return a + b\n\nprint(f"5 + 3 = {add(5, 3)}")` },
            { title: "Default & Keyword Args", code: `def greet_user(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet_user("Alice"))        # Hello, Alice!\nprint(greet_user("Bob", "Hey"))   # Hey, Bob!\n\n# Multiple return values\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlo, hi = min_max([5, 2, 8, 1, 9])\nprint(f"Min: {lo}, Max: {hi}")` },
            { title: "*args, **kwargs, Lambda", code: `def total(*args):\n    return sum(args)\nprint(total(1, 2, 3, 4, 5))  # 15\n\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\ninfo(name="Alice", age=30)\n\n# Lambda — anonymous function\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# Useful with sorted()\nstudents = [("Alice", 92), ("Bob", 85)]\nranked = sorted(students, key=lambda s: s[1])\nprint(ranked)` }
        ],
        summary: ["def function_name(params): ... return value", "Default params, *args, **kwargs", "Lambda: lambda x: expression", "Functions make code reusable and organized"]
    },
    {
        id: 11, title: "File Handling", difficulty: "⭐⭐⭐ Intermediate",
        desc: "Read from and write to files for data persistence.",
        concepts: ["Reading text files", "Writing and appending", "The 'with' statement", "File modes (r, w, a)"],
        sections: [
            { title: "Writing Files", code: `# 'w' = write (creates or overwrites)\nwith open("example.txt", "w") as file:\n    file.write("Hello, File!\\n")\n    file.write("Python is fun.\\n")\n\nprint("✅ File written!")` },
            { title: "Reading Files", code: `# Read entire file\nwith open("example.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Read line by line\nwith open("example.txt", "r") as file:\n    for i, line in enumerate(file, 1):\n        print(f"{i}: {line.strip()}")` },
            { title: "Appending & Checking", code: `# 'a' = append (add to end)\nwith open("example.txt", "a") as file:\n    file.write("New line appended!\\n")\n\n# Check if file exists\nimport os\nif os.path.exists("example.txt"):\n    size = os.path.getsize("example.txt")\n    print(f"Size: {size} bytes")` }
        ],
        summary: ["open(file, mode): 'r' read, 'w' write, 'a' append", "Always use 'with' (auto-closes file)", ".read(), .readline(), .readlines()", "os.path.exists() checks if file exists"]
    },
    {
        id: 12, title: "Error Handling", difficulty: "⭐⭐⭐ Intermediate",
        desc: "Handle errors gracefully with try/except blocks.",
        concepts: ["What exceptions are", "try/except/else/finally", "Common error types", "Raising your own exceptions"],
        sections: [
            { title: "Common Errors", code: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("❌ Can't divide by zero!")\n\ntry:\n    number = int("hello")\nexcept ValueError:\n    print("❌ Not a valid number!")\n\ntry:\n    data = {"name": "Alice"}\n    print(data["age"])\nexcept KeyError:\n    print("❌ Key not found!")` },
            { title: "Full Structure", code: `try:\n    num = int("42")\n    result = 100 / num\nexcept ValueError:\n    print("❌ Invalid number!")\nexcept ZeroDivisionError:\n    print("❌ Division by zero!")\nelse:\n    print(f"✅ Result: {result}")\nfinally:\n    print("🏁 Always runs (cleanup)")` },
            { title: "Raising Exceptions", code: `def set_age(age):\n    if not isinstance(age, int):\n        raise TypeError("Age must be int!")\n    if age < 0 or age > 150:\n        raise ValueError("Age 0-150 only!")\n    return f"Age set to {age}"\n\ntry:\n    print(set_age(25))   # ✅\n    print(set_age(-5))   # ❌\nexcept ValueError as e:\n    print(f"Error: {e}")` }
        ],
        summary: ["try/except catches errors gracefully", "else runs if no error", "finally always runs (cleanup)", "raise creates your own exceptions", "Common: ValueError, TypeError, KeyError"]
    },
    {
        id: 13, title: "Modules & Packages", difficulty: "⭐⭐⭐ Intermediate",
        desc: "Organize code with modules and explore Python's standard library.",
        concepts: ["Importing built-in modules", "import, from, and aliases", "Useful standard library modules", "Creating your own modules"],
        sections: [
            { title: "Importing Modules", code: `import math\nprint(f"Pi: {math.pi}")\nprint(f"sqrt(144): {math.sqrt(144)}")\n\nfrom random import randint, choice\nprint(f"Random: {randint(1, 100)}")\nprint(f"Pick: {choice(['Python', 'Java'])}")\n\nimport datetime as dt\nnow = dt.datetime.now()\nprint(f"Now: {now.strftime('%Y-%m-%d')}")` },
            { title: "Useful Modules", code: `# json — work with JSON data\nimport json\ndata = {"name": "Alice", "scores": [95, 87]}\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n\n# collections — advanced structures\nfrom collections import Counter\nwords = "the cat sat on the mat".split()\nprint(Counter(words).most_common(2))\n\n# random — fun utilities\nimport random, string\npwd = ''.join(random.choices(\n    string.ascii_letters + string.digits, k=12))\nprint(f"Password: {pwd}")` }
        ],
        summary: ["import module, from module import item", "Alias: import datetime as dt", "Key: math, random, os, json, datetime", "collections.Counter for counting", "Any .py file can be a module!"]
    },
    {
        id: 14, title: "Object-Oriented Programming", difficulty: "⭐⭐⭐⭐ Advanced",
        desc: "Build with classes, objects, inheritance, and encapsulation.",
        concepts: ["Classes and objects", "__init__, self, and methods", "Inheritance & super()", "Special methods (__str__)"],
        sections: [
            { title: "Your First Class", code: `class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        return f"{self.name}: Woof! 🐕"\n\ndog1 = Dog("Buddy", "Golden Retriever")\ndog2 = Dog("Max", "Labrador")\nprint(dog1.bark())\nprint(f"{dog2.name} is a {dog2.breed}")` },
            { title: "Methods & __str__", code: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n        return f"✅ Deposited \${amount}"\n\n    def __str__(self):\n        return f"{self.owner}: \${self.balance:,.2f}"\n\nacc = BankAccount("Alice", 1000)\nprint(acc.deposit(500))\nprint(acc)  # Alice: $1,500.00` },
            { title: "Inheritance", code: `class Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    def speak(self):\n        return f"{self.name}: {self.sound}!"\n\nclass Cat(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Meow")\n    def purr(self):\n        return f"{self.name} purrs... 😺"\n\ncat = Cat("Whiskers")\nprint(cat.speak())  # Whiskers: Meow!\nprint(cat.purr())` }
        ],
        summary: ["class ClassName: ... def __init__(self):", "self refers to the current object", "Inheritance: class Child(Parent)", "super().__init__() calls parent", "__str__ defines how objects print"]
    },
    {
        id: 15, title: "Final Project — Todo App", difficulty: "⭐⭐⭐⭐ Advanced",
        desc: "Build a complete command-line Todo application using everything you've learned!",
        concepts: ["Combining all previous concepts", "Class design with TodoItem & TodoApp", "JSON file persistence", "Interactive command loop"],
        sections: [
            { title: "TodoItem Class", code: `class TodoItem:\n    def __init__(self, title, priority="medium"):\n        self.title = title\n        self.priority = priority\n        self.done = False\n\n    def __str__(self):\n        status = "✅" if self.done else "⬜"\n        pri = {"high":"🔴","medium":"🟡","low":"🟢"}\n        return f"{status} {pri[self.priority]} {self.title}"` },
            { title: "TodoApp — Add & Show", code: `class TodoApp:\n    def __init__(self):\n        self.todos = []\n\n    def add(self, title, priority="medium"):\n        self.todos.append(TodoItem(title, priority))\n        print(f"✅ Added: '{title}'")\n\n    def show(self):\n        if not self.todos:\n            print("📭 No tasks yet!")\n            return\n        for i, todo in enumerate(self.todos, 1):\n            print(f"  {i}. {todo}")\n        done = sum(1 for t in self.todos if t.done)\n        print(f"\\nProgress: {done}/{len(self.todos)}")` },
            { title: "Save & Load with JSON", code: `import json, os\n\ndef save(self):\n    data = [t.to_dict() for t in self.todos]\n    with open("todos.json", "w") as f:\n        json.dump(data, f, indent=2)\n\ndef load(self):\n    if os.path.exists("todos.json"):\n        with open("todos.json", "r") as f:\n            data = json.load(f)\n            self.todos = [\n                TodoItem.from_dict(d) for d in data\n            ]` },
            { title: "Run the App!", code: `# Run the final project:\n# cd lessons\n# python 15_final_project_todo.py\n#\n# Commands:\n#   [a]dd      — add a new task\n#   [c]omplete — mark task as done\n#   [d]elete   — remove a task\n#   [q]uit     — exit the app\n#\n# 🎉 Congratulations! You've completed\n#    the Python learning path!` }
        ],
        summary: ["Combines variables, classes, files, JSON, loops", "TodoItem class with properties & methods", "TodoApp with add, complete, delete, save, load", "JSON persistence across sessions", "🎉 You're now a Python programmer!"]
    }
];

// ── State Management ──
let currentLesson = null;
let currentExercise = null;
let activeTab = 'lessons';
const STORAGE_KEY = 'learnPythonProgress';
const EX_STORAGE_KEY = 'learnPythonExerciseProgress';

// ── Exercises Data ──
const exercises = [
    {
        id: 1, title: "Hello World", lessonId: 1, difficulty: "⭐ Beginner",
        desc: "Practice printing output, patterns, and special characters.",
        tasks: [
            { title: "Print your name", instructions: ["Print \"My name is [your name]\""], starterCode: "# YOUR CODE HERE:" },
            { title: "Print a pattern", instructions: ["Print this star pattern using print():", "  *", "  **", "  ***", "  ****", "  *****"], starterCode: "# YOUR CODE HERE:" },
            { title: "Use sep and end", instructions: ["Print \"2026/04/08\" using print() with <code>sep=\"/\"</code>"], starterCode: "# Hint: print(\"2026\", \"04\", \"08\", sep=\"/\")" },
            { title: "Create ASCII art", instructions: ["Use multi-line strings to print a simple house:", "  <code>  /\\</code>", "  <code> /  \\</code>", "  <code>/    \\</code>", "  <code>|------|</code>", "  <code>|      |</code>", "  <code>|------|</code>"], starterCode: "# Hint: Use triple-quoted strings \"\"\"...\"\"\"" }
        ]
    },
    {
        id: 2, title: "Variables & Types", lessonId: 2, difficulty: "⭐ Beginner",
        desc: "Practice creating variables, swapping values, and type checking.",
        tasks: [
            { title: "Create variables", instructions: ["Create these variables and print them:", "  • <code>your_name</code> (string)", "  • <code>your_age</code> (integer)", "  • <code>your_height</code> (float, in meters)", "  • <code>is_student</code> (boolean)"], starterCode: "# YOUR CODE HERE:" },
            { title: "Swap variables", instructions: ["Swap the values of x and y WITHOUT using a temp variable", "After swap: <code>x=20, y=10</code>"], starterCode: "x = 10\ny = 20\n# YOUR CODE HERE:\n# print(f\"x={x}, y={y}\")" },
            { title: "Type detective", instructions: ["For each value below, predict its type, then verify with <code>type()</code>"], starterCode: "values = [42, \"42\", 42.0, True, None, [1, 2], (1, 2)]\n# YOUR CODE HERE:" },
            { title: "Temperature converter", instructions: ["Create a variable <code>celsius = 37</code>", "Convert to Fahrenheit: <code>F = (C × 9/5) + 32</code>", "Print: \"37°C = 98.6°F\""], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 3, title: "Strings & Formatting", lessonId: 3, difficulty: "⭐ Beginner",
        desc: "Practice string slicing, validation, and f-string formatting.",
        tasks: [
            { title: "String slicing", instructions: ["Given: <code>word = \"PROGRAMMING\"</code>", "Extract and print: \"GRAM\" using slicing"], starterCode: "word = \"PROGRAMMING\"\n# YOUR CODE HERE:" },
            { title: "Email validator", instructions: ["Check if an email contains \"@\" and \".\"", "Print \"Valid\" or \"Invalid\""], starterCode: "email = \"user@example.com\"\n# YOUR CODE HERE:" },
            { title: "f-string formatting", instructions: ["Create variables: <code>item=\"Laptop\"</code>, <code>price=999.99</code>, <code>qty=3</code>", "Print: \"3x Laptop = $2,999.97\""], starterCode: "# YOUR CODE HERE:" },
            { title: "Word reverser", instructions: ["Reverse the sentence word by word:", "\"Python is fun\" → \"fun is Python\""], starterCode: "sentence = \"Python is fun\"\n# YOUR CODE HERE:" }
        ]
    },
    {
        id: 4, title: "Numbers & Math", lessonId: 4, difficulty: "⭐ Beginner",
        desc: "Practice circle calculations, modulo operations, and tip calculations.",
        tasks: [
            { title: "Circle calculator", instructions: ["Given <code>radius = 7</code>, calculate and print:", "  • Area (π × r²)", "  • Circumference (2 × π × r)"], starterCode: "import math\nradius = 7\n# YOUR CODE HERE:" },
            { title: "Even or Odd checker", instructions: ["Use the modulo operator (%) to check if each number is even or odd"], starterCode: "numbers = [15, 22, 37, 44, 51]\n# YOUR CODE HERE (use a loop):" },
            { title: "Tip calculator", instructions: ["Calculate the tip and total", "Print formatted: \"Bill: $85.50 | Tip: $15.39 | Total: $100.89\""], starterCode: "bill = 85.50\ntip_percent = 18\n# YOUR CODE HERE:" }
        ]
    },
    {
        id: 5, title: "User Input", lessonId: 5, difficulty: "⭐⭐ Elementary",
        desc: "Build interactive programs that respond to user input.",
        tasks: [
            { title: "Greeting generator", instructions: ["Ask the user for their name and favorite color", "Print: \"Hi [name]! [color] is a great color!\""], starterCode: "# YOUR CODE HERE:" },
            { title: "Age in days", instructions: ["Ask the user's age, convert to days (approx: age × 365)", "Print: \"You have lived approximately X days!\""], starterCode: "# YOUR CODE HERE:" },
            { title: "Simple quiz", instructions: ["Ask 3 Python questions, check answers, show score", "Q1: \"What function prints output?\" → print", "Q2: \"What type is 3.14?\" → float", "Q3: \"True or False: Python uses indentation?\" → True"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 6, title: "Conditionals", lessonId: 6, difficulty: "⭐⭐ Elementary",
        desc: "Practice if/elif/else, logical operators, and game logic.",
        tasks: [
            { title: "Number classifier", instructions: ["Given a number, print whether it's:", "positive, negative, or zero"], starterCode: "number = -7\n# YOUR CODE HERE:" },
            { title: "Leap year checker", instructions: ["A year is a leap year if:", "  • divisible by 4 AND", "  • NOT divisible by 100, UNLESS also divisible by 400"], starterCode: "year = 2024\n# YOUR CODE HERE:" },
            { title: "Rock Paper Scissors", instructions: ["Determine who wins and print the result"], starterCode: "player1 = \"rock\"\nplayer2 = \"scissors\"\n# YOUR CODE HERE:" }
        ]
    },
    {
        id: 7, title: "Loops", lessonId: 7, difficulty: "⭐⭐ Elementary",
        desc: "Practice loops with sums, Fibonacci, patterns, and primes.",
        tasks: [
            { title: "Sum of 1 to 100", instructions: ["Use a loop to calculate 1 + 2 + 3 + ... + 100"], starterCode: "# YOUR CODE HERE:" },
            { title: "Fibonacci sequence", instructions: ["Print the first 15 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, ..."], starterCode: "# YOUR CODE HERE:" },
            { title: "Diamond pattern", instructions: ["Print a diamond with height 5:", "  <code>    *</code>", "  <code>   ***</code>", "  <code>  *****</code>", "  <code>   ***</code>", "  <code>    *</code>"], starterCode: "# YOUR CODE HERE:" },
            { title: "Prime numbers", instructions: ["Print all prime numbers from 2 to 50"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 8, title: "Lists & Tuples", lessonId: 8, difficulty: "⭐⭐ Elementary",
        desc: "Practice list manipulation, comprehensions, and matrix operations.",
        tasks: [
            { title: "List manipulation", instructions: ["Start with: <code>nums = [5, 3, 8, 1, 9, 2, 7]</code>", "1) Sort ascending  2) Remove smallest  3) Add 10  4) Print"], starterCode: "nums = [5, 3, 8, 1, 9, 2, 7]\n# YOUR CODE HERE:" },
            { title: "List comprehension", instructions: ["Create a list of squares of even numbers from 1 to 20", "Expected: [4, 16, 36, 64, 100, 144, 196, 256, 324, 400]"], starterCode: "# YOUR CODE HERE:" },
            { title: "Matrix sum", instructions: ["Calculate the sum of all elements in the 2D list"], starterCode: "matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n# YOUR CODE HERE:" }
        ]
    },
    {
        id: 9, title: "Dicts & Sets", lessonId: 9, difficulty: "⭐⭐ Elementary",
        desc: "Practice dictionaries, character counting, and set operations.",
        tasks: [
            { title: "Student database", instructions: ["Create a dict of 3 students with name, age, and grade", "Print each student's info in a formatted way"], starterCode: "# YOUR CODE HERE:" },
            { title: "Character counter", instructions: ["Count occurrence of each character in \"abracadabra\""], starterCode: "text = \"abracadabra\"\n# YOUR CODE HERE:" },
            { title: "Set operations", instructions: ["Find students in both math AND science class"], starterCode: "math_students = {\"Alice\", \"Bob\", \"Charlie\", \"Diana\"}\nscience_students = {\"Bob\", \"Diana\", \"Eve\", \"Frank\"}\n# YOUR CODE HERE:" }
        ]
    },
    {
        id: 10, title: "Functions", lessonId: 10, difficulty: "⭐⭐⭐ Intermediate",
        desc: "Practice writing reusable functions with parameters and returns.",
        tasks: [
            { title: "Greeting function", instructions: ["Create <code>greet(name, time=\"morning\")</code>", "Returns \"Good morning, name!\""], starterCode: "# YOUR CODE HERE:" },
            { title: "Password strength checker", instructions: ["Create <code>check_password(pwd)</code> that returns:", "\"Weak\" (<6 chars), \"Medium\" (6-10), \"Strong\" (>10 with numbers)"], starterCode: "# YOUR CODE HERE:" },
            { title: "List statistics", instructions: ["Create <code>stats(numbers)</code> that returns a dict with min, max, avg, sum"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 11, title: "File Handling", lessonId: 11, difficulty: "⭐⭐⭐ Intermediate",
        desc: "Practice reading, writing, and analyzing files.",
        tasks: [
            { title: "Write and read", instructions: ["Write your top 5 favorite movies to a file", "Then read and print them"], starterCode: "# YOUR CODE HERE:" },
            { title: "Word counter", instructions: ["Write a paragraph to a file", "Then count total words in it"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 12, title: "Error Handling", lessonId: 12, difficulty: "⭐⭐⭐ Intermediate",
        desc: "Practice try/except blocks for graceful error handling.",
        tasks: [
            { title: "Safe division", instructions: ["Create <code>safe_div(a, b)</code> that handles:", "  • ZeroDivisionError", "  • TypeError"], starterCode: "# YOUR CODE HERE:" },
            { title: "Safe list access", instructions: ["Create <code>safe_get(lst, index)</code> that handles IndexError"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 13, title: "Modules", lessonId: 13, difficulty: "⭐⭐⭐ Intermediate",
        desc: "Practice using Python's standard library modules.",
        tasks: [
            { title: "Random password generator", instructions: ["Use <code>random</code> and <code>string</code> modules", "Create a 16-char password with uppercase, lowercase, digits, and symbols"], starterCode: "# YOUR CODE HERE:" },
            { title: "Date calculator", instructions: ["Use <code>datetime</code> to find how many days until New Year 2027"], starterCode: "# YOUR CODE HERE:" }
        ]
    },
    {
        id: 14, title: "OOP", lessonId: 14, difficulty: "⭐⭐⭐⭐ Advanced",
        desc: "Build classes with properties, methods, and real-world behavior.",
        tasks: [
            { title: "Create a Book class", instructions: ["Properties: title, author, pages, current_page", "Methods:", "  • <code>read(pages)</code> — advances current_page", "  • <code>progress()</code> — returns percentage read"], starterCode: "# YOUR CODE HERE:" },
            { title: "Create a Playlist class", instructions: ["Methods:", "  • <code>add_song(title, artist)</code>", "  • <code>remove_song(title)</code>", "  • <code>show()</code>", "  • <code>shuffle()</code>"], starterCode: "# YOUR CODE HERE:" }
        ]
    }
];

function getProgress() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function getExerciseProgress() {
    try {
        return JSON.parse(localStorage.getItem(EX_STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function saveExerciseProgress(progress) {
    localStorage.setItem(EX_STORAGE_KEY, JSON.stringify(progress));
}

function getCompletedCount() {
    const progress = getProgress();
    return Object.values(progress).filter(Boolean).length;
}

// ── Initialize ──
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    addProgressGradient();
    renderNav();
    renderExerciseNav();
    renderPath();
    updateProgress();
    setupEventListeners();
    setupTabListeners();
    setupExerciseListeners();
});

// ── Particles ──
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4'];
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            width: ${size}px; height: ${size}px;
            left: ${Math.random() * 100}%;
            background: ${color};
            animation-duration: ${Math.random() * 20 + 15}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

// ── SVG Gradient for Progress Ring ──
function addProgressGradient() {
    const svg = document.querySelector('.progress-ring');
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'progressGradient');
    gradient.setAttribute('x1', '0%'); gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%'); gradient.setAttribute('y2', '100%');
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%'); stop1.setAttribute('stop-color', '#3b82f6');
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%'); stop2.setAttribute('stop-color', '#8b5cf6');
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
}

// ── Tab Switching ──
function setupTabListeners() {
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            activeTab = tabName;

            // Update active tab button
            document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show/hide navs
            document.getElementById('lessonNav').style.display = tabName === 'lessons' ? '' : 'none';
            document.getElementById('exerciseNav').style.display = tabName === 'exercises' ? '' : 'none';
        });
    });
}

// ── Render Navigation ──
function renderNav() {
    const nav = document.getElementById('lessonNav');
    const progress = getProgress();
    nav.innerHTML = lessons.map(lesson => {
        const completed = progress[lesson.id];
        const active = currentLesson && currentLesson.id === lesson.id;
        return `
            <div class="nav-item ${completed ? 'completed' : ''} ${active ? 'active' : ''}"
                 data-id="${lesson.id}" onclick="openLesson(${lesson.id})">
                <div class="nav-status">${completed ? '✓' : lesson.id}</div>
                <div class="nav-info">
                    <div class="nav-title">${lesson.title}</div>
                    <div class="nav-difficulty">${lesson.difficulty}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ── Render Exercise Navigation ──
function renderExerciseNav() {
    const nav = document.getElementById('exerciseNav');
    const progress = getExerciseProgress();
    nav.innerHTML = exercises.map(exercise => {
        const completed = progress[exercise.id];
        const active = currentExercise && currentExercise.id === exercise.id;
        return `
            <div class="nav-item exercise-item ${completed ? 'completed' : ''} ${active ? 'active' : ''}"
                 data-id="${exercise.id}" onclick="openExercise(${exercise.id})">
                <div class="nav-status">${completed ? '✓' : exercise.id}</div>
                <div class="nav-info">
                    <div class="nav-title">${exercise.title}</div>
                    <div class="nav-difficulty">${exercise.difficulty}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ── Render Path on Welcome Screen ──
function renderPath() {
    const container = document.getElementById('pathItems');
    if (!container) return;
    container.innerHTML = lessons.map(lesson => `
        <div class="path-item" onclick="openLesson(${lesson.id})">
            <div class="path-num">${lesson.id}</div>
            <div class="path-info">
                <div class="path-title">${lesson.title}</div>
                <div class="path-diff">${lesson.difficulty}</div>
            </div>
        </div>
    `).join('');
}

// ── Update Progress Ring ──
function updateProgress() {
    const completed = getCompletedCount();
    const total = lessons.length;
    const pct = Math.round((completed / total) * 100);

    const ring = document.getElementById('progressRing');
    const text = document.getElementById('progressText');
    const detail = document.getElementById('progressDetail');

    if (ring) {
        const circumference = 2 * Math.PI * 34;
        const offset = circumference - (completed / total) * circumference;
        ring.style.strokeDashoffset = offset;
    }
    if (text) text.textContent = `${pct}%`;
    if (detail) detail.textContent = `${completed} / ${total} lessons`;
}

// ── Hide all content views ──
function hideAllViews() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('lessonViewer').style.display = 'none';
    document.getElementById('exerciseViewer').style.display = 'none';
}

// ── Open Lesson ──
function openLesson(id) {
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) return;

    currentLesson = lesson;
    currentExercise = null;

    // Show viewer, hide others
    hideAllViews();
    document.getElementById('lessonViewer').style.display = 'block';

    // Header
    document.getElementById('lessonBadge').textContent = `Lesson ${lesson.id}`;
    document.getElementById('lessonDifficulty').textContent = lesson.difficulty;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonDesc').textContent = lesson.desc;

    // Concepts
    document.getElementById('conceptsList').innerHTML =
        lesson.concepts.map(c => `<li>${c}</li>`).join('');

    // Code sections
    document.getElementById('codeSections').innerHTML =
        lesson.sections.map((section, i) => `
            <div class="code-section" style="animation-delay: ${i * 0.1}s">
                <div class="code-section-header">
                    <span class="code-section-title">📌 ${section.title}</span>
                    <button class="copy-btn" onclick="copyCode(this, ${i})">📋 Copy</button>
                </div>
                <pre class="code-block">${highlightSyntax(section.code)}</pre>
            </div>
        `).join('');

    // Summary
    document.getElementById('summaryList').innerHTML =
        lesson.summary.map(s => `<li>${s}</li>`).join('');

    // Complete button state
    const progress = getProgress();
    const btn = document.getElementById('completeBtn');
    if (progress[lesson.id]) {
        btn.classList.add('completed');
        btn.innerHTML = '<span class="check-icon">☑</span> Completed!';
    } else {
        btn.classList.remove('completed');
        btn.innerHTML = '<span class="check-icon">☐</span> Mark Complete';
    }

    // Nav buttons
    document.getElementById('prevBtn').disabled = id === 1;
    document.getElementById('nextBtn').disabled = id === lessons.length;

    // Update nav
    renderNav();
    renderExerciseNav();

    // Scroll to top
    document.getElementById('mainContent').scrollTop = 0;

    // Close mobile sidebar
    closeSidebar();
}

// ── Open Exercise ──
function openExercise(id) {
    const exercise = exercises.find(e => e.id === id);
    if (!exercise) return;

    currentExercise = exercise;
    currentLesson = null;

    // Show exercise viewer, hide others
    hideAllViews();
    document.getElementById('exerciseViewer').style.display = 'block';

    // Header
    document.getElementById('exerciseBadge').textContent = `Exercise ${exercise.id}`;
    document.getElementById('exerciseTitle').textContent = exercise.title;
    document.getElementById('exerciseDesc').textContent = exercise.desc;

    // Related lesson link
    const lessonLink = document.getElementById('exerciseLessonLink');
    lessonLink.textContent = `📚 Lesson ${exercise.lessonId}: ${lessons.find(l => l.id === exercise.lessonId)?.title || ''}`;
    lessonLink.onclick = () => {
        // Switch to lessons tab and open lesson
        document.getElementById('tabLessons').click();
        openLesson(exercise.lessonId);
    };

    // Tasks
    const savedCode = getSavedCode(exercise.id);
    document.getElementById('exerciseTasks').innerHTML =
        exercise.tasks.map((task, i) => {
            const codeKey = `ex${exercise.id}_task${i}`;
            const userCode = savedCode[codeKey] || task.starterCode;
            return `
            <div class="exercise-task" style="animation-delay: ${i * 0.1}s">
                <div class="exercise-task-header">
                    <div class="task-number">${i + 1}</div>
                    <div class="task-title">${task.title}</div>
                </div>
                <div class="exercise-task-body">
                    <div class="task-instructions">
                        ${task.instructions.map(inst => `<p>${inst}</p>`).join('')}
                    </div>
                    <div class="code-editor-wrapper">
                        <div class="code-editor-toolbar">
                            <span class="editor-label">✏️ Your Code</span>
                            <div class="editor-actions">
                                <button class="editor-btn check-editor-btn" onclick="checkCode(${exercise.id}, ${i})" title="Check your code">▶ Check</button>
                                <button class="editor-btn copy-editor-btn" onclick="copyEditorCode(${exercise.id}, ${i})" title="Copy code">📋 Copy</button>
                                <button class="editor-btn reset-editor-btn" onclick="resetEditorCode(${exercise.id}, ${i})" title="Reset to starter code">↺ Reset</button>
                            </div>
                        </div>
                        <textarea
                            class="code-editor"
                            id="editor_${exercise.id}_${i}"
                            spellcheck="false"
                            oninput="autoSaveCode(${exercise.id}, ${i}); autoGrow(this)"
                            onkeydown="handleTab(event)"
                        >${escapeHtml(userCode)}</textarea>
                        <div class="check-result" id="result_${exercise.id}_${i}"></div>
                    </div>
                </div>
            </div>
        `;
        }).join('');

    // Auto-grow all editors
    setTimeout(() => {
        document.querySelectorAll('.code-editor').forEach(el => autoGrow(el));
    }, 50);

    // Complete button state
    const progress = getExerciseProgress();
    const btn = document.getElementById('exCompleteBtn');
    if (progress[exercise.id]) {
        btn.classList.add('completed');
        btn.innerHTML = '<span class="check-icon">☑</span> Completed!';
    } else {
        btn.classList.remove('completed');
        btn.innerHTML = '<span class="check-icon">☐</span> Mark Complete';
    }

    // Nav buttons
    document.getElementById('exPrevBtn').disabled = id === 1;
    document.getElementById('exNextBtn').disabled = id === exercises.length;

    // Update navs
    renderNav();
    renderExerciseNav();

    // Scroll to top
    document.getElementById('mainContent').scrollTop = 0;

    // Close mobile sidebar
    closeSidebar();
}

// ── Syntax Highlighting (token-based) ──
function highlightSyntax(code) {
    const keywords = new Set(['def','class','if','elif','else','for','while','return','import','from','as','try','except','finally','raise','with','in','not','and','or','is','True','False','None','break','continue','lambda','super']);
    const builtins = new Set(['print','input','len','type','int','float','str','bool','list','dict','set','tuple','range','enumerate','zip','sorted','map','filter','sum','min','max','abs','round','open','isinstance']);
    
    // Tokenize: split into comments, strings, and other segments
    const tokens = [];
    const lines = code.split('\n');
    
    for (let li = 0; li < lines.length; li++) {
        if (li > 0) tokens.push({ type: 'plain', text: '\n' });
        const line = lines[li];
        let i = 0;
        
        while (i < line.length) {
            // Check for comment
            if (line[i] === '#') {
                tokens.push({ type: 'comment', text: line.slice(i) });
                i = line.length;
            }
            // Check for strings
            else if (line[i] === '"' || line[i] === "'") {
                const quote = line[i];
                let j = i + 1;
                while (j < line.length && line[j] !== quote) {
                    if (line[j] === '\\') j++; // skip escaped char
                    j++;
                }
                j = Math.min(j + 1, line.length);
                tokens.push({ type: 'string', text: line.slice(i, j) });
                i = j;
            }
            // Check for words (identifiers, keywords)
            else if (/[a-zA-Z_]/.test(line[i])) {
                let j = i;
                while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++;
                const word = line.slice(i, j);
                if (keywords.has(word)) tokens.push({ type: 'keyword', text: word });
                else if (builtins.has(word)) tokens.push({ type: 'builtin', text: word });
                else tokens.push({ type: 'plain', text: word });
                i = j;
            }
            // Check for numbers
            else if (/[0-9]/.test(line[i])) {
                let j = i;
                while (j < line.length && /[0-9.]/.test(line[j])) j++;
                tokens.push({ type: 'number', text: line.slice(i, j) });
                i = j;
            }
            // Everything else
            else {
                tokens.push({ type: 'plain', text: line[i] });
                i++;
            }
        }
    }
    
    // Render tokens to HTML
    return tokens.map(t => {
        const escaped = t.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        if (t.type === 'plain') return escaped;
        return `<span class="${t.type}">${escaped}</span>`;
    }).join('');
}

// ── Copy Code ──
function copyCode(btn, sectionIndex) {
    const code = currentLesson.sections[sectionIndex].code;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
    });
}

// ── HTML Escape for textarea ──
function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ── Code Editor: Save/Load ──
const CODE_STORAGE_KEY = 'learnPythonCode';

function getSavedCode(exerciseId) {
    try {
        const all = JSON.parse(localStorage.getItem(CODE_STORAGE_KEY)) || {};
        return all[exerciseId] || {};
    } catch {
        return {};
    }
}

function autoSaveCode(exerciseId, taskIndex) {
    const editor = document.getElementById(`editor_${exerciseId}_${taskIndex}`);
    if (!editor) return;

    try {
        const all = JSON.parse(localStorage.getItem(CODE_STORAGE_KEY)) || {};
        if (!all[exerciseId]) all[exerciseId] = {};
        all[exerciseId][`ex${exerciseId}_task${taskIndex}`] = editor.value;
        localStorage.setItem(CODE_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {
        console.warn('Could not save code:', e);
    }

    // Update save indicator
    const wrapper = editor.closest('.code-editor-wrapper');
    const label = wrapper?.querySelector('.editor-label');
    if (label) {
        label.textContent = '✅ Saved!';
        setTimeout(() => { label.textContent = '✏️ Your Code'; }, 1500);
    }
}

function copyEditorCode(exerciseId, taskIndex) {
    const editor = document.getElementById(`editor_${exerciseId}_${taskIndex}`);
    if (!editor) return;
    navigator.clipboard.writeText(editor.value).then(() => {
        const wrapper = editor.closest('.code-editor-wrapper');
        const btn = wrapper?.querySelector('.copy-editor-btn');
        if (btn) {
            btn.textContent = '✅ Copied!';
            setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
        }
    });
}

function resetEditorCode(exerciseId, taskIndex) {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (!exercise) return;
    const task = exercise.tasks[taskIndex];
    if (!task) return;

    const editor = document.getElementById(`editor_${exerciseId}_${taskIndex}`);
    if (!editor) return;

    // Confirm reset
    const wrapper = editor.closest('.code-editor-wrapper');
    const btn = wrapper?.querySelector('.reset-editor-btn');
    
    if (btn && !btn.dataset.confirm) {
        btn.dataset.confirm = 'true';
        btn.textContent = '⚠️ Confirm?';
        btn.style.color = '#ef4444';
        setTimeout(() => {
            delete btn.dataset.confirm;
            btn.textContent = '↺ Reset';
            btn.style.color = '';
        }, 3000);
        return;
    }

    // Actually reset
    editor.value = task.starterCode;
    autoGrow(editor);

    // Clear from storage
    try {
        const all = JSON.parse(localStorage.getItem(CODE_STORAGE_KEY)) || {};
        if (all[exerciseId]) {
            delete all[exerciseId][`ex${exerciseId}_task${taskIndex}`];
            localStorage.setItem(CODE_STORAGE_KEY, JSON.stringify(all));
        }
    } catch (e) {}

    if (btn) {
        delete btn.dataset.confirm;
        btn.textContent = '✅ Reset!';
        btn.style.color = '#10b981';
        setTimeout(() => {
            btn.textContent = '↺ Reset';
            btn.style.color = '';
        }, 2000);
    }
}

// ── Tab Key Support in Editor ──
function handleTab(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const editor = e.target;
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
        autoSaveCode(
            parseInt(editor.id.split('_')[1]),
            parseInt(editor.id.split('_')[2])
        );
    }
}

// ── Auto-grow textarea ──
function autoGrow(el) {
    el.style.height = 'auto';
    el.style.height = Math.max(el.scrollHeight, 80) + 'px';
}

// ══════════════════════════════════════════
// CODE VALIDATION SYSTEM
// ══════════════════════════════════════════

const taskValidations = {
    // Exercise 1: Hello World
    1: [
        { checks: [{ p: 'print', m: 'Use the print() function' }, { p: /["'].*name.*["']/i, m: 'Include your name in a string' }], success: 'Great job printing your name! 🎉' },
        { checks: [{ p: 'print', m: 'Use print() to show the pattern' }, { p: /\*{2,}/, m: 'Print increasing stars (**, ***, etc.)' }], success: 'Nice pattern! ⭐' },
        { checks: [{ p: 'print', m: 'Use print()' }, { p: /sep\s*=/, m: 'Use the sep parameter: sep="/"' }], success: 'Perfect use of sep! 🎉' },
        { checks: [{ p: 'print', m: 'Use print()' }, { p: /("""|'''|\\n|house|\/{2,}|\|)/, m: 'Create the house pattern using multi-line strings or multiple prints' }], success: 'Nice ASCII art! 🏠' }
    ],
    // Exercise 2: Variables & Types
    2: [
        { checks: [{ p: /=\s*["']/, m: 'Create a string variable (e.g., your_name = "...")' }, { p: /=\s*\d+/, m: 'Create a number variable (e.g., your_age = 25)' }, { p: /=\s*(True|False)/, m: 'Create a boolean variable (e.g., is_student = True)' }, { p: 'print', m: 'Print your variables' }], success: 'All variables created! 🎉' },
        { checks: [{ p: /x\s*,\s*y\s*=\s*y\s*,\s*x/, m: 'Swap using: x, y = y, x' }], success: 'Clean swap without temp variable! 🔄' },
        { checks: [{ p: 'type', m: 'Use type() to check each value' }], success: 'Type detective work done! 🔍' },
        { checks: [{ p: /9\s*\/\s*5|1\.8/, m: 'Use the formula: F = (C × 9/5) + 32' }, { p: 'print', m: 'Print the result' }], success: 'Temperature converted! 🌡️' }
    ],
    // Exercise 3: Strings & Formatting
    3: [
        { checks: [{ p: /\[\d+:\d+\]/, m: 'Use string slicing: word[start:end]' }, { p: 'print', m: 'Print the result' }], success: 'Slicing master! 🔪' },
        { checks: [{ p: /["']@["']|in\s|@/, m: 'Check for "@" in the email' }, { p: /["']\.["']|\./, m: 'Check for "." in the email' }], success: 'Email validated! 📧' },
        { checks: [{ p: /f["']|format|%/, m: 'Use f-strings or .format()' }, { p: 'print', m: 'Print the formatted result' }], success: 'Formatted perfectly! 💰' },
        { checks: [{ p: /split|\[::\s*-1\]|reverse/, m: 'Use split() and/or reverse' }], success: 'Words reversed! 🔁' }
    ],
    // Exercise 4: Numbers & Math
    4: [
        { checks: [{ p: /math\.pi|3\.14/, m: 'Use math.pi for π' }, { p: /\*\*\s*2|pow|\*\s*r/, m: 'Calculate area using r²' }, { p: 'print', m: 'Print the results' }], success: 'Circle calculations done! ⭕' },
        { checks: [{ p: /%\s*2|%2/, m: 'Use modulo (%) to check even/odd' }, { p: /for|while/, m: 'Use a loop to check each number' }], success: 'Even/odd checked! 🔢' },
        { checks: [{ p: /\*\s*\d+|\*\s*tip|tip_percent/, m: 'Calculate the tip amount' }, { p: 'print', m: 'Print the formatted result' }], success: 'Tip calculated! 💵' }
    ],
    // Exercise 5: User Input
    5: [
        { checks: [{ p: 'input', m: 'Use input() to ask the user' }, { p: 'print', m: 'Print the greeting' }], success: 'Greeting generated! 👋' },
        { checks: [{ p: 'input', m: 'Use input() to get age' }, { p: /int\(|\*\s*365|365/, m: 'Convert to int and multiply by 365' }], success: 'Age in days calculated! 📅' },
        { checks: [{ p: 'input', m: 'Use input() for quiz questions' }, { p: /==|lower|score|count/, m: 'Check answers and track score' }], success: 'Quiz created! 🧠' }
    ],
    // Exercise 6: Conditionals
    6: [
        { checks: [{ p: /if.*>|if.*<|if.*==/, m: 'Use if/elif/else to check positive/negative/zero' }, { p: 'print', m: 'Print the result' }], success: 'Number classified! ✅' },
        { checks: [{ p: /%\s*4|%4/, m: 'Check divisibility by 4' }, { p: /%\s*100|%100/, m: 'Check divisibility by 100' }], success: 'Leap year logic correct! 📆' },
        { checks: [{ p: /if|elif/, m: 'Use conditionals to determine winner' }, { p: 'print', m: 'Print who wins' }], success: 'Game logic works! 🎮' }
    ],
    // Exercise 7: Loops
    7: [
        { checks: [{ p: /for|while/, m: 'Use a for or while loop' }, { p: /\+|sum|\+=/, m: 'Add numbers together' }], success: 'Sum = 5050! 🧮' },
        { checks: [{ p: /for|while/, m: 'Use a loop' }, { p: /a\s*\+\s*b|fib|a,\s*b\s*=\s*b|prev/, m: 'Generate Fibonacci by adding previous two numbers' }], success: 'Fibonacci sequence done! 🌀' },
        { checks: [{ p: /for|while/, m: 'Use loops' }, { p: /\*|star/, m: 'Print stars to form the diamond' }], success: 'Diamond pattern looks great! 💎' },
        { checks: [{ p: /for|while/, m: 'Use loops' }, { p: /%|prime|divisible/, m: 'Check for prime numbers using modulo' }], success: 'Primes found! 🔢' }
    ],
    // Exercise 8: Lists & Tuples
    8: [
        { checks: [{ p: /sort\(|sorted/, m: 'Sort the list' }, { p: /remove|pop/, m: 'Remove the smallest element' }, { p: /append|\+.*10/, m: 'Add 10 to the list' }], success: 'List manipulated! 📋' },
        { checks: [{ p: /\[.*for.*in.*if|\[.*for.*in/, m: 'Use a list comprehension [expr for x in ...]' }, { p: /\*\*\s*2|\*\s*x|pow/, m: 'Calculate squares' }], success: 'Comprehension master! ⚡' },
        { checks: [{ p: /for|sum/, m: 'Loop through or use sum()' }, { p: /matrix|row/, m: 'Access matrix rows' }], success: 'Matrix sum = 45! 🔢' }
    ],
    // Exercise 9: Dicts & Sets
    9: [
        { checks: [{ p: /\{.*:/, m: 'Create a dictionary with {key: value}' }, { p: 'print', m: 'Print student info' }], success: 'Student database created! 🎓' },
        { checks: [{ p: /for|Counter|count/, m: 'Count each character' }, { p: /text|abracadabra/, m: 'Use the text variable' }], success: 'Characters counted! 🔤' },
        { checks: [{ p: /&|intersection|and/, m: 'Find intersection of both sets' }], success: 'Set operations done! 🔗' }
    ],
    // Exercise 10: Functions
    10: [
        { checks: [{ p: /def\s+greet/, m: 'Define a function: def greet(name, time=...)' }, { p: 'return', m: 'Return the greeting string' }], success: 'Greeting function works! 👋' },
        { checks: [{ p: /def\s+check_password/, m: 'Define: def check_password(pwd)' }, { p: /len\(|<\s*6|>\s*10/, m: 'Check password length' }, { p: 'return', m: 'Return strength level' }], success: 'Password checker done! 🔒' },
        { checks: [{ p: /def\s+stats/, m: 'Define: def stats(numbers)' }, { p: /min|max/, m: 'Calculate min and max' }, { p: 'return', m: 'Return a dict with stats' }], success: 'Statistics function complete! 📊' }
    ],
    // Exercise 11: File Handling
    11: [
        { checks: [{ p: /open\(/, m: 'Use open() to work with files' }, { p: /["']w["']/, m: 'Write mode: open(file, "w")' }, { p: /["']r["']|read/, m: 'Read the file back' }], success: 'File read & write done! 📄' },
        { checks: [{ p: /open\(/, m: 'Use open() for file operations' }, { p: /split|count|len/, m: 'Count words using split() or len()' }], success: 'Word counter works! 📝' }
    ],
    // Exercise 12: Error Handling
    12: [
        { checks: [{ p: /def\s+safe_div/, m: 'Define: def safe_div(a, b)' }, { p: 'try', m: 'Use try/except block' }, { p: /ZeroDivision|except/, m: 'Handle ZeroDivisionError' }], success: 'Safe division implemented! 🛡️' },
        { checks: [{ p: /def\s+safe_get/, m: 'Define: def safe_get(lst, index)' }, { p: 'try', m: 'Use try/except block' }, { p: /IndexError|except/, m: 'Handle IndexError' }], success: 'Safe list access done! 🛡️' }
    ],
    // Exercise 13: Modules
    13: [
        { checks: [{ p: /import\s+random|from\s+random/, m: 'Import the random module' }, { p: /import\s+string|from\s+string/, m: 'Import the string module' }, { p: /choice|choices|join/, m: 'Generate random characters' }], success: 'Password generator works! 🔐' },
        { checks: [{ p: /import\s+datetime|from\s+datetime/, m: 'Import datetime module' }, { p: /2027/, m: 'Reference year 2027' }], success: 'Days until New Year calculated! 🎆' }
    ],
    // Exercise 14: OOP
    14: [
        { checks: [{ p: /class\s+Book/, m: 'Define: class Book' }, { p: /def\s+__init__/, m: 'Add __init__ method' }, { p: /def\s+read/, m: 'Add read() method' }, { p: /def\s+progress/, m: 'Add progress() method' }], success: 'Book class complete! 📖' },
        { checks: [{ p: /class\s+Playlist/, m: 'Define: class Playlist' }, { p: /def\s+add_song/, m: 'Add add_song() method' }, { p: /def\s+show/, m: 'Add show() method' }], success: 'Playlist class rocks! 🎵' }
    ]
};

function checkCode(exerciseId, taskIndex) {
    const editor = document.getElementById(`editor_${exerciseId}_${taskIndex}`);
    const resultDiv = document.getElementById(`result_${exerciseId}_${taskIndex}`);
    if (!editor || !resultDiv) return;

    const code = editor.value.trim();
    const validation = taskValidations[exerciseId]?.[taskIndex];
    if (!validation) return;

    // Check if code is still the starter code
    const exercise = exercises.find(e => e.id === exerciseId);
    if (exercise && code === exercise.tasks[taskIndex].starterCode.trim()) {
        resultDiv.innerHTML = `<div class="check-feedback check-warning">⚠️ Write your code first, then check!</div>`;
        resultDiv.style.display = 'block';
        return;
    }

    // Check if empty or only comments
    const codeLines = code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#'));
    if (codeLines.length === 0) {
        resultDiv.innerHTML = `<div class="check-feedback check-warning">⚠️ Your code is empty. Write some code first!</div>`;
        resultDiv.style.display = 'block';
        return;
    }

    // Run all checks
    const failures = [];
    for (const check of validation.checks) {
        const pattern = check.p;
        let passed = false;
        if (typeof pattern === 'string') {
            passed = code.includes(pattern);
        } else if (pattern instanceof RegExp) {
            passed = pattern.test(code);
        }
        if (!passed) {
            failures.push(check.m);
        }
    }

    if (failures.length === 0) {
        // All checks passed!
        resultDiv.innerHTML = `
            <div class="check-feedback check-pass">
                <span class="check-icon-large">✅</span>
                <div>
                    <strong>Correct!</strong> ${validation.success}
                </div>
            </div>`;
    } else {
        // Some checks failed
        resultDiv.innerHTML = `
            <div class="check-feedback check-fail">
                <span class="check-icon-large">❌</span>
                <div>
                    <strong>Not quite right.</strong> Here's what to fix:
                    <ul class="check-hints">
                        ${failures.map(f => `<li>→ ${f}</li>`).join('')}
                    </ul>
                </div>
            </div>`;
    }
    resultDiv.style.display = 'block';
}

// ── Exercise Event Listeners ──
function setupExerciseListeners() {
    // Exercise Complete button
    document.getElementById('exCompleteBtn')?.addEventListener('click', () => {
        if (!currentExercise) return;
        const progress = getExerciseProgress();
        progress[currentExercise.id] = !progress[currentExercise.id];
        saveExerciseProgress(progress);
        renderExerciseNav();

        const btn = document.getElementById('exCompleteBtn');
        if (progress[currentExercise.id]) {
            btn.classList.add('completed');
            btn.innerHTML = '<span class="check-icon">☑</span> Completed!';
            celebrate(); // 🎉 Celebrate milestone!
        } else {
            btn.classList.remove('completed');
            btn.innerHTML = '<span class="check-icon">☐</span> Mark Complete';
        }
    });

    // Exercise Nav buttons
    document.getElementById('exPrevBtn')?.addEventListener('click', () => {
        if (currentExercise && currentExercise.id > 1) {
            openExercise(currentExercise.id - 1);
        }
    });

    document.getElementById('exNextBtn')?.addEventListener('click', () => {
        if (currentExercise && currentExercise.id < exercises.length) {
            openExercise(currentExercise.id + 1);
        }
    });
}

// ── Event Listeners ──
function setupEventListeners() {
    // Start button
    document.getElementById('startBtn')?.addEventListener('click', () => {
        openLesson(1);
    });

    // Complete button
    document.getElementById('completeBtn')?.addEventListener('click', () => {
        if (!currentLesson) return;
        const progress = getProgress();
        progress[currentLesson.id] = !progress[currentLesson.id];
        saveProgress(progress);
        updateProgress();
        renderNav();

        const btn = document.getElementById('completeBtn');
        if (progress[currentLesson.id]) {
            btn.classList.add('completed');
            btn.innerHTML = '<span class="check-icon">☑</span> Completed!';
            celebrate(); // 🎉 Celebrate milestone!
        } else {
            btn.classList.remove('completed');
            btn.innerHTML = '<span class="check-icon">☐</span> Mark Complete';
        }
    });

    // Nav buttons
    document.getElementById('prevBtn')?.addEventListener('click', () => {
        if (currentLesson && currentLesson.id > 1) {
            openLesson(currentLesson.id - 1);
        }
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
        if (currentLesson && currentLesson.id < lessons.length) {
            openLesson(currentLesson.id + 1);
        }
    });

    // Reset button (double-click to confirm)
    const resetBtn = document.getElementById('resetBtn');
    let resetPending = false;
    let resetTimer = null;
    resetBtn?.addEventListener('click', () => {
        if (!resetPending) {
            // First click — ask for confirmation
            resetPending = true;
            resetBtn.innerHTML = '<span>⚠️</span> Click again to confirm!';
            resetBtn.style.background = 'rgba(239, 68, 68, 0.3)';
            resetTimer = setTimeout(() => {
                resetPending = false;
                resetBtn.innerHTML = '<span>↺</span> Reset Progress';
                resetBtn.style.background = '';
            }, 3000);
        } else {
            // Second click — actually reset
            clearTimeout(resetTimer);
            resetPending = false;
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(EX_STORAGE_KEY);
            localStorage.removeItem(CODE_STORAGE_KEY);
            updateProgress();
            renderNav();
            renderExerciseNav();
            resetBtn.innerHTML = '<span>✅</span> Progress Reset!';
            resetBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            resetBtn.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            resetBtn.style.color = '#10b981';
            setTimeout(() => {
                resetBtn.innerHTML = '<span>↺</span> Reset Progress';
                resetBtn.style.background = '';
                resetBtn.style.borderColor = '';
                resetBtn.style.color = '';
            }, 2000);
            // Go back to welcome screen
            hideAllViews();
            document.getElementById('welcomeScreen').style.display = 'block';
            currentLesson = null;
            currentExercise = null;
        }
    });

    // Mobile menu
    document.getElementById('menuToggle')?.addEventListener('click', toggleSidebar);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (currentLesson) {
            if (e.key === 'ArrowLeft' && currentLesson.id > 1) openLesson(currentLesson.id - 1);
            if (e.key === 'ArrowRight' && currentLesson.id < lessons.length) openLesson(currentLesson.id + 1);
        }
        if (currentExercise) {
            if (e.key === 'ArrowLeft' && currentExercise.id > 1) openExercise(currentExercise.id - 1);
            if (e.key === 'ArrowRight' && currentExercise.id < exercises.length) openExercise(currentExercise.id + 1);
        }
    });
}

// ── Mobile Sidebar ──
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) closeSidebar();
    else openSidebar();
}

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('open');
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.onclick = closeSidebar;
        document.body.appendChild(overlay);
    }
    overlay.classList.add('show');
}

function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.querySelector('.sidebar-overlay')?.classList.remove('show');
}

// ── Celebration Animation ──
function celebrate() {
    // 1. Confetti Burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        }));
    }, 250);

    // 2. Balloons
    const container = document.createElement('div');
    container.className = 'balloon-container';
    document.body.appendChild(container);

    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(balloon);
            
            // Remove balloon element after animation completes
            setTimeout(() => balloon.remove(), 7000);
        }, i * 200);
    }
    
    // Remove container from DOM once all balloons are gone
    setTimeout(() => {
        container.remove();
    }, 12000);
}

