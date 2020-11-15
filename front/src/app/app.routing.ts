// Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";

// Array de rutas o configuracion de las rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = []; // []=>es una cadena vacia para establecerlo como un servicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
