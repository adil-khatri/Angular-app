import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ChildComponent } from './MyComponents/child/child.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './MyComponents/calendar/calendar.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { AuthInterceptorService } from './Services/auth-interceptor.services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    HomepageComponent,
    FooterComponent,
    ChildComponent,
    CalendarComponent,
    NewloginComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    AuthModule,
    FormsModule,
    FullCalendarModule,
    AccordionModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
