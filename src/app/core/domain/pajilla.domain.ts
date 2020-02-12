
import { Field } from './generic.domain';
export class Pajilla {
  constructor(
    public idPajilla? : number, 
    public idHaciendaRaza? : number, 
    public codigoRaza? : string, 
    public numToro? : string, 
    public nombreToro? : string, 
    public estado? : string 
  ) { }
}

export class PajillaMetadata {
  constructor(
  	public idPajilla : Field, 
  	public idHaciendaRaza : Field, 
  	public codigoRaza : Field, 
  	public numToro : Field, 
  	public nombreToro : Field, 
  	public estado : Field 
  ) { }
}

export class PajillaDomain {
  private pajillaMetadata = new PajillaMetadata(
  	  	  new Field('idPajilla','idPajilla','number'), 
	  	  new Field('idHaciendaRaza','idHaciendaRaza','number'), 
	  	  new Field('codigoRaza','codigoRaza','string'), 
	  	  new Field('numToro','numToro','string'), 
	  	  new Field('nombreToro','nombreToro','string'), 
	  	  new Field('estado','estado','string') 
      );
  getPajillaMetadata () : PajillaMetadata {
    return this.pajillaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.pajillaMetadata.idPajilla);
  	listOfFields.push(this.pajillaMetadata.idHaciendaRaza);
  	listOfFields.push(this.pajillaMetadata.codigoRaza);
  	listOfFields.push(this.pajillaMetadata.numToro);
  	listOfFields.push(this.pajillaMetadata.nombreToro);
  	listOfFields.push(this.pajillaMetadata.estado);
    return listOfFields;
  }
  
  formErrors = {
  	'idPajilla': '',	
  	'idHaciendaRaza': '',  	'codigoRaza': '',  	'numToro': '',  	'nombreToro': '',  	'estado': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idPajilla': {
  	  'required': 	'idPajilla es obligatorio',
  	  'maxlength':	'idPajilla no puede exceder 10'
  	},  	'idHaciendaRaza': {
  	  'required': 	'idHaciendaRaza es obligatorio',
  	  'maxlength':	'idHaciendaRaza no puede exceder 10'
  	},  	'codigoRaza': {
  	  'required': 	'codigoRaza es obligatorio',
  	  'maxlength':	'codigoRaza no puede exceder 3'
  	},  	'numToro': {
  	  'required': 	'numToro es obligatorio',
  	  'maxlength':	'numToro no puede exceder 20'
  	},  	'nombreToro': {
  	  'required': 	'nombreToro es obligatorio',
  	  'maxlength':	'nombreToro no puede exceder 50'
  	},  	'estado': {
  	  'required': 	'estado es obligatorio',
  	  'maxlength':	'estado no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

