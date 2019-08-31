import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-bar-dialog',
  template: `
            <div class="confirmation-text">
            <mat-icon>check_circle</mat-icon>
            <span>Your Visit Has Been Successfully Scheduled !!</span>
            </div>
  `,
  styles: [`
    .confirmation-text {
      color: #2BB473;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .confirmation-text > span {
      margin-left: 8px;
    }
  `],
})
export class SnackBarDialogComponent { }

@Component({
  selector: 'app-schedule-visit',
  templateUrl: './schedule-visit.component.html',
  styleUrls: ['./schedule-visit.component.scss']
})
export class ScheduleVisitComponent implements OnInit {

  productsForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ScheduleVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.productsForm = this.fb.group({
      mobileNumber: ['', Validators.required],
      dateOfVisit: ['', Validators.required]
    });
  }

  openSnackBar() {
    if (this.productsForm.valid) {
      this._snackBar.openFromComponent(SnackBarDialogComponent, {
        duration: 50 * 1000,
      });

      this.dialogRef.close();
    }
  }

}
