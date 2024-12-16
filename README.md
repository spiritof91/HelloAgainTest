Here's a short README.md for your test task:

---

# React Native Rewards App

## Overview
This project is a simple React Native app built with TypeScript, demonstrating the use of Redux for state management. The app shows a list of available rewards, allows users to collect them, and displays the collected rewards.

## Setup
1. Install dependencies:

```bash
npm install
```

2. Run the app:

```bash
npx react-native run-android # or run-ios
```

## Features
- **Redux Toolkit (RTK) + RTK Query**: While the task requested classic Redux (at least that's what I thought based on the requirement to use the Redux action "COLLECT_REWARD"), I opted for Redux Toolkit and RTK Query as the recommended and modern approach in the Redux ecosystem. This ensures better maintainability and optimized data fetching.
- **React Navigation**: Used for navigation between different screens (available rewards and collected rewards).
- **Feature-based file structure**: Applied for better scalability and organization, although it may be an overkill for this task.

## Screens
- **Available Rewards**: Displays a list of rewards and allows users to collect them.
- **Collected Rewards**: Displays the rewards that have been collected.

---

Let me know if you need any adjustments!