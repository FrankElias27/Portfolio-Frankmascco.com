import { Component, OnInit } from '@angular/core';
import { ScrollPositionService } from '../../services';
import { ContainerComponent, FadeInDirective } from '../../shared';
import { TranslatePipe } from '@ngx-translate/core';
import { CertificatesCarouselComponent } from './certificates-carousel/certificates-carousel.component';

@Component({
  selector: 'app-certificates-page',
  imports: [ContainerComponent, CertificatesCarouselComponent, FadeInDirective, TranslatePipe],
  templateUrl: './certificates-page.component.html',
  styleUrl: './certificates-page.component.css'
})
export class CertificatesPageComponent implements OnInit {
  constructor(private scrollPositionService: ScrollPositionService) { }

  public ngOnInit(): void {
    this.scrollPositionService.resetPosition();
    window.scrollTo(0, 0);
  }
}
