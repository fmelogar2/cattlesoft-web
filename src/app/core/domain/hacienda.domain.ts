
import { Field } from './generic.domain';
export class Hacienda {
  constructor(
    public idHacienda? : number, 
    public nombreHacienda? : string, 
    public departamento? : string, 
    public municipio? : string, 
    public vereda? : string, 
    public direccion? : string, 
    public latitud? : number, 
    public longitud? : number, 
    public numCasas? : number, 
    public fechaCreacion? : string, 
    public numBodegas? : number, 
    public numCorrales? : number, 
    public numTerneriles? : number, 
    public tipoOrdenio? : string, 
    public numPuestos? : number 
  ) { }
}

export class HaciendaMetadata {
  constructor(
  	public idHacienda : Field, 
  	public nombreHacienda : Field, 
  	public departamento : Field, 
  	public municipio : Field, 
  	public vereda : Field, 
  	public direccion : Field, 
  	public latitud : Field, 
  	public longitud : Field, 
  	public numCasas : Field, 
  	public fechaCreacion : Field, 
  	public numBodegas : Field, 
  	public numCorrales : Field, 
  	public numTerneriles : Field, 
  	public tipoOrdenio : Field, 
  	public numPuestos : Field 
  ) { }
}

export class HaciendaDomain {
  private haciendaMetadata = new HaciendaMetadata(
  	  	  new Field('idHacienda','idHacienda','number'), 
	  	  new Field('nombreHacienda','nombreHacienda','string'), 
	  	  new Field('departamento','departamento','string'), 
	  	  new Field('municipio','municipio','string'), 
	  	  new Field('vereda','vereda','string'), 
	  	  new Field('direccion','direccion','string'), 
	  	  new Field('latitud','latitud','number'), 
	  	  new Field('longitud','longitud','number'), 
	  	  new Field('numCasas','numCasas','number'), 
	  	  new Field('fechaCreacion','fechaCreacion','string'), 
	  	  new Field('numBodegas','numBodegas','number'), 
	  	  new Field('numCorrales','numCorrales','number'), 
	  	  new Field('numTerneriles','numTerneriles','number'), 
	  	  new Field('tipoOrdenio','tipoOrdenio','string'), 
	  	  new Field('numPuestos','numPuestos','number') 
      );
  getHaciendaMetadata () : HaciendaMetadata {
    return this.haciendaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.haciendaMetadata.idHacienda);
  	listOfFields.push(this.haciendaMetadata.nombreHacienda);
  	listOfFields.push(this.haciendaMetadata.departamento);
  	listOfFields.push(this.haciendaMetadata.municipio);
  	listOfFields.push(this.haciendaMetadata.vereda);
  	listOfFields.push(this.haciendaMetadata.direccion);
  	listOfFields.push(this.haciendaMetadata.latitud);
  	listOfFields.push(this.haciendaMetadata.longitud);
  	listOfFields.push(this.haciendaMetadata.numCasas);
  	listOfFields.push(this.haciendaMetadata.fechaCreacion);
  	listOfFields.push(this.haciendaMetadata.numBodegas);
  	listOfFields.push(this.haciendaMetadata.numCorrales);
  	listOfFields.push(this.haciendaMetadata.numTerneriles);
  	listOfFields.push(this.haciendaMetadata.tipoOrdenio);
  	listOfFields.push(this.haciendaMetadata.numPuestos);
    return listOfFields;
  }
  
  formErrors = {
  	'idHacienda': '',	
  	'nombreHacienda': '',  	'departamento': '',  	'municipio': '',  	'vereda': '',  	'direccion': '',  	'latitud': '',  	'longitud': '',  	'numCasas': '',  	'fechaCreacion': '',  	'numBodegas': '',  	'numCorrales': '',  	'numTerneriles': '',  	'tipoOrdenio': '',  	'numPuestos': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'nombreHacienda': {
  	  'required': 	'nombreHacienda es obligatorio',
  	  'maxlength':	'nombreHacienda no puede exceder 100'
  	},  	'departamento': {
  	  'required': 	'departamento es obligatorio',
  	  'maxlength':	'departamento no puede exceder 50'
  	},  	'municipio': {
  	  'required': 	'municipio es obligatorio',
  	  'maxlength':	'municipio no puede exceder 50'
  	},  	'vereda': {
  	  'maxlength':	'vereda no puede exceder 100'
  	},  	'direccion': {
  	  'required': 	'direccion es obligatorio',
  	  'maxlength':	'direccion no puede exceder 100'
  	},  	'latitud': {
  	  'maxlength':	'latitud no puede exceder 12'
  	},  	'longitud': {
  	  'maxlength':	'longitud no puede exceder 12'
  	},  	'numCasas': {
  	  'maxlength':	'numCasas no puede exceder 5'
  	},  	'fechaCreacion': {
  	  'required': 	'fechaCreacion es obligatorio',
  	  'maxlength':	'fechaCreacion no puede exceder 7'
  	},  	'numBodegas': {
  	  'maxlength':	'numBodegas no puede exceder 5'
  	},  	'numCorrales': {
  	  'maxlength':	'numCorrales no puede exceder 5'
  	},  	'numTerneriles': {
  	  'maxlength':	'numTerneriles no puede exceder 5'
  	},  	'tipoOrdenio': {
  	  'required': 	'tipoOrdenio es obligatorio',
  	  'maxlength':	'tipoOrdenio no puede exceder 3'
  	},  	'numPuestos': {
  	  'maxlength':	'numPuestos no puede exceder 5'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

