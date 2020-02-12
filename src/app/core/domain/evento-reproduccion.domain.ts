
import { Field } from './generic.domain';
export class EventoReproduccion {
  constructor(
    public eventoReproduccionPK : EventoReproduccionPK, 
    public tipoServicio? : string, 
    public resultadoPalpacion? : string, 
    public observaciones? : string, 
    public tipoDocumento? : string, 
    public numDocumento? : string, 
    public sexoCria? : string, 
    public estadoCria? : string 
  ) { }
}

export class EventoReproduccionMetadata {
  constructor(
  	public idAnimal : Field, 
  	public tipoEvento : Field, 
  	public fechaEvento : Field, 
  	public tipoServicio : Field, 
  	public resultadoPalpacion : Field, 
  	public observaciones : Field, 
  	public tipoDocumento : Field, 
  	public numDocumento : Field, 
  	public sexoCria : Field, 
  	public estadoCria : Field 
  ) { }
}

export class EventoReproduccionDomain {
  private eventoReproduccionMetadata = new EventoReproduccionMetadata(
	  	  new Field('eventoReproduccionPK.idAnimal','idAnimal','number'), 
	  	  new Field('eventoReproduccionPK.tipoEvento','tipoEvento','string'), 
	  	  new Field('eventoReproduccionPK.fechaEvento','fechaEvento','string'), 
	  	  new Field('tipoServicio','tipoServicio','string'), 
	  	  new Field('resultadoPalpacion','resultadoPalpacion','string'), 
	  	  new Field('observaciones','observaciones','string'), 
	  	  new Field('tipoDocumento','tipoDocumento','string'), 
	  	  new Field('numDocumento','numDocumento','string'), 
	  	  new Field('sexoCria','sexoCria','string'), 
	  	  new Field('estadoCria','estadoCria','string') 
      );
  getEventoReproduccionMetadata () : EventoReproduccionMetadata {
    return this.eventoReproduccionMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.eventoReproduccionMetadata.idAnimal);
  	listOfFields.push(this.eventoReproduccionMetadata.tipoEvento);
  	listOfFields.push(this.eventoReproduccionMetadata.fechaEvento);
  	listOfFields.push(this.eventoReproduccionMetadata.tipoServicio);
  	listOfFields.push(this.eventoReproduccionMetadata.resultadoPalpacion);
  	listOfFields.push(this.eventoReproduccionMetadata.observaciones);
  	listOfFields.push(this.eventoReproduccionMetadata.tipoDocumento);
  	listOfFields.push(this.eventoReproduccionMetadata.numDocumento);
  	listOfFields.push(this.eventoReproduccionMetadata.sexoCria);
  	listOfFields.push(this.eventoReproduccionMetadata.estadoCria);
    return listOfFields;
  }
  
  formErrors = {
  	'eventoReproduccionPK': '',	
  	'tipoServicio': '',  	'resultadoPalpacion': '',  	'observaciones': '',  	'tipoDocumento': '',  	'numDocumento': '',  	'sexoCria': '',  	'estadoCria': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'tipoEvento': {
  	  'required': 	'tipoEvento es obligatorio',
  	  'maxlength':	'tipoEvento no puede exceder 3'
  	},  	'fechaEvento': {
  	  'required': 	'fechaEvento es obligatorio',
  	  'maxlength':	'fechaEvento no puede exceder 7'
  	},  	'tipoServicio': {
  	  'required': 	'tipoServicio es obligatorio',
  	  'maxlength':	'tipoServicio no puede exceder 3'
  	},  	'resultadoPalpacion': {
  	  'maxlength':	'resultadoPalpacion no puede exceder 3'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 200'
  	},  	'tipoDocumento': {
  	  'required': 	'tipoDocumento es obligatorio',
  	  'maxlength':	'tipoDocumento no puede exceder 3'
  	},  	'numDocumento': {
  	  'required': 	'numDocumento es obligatorio',
  	  'maxlength':	'numDocumento no puede exceder 20'
  	},  	'sexoCria': {
  	  'maxlength':	'sexoCria no puede exceder 1'
  	},  	'estadoCria': {
  	  'maxlength':	'estadoCria no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class EventoReproduccionPK {
	constructor(
		public idAnimal?: number, 
		public tipoEvento?: string, 
		public fechaEvento?: string 
	){}
}
