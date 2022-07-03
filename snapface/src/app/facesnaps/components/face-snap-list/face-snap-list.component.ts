import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

  }


}


// private destroy$!: Subject<boolean>
// this.destroy$ = new Subject<boolean>();
// interval(1000).pipe(
//   takeUntil(this.destroy$),
//   tap(console.log)
// ).subscribe();
// ngOnDestroy() {
//   this.destroy$.next(true);
// }
