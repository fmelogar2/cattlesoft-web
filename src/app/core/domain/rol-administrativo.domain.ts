
import { Field } from './generic.domain';
export class RolAdministrativo {
  constructor(
    public rolAdministrativoPK : RolAdministrativoPK, 
    public fechaFinRol? : string 
  ) { }
}

export class RolAdministrativoMetadata {
  constructor(
  	public tipoDocumento : Field, 
  	public numDocumento : Field, 
  	public idHacienda : Field, 
  	public idRol : Field, 
  	public fechaInicioRol : Field, 
  	public fechaFinRol : Field 
  ) { }
}

export class RolAdministrativoDomain {
  private rolAdministrativoMetadata = new RolAdministrativoMetadata(
	  	  new Field('rolAdministrativoPK.tipoDocumento','tipoDocumento','string'), 
	  	  new Field('rolAdministrativoPK.numDocumento','numDocumento','string'), 
	  	  new Field('rolAdministrativoPK.idHacienda','idHacienda','number'), 
	  	  new Field('rolAdministrativoPK.idRol','idRol','number'), 
	  	  new Field('rolAdministrativoPK.fechaInicioRol','fechaInicioRol','string'), 
	  	  new Field('fechaFinRol','fechaFinRol','string') 
      );
  getRolAdministrativoMetadata () : RolAdministrativoMetadata {
    return this.rolAdministrativoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.rolAdministrativoMetadata.tipoDocumento);
  	listOfFields.push(this.rolAdministrativoMetadata.numDocumento);
  	listOfFields.push(this.rolAdministrativoMetadata.idHacienda);
  	listOfFields.push(this.rolAdministrativoMetadata.idRol);
  	listOfFields.push(this.rolAdministrativoMetadata.fechaInicioRol);
  	listOfFields.push(this.rolAdministrativoMetadata.fechaFinRol);
    return listOfFields;
  }
  
  formErrors = {
  	'rolAdministrativoPK': '',	
  	'fechaFinRol': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'tipoDocumento': {
  	  'required': 	'tipoDocumento es obligatorio',
  	  'maxlength':	'tipoDocumento no puede exceder 3'
  	},  	'numDocumento': {
  	  'required': 	'numDocumento es obligatorio',
  	  'maxlength':	'numDocumento no puede exceder 20'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'idRol': {
  	  'required': 	'idRol es obligatorio',
  	  'maxlength':	'idRol no puede exceder 10'
  	},  	'fechaInicioRol': {
  	  'required': 	'fechaInicioRol es obligatorio',
  	  'maxlength':	'fechaInicioRol no puede exceder 7'
  	},  	'fechaFinRol': {
  	  'maxlength':	'fechaFinRol no puede exceder 7'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class RolAdministrativoPK {
	constructor(
		public tipoDocumento?: string, 
		public numDocumento?: string, 
		public idHacienda?: number, 
		public idRol?: number, 
		public fechaInicioRol?: string 
	){}
}
