# refactoring-expression-tree
Refactoring following SOLID principles

## Assumptions
- Index is empty, just exporting, because I assumed this could be a helper project or similar that exported the content
for a bigger project.
- Left and right values must be integer.

## Setup exercise

### Requirements
- This project was made and setup for Node LTS version 16.17.1

### Setup
To setup the project run the following commands:
1. Clone the project from GitHub in your project folder type the following command

```$ https://github.com/NEOLPAR/refactoring-expression-tree.git```

2. Go to the directory and install dependencies
```
$ cd refactoring-expression-tree
$ npm install
```

3. Run `npm test` to run all tests

## Improvements

- Convert Node as an object instead of a function
- toString and result functions could be reduced to not duplicate code

## Tests

- tree.js would need more tests.
- All inputs like edge cases with null, character, float values have not been tested. At this stage relying on typescript
errors when building.