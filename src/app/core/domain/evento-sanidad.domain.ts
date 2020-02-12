
import { Field } from './generic.domain';
export class EventoSanidad {
  constructor(
    public eventoSanidadPK : EventoSanidadPK, 
    public tipoDocumentoVet? : string, 
    public numDocumentoVet? : string, 
    public motivoConsulta? : string, 
    public diagnostico? : string, 
    public tratamiento? : string, 
    public edad? : string 
  ) { }
}

export class EventoSanidadMetadata {
  constructor(
  	public idAnimal : Field, 
  	public eventoSanidad : Field, 
  	public fechaConsulta : Field, 
  	public tipoDocumentoVet : Field, 
  	public numDocumentoVet : Field, 
  	public motivoConsulta : Field, 
  	public diagnostico : Field, 
  	public tratamiento : Field, 
  	public edad : Field 
  ) { }
}

export class EventoSanidadDomain {
  private eventoSanidadMetadata = new EventoSanidadMetadata(
	  	  new Field('eventoSanidadPK.idAnimal','idAnimal','number'), 
	  	  new Field('eventoSanidadPK.eventoSanidad','eventoSanidad','string'), 
	  	  new Field('eventoSanidadPK.fechaConsulta','fechaConsulta','string'), 
	  	  new Field('tipoDocumentoVet','tipoDocumentoVet','string'), 
	  	  new Field('numDocumentoVet','numDocumentoVet','string'), 
	  	  new Field('motivoConsulta','motivoConsulta','string'), 
	  	  new Field('diagnostico','diagnostico','string'), 
	  	  new Field('tratamiento','tratamiento','string'), 
	  	  new Field('edad','edad','string') 
      );
  getEventoSanidadMetadata () : EventoSanidadMetadata {
    return this.eventoSanidadMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.eventoSanidadMetadata.idAnimal);
  	listOfFields.push(this.eventoSanidadMetadata.eventoSanidad);
  	listOfFields.push(this.eventoSanidadMetadata.fechaConsulta);
  	listOfFields.push(this.eventoSanidadMetadata.tipoDocumentoVet);
  	listOfFields.push(this.eventoSanidadMetadata.numDocumentoVet);
  	listOfFields.push(this.eventoSanidadMetadata.motivoConsulta);
  	listOfFields.push(this.eventoSanidadMetadata.diagnostico);
  	listOfFields.push(this.eventoSanidadMetadata.tratamiento);
  	listOfFields.push(this.eventoSanidadMetadata.edad);
    return listOfFields;
  }
  
  formErrors = {
  	'eventoSanidadPK': '',	
  	'tipoDocumentoVet': '',  	'numDocumentoVet': '',  	'motivoConsulta': '',  	'diagnostico': '',  	'tratamiento': '',  	'edad': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'eventoSanidad': {
  	  'required': 	'eventoSanidad es obligatorio',
  	  'maxlength':	'eventoSanidad no puede exceder 5'
  	},  	'fechaConsulta': {
  	  'required': 	'fechaConsulta es obligatorio',
  	  'maxlength':	'fechaConsulta no puede exceder 7'
  	},  	'tipoDocumentoVet': {
  	  'required': 	'tipoDocumentoVet es obligatorio',
  	  'maxlength':	'tipoDocumentoVet no puede exceder 3'
  	},  	'numDocumentoVet': {
  	  'required': 	'numDocumentoVet es obligatorio',
  	  'maxlength':	'numDocumentoVet no puede exceder 20'
  	},  	'motivoConsulta': {
  	  'required': 	'motivoConsulta es obligatorio',
  	  'maxlength':	'motivoConsulta no puede exceder 500'
  	},  	'diagnostico': {
  	  'required': 	'diagnostico es obligatorio',
  	  'maxlength':	'diagnostico no puede exceder 500'
  	},  	'tratamiento': {
  	  'required': 	'tratamiento es obligatorio',
  	  'maxlength':	'tratamiento no puede exceder 500'
  	},  	'edad': {
  	  'required': 	'edad es obligatorio',
  	  'maxlength':	'edad no puede exceder 15'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class EventoSanidadPK {
	constructor(
		public idAnimal?: number, 
		public eventoSanidad?: string, 
		public fechaConsulta?: string 
	){}
}
