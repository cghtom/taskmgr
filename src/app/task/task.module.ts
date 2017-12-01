import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [SharedModule, TaskRoutingModule],
  declarations: [
    TaskHeaderComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHomeComponent
  ]
})
export class TaskModule {}