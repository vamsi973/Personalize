import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesHomeComponent } from './notes-home/notes-home.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    NotesHomeComponent,
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
