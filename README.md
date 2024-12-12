# React Native FlatList Performance Issue

This repository demonstrates a performance issue in React Native's FlatList component when dealing with a large dataset. The app becomes unresponsive for a significant duration while the list renders.

## Problem

The `MyComponent` component renders a FlatList with 10,000 items.  The initial render is very slow, causing a noticeable lag and potential UI freeze. This slow rendering is typical of FlatList with large datasets if not optimized.

## Solution

The solution addresses this issue by implementing windowing/virtualization to avoid rendering all items at once.

## Usage

Clone the repository and run the application. Observe the slow rendering before applying the solution. After making the changes, re-run the application to see the improvement in the app's performance.

## Technologies Used

- React Native
- JavaScript

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.
