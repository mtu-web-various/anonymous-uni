import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { AdsComponent } from './ads/ads.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostlistComponent } from './posts/postlist/postlist.component';
import { PostcreateComponent } from './posts/postcreate/postcreate.component';
import { TopiccreateComponent } from './topics/topiccreate/topiccreate.component';
import { TopiclistComponent } from './topics/topiclist/topiclist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountPageComponent,
    AdsComponent,
    LoginComponent,
    SignupComponent,
    PostlistComponent,
    PostcreateComponent,
    TopiccreateComponent,
    TopiclistComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
