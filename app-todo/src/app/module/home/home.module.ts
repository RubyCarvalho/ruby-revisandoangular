import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HeaderComponent } from './componet/header/header.component';
import { TodoButTonDeletAllComponent } from './componet/todo-but-ton-delet-all/todo-but-ton-delet-all.component';
import { TodoInputAddItensComponent } from './componet/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './componet/todo-list/todo-list.component';
//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    TodoButTonDeletAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class HomeModule { }
