
import { Field } from './generic.domain';
export class Rol {
  constructor(
    public idRol? : number, 
    public nombreRol? : string 
  ) { }
}

export class RolMetadata {
  constructor(
  	public idRol : Field, 
  	public nombreRol : Field 
  ) { }
}

export class RolDomain {
  private rolMetadata = new RolMetadata(
  	  	  new Field('idRol','idRol','number'), 
	  	  new Field('nombreRol','nombreRol','string') 
      );
  getRolMetadata () : RolMetadata {
    return this.rolMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.rolMetadata.idRol);
  	listOfFields.push(this.rolMetadata.nombreRol);
    return listOfFields;
  }
  
  formErrors = {
  	'idRol': '',	
  	'nombreRol': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idRol': {
  	  'required': 	'idRol es obligatorio',
  	  'maxlength':	'idRol no puede exceder 10'
  	},  	'nombreRol': {
  	  'required': 	'nombreRol es obligatorio',
  	  'maxlength':	'nombreRol no puede exceder 50'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

