import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface UsersData {
  dni: string;
  id: number;
  nombre: string;
  apellidos: string;
  centro: string;
  correo: string;
  telefono: string;
  especialidad: string;
  rol: string;
}


@Component({
  selector: 'app-dialog-box-medico',
  templateUrl: './dialog-box-medico.component.html',
  styleUrls: ['./dialog-box-medico.component.css']
})
export class DialogBoxMedicoComponent {

  action: string;
  local_data: any;
  especialidad: string;
  public modeselect;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxMedicoComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.especialidad = this.local_data.especialidad;
	console.log(this.especialidad)
    this.modeselect=this.especialidad;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
