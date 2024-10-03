import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewCardComponent } from './add-new-card/add-new-card.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { DownloadAllCardsComponent } from './download-all-cards/download-all-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewCardComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    FilterComponent,
    UploadCsvComponent,
    DownloadAllCardsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" }, //its default page(when we make the path empty)
      { path: "NewCard", component: AddNewCardComponent },
      { path: "Footer", component: FooterComponent },
      { path: "Download", component: DownloadAllCardsComponent },

      //{ path: "AddUser", component: RegisterComponent },
      //{ path: "details/:id", component: SubservicesDetailsComponent },
      //{ path: "login", component: LoginComponent },
      //{ path: "subscription", component: SubscriptionComponent },
      //{ path: "app-lecture2-october", component: Lecture2OctoberComponent },
      //{
      //  path: "app-sidebar", component: SidebarComponent, children: [
      //    { path: "newService3[", component: AddNewServiceComponent }
      //  ]
      //}

    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
