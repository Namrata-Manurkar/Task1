import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyServiceService } from './my-service.service';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SortAscPipe } from './sort-asc.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AuthTokenService } from './auth-token.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortAscPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [MyServiceService,AuthTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
