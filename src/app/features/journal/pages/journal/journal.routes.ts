import { Routes } from '@angular/router';
import { authGuard } from '../../../../core/guards/auth.guard';
import { JournalComponent } from './journal.component';

export const JOURNAL_ROUTES: Routes = [
  { path: '', component: JournalComponent, canActivate: [authGuard]

 }
];