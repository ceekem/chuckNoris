import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
imports: [
MatButtonModule,
MatGridListModule,
MatIconModule,
MatCardModule,
MatTooltipModule
],
exports: [
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatTooltipModule
]
})

export class MaterialModule {}
