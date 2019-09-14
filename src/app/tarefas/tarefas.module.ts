import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TarefaService, TarefaConcluidaDirective } from "./shared";
import { ListarTarefaComponent } from "./listar";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CadastrarTarefasComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar";

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TarefaService]
})
export class TarefasModule {}
