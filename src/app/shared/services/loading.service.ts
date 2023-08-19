// loading.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = false;

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }

  isLoadingState(): boolean {
    return this.isLoading;
  }
}
