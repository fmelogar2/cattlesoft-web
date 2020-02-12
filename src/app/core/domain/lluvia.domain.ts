
import { Field } from './generic.domain';
export class Lluvia {
  constructor(
    public lluviaPK : LluviaPK, 
    public cantidad? : number 
  ) { }
}

export class LluviaMetadata {
  constructor(
  	public idHacienda : Field, 
  	public fecha : Field, 
  	public cantidad : Field 
  ) { }
}

export class LluviaDomain {
  private lluviaMetadata = new LluviaMetadata(
	  	  new Field('lluviaPK.idHacienda','idHacienda','number'), 
	  	  new Field('lluviaPK.fecha','fecha','string'), 
	  	  new Field('cantidad','cantidad','number') 
      );
  getLluviaMetadata () : LluviaMetadata {
    return this.lluviaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.lluviaMetadata.idHacienda);
  	listOfFields.push(this.lluviaMetadata.fecha);
  	listOfFields.push(this.lluviaMetadata.cantidad);
    return listOfFields;
  }
  
  formErrors = {
  	'lluviaPK': '',	
  	'cantidad': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'fecha': {
  	  'required': 	'fecha es obligatorio',
  	  'maxlength':	'fecha no puede exceder 7'
  	},  	'cantidad': {
  	  'required': 	'cantidad es obligatorio',
  	  'maxlength':	'cantidad no puede exceder 4'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class LluviaPK {
	constructor(
		public idHacienda?: number, 
		public fecha?: string 
	){}
}
