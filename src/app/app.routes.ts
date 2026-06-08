import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'courses',
        loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent)
      },
      {
        path: 'travel-agency',
        loadComponent: () => import('./pages/travel-agency/travel-agency.component').then(m => m.TravelAgencyComponent)
      },
      {
        path: 'ecl-exam',
        loadComponent: () => import('./pages/ecl-exam/ecl-exam.component').then(m => m.EclExamComponent)
      },
      {
        path: 'centers',
        loadComponent: () => import('./pages/centers/centers.component').then(m => m.CentersComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
      },
      {
        path: 'news',
        loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'course-registrations',
        loadComponent: () => import('./admin/course-registrations/course-registrations.component').then(m => m.CourseRegistrationsComponent)
      },
      {
        path: 'ecl-registrations',
        loadComponent: () => import('./admin/ecl-registrations/ecl-registrations.component').then(m => m.EclRegistrationsComponent)
      },
      {
        path: 'news-management',
        loadComponent: () => import('./admin/news-management/news-management.component').then(m => m.NewsManagementComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
