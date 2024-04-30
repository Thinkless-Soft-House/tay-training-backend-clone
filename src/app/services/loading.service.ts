import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../core/shared/components/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = false;
  atualRef: MatDialogRef<LoadingComponent> | null = null;
  constructor(public dialog: MatDialog) {}

  changeLoadingState() {
    if (this.loading) {
      this.activeLoading();
    } else {
      this.deactiveLoading();
    }
  }

  activeLoading(text?: string) {
    console.log('activeLoading');
    this.loading = true;
    const dialogRef = this.dialog.open(LoadingComponent, {
      data: { text: text || 'Carregando...' },
    });

    if (this.atualRef) this.atualRef.close();
    this.atualRef = dialogRef;
  }
  deactiveLoading() {
    this.loading = false;
    if (this.atualRef) this.atualRef.close();
  }
}
