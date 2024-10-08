import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { OpcionesComponent } from '../opciones/opciones.component';
@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
   
    MatBottomSheetModule,
    
    OpcionesComponent

  ],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent {
private barra=inject (MatBottomSheet);
//metodo para crear barra

abrirbarra():void{
  this.barra.open(OpcionesComponent)
}

}


