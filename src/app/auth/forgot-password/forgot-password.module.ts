import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import { ForgotPasswordRoutingModule } from '@auth/forgot-password/forgot-password-routing.module';
import { ForgotPasswordComponent } from '@auth/forgot-password/forgot-password.component';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
