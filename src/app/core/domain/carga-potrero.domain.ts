
import { Field } from './generic.domain';
export class CargaPotrero {
  constructor(
    public cargaPotreroPK : CargaPotreroPK, 
    public fechaInicio? : string, 
    public fechaFin? : string 
  ) { }
}

export class CargaPotreroMetadata {
  constructor(
  	public idHacienda : Field, 
  	public idLote : Field, 
  	public idPotrero : Field, 
  	public fechaInicio : Field, 
  	public fechaFin : Field 
  ) { }
}

export class CargaPotreroDomain {
  private cargaPotreroMetadata = new CargaPotreroMetadata(
	  	  new Field('cargaPotreroPK.idHacienda','idHacienda','number'), 
	  	  new Field('cargaPotreroPK.idLote','idLote','number'), 
	  	  new Field('cargaPotreroPK.idPotrero','idPotrero','number'), 
	  	  new Field('fechaInicio','fechaInicio','string'), 
	  	  new Field('fechaFin','fechaFin','string') 
      );
  getCargaPotreroMetadata () : CargaPotreroMetadata {
    return this.cargaPotreroMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.cargaPotreroMetadata.idHacienda);
  	listOfFields.push(this.cargaPotreroMetadata.idLote);
  	listOfFields.push(this.cargaPotreroMetadata.idPotrero);
  	listOfFields.push(this.cargaPotreroMetadata.fechaInicio);
  	listOfFields.push(this.cargaPotreroMetadata.fechaFin);
    return listOfFields;
  }
  
  formErrors = {
  	'cargaPotreroPK': '',	
  	'fechaInicio': '',  	'fechaFin': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'idLote': {
  	  'required': 	'idLote es obligatorio',
  	  'maxlength':	'idLote no puede exceder 10'
  	},  	'idPotrero': {
  	  'required': 	'idPotrero es obligatorio',
  	  'maxlength':	'idPotrero no puede exceder 10'
  	},  	'fechaInicio': {
  	  'required': 	'fechaInicio es obligatorio',
  	  'maxlength':	'fechaInicio no puede exceder 7'
  	},  	'fechaFin': {
  	  'maxlength':	'fechaFin no puede exceder 7'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class CargaPotreroPK {
	constructor(
		public idHacienda?: number, 
		public idLote?: number, 
		public idPotrero?: number 
	){}
}
