
import { Field } from './generic.domain';
export class Lote {
  constructor(
    public lotePK : LotePK, 
    public nombreLote? : string, 
    public estadoLote? : string 
  ) { }
}

export class LoteMetadata {
  constructor(
  	public idLote : Field, 
  	public idHacienda : Field, 
  	public nombreLote : Field, 
  	public estadoLote : Field 
  ) { }
}

export class LoteDomain {
  private loteMetadata = new LoteMetadata(
	  	  new Field('lotePK.idLote','idLote','number'), 
	  	  new Field('lotePK.idHacienda','idHacienda','number'), 
	  	  new Field('nombreLote','nombreLote','string'), 
	  	  new Field('estadoLote','estadoLote','string') 
      );
  getLoteMetadata () : LoteMetadata {
    return this.loteMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.loteMetadata.idLote);
  	listOfFields.push(this.loteMetadata.idHacienda);
  	listOfFields.push(this.loteMetadata.nombreLote);
  	listOfFields.push(this.loteMetadata.estadoLote);
    return listOfFields;
  }
  
  formErrors = {
  	'lotePK': '',	
  	'nombreLote': '',  	'estadoLote': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idLote': {
  	  'required': 	'idLote es obligatorio',
  	  'maxlength':	'idLote no puede exceder 10'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'nombreLote': {
  	  'required': 	'nombreLote es obligatorio',
  	  'maxlength':	'nombreLote no puede exceder 50'
  	},  	'estadoLote': {
  	  'required': 	'estadoLote es obligatorio',
  	  'maxlength':	'estadoLote no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class LotePK {
	constructor(
		public idLote?: number, 
		public idHacienda?: number 
	){}
}
