import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];


@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
