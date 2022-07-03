import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FaceSnapsRoutinModule } from './face-snaps-routing.module';

@NgModule({
  declarations: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutinModule
  ],
  exports: [
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent
  ]
})
export class FacesnapsModule { }
