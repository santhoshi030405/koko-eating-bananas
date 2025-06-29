# 🐵 Koko Eating Bananas 🍌

A fun and interactive solution to the classic "Koko Eating Bananas" problem using **HTML, CSS, and JavaScript**. This project simulates Koko’s banana-eating logic in the browser.

## 💡 Project Overview

Koko needs to eat all the bananas in a certain number of hours. You provide the pile sizes and the available hours, and the app calculates the **minimum eating speed** using JavaScript logic.

The UI is built with HTML & styled with CSS.

## 📸 Features

- Input fields to enter banana piles and hours
- JavaScript logic to compute minimum eating speed using **binary search**
- Simple, clean UI
- Real-time result display

## 🧠 How It Works

The logic finds the **smallest number `k`** such that Koko can eat all the bananas within `h` hours.

Steps:
- It loops through possible eating speeds using binary search.
- At each step, it checks if the current speed lets Koko finish in time.
- The lowest working speed is shown as the answer.

## 🚀 How to Run

1. Clone or download the repo.
2. Open the `index.html` file in a web browser.
3. Enter values and click the button to see the result.

```bash
git clone https://github.com/santhoshi030405/koko-eating-bananas.git
cd koko-eating-bananas
open index.html (or double-click it)

