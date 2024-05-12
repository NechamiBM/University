import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipListbox, MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { UserService } from "./user.service";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule, MatGridListModule,
        MatInputModule, MatFormFieldModule, MatChipsModule, MatButtonModule, MatIconModule],
    providers: [UserService],
    exports: [LoginComponent, RegisterComponent]
})

export class UserModule { }
