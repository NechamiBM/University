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

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, CourseModule, BrowserAnimationsModule, MatInputModule, MatTabsModule ,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
