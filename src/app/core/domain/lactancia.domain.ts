
import { Field } from './generic.domain';
export class Lactancia {
  constructor(
    public numeroLactancia? : number, 
    public idAnimal? : number, 
    public fechaInicio? : string, 
    public fechaFin? : string 
  ) { }
}

export class LactanciaMetadata {
  constructor(
  	public numeroLactancia : Field, 
  	public idAnimal : Field, 
  	public fechaInicio : Field, 
  	public fechaFin : Field 
  ) { }
}

export class LactanciaDomain {
  private lactanciaMetadata = new LactanciaMetadata(
  	  	  new Field('numeroLactancia','numeroLactancia','number'), 
	  	  new Field('idAnimal','idAnimal','number'), 
	  	  new Field('fechaInicio','fechaInicio','string'), 
	  	  new Field('fechaFin','fechaFin','string') 
      );
  getLactanciaMetadata () : LactanciaMetadata {
    return this.lactanciaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.lactanciaMetadata.numeroLactancia);
  	listOfFields.push(this.lactanciaMetadata.idAnimal);
  	listOfFields.push(this.lactanciaMetadata.fechaInicio);
  	listOfFields.push(this.lactanciaMetadata.fechaFin);
    return listOfFields;
  }
  
  formErrors = {
  	'numeroLactancia': '',	
  	'idAnimal': '',  	'fechaInicio': '',  	'fechaFin': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'numeroLactancia': {
  	  'required': 	'numeroLactancia es obligatorio',
  	  'maxlength':	'numeroLactancia no puede exceder 5'
  	},  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'fechaInicio': {
  	  'maxlength':	'fechaInicio no puede exceder 7'
  	},  	'fechaFin': {
  	  'maxlength':	'fechaFin no puede exceder 7'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

