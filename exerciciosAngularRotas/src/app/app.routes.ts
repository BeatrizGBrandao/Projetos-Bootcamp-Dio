import { Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

export const routes: Routes = [
    {path:'', component: TitleComponent, pathMatch:'full'}, // P/ URL principal, geralmente configuramos full
    {path:'portfolio', component: CardComponent, children:[
        {path:':id', component: CardComponent},
        {path:':id/:token', component: CardComponent}
    ]}, // Tenho uma página portfolio e outra página porftolio/1 e outra portfolio/1/bea
    // São filhas da rota pai (/portfolio)
    {path:'portfolio/:id', component: CardComponent}, // Quando não utilizo o pathMatch, por Default é prefix
    // O full: Url exata. Prefix: Quero que minha url tenha algo depois
    {path:'**', redirectTo: ''} // "Rota Coringa": ** Qualquer outra coisa. '' De volta para home. 
];
