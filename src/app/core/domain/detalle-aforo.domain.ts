
import { Field } from './generic.domain';
export class DetalleAforo {
  constructor(
    public detalleAforoPK : DetalleAforoPK, 
    public valorAforo? : number, 
    public submuestras? : number, 
    public porcMuestra? : number, 
    public tipoPasto? : string 
  ) { }
}

export class DetalleAforoMetadata {
  constructor(
  	public idDetalleAforo : Field, 
  	public idPotrero : Field, 
  	public idHacienda : Field, 
  	public idAforo : Field, 
  	public valorAforo : Field, 
  	public submuestras : Field, 
  	public porcMuestra : Field, 
  	public tipoPasto : Field 
  ) { }
}

export class DetalleAforoDomain {
  private detalleAforoMetadata = new DetalleAforoMetadata(
	  	  new Field('detalleAforoPK.idDetalleAforo','idDetalleAforo','number'), 
	  	  new Field('detalleAforoPK.idPotrero','idPotrero','number'), 
	  	  new Field('detalleAforoPK.idHacienda','idHacienda','number'), 
	  	  new Field('detalleAforoPK.idAforo','idAforo','number'), 
	  	  new Field('valorAforo','valorAforo','number'), 
	  	  new Field('submuestras','submuestras','number'), 
	  	  new Field('porcMuestra','porcMuestra','number'), 
	  	  new Field('tipoPasto','tipoPasto','string') 
      );
  getDetalleAforoMetadata () : DetalleAforoMetadata {
    return this.detalleAforoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.detalleAforoMetadata.idDetalleAforo);
  	listOfFields.push(this.detalleAforoMetadata.idPotrero);
  	listOfFields.push(this.detalleAforoMetadata.idHacienda);
  	listOfFields.push(this.detalleAforoMetadata.idAforo);
  	listOfFields.push(this.detalleAforoMetadata.valorAforo);
  	listOfFields.push(this.detalleAforoMetadata.submuestras);
  	listOfFields.push(this.detalleAforoMetadata.porcMuestra);
  	listOfFields.push(this.detalleAforoMetadata.tipoPasto);
    return listOfFields;
  }
  
  formErrors = {
  	'detalleAforoPK': '',	
  	'valorAforo': '',  	'submuestras': '',  	'porcMuestra': '',  	'tipoPasto': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idDetalleAforo': {
  	  'required': 	'idDetalleAforo es obligatorio',
  	  'maxlength':	'idDetalleAforo no puede exceder 10'
  	},  	'idPotrero': {
  	  'required': 	'idPotrero es obligatorio',
  	  'maxlength':	'idPotrero no puede exceder 10'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'idAforo': {
  	  'required': 	'idAforo es obligatorio',
  	  'maxlength':	'idAforo no puede exceder 10'
  	},  	'valorAforo': {
  	  'required': 	'valorAforo es obligatorio',
  	  'maxlength':	'valorAforo no puede exceder 4'
  	},  	'submuestras': {
  	  'required': 	'submuestras es obligatorio',
  	  'maxlength':	'submuestras no puede exceder 5'
  	},  	'porcMuestra': {
  	  'required': 	'porcMuestra es obligatorio',
  	  'maxlength':	'porcMuestra no puede exceder 5'
  	},  	'tipoPasto': {
  	  'required': 	'tipoPasto es obligatorio',
  	  'maxlength':	'tipoPasto no puede exceder 50'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class DetalleAforoPK {
	constructor(
		public idDetalleAforo?: number, 
		public idPotrero?: number, 
		public idHacienda?: number, 
		public idAforo?: number 
	){}
}
