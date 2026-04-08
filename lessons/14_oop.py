"""
╔══════════════════════════════════════════════════════════════╗
║          LESSON 14: OBJECT-ORIENTED PROGRAMMING             ║
╚══════════════════════════════════════════════════════════════╝

🎯 What you'll learn:
   - Classes and objects
   - __init__, self, methods
   - Inheritance
   - Encapsulation basics
"""

# ── PART 1: Your First Class ──
class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age

    def bark(self):
        return f"{self.name} says: Woof! 🐕"

    def info(self):
        return f"{self.name} ({self.breed}), {self.age} yrs"

# Creating objects (instances)
dog1 = Dog("Buddy", "Golden Retriever", 3)
dog2 = Dog("Max", "Labrador", 5)

print(dog1.bark())
print(dog1.info())
print(dog2.info())

# ── PART 2: Class with Methods ──
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(f"+${amount}")
            return f"✅ Deposited ${amount}"
        return "❌ Invalid amount"

    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.history.append(f"-${amount}")
            return f"✅ Withdrew ${amount}"
        return "❌ Insufficient funds"

    def __str__(self):
        return f"Account({self.owner}: ${self.balance:,.2f})"

acc = BankAccount("Alice", 1000)
print(f"\n{acc}")
print(acc.deposit(500))
print(acc.withdraw(200))
print(f"Balance: ${acc.balance:,.2f}")
print(f"History: {acc.history}")

# ── PART 3: Inheritance ──
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name}: {self.sound}!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def purr(self):
        return f"{self.name} purrs... 😺"

class Duck(Animal):
    def __init__(self, name):
        super().__init__(name, "Quack")

cat = Cat("Whiskers")
duck = Duck("Donald")
print(f"\n{cat.speak()}")
print(cat.purr())
print(duck.speak())

# ── PART 4: Practical — Student Grade Tracker ──
class Student:
    def __init__(self, name):
        self.name = name
        self.grades = []

    def add_grade(self, subject, score):
        self.grades.append({"subject": subject, "score": score})

    def average(self):
        if not self.grades:
            return 0
        return sum(g["score"] for g in self.grades) / len(self.grades)

    def report(self):
        print(f"\n📊 Report Card: {self.name}")
        print("─" * 30)
        for g in self.grades:
            bar = "█" * (g["score"] // 5)
            print(f"  {g['subject']:<12} {g['score']:>3} {bar}")
        print(f"  {'Average':<12} {self.average():>5.1f}")

s = Student("Somasundar")
s.add_grade("Math", 92)
s.add_grade("Science", 88)
s.add_grade("English", 95)
s.add_grade("History", 79)
s.report()

# 📝 SUMMARY:
# ✅ class ClassName: ... def __init__(self):
# ✅ self refers to the current object
# ✅ Inheritance: class Child(Parent)
# ✅ super().__init__() calls parent constructor
# ✅ __str__ defines how an object prints
# 🏋️ Now try: exercises/ex_14_oop.py
