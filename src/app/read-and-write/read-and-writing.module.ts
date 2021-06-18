import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadAndWriteRouteingModule  } from './read-and-write-routeing.module';

@NgModule({
  declarations: [ ReadAndWriteRouteingModule.components ],
  imports: [
    CommonModule,
    ReadAndWriteRouteingModule
  ]
})

export class  ReadAndWriteModule { }
