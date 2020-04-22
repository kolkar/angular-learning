import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'games'
  },
  {
    path: 'es-2020',
    loadChildren: () =>
      import('./features/es-2020/es-2020.module').then((m) => m.Es2020Module)
  },
  { path: 'games', loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule) },
  {
    path: '**',
    redirectTo: 'games'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
