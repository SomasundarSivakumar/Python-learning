"""
╔══════════════════════════════════════════════════════════════╗
║    LESSON 15: FINAL PROJECT — COMMAND-LINE TODO APP         ║
╚══════════════════════════════════════════════════════════════╝

🎯 This lesson combines EVERYTHING you've learned:
   - Variables, strings, f-strings     (Lessons 1-3)
   - Lists, dictionaries               (Lessons 8-9)
   - Functions                          (Lesson 10)
   - File handling                      (Lesson 11)
   - Error handling                     (Lesson 12)
   - Modules                            (Lesson 13)
   - OOP                                (Lesson 14)

Run this file to use the app! Add, complete, and delete tasks.
"""

import json
import os
from datetime import datetime

# ── The Todo Item Class ──
class TodoItem:
    def __init__(self, title, priority="medium", done=False, created=None):
        self.title = title
        self.priority = priority
        self.done = done
        self.created = created or datetime.now().strftime("%Y-%m-%d %H:%M")

    def to_dict(self):
        return {
            "title": self.title,
            "priority": self.priority,
            "done": self.done,
            "created": self.created
        }

    @classmethod
    def from_dict(cls, data):
        return cls(data["title"], data["priority"], data["done"], data["created"])

    def __str__(self):
        status = "✅" if self.done else "⬜"
        pri = {"high": "🔴", "medium": "🟡", "low": "🟢"}.get(self.priority, "⚪")
        return f"{status} {pri} {self.title}"

# ── The Todo App ──
class TodoApp:
    DATA_FILE = "todos.json"

    def __init__(self):
        self.todos = []
        self.load()

    def load(self):
        if os.path.exists(self.DATA_FILE):
            try:
                with open(self.DATA_FILE, "r") as f:
                    data = json.load(f)
                    self.todos = [TodoItem.from_dict(d) for d in data]
            except (json.JSONDecodeError, KeyError):
                self.todos = []

    def save(self):
        with open(self.DATA_FILE, "w") as f:
            json.dump([t.to_dict() for t in self.todos], f, indent=2)

    def add(self, title, priority="medium"):
        self.todos.append(TodoItem(title, priority))
        self.save()
        print(f"  ✅ Added: '{title}'")

    def complete(self, index):
        if 0 <= index < len(self.todos):
            self.todos[index].done = True
            self.save()
            print(f"  ✅ Completed: '{self.todos[index].title}'")
        else:
            print("  ❌ Invalid task number!")

    def delete(self, index):
        if 0 <= index < len(self.todos):
            removed = self.todos.pop(index)
            self.save()
            print(f"  🗑️ Deleted: '{removed.title}'")
        else:
            print("  ❌ Invalid task number!")

    def show(self):
        if not self.todos:
            print("\n  📭 No tasks yet! Add one with 'add'.\n")
            return
        print(f"\n  📋 Your Tasks ({len(self.todos)}):")
        print("  " + "─" * 40)
        for i, todo in enumerate(self.todos):
            print(f"  {i+1}. {todo}")
        done = sum(1 for t in self.todos if t.done)
        print(f"\n  Progress: {done}/{len(self.todos)} completed")

    def run(self):
        print("╔══════════════════════════════════╗")
        print("║    📝 Python Todo App            ║")
        print("╚══════════════════════════════════╝")

        while True:
            self.show()
            print("\n  Commands: [a]dd  [c]omplete  [d]elete  [q]uit")
            cmd = input("  > ").strip().lower()

            if cmd in ("q", "quit"):
                print("\n  👋 Goodbye!")
                break
            elif cmd in ("a", "add"):
                title = input("  Task title: ").strip()
                if title:
                    pri = input("  Priority (high/medium/low): ").strip().lower()
                    if pri not in ("high", "medium", "low"):
                        pri = "medium"
                    self.add(title, pri)
            elif cmd in ("c", "complete"):
                try:
                    num = int(input("  Task number: ")) - 1
                    self.complete(num)
                except ValueError:
                    print("  ❌ Enter a valid number!")
            elif cmd in ("d", "delete"):
                try:
                    num = int(input("  Task number: ")) - 1
                    self.delete(num)
                except ValueError:
                    print("  ❌ Enter a valid number!")
            else:
                print("  ❌ Unknown command!")

# ── Run the App ──
if __name__ == "__main__":
    app = TodoApp()
    app.run()
