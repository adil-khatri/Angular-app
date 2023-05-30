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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    HomepageComponent,
    FooterComponent,
    ChildComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
