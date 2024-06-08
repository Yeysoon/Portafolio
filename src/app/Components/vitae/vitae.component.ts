import { Component } from '@angular/core';

@Component({
  selector: 'app-vitae',
  templateUrl: './vitae.component.html',
  styleUrl: './vitae.component.css'
})
export class VitaeComponent {

  downloadPDF() {
    const fileName = 'assets/Curriculum-Vitae-Yeysoon.pdf'; // Nombre del archivo PDF en tu carpeta de assets
    const filePath = `assets/${fileName}`; // Ruta del archivo PDF

    // Crea un enlace temporal
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', filePath);
    link.setAttribute('download', fileName);

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpia el enlace temporal
    document.body.removeChild(link);
  }


}
