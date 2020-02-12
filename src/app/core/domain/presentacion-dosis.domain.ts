
import { Field } from './generic.domain';
export class PresentacionDosis {
  constructor(
    public presentacionDosisPK : PresentacionDosisPK, 
    public descripcion? : string 
  ) { }
}

export class PresentacionDosisMetadata {
  constructor(
  	public idMedicamento : Field, 
  	public idPresentacion : Field, 
  	public descripcion : Field 
  ) { }
}

export class PresentacionDosisDomain {
  private presentacionDosisMetadata = new PresentacionDosisMetadata(
	  	  new Field('presentacionDosisPK.idMedicamento','idMedicamento','number'), 
	  	  new Field('presentacionDosisPK.idPresentacion','idPresentacion','number'), 
	  	  new Field('descripcion','descripcion','string') 
      );
  getPresentacionDosisMetadata () : PresentacionDosisMetadata {
    return this.presentacionDosisMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.presentacionDosisMetadata.idMedicamento);
  	listOfFields.push(this.presentacionDosisMetadata.idPresentacion);
  	listOfFields.push(this.presentacionDosisMetadata.descripcion);
    return listOfFields;
  }
  
  formErrors = {
  	'presentacionDosisPK': '',	
  	'descripcion': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idMedicamento': {
  	  'required': 	'idMedicamento es obligatorio',
  	  'maxlength':	'idMedicamento no puede exceder 10'
  	},  	'idPresentacion': {
  	  'required': 	'idPresentacion es obligatorio',
  	  'maxlength':	'idPresentacion no puede exceder 10'
  	},  	'descripcion': {
  	  'required': 	'descripcion es obligatorio',
  	  'maxlength':	'descripcion no puede exceder 200'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class PresentacionDosisPK {
	constructor(
		public idMedicamento?: number, 
		public idPresentacion?: number 
	){}
}
