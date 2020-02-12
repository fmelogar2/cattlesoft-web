
import { Field } from './generic.domain';
export class EventopotInsumo {
  constructor(
    public eventopotInsumoPK : EventopotInsumoPK, 
    public cantidad? : number 
  ) { }
}

export class EventopotInsumoMetadata {
  constructor(
  	public idInsumo : Field, 
  	public idEventoPortrero : Field, 
  	public cantidad : Field 
  ) { }
}

export class EventopotInsumoDomain {
  private eventopotInsumoMetadata = new EventopotInsumoMetadata(
	  	  new Field('eventopotInsumoPK.idInsumo','idInsumo','number'), 
	  	  new Field('eventopotInsumoPK.idEventoPortrero','idEventoPortrero','number'), 
	  	  new Field('cantidad','cantidad','number') 
      );
  getEventopotInsumoMetadata () : EventopotInsumoMetadata {
    return this.eventopotInsumoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.eventopotInsumoMetadata.idInsumo);
  	listOfFields.push(this.eventopotInsumoMetadata.idEventoPortrero);
  	listOfFields.push(this.eventopotInsumoMetadata.cantidad);
    return listOfFields;
  }
  
  formErrors = {
  	'eventopotInsumoPK': '',	
  	'cantidad': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idInsumo': {
  	  'required': 	'idInsumo es obligatorio',
  	  'maxlength':	'idInsumo no puede exceder 10'
  	},  	'idEventoPortrero': {
  	  'required': 	'idEventoPortrero es obligatorio',
  	  'maxlength':	'idEventoPortrero no puede exceder 10'
  	},  	'cantidad': {
  	  'required': 	'cantidad es obligatorio',
  	  'maxlength':	'cantidad no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class EventopotInsumoPK {
	constructor(
		public idInsumo?: number, 
		public idEventoPortrero?: number 
	){}
}
