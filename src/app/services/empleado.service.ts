import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Heyleen Arango Rincon', correo: 'lmartines@gmail.com', telefono: 669086936,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Eliana Rincon', correo: 'lmartines@gmail.com', telefono: 669086936,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Hernan Arango Cortes', correo: 'lmartines@gmail.com', telefono: 669086936,
      sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Ashley Ximena Rizo Rincon', correo: 'lmartines@gmail.com', telefono: 669086936,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Ian Arango Rincon', correo: 'lmartines@gmail.com', telefono: 669086936,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    }
  ];

  constructor() { }

  //Con este metodo devolvemos todo el arrays de empleados
  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1)
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto
    this.listEmpleado[idEmpleado].correo = empleado.correo
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso
    this.listEmpleado[idEmpleado].telefono = empleado.telefono
    this.listEmpleado[idEmpleado].sexo = empleado.sexo
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil
  }
}
