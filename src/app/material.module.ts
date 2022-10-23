import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
imports: [
MatButtonModule,
MatGridListModule,
MatIconModule,
MatCardModule
],
exports: [
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule
]
})

export class MaterialModule {}
