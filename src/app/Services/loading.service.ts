import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  showLoading(){
    this.loadingSubject.next(true);
  }
  hideLoading(){
    this.loadingSubject.next(false);
  }
}
