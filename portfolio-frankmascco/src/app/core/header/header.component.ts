import { Component, effect, signal } from '@angular/core';
import { Language } from '../../enums';
import { TranslationService } from '../../services';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,TranslatePipe,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private currentLangSignal = signal<string>('');

  public isMobileMenuOpen = false;
  public languages = [
    { code: Language.ES, label: 'ES'},
    { code: Language.EN, label: 'EN' },
  ];

  constructor(private readonly translationService: TranslationService) {
    this.currentLangSignal.set(this.translationService.currentLang());

    effect(() => {
      this.currentLangSignal.set(this.translationService.currentLang());
    });
  }

  public switchLanguage(lang: string): void {
    this.translationService.switchLanguage(lang);
  }

  public isLangActive(lang: string): boolean {
    return this.currentLangSignal() === lang;
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
