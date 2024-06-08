import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

  images = [
    'assets/img/gestionPaciente1.png',
    'assets/img/gestionPacientes.png',
    'assets/img/gestionPaciente2.png'
  ];

  images1 = [
    'assets/img/abarroteria.png',
    'assets/img/abarroteria2.png',
    'assets/img/abarroteria3.png'
  ];

  images2 = [
    'assets/img/ferreteria.png',
    'assets/img/ferreteria1.png',
    'assets/img/ferreteria3.png'
  ];

}
