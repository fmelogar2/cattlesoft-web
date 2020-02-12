
import { Field } from './generic.domain';
export class EventoPotrero {
  constructor(
    public idEventoPortrero? : number, 
    public tipoEvento? : string, 
    public fechaEvento? : string, 
    public observaciones? : string, 
    public idPotrero? : number, 
    public idHacienda? : number 
  ) { }
}

export class EventoPotreroMetadata {
  constructor(
  	public idEventoPortrero : Field, 
  	public tipoEvento : Field, 
  	public fechaEvento : Field, 
  	public observaciones : Field, 
  	public idPotrero : Field, 
  	public idHacienda : Field 
  ) { }
}

export class EventoPotreroDomain {
  private eventoPotreroMetadata = new EventoPotreroMetadata(
  	  	  new Field('idEventoPortrero','idEventoPortrero','number'), 
	  	  new Field('tipoEvento','tipoEvento','string'), 
	  	  new Field('fechaEvento','fechaEvento','string'), 
	  	  new Field('observaciones','observaciones','string'), 
	  	  new Field('idPotrero','idPotrero','number'), 
	  	  new Field('idHacienda','idHacienda','number') 
      );
  getEventoPotreroMetadata () : EventoPotreroMetadata {
    return this.eventoPotreroMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.eventoPotreroMetadata.idEventoPortrero);
  	listOfFields.push(this.eventoPotreroMetadata.tipoEvento);
  	listOfFields.push(this.eventoPotreroMetadata.fechaEvento);
  	listOfFields.push(this.eventoPotreroMetadata.observaciones);
  	listOfFields.push(this.eventoPotreroMetadata.idPotrero);
  	listOfFields.push(this.eventoPotreroMetadata.idHacienda);
    return listOfFields;
  }
  
  formErrors = {
  	'idEventoPortrero': '',	
  	'tipoEvento': '',  	'fechaEvento': '',  	'observaciones': '',  	'idPotrero': '',  	'idHacienda': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idEventoPortrero': {
  	  'required': 	'idEventoPortrero es obligatorio',
  	  'maxlength':	'idEventoPortrero no puede exceder 10'
  	},  	'tipoEvento': {
  	  'required': 	'tipoEvento es obligatorio',
  	  'maxlength':	'tipoEvento no puede exceder 3'
  	},  	'fechaEvento': {
  	  'required': 	'fechaEvento es obligatorio',
  	  'maxlength':	'fechaEvento no puede exceder 7'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 200'
  	},  	'idPotrero': {
  	  'required': 	'idPotrero es obligatorio',
  	  'maxlength':	'idPotrero no puede exceder 10'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

