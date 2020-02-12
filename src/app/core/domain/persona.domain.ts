
import { Field } from './generic.domain';
export class Persona {
  constructor(
    public personaPK : PersonaPK, 
    public nombres? : string, 
    public apellidos? : string, 
    public fechaNacimiento? : string 
  ) { }
}

export class PersonaMetadata {
  constructor(
  	public tipoDocumento : Field, 
  	public numDocumento : Field, 
  	public nombres : Field, 
  	public apellidos : Field, 
  	public fechaNacimiento : Field 
  ) { }
}

export class PersonaDomain {
  private personaMetadata = new PersonaMetadata(
	  	  new Field('personaPK.tipoDocumento','tipoDocumento','string'), 
	  	  new Field('personaPK.numDocumento','numDocumento','string'), 
	  	  new Field('nombres','nombres','string'), 
	  	  new Field('apellidos','apellidos','string'), 
	  	  new Field('fechaNacimiento','fechaNacimiento','string') 
      );
  getPersonaMetadata () : PersonaMetadata {
    return this.personaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.personaMetadata.tipoDocumento);
  	listOfFields.push(this.personaMetadata.numDocumento);
  	listOfFields.push(this.personaMetadata.nombres);
  	listOfFields.push(this.personaMetadata.apellidos);
  	listOfFields.push(this.personaMetadata.fechaNacimiento);
    return listOfFields;
  }
  
  formErrors = {
  	'personaPK': '',	
  	'nombres': '',  	'apellidos': '',  	'fechaNacimiento': ''  };
  
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
  	},  	'nombres': {
  	  'required': 	'nombres es obligatorio',
  	  'maxlength':	'nombres no puede exceder 150'
  	},  	'apellidos': {
  	  'maxlength':	'apellidos no puede exceder 100'
  	},  	'fechaNacimiento': {
  	  'maxlength':	'fechaNacimiento no puede exceder 7'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class PersonaPK {
	constructor(
		public tipoDocumento?: string, 
		public numDocumento?: string 
	){}
}
