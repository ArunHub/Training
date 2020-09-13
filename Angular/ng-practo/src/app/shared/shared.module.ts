import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared.service';
import { AuthService, AuthGuardService, MessageService, HttpInterceptorService } from './services';
import { ProfileEditorComponent, NotificationDirective, NotificationService, AlertComponent, NotificationComponent } from './components';

@NgModule({
  declarations: [
    ProfileEditorComponent,
    NotificationDirective,
    NotificationComponent,
    AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // since its not used by any shared component
  exports: [ // should not export services
    ProfileEditorComponent,
    FormsModule,
    ReactiveFormsModule,
    NotificationDirective,
    NotificationComponent,
    AlertComponent
  ]
})
export class SharedModule { }
