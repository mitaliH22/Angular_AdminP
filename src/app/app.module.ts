import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, UrlSegment } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { ReadComponent } from './read/read.component';
import { LayoutComponent } from './layout/layout.component';
import { DeleteComponent } from './delete/delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';
import { DashComponent } from './dash/dash.component';
import { FormComponent } from './form/form.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SearchbarComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    ReadComponent,
    LayoutComponent,
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    SignupComponent,
    DashComponent,
    FormComponent,
    EditCardComponent,
    EditPageComponent,
    DashLayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
