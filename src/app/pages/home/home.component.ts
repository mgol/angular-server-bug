import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  isReady = false;

  constructor(
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.http
      .get(`https://httpbin.org/delay/5`)
      .subscribe(() => {
        this.isReady = true;
        this.changeDetector.markForCheck();
      }, error => {
        console.error('Error has happened', error);
      });

  }

}
