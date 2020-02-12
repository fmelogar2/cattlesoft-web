
import { Field } from './generic.domain';
export class Produccion {
  constructor(
    public produccionPK : ProduccionPK, 
    public tipoProduccion? : string, 
    public fecha? : string, 
    public valorProduccion? : number, 
    public numLactancia? : number, 
    public hora? : string 
  ) { }
}

export class ProduccionMetadata {
  constructor(
  	public idProduccion : Field, 
  	public idAnimal : Field, 
  	public tipoProduccion : Field, 
  	public fecha : Field, 
  	public valorProduccion : Field, 
  	public numLactancia : Field, 
  	public hora : Field 
  ) { }
}

export class ProduccionDomain {
  private produccionMetadata = new ProduccionMetadata(
	  	  new Field('produccionPK.idProduccion','idProduccion','number'), 
	  	  new Field('produccionPK.idAnimal','idAnimal','number'), 
	  	  new Field('tipoProduccion','tipoProduccion','string'), 
	  	  new Field('fecha','fecha','string'), 
	  	  new Field('valorProduccion','valorProduccion','number'), 
	  	  new Field('numLactancia','numLactancia','number'), 
	  	  new Field('hora','hora','string') 
      );
  getProduccionMetadata () : ProduccionMetadata {
    return this.produccionMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.produccionMetadata.idProduccion);
  	listOfFields.push(this.produccionMetadata.idAnimal);
  	listOfFields.push(this.produccionMetadata.tipoProduccion);
  	listOfFields.push(this.produccionMetadata.fecha);
  	listOfFields.push(this.produccionMetadata.valorProduccion);
  	listOfFields.push(this.produccionMetadata.numLactancia);
  	listOfFields.push(this.produccionMetadata.hora);
    return listOfFields;
  }
  
  formErrors = {
  	'produccionPK': '',	
  	'tipoProduccion': '',  	'fecha': '',  	'valorProduccion': '',  	'numLactancia': '',  	'hora': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idProduccion': {
  	  'required': 	'idProduccion es obligatorio',
  	  'maxlength':	'idProduccion no puede exceder 10'
  	},  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'tipoProduccion': {
  	  'required': 	'tipoProduccion es obligatorio',
  	  'maxlength':	'tipoProduccion no puede exceder 3'
  	},  	'fecha': {
  	  'required': 	'fecha es obligatorio',
  	  'maxlength':	'fecha no puede exceder 7'
  	},  	'valorProduccion': {
  	  'required': 	'valorProduccion es obligatorio',
  	  'maxlength':	'valorProduccion no puede exceder 6'
  	},  	'numLactancia': {
  	  'maxlength':	'numLactancia no puede exceder 5'
  	},  	'hora': {
  	  'maxlength':	'hora no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class ProduccionPK {
	constructor(
		public idProduccion?: number, 
		public idAnimal?: number 
	){}
}
