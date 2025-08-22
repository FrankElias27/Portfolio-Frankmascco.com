import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent implements OnInit {
  showScrollButton = false;
  private scrollThreshold = 300;

  @HostListener('window:scroll', [])
  public onWindowScroll(): void {
    this.showScrollButton = window.scrollY > this.scrollThreshold;
  }

  public ngOnInit(): void {
    this.showScrollButton = window.scrollY > this.scrollThreshold;
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
