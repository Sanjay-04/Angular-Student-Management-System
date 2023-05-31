import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{ path: 'View', component: ViewComponent },
{ path: 'Update', component: UpdateComponent },
{ path: 'Add', component: AddComponent },
{ path: 'Delete', component: DeleteComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
