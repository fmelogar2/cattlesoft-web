
import { Field } from './generic.domain';
export class Aforo {
  constructor(
    public aforoPK : AforoPK, 
    public momentoAforo? : string, 
    public fechaAforo? : any, 
    public valorTotal? : number, 
    public promedioPonderado? : number, 
    public observaciones? : string 
  ) { }
}

export class AforoMetadata {
  constructor(
  	public idAforo : Field, 
  	public idPotrero : Field, 
  	public idHacienda : Field, 
  	public momentoAforo : Field, 
  	public fechaAforo : Field, 
  	public valorTotal : Field, 
  	public promedioPonderado : Field, 
  	public observaciones : Field 
  ) { }
}

export class AforoDomain {
  private aforoMetadata = new AforoMetadata(
	  	  new Field('aforoPK.idAforo','idAforo','number'), 
	  	  new Field('aforoPK.idPotrero','idPotrero','number'), 
	  	  new Field('aforoPK.idHacienda','idHacienda','number'), 
	  	  new Field('momentoAforo','momentoAforo','string'), 
	  	  new Field('fechaAforo','fechaAforo','any'), 
	  	  new Field('valorTotal','valorTotal','number'), 
	  	  new Field('promedioPonderado','promedioPonderado','number'), 
	  	  new Field('observaciones','observaciones','string') 
      );
  getAforoMetadata () : AforoMetadata {
    return this.aforoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.aforoMetadata.idAforo);
  	listOfFields.push(this.aforoMetadata.idPotrero);
  	listOfFields.push(this.aforoMetadata.idHacienda);
  	listOfFields.push(this.aforoMetadata.momentoAforo);
  	listOfFields.push(this.aforoMetadata.fechaAforo);
  	listOfFields.push(this.aforoMetadata.valorTotal);
  	listOfFields.push(this.aforoMetadata.promedioPonderado);
  	listOfFields.push(this.aforoMetadata.observaciones);
    return listOfFields;
  }
  
  formErrors = {
  	'aforoPK': '',	
  	'momentoAforo': '',  	'fechaAforo': '',  	'valorTotal': '',  	'promedioPonderado': '',  	'observaciones': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAforo': {
  	  'required': 	'idAforo es obligatorio',
  	  'maxlength':	'idAforo no puede exceder 10'
  	},  	'idPotrero': {
  	  'required': 	'idPotrero es obligatorio',
  	  'maxlength':	'idPotrero no puede exceder 10'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'momentoAforo': {
  	  'required': 	'momentoAforo es obligatorio',
  	  'maxlength':	'momentoAforo no puede exceder 3'
  	},  	'fechaAforo': {
  	  'required': 	'fechaAforo es obligatorio',
  	  'maxlength':	'fechaAforo no puede exceder 7'
  	},  	'valorTotal': {
  	  'maxlength':	'valorTotal no puede exceder 8'
  	},  	'promedioPonderado': {
  	  'maxlength':	'promedioPonderado no puede exceder 8'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 200'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class AforoPK {
	constructor(
		public idAforo?: number, 
		public idPotrero?: number, 
		public idHacienda?: number 
	){}
}
