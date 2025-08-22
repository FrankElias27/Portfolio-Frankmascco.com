import { Component, OnInit, signal } from '@angular/core';
import { CvPageService, ScrollPositionService } from '../../services';
import { take } from 'rxjs';
import { Util } from '../../enums';
import { ContainerComponent, FadeInDirective, SafeUrlPipe } from '../../shared';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-page',
  imports: [TranslatePipe, ContainerComponent, FadeInDirective, SafeUrlPipe],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent implements OnInit {
  public cvPath = signal<string | null>(null);
  public cvAvailable = signal(true);

  constructor(
    private scrollPositionService: ScrollPositionService,
    private cvPageService: CvPageService
  ) { }

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);
    this.cvPageService.getCvFilename()
      .pipe(take(Util.DEFAULT_TAKE))
      .subscribe({
        next: (data) => {
          this.cvPath.set(`cv/${data.filename}`);
          this.cvAvailable.set(true);
        },
        error: () => {
          this.cvAvailable.set(false);
        }
      });
  }

  public onPdfError(): void {
    this.cvAvailable.set(false);
  }
}
