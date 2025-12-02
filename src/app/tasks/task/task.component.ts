import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private tasksService = inject(TasksService); // Tasks Service is injection token
  @Input({ required: true }) task!: Task; // using alias
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
