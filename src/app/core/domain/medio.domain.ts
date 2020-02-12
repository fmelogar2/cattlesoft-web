
import { Field } from './generic.domain';
export class Medio {
  constructor(
    public medioPK : MedioPK, 
    public medio? : string 
  ) { }
}

export class MedioMetadata {
  constructor(
  	public tipoDocumento : Field, 
  	public numDocumento : Field, 
  	public idMedio : Field, 
  	public medio : Field 
  ) { }
}

export class MedioDomain {
  private medioMetadata = new MedioMetadata(
	  	  new Field('medioPK.tipoDocumento','tipoDocumento','string'), 
	  	  new Field('medioPK.numDocumento','numDocumento','string'), 
	  	  new Field('medioPK.idMedio','idMedio','number'), 
	  	  new Field('medio','medio','string') 
      );
  getMedioMetadata () : MedioMetadata {
    return this.medioMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.medioMetadata.tipoDocumento);
  	listOfFields.push(this.medioMetadata.numDocumento);
  	listOfFields.push(this.medioMetadata.idMedio);
  	listOfFields.push(this.medioMetadata.medio);
    return listOfFields;
  }
  
  formErrors = {
  	'medioPK': '',	
  	'medio': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'tipoDocumento': {
  	  'required': 	'tipoDocumento es obligatorio',
  	  'maxlength':	'tipoDocumento no puede exceder 3'
  	},  	'numDocumento': {
  	  'required': 	'numDocumento es obligatorio',
  	  'maxlength':	'numDocumento no puede exceder 20'
  	},  	'idMedio': {
  	  'required': 	'idMedio es obligatorio',
  	  'maxlength':	'idMedio no puede exceder 10'
  	},  	'medio': {
  	  'required': 	'medio es obligatorio',
  	  'maxlength':	'medio no puede exceder 50'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class MedioPK {
	constructor(
		public tipoDocumento?: string, 
		public numDocumento?: string, 
		public idMedio?: number 
	){}
}
