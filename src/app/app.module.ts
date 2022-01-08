import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [			
    AppComponent,
      SidebarComponent,
      MainComponent,
      NavbarComponent
    ],
    imports: [
    FontAwesomeModule,
    BrowserModule,
    NgChartsModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
