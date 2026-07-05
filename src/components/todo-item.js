import { LitElement, css, html } from 'lit';

export class TodoItem extends LitElement {
  static properties = {
    todo: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
    }

    article {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 13px 14px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      background: #ffffff;
    }

    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .task-text {
      flex: 1;
      color: #1e293b;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .completed {
      color: #94a3b8;
      text-decoration: line-through;
    }

    button {
      padding: 7px 11px;
      border: 1px solid #fecaca;
      border-radius: 8px;
      background: #fff1f2;
      color: #be123c;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      background: #ffe4e6;
    }
  `;

  constructor() {
    super();

    this.todo = {
      id: '',
      text: '',
      completed: false,
    };
  }

  render() {
    return html`
      <article>
        <input
          type="checkbox"
          .checked=${this.todo.completed}
          @change=${this.requestToggle}
          aria-label="Toggle task completion"
        />

        <span class=${this.todo.completed ? 'task-text completed' : 'task-text'}>
          ${this.todo.text}
        </span>

        <button type="button" @click=${this.requestDelete}>
          Delete
        </button>
      </article>
    `;
  }

  requestToggle() {
    this.dispatchEvent(
      new CustomEvent('toggle-todo', {
        detail: { id: this.todo.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  requestDelete() {
    this.dispatchEvent(
      new CustomEvent('delete-todo', {
        detail: { id: this.todo.id },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

customElements.define('todo-item', TodoItem);