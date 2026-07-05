import { LitElement, css, html } from 'lit';
import './todo-item.js';

export class TodoList extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
    }

    ul {
      display: grid;
      gap: 10px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .empty-message {
      margin: 0;
      padding: 24px;
      border: 2px dashed #cbd5e1;
      border-radius: 12px;
      background: #f8fafc;
      color: #64748b;
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    if (this.todos.length === 0) {
      return html`
        <p class="empty-message">
          No tasks yet. Add your first task above.
        </p>
      `;
    }

    return html`
      <ul>
        ${this.todos.map(
          (todo) => html`
            <li>
              <todo-item .todo=${todo}></todo-item>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);