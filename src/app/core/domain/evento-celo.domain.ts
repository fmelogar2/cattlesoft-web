
import { Field } from './generic.domain';
export class EventoCelo {
  constructor(
    public eventoCeloPK : EventoCeloPK, 
    public codToro? : string, 
    public nombreToro? : string, 
    public observaciones? : string, 
    public tipoServicioDonacion? : string, 
    public idAnimalDonador? : number, 
    public fechaEventoDonacion? : string, 
    public tipoEventoDonacion? : string, 
    public idPajilla? : number, 
    public idAnimalMontaDirecta? : number 
  ) { }
}

export class EventoCeloMetadata {
  constructor(
  	public idAnimal : Field, 
  	public fechaEvento : Field, 
  	public tipoEvento : Field, 
  	public tipoServicio : Field, 
  	public codToro : Field, 
  	public nombreToro : Field, 
  	public observaciones : Field, 
  	public tipoServicioDonacion : Field, 
  	public idAnimalDonador : Field, 
  	public fechaEventoDonacion : Field, 
  	public tipoEventoDonacion : Field, 
  	public idPajilla : Field, 
  	public idAnimalMontaDirecta : Field 
  ) { }
}

export class EventoCeloDomain {
  private eventoCeloMetadata = new EventoCeloMetadata(
	  	  new Field('eventoCeloPK.idAnimal','idAnimal','number'), 
	  	  new Field('eventoCeloPK.fechaEvento','fechaEvento','string'), 
	  	  new Field('eventoCeloPK.tipoEvento','tipoEvento','string'), 
	  	  new Field('eventoCeloPK.tipoServicio','tipoServicio','string'), 
	  	  new Field('codToro','codToro','string'), 
	  	  new Field('nombreToro','nombreToro','string'), 
	  	  new Field('observaciones','observaciones','string'), 
	  	  new Field('tipoServicioDonacion','tipoServicioDonacion','string'), 
	  	  new Field('idAnimalDonador','idAnimalDonador','number'), 
	  	  new Field('fechaEventoDonacion','fechaEventoDonacion','string'), 
	  	  new Field('tipoEventoDonacion','tipoEventoDonacion','string'), 
	  	  new Field('idPajilla','idPajilla','number'), 
	  	  new Field('idAnimalMontaDirecta','idAnimalMontaDirecta','number') 
      );
  getEventoCeloMetadata () : EventoCeloMetadata {
    return this.eventoCeloMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.eventoCeloMetadata.idAnimal);
  	listOfFields.push(this.eventoCeloMetadata.fechaEvento);
  	listOfFields.push(this.eventoCeloMetadata.tipoEvento);
  	listOfFields.push(this.eventoCeloMetadata.tipoServicio);
  	listOfFields.push(this.eventoCeloMetadata.codToro);
  	listOfFields.push(this.eventoCeloMetadata.nombreToro);
  	listOfFields.push(this.eventoCeloMetadata.observaciones);
  	listOfFields.push(this.eventoCeloMetadata.tipoServicioDonacion);
  	listOfFields.push(this.eventoCeloMetadata.idAnimalDonador);
  	listOfFields.push(this.eventoCeloMetadata.fechaEventoDonacion);
  	listOfFields.push(this.eventoCeloMetadata.tipoEventoDonacion);
  	listOfFields.push(this.eventoCeloMetadata.idPajilla);
  	listOfFields.push(this.eventoCeloMetadata.idAnimalMontaDirecta);
    return listOfFields;
  }
  
  formErrors = {
  	'eventoCeloPK': '',	
  	'codToro': '',  	'nombreToro': '',  	'observaciones': '',  	'tipoServicioDonacion': '',  	'idAnimalDonador': '',  	'fechaEventoDonacion': '',  	'tipoEventoDonacion': '',  	'idPajilla': '',  	'idAnimalMontaDirecta': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'fechaEvento': {
  	  'required': 	'fechaEvento es obligatorio',
  	  'maxlength':	'fechaEvento no puede exceder 7'
  	},  	'tipoEvento': {
  	  'required': 	'tipoEvento es obligatorio',
  	  'maxlength':	'tipoEvento no puede exceder 3'
  	},  	'tipoServicio': {
  	  'required': 	'tipoServicio es obligatorio',
  	  'maxlength':	'tipoServicio no puede exceder 3'
  	},  	'codToro': {
  	  'maxlength':	'codToro no puede exceder 30'
  	},  	'nombreToro': {
  	  'maxlength':	'nombreToro no puede exceder 30'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 300'
  	},  	'tipoServicioDonacion': {
  	  'maxlength':	'tipoServicioDonacion no puede exceder 3'
  	},  	'idAnimalDonador': {
  	  'maxlength':	'idAnimalDonador no puede exceder 10'
  	},  	'fechaEventoDonacion': {
  	  'maxlength':	'fechaEventoDonacion no puede exceder 7'
  	},  	'tipoEventoDonacion': {
  	  'maxlength':	'tipoEventoDonacion no puede exceder 3'
  	},  	'idPajilla': {
  	  'maxlength':	'idPajilla no puede exceder 10'
  	},  	'idAnimalMontaDirecta': {
  	  'maxlength':	'idAnimalMontaDirecta no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class EventoCeloPK {
	constructor(
		public idAnimal?: number, 
		public fechaEvento?: string, 
		public tipoEvento?: string, 
		public tipoServicio?: string 
	){}
}
