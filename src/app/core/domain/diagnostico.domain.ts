
import { Field } from './generic.domain';
export class Diagnostico {
  constructor(
    public diagnosticoPK : DiagnosticoPK 
  ) { }
}

export class DiagnosticoMetadata {
  constructor(
  	public idEnfermedad : Field, 
  	public eventoSanidad : Field, 
  	public fechaConsulta : Field, 
  	public idAnimal : Field 
  ) { }
}

export class DiagnosticoDomain {
  private diagnosticoMetadata = new DiagnosticoMetadata(
	  	  new Field('diagnosticoPK.idEnfermedad','idEnfermedad','number'), 
	  	  new Field('diagnosticoPK.eventoSanidad','eventoSanidad','string'), 
	  	  new Field('diagnosticoPK.fechaConsulta','fechaConsulta','string'), 
	  	  new Field('diagnosticoPK.idAnimal','idAnimal','number') 
      );
  getDiagnosticoMetadata () : DiagnosticoMetadata {
    return this.diagnosticoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.diagnosticoMetadata.idEnfermedad);
  	listOfFields.push(this.diagnosticoMetadata.eventoSanidad);
  	listOfFields.push(this.diagnosticoMetadata.fechaConsulta);
  	listOfFields.push(this.diagnosticoMetadata.idAnimal);
    return listOfFields;
  }
  
  formErrors = {
  	'diagnosticoPK': ''	
  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idEnfermedad': {
  	  'required': 	'idEnfermedad es obligatorio',
  	  'maxlength':	'idEnfermedad no puede exceder 10'
  	},  	'eventoSanidad': {
  	  'required': 	'eventoSanidad es obligatorio',
  	  'maxlength':	'eventoSanidad no puede exceder 5'
  	},  	'fechaConsulta': {
  	  'required': 	'fechaConsulta es obligatorio',
  	  'maxlength':	'fechaConsulta no puede exceder 7'
  	},  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class DiagnosticoPK {
	constructor(
		public idEnfermedad?: number, 
		public eventoSanidad?: string, 
		public fechaConsulta?: string, 
		public idAnimal?: number 
	){}
}
