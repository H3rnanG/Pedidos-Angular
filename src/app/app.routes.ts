import { Routes } from '@angular/router';
import { IndexUsuarioComponent } from './components/usuario/index-usuario/index-usuario.component';
import { IndexRestauranteComponent } from './components/restaurante/index-restaurante/index-restaurante.component';
import { IndexPedidoComponent } from './components/pedido/index-pedido/index-pedido.component';
import { IndexPlatoComponent } from './components/plato/index-plato/index-plato.component';
import { IndexPlatoPedidoComponent } from './components/platoPedido/index-plato-pedido/index-plato-pedido.component';

export const routes: Routes = [
    {
        path: 'usuarios',
        component: IndexUsuarioComponent
    },
    {
        path: 'restaurantes',
        component: IndexRestauranteComponent
    },
    {
        path: 'pedidos',
        component: IndexPedidoComponent
    },
    {
        path: 'platos',
        component: IndexPlatoComponent
    },
    {
        path: 'platosPedidos',
        component: IndexPlatoPedidoComponent
    }
];
