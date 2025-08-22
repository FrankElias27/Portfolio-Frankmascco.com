import { Routes } from '@angular/router';
import { CertificatesPageComponent } from './pages/certificates-page/certificates-page.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent, ProjectDetailsPageComponent } from './pages';

export const routes: Routes = [
   { path: '', component: HomePageComponent },
    { path: 'projects/:id', component: ProjectDetailsPageComponent },
    { path: 'certificates', component: CertificatesPageComponent },
    { path: 'cv', component: CvPageComponent },
    { path: '**', component: ErrorPageComponent }

];
