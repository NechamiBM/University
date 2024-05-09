import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './module/course-module/course.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './module/user-module/user.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, CourseModule,UserModule, MatButtonModule,BrowserAnimationsModule, MatInputModule, MatTabsModule ,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
