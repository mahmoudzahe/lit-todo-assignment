import { LitElement, css, html } from 'lit';
import './todo-input.js';
import './todo-list.js';

export class TodoApp extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      padding: 48px 16px;
      box-sizing: border-box;
      background: #f0f9ff;
      color: #0f172a;
      font-family:
        Arial, Helvetica, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    main {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      padding: 28px;
      border: 1px solid #dbeafe;
      border-radius: 18px;
      background: #ffffff;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
    }

    header {
      margin-bottom: 24px;
      text-align: center;
    }

    h1 {
      margin: 0 0 8px;
      color: #0f172a;
      font-size: 32px;
    }

    .subtitle {
      margin: 0;
      color: #64748b;
      font-size: 15px;
    }

    todo-input {
      margin-bottom: 22px;
    }

    .summary {
      margin: 20px 0 0;
      padding-top: 18px;
      border-top: 1px solid #e2e8f0;
      color: #475569;
      font-size: 14px;
      text-align: center;
    }
  `;

  constructor() {
    super();

    this.todos = [];
  }

  render() {
    const completedTasks = this.todos.filter(
      (todo) => todo.completed,
    ).length;

    return html`
      <main>
        <header>
          <h1>My Task List</h1>
          <p class="subtitle">
            A component-based TODO application built with Lit
          </p>
        </header>

        <todo-input @add-todo=${this.addTodo}></todo-input>

        <todo-list
          .todos=${this.todos}
          @toggle-todo=${this.toggleTodo}
          @delete-todo=${this.deleteTodo}
        ></todo-list>

        <p class="summary">
          ${completedTasks} of ${this.todos.length} tasks completed
        </p>
      </main>
    `;
  }

  addTodo(event) {
    const text = event.detail.text.trim();

    if (!text) {
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];
  }

  toggleTodo(event) {
    const selectedId = event.detail.id;

    this.todos = this.todos.map((todo) =>
      todo.id === selectedId
        ? { ...todo, completed: !todo.completed }
        : todo,
    );
  }

  deleteTodo(event) {
    const selectedId = event.detail.id;

    this.todos = this.todos.filter(
      (todo) => todo.id !== selectedId,
    );
  }
}

customElements.define('todo-app', TodoApp);