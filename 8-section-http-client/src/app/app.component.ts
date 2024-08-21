import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppModule } from './app.module';
import { ITodo } from './interfaces/todo.interface';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todos: ITodo[] = [];
  todoTitle = '';
  loading = false;
  errorMessage = '';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: ITodo = {
      title: this.todoTitle,
      completed: false
    };

    this.todosService.addTodo(newTodo)
      .subscribe((todo: ITodo) => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;

    this.todosService.fetchTodos()
      .subscribe({
        next: (todos: ITodo[]) => {
          this.todos = todos;
          this.loading = false;
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = error.message;
        }
      });
  }

  removeTodo(id: number | undefined) {
    if (!id) {
      return;
    }

    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      });
  }

  completeTodo(id: number | undefined) {
    if (!id) {
      return;
    }

    this.todosService.completeTodo(id)
      .subscribe((completedTodo: ITodo) => {
        (this.todos.find((todo: ITodo) => todo.id === completedTodo.id) as ITodo).completed = true;
      });
  }
}
