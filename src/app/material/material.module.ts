import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";

const MateraialComponents=[
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,

]

@NgModule({
  declarations: [],
  imports: [
    MateraialComponents
  ],
  exports:[MateraialComponents]
})
export class MaterialModule { }
