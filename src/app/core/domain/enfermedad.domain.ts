
import { Field } from './generic.domain';
export class Enfermedad {
  constructor(
    public idEnfermedad? : number, 
    public codigoEnfermedad? : string, 
    public descripcion? : string 
  ) { }
}

export class EnfermedadMetadata {
  constructor(
  	public idEnfermedad : Field, 
  	public codigoEnfermedad : Field, 
  	public descripcion : Field 
  ) { }
}

export class EnfermedadDomain {
  private enfermedadMetadata = new EnfermedadMetadata(
  	  	  new Field('idEnfermedad','idEnfermedad','number'), 
	  	  new Field('codigoEnfermedad','codigoEnfermedad','string'), 
	  	  new Field('descripcion','descripcion','string') 
      );
  getEnfermedadMetadata () : EnfermedadMetadata {
    return this.enfermedadMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.enfermedadMetadata.idEnfermedad);
  	listOfFields.push(this.enfermedadMetadata.codigoEnfermedad);
  	listOfFields.push(this.enfermedadMetadata.descripcion);
    return listOfFields;
  }
  
  formErrors = {
  	'idEnfermedad': '',	
  	'codigoEnfermedad': '',  	'descripcion': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idEnfermedad': {
  	  'required': 	'idEnfermedad es obligatorio',
  	  'maxlength':	'idEnfermedad no puede exceder 10'
  	},  	'codigoEnfermedad': {
  	  'required': 	'codigoEnfermedad es obligatorio',
  	  'maxlength':	'codigoEnfermedad no puede exceder 10'
  	},  	'descripcion': {
  	  'required': 	'descripcion es obligatorio',
  	  'maxlength':	'descripcion no puede exceder 100'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

