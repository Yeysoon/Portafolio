import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeconologyComponent } from './Components/teconology/teconology.component';
import { ProyectsComponent } from './Components/proyects/proyects.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { BodyComponent } from './Components/body/body.component';

const routes: Routes = [


  { path: '', redirectTo: '', pathMatch: 'full' },

  { path: '', redirectTo: '/tecnology', pathMatch: 'full' },
  { path: '', redirectTo: '/proyects', pathMatch: 'full' },
  { path: '', redirectTo: '/contacto', pathMatch: 'full' },


  { path: 'tecnology', component: TeconologyComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'contacto', component: ContactoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
