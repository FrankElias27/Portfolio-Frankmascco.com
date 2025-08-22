import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ScrollToTopComponent } from "./shared/scroll-to-top/scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'portfolio-frankmascco';

  constructor(private router: Router) { }

  // workaround for GitHub pages 404 routing
  public ngOnInit(): void {
    const storedRedirect = sessionStorage.getItem('redirectAfter404');
    if (storedRedirect) {
      sessionStorage.removeItem('redirectAfter404');
      this.router.navigateByUrl(storedRedirect);
    }
  }
}
