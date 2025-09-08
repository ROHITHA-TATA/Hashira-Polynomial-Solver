# Hashira Placements Assignment – Polynomial Solver

This project solves a polynomial equation’s constant term `P` from given roots provided in **JSON format**.  
The task was given as part of the Hashira college placements assignment.

---

## 🚀 How It Works

1. The input JSON contains:
   - **n** → number of roots
   - **k** → minimum number of roots required (`k = m + 1`, where *m* is the degree of the polynomial)
   - Roots in the form of `{ "base": "...", "value": "..." }`

2. Each root value is stored in a specific **base** (binary, octal, decimal, hexadecimal, etc.).
   - Example: `"111"` in base 2 → `7` in decimal.

3. The program:
   - Reads the JSON file
   - Decodes roots into decimal values
   - Picks the first **k** roots
   - Calculates constant `P` using:
     ```
     P = (-1)^k × (product of k roots)
     ```
   - Prints the result

---

## 📂 Files in This Repo

- `polynomialSolver.js` → Node.js script to solve both test cases.
- `test1.json` → Sample test case.
- `test2.json` → Second test case.
- `package.json` → Project metadata and scripts.

---

## 🛠️ Requirements

- Node.js installed on your system

---

## ▶️ How to Run

1. Clone this repository:
   ```sh
   git clone <your-repo-link>
   cd Hashira-Polynomial-Solver

Run the solver:

node polynomialSolver.js

Output will show results for both test1.json and test2.json:

Result for test1.json:
Constant P = -336
---------------------------------------------------
Result for test2.json:
Constant P = -68251311922474229841658561499299139840556979231248594831269713952083760367429352166608686704663279300225943492000000000000000
---------------------------------------------------

Example Explanation (Test 1)

Input (test1.json):

{
  "keys": { "n": 4, "k": 3 },
  "1": { "base": "10", "value": "4" },
  "2": { "base": "2", "value": "111" },
  "3": { "base": "10", "value": "12" },
  "6": { "base": "4", "value": "213" }
}


Decode roots → [4, 7, 12, 39]

Take first k=3 roots → [4, 7, 12]

Product = 4 × 7 × 12 = 336

Apply (-1)^3 = -1

P = -336
