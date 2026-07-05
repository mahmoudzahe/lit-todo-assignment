# Component-Based TODO List with Lit

This project is a simple TODO list application built using Lit and Web Components.

The main goal of the project is to demonstrate component-based software principles such as modularity, reusability, encapsulation, composition, and separation of concerns.

## Features

The application allows the user to:

- Add a new task
- Mark a task as completed
- Mark a completed task as active again
- Delete a task
- See the number of completed tasks
- See an empty-state message when there are no tasks

## How to Run the Project

First, install the required packages:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

After running the command, open the local URL shown in the terminal.

## Component Architecture

The application is divided into four main components:

```text
<todo-app>
├── <todo-input>
└── <todo-list>
    ├── <todo-item>
    ├── <todo-item>
    └── ...
```

### `<todo-app>`

This is the main component of the application.

It stores the TODO array and manages the main application state. It is responsible for adding, toggling, and deleting tasks.

It also connects the other components together.

### `<todo-input>`

This component contains the text input and the Add Task button.

When the user submits a valid task, it sends an `add-todo` custom event to the parent component.

It does not directly modify the TODO array.

### `<todo-list>`

This component receives the TODO array from `<todo-app>` through a property.

It displays the empty-state message when the list is empty. Otherwise, it creates a `<todo-item>` component for every task.

### `<todo-item>`

This component displays one task.

It contains the task text, a checkbox, and a delete button. It sends a `toggle-todo` event when the checkbox is changed and a `delete-todo` event when the delete button is clicked.

It does not modify the main application state directly.

## Data Flow

The application uses properties to pass data from parent components to child components.

For example, `<todo-app>` passes the TODO array to `<todo-list>`, and `<todo-list>` passes each task object to `<todo-item>`.

Custom events are used to send actions from child components back to the main component.

```text
Properties: Parent → Child
Events: Child → Parent
```

## Component-Based Principles

### Modularity

The project is divided into separate JavaScript modules.

Each component is placed in its own file, which makes the project easier to understand, test, and maintain.

### Reusability

The `<todo-item>` component can be reused for every task in the list.

It only needs a task object containing an ID, text, and completion status.

The same component can display any number of tasks without rewriting its code.

### Encapsulation

Each component contains its own HTML template, CSS styles, and JavaScript behavior.

Lit uses Shadow DOM, which keeps the styles of each component isolated from the other components.

Components communicate only through public properties and custom events.

### Composition

The final application is created by combining smaller components.

`<todo-app>` contains `<todo-input>` and `<todo-list>`, while `<todo-list>` contains multiple `<todo-item>` components.

This allows the user interface to be built from smaller and simpler parts.

### Separation of Concerns

Each component has one clear responsibility:

- `<todo-app>` manages the application state.
- `<todo-input>` handles user input.
- `<todo-list>` displays the collection of tasks.
- `<todo-item>` displays and controls one task.

This keeps the logic organized and prevents one component from doing everything.

## Project Structure

```text
lit-todo/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.js
    └── components/
        ├── todo-app.js
        ├── todo-input.js
        ├── todo-list.js
        └── todo-item.js
```
