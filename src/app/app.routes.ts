import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component'; 
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component'; 
import { JugadorComponent } from './pages/jugador/jugador.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    
    {
        path : 'producto',
        component: ProductoComponent
    },
    {
        path: 'libro',
        component: LibroComponent
    },
    {
        path: 'jugador',
        component:JugadorComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path:'**',
        component:HomeComponent
    }
];
