import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-index-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index-usuario.component.html',
  styleUrl: './index-usuario.component.css'
})
export class IndexUsuarioComponent implements OnInit{

  data: Usuario[] = [];
  response: any[] = [];

  constructor(private usuarioService:UsuarioService){}

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios(){
    this.usuarioService.getAllClientes().subscribe(data => {
      this.data = data;
    })
  }

  deleteUsuario(id: string){
    this.usuarioService.deleteCliente(id).subscribe(response => {
      console.log(response);
      // Puedes hacer algo con la respuesta si es necesario
      this.getAllUsuarios(); // Actualiza la lista después de eliminar un usuario
    });
  }

}
