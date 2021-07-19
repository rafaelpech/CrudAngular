import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './create/create.component';
import { ContactDetailsComponent } from './details/details.component';
import { ContactIndexComponent } from './index/index.component';
import { ContactUpdateComponent } from './update/update.component';



const routes: Routes = [
  { path: '', component: ContactIndexComponent },
  {path: 'detalle/:id', component: ContactDetailsComponent},
  {path: 'nuevo', component: ContactCreateComponent},
  {path: 'editar/:id', component: ContactUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
