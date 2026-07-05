import { LitElement, css, html } from 'lit';

export class TodoInput extends LitElement {
  static properties = {
    taskText: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }

    form {
      display: flex;
      gap: 10px;
    }

    input {
      flex: 1;
      min-width: 0;
      padding: 12px 14px;
      border: 1px solid #cbd5e1;
      border-radius: 10px;
      font: inherit;
      color: #0f172a;
      background: #ffffff;
    }

    input:focus {
      outline: 3px solid rgba(14, 165, 233, 0.18);
      border-color: #0ea5e9;
    }

    button {
      padding: 12px 18px;
      border: none;
      border-radius: 10px;
      background: #0284c7;
      color: #ffffff;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: #0369a1;
    }
  `;

  constructor() {
    super();
    this.taskText = '';
  }

  render() {
    return html`
      <form @submit=${this.submitTask}>
        <input
          type="text"
          placeholder="Enter a new task"
          aria-label="New task"
          .value=${this.taskText}
          @input=${this.updateTaskText}
        />

        <button type="submit">Add Task</button>
      </form>
    `;
  }

  updateTaskText(event) {
    this.taskText = event.target.value;
  }

  submitTask(event) {
    event.preventDefault();

    const text = this.taskText.trim();

    if (!text) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('add-todo', {
        detail: { text },
        bubbles: true,
        composed: true,
      }),
    );

    this.taskText = '';
  }
}

customElements.define('todo-input', TodoInput);