import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { PedidoAppComponent } from './pedido.app.component';
import { PedidoRoutingModule } from './pedido.route';
import { PedidoService } from './services/pedido.service';



@NgModule({
  declarations: [
    PedidoAppComponent,
    CarrinhoComponent,
    DetalhesComponent,
    ListaComponent,
    RealizarPedidoComponent
  ],
  imports: [
    PedidoRoutingModule,
    CommonModule
  ]
})
export class PedidoModule { }
