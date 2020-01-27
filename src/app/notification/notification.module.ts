import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [NotificationComponent],
})
export class NotificationModule {}
