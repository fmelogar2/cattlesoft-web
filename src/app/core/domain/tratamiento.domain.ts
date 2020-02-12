
import { Field } from './generic.domain';
export class Tratamiento {
  constructor(
    public tratamientoPK : TratamientoPK 
  ) { }
}

export class TratamientoMetadata {
  constructor(
  	public eventoSanidad : Field, 
  	public fechaConsulta : Field, 
  	public idMedicamento : Field, 
  	public idAnimal : Field, 
  	public idPresentacion : Field 
  ) { }
}

export class TratamientoDomain {
  private tratamientoMetadata = new TratamientoMetadata(
	  	  new Field('tratamientoPK.eventoSanidad','eventoSanidad','string'), 
	  	  new Field('tratamientoPK.fechaConsulta','fechaConsulta','string'), 
	  	  new Field('tratamientoPK.idMedicamento','idMedicamento','number'), 
	  	  new Field('tratamientoPK.idAnimal','idAnimal','number'), 
	  	  new Field('tratamientoPK.idPresentacion','idPresentacion','number') 
      );
  getTratamientoMetadata () : TratamientoMetadata {
    return this.tratamientoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.tratamientoMetadata.eventoSanidad);
  	listOfFields.push(this.tratamientoMetadata.fechaConsulta);
  	listOfFields.push(this.tratamientoMetadata.idMedicamento);
  	listOfFields.push(this.tratamientoMetadata.idAnimal);
  	listOfFields.push(this.tratamientoMetadata.idPresentacion);
    return listOfFields;
  }
  
  formErrors = {
  	'tratamientoPK': ''	
  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'eventoSanidad': {
  	  'required': 	'eventoSanidad es obligatorio',
  	  'maxlength':	'eventoSanidad no puede exceder 5'
  	},  	'fechaConsulta': {
  	  'required': 	'fechaConsulta es obligatorio',
  	  'maxlength':	'fechaConsulta no puede exceder 7'
  	},  	'idMedicamento': {
  	  'required': 	'idMedicamento es obligatorio',
  	  'maxlength':	'idMedicamento no puede exceder 10'
  	},  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'idPresentacion': {
  	  'required': 	'idPresentacion es obligatorio',
  	  'maxlength':	'idPresentacion no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class TratamientoPK {
	constructor(
		public eventoSanidad?: string, 
		public fechaConsulta?: string, 
		public idMedicamento?: number, 
		public idAnimal?: number, 
		public idPresentacion?: number 
	){}
}
