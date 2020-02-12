
import { Field } from './generic.domain';
export class Dominio {
  constructor(
    public dominioPK : DominioPK, 
    public descripcion? : string 
  ) { }
}

export class DominioMetadata {
  constructor(
  	public dominio : Field, 
  	public valor : Field, 
  	public descripcion : Field 
  ) { }
}

export class DominioDomain {
  private dominioMetadata = new DominioMetadata(
	  	  new Field('dominioPK.dominio','dominio','string'), 
	  	  new Field('dominioPK.valor','valor','string'), 
	  	  new Field('descripcion','descripcion','string') 
      );
  getDominioMetadata () : DominioMetadata {
    return this.dominioMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.dominioMetadata.dominio);
  	listOfFields.push(this.dominioMetadata.valor);
  	listOfFields.push(this.dominioMetadata.descripcion);
    return listOfFields;
  }
  
  formErrors = {
  	'dominioPK': '',	
  	'descripcion': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'dominio': {
  	  'required': 	'dominio es obligatorio',
  	  'maxlength':	'dominio no puede exceder 50'
  	},  	'valor': {
  	  'required': 	'valor es obligatorio',
  	  'maxlength':	'valor no puede exceder 50'
  	},  	'descripcion': {
  	  'maxlength':	'descripcion no puede exceder 200'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class DominioPK {
	constructor(
		public dominio?: string, 
		public valor?: string 
	){}
}
