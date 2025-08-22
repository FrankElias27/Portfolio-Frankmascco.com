import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCarouselComponent } from './certificates-carousel.component';

describe('CertificatesCarouselComponent', () => {
  let component: CertificatesCarouselComponent;
  let fixture: ComponentFixture<CertificatesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificatesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
