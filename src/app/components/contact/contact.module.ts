// Módulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// Componentes
import { ContactIndexComponent } from './index/index.component'
import { ContactCreateComponent } from './create/create.component';
import { ContactUpdateComponent } from './update/update.component';
import { ContactDetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    // Componentes
    ContactIndexComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ContactRoutingModule,
  ]
})
export class ContactModule { }
