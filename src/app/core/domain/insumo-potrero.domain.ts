
import { Field } from './generic.domain';
export class InsumoPotrero {
  constructor(
    public idInsumo? : number, 
    public nombreInsumo? : string, 
    public descripcionInsumo? : string, 
    public estado? : string 
  ) { }
}

export class InsumoPotreroMetadata {
  constructor(
  	public idInsumo : Field, 
  	public nombreInsumo : Field, 
  	public descripcionInsumo : Field, 
  	public estado : Field 
  ) { }
}

export class InsumoPotreroDomain {
  private insumoPotreroMetadata = new InsumoPotreroMetadata(
  	  	  new Field('idInsumo','idInsumo','number'), 
	  	  new Field('nombreInsumo','nombreInsumo','string'), 
	  	  new Field('descripcionInsumo','descripcionInsumo','string'), 
	  	  new Field('estado','estado','string') 
      );
  getInsumoPotreroMetadata () : InsumoPotreroMetadata {
    return this.insumoPotreroMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.insumoPotreroMetadata.idInsumo);
  	listOfFields.push(this.insumoPotreroMetadata.nombreInsumo);
  	listOfFields.push(this.insumoPotreroMetadata.descripcionInsumo);
  	listOfFields.push(this.insumoPotreroMetadata.estado);
    return listOfFields;
  }
  
  formErrors = {
  	'idInsumo': '',	
  	'nombreInsumo': '',  	'descripcionInsumo': '',  	'estado': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idInsumo': {
  	  'required': 	'idInsumo es obligatorio',
  	  'maxlength':	'idInsumo no puede exceder 10'
  	},  	'nombreInsumo': {
  	  'maxlength':	'nombreInsumo no puede exceder 100'
  	},  	'descripcionInsumo': {
  	  'maxlength':	'descripcionInsumo no puede exceder 200'
  	},  	'estado': {
  	  'required': 	'estado es obligatorio',
  	  'maxlength':	'estado no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

