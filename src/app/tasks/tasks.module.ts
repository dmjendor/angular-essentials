import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  bootstrap: [AppComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
