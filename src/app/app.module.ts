import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullPageComponent } from './full-page/full-page.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectProfileComponent,
    TopBarComponent,
    ProfilesListComponent,
    FullPageComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
