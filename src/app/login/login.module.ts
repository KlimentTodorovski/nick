import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [LoginRoutingModule.components],
    imports: [
        CommonModule,
        LoginRoutingModule
    ]
})

export class LoginModule { }
