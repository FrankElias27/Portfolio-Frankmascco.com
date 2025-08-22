import { Component, OnInit } from '@angular/core';
import { ScrollPositionService } from '../../services';
import { AboutComponent, ProjectsComponent } from '../../sections';

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private scrollPositionService: ScrollPositionService) { }

  public ngOnInit(): void {
    this.scrollPositionService.restoreScrollPosition();
  }
}
