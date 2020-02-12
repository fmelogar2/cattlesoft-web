
import { Field } from './generic.domain';
export class TipoMedio {
  constructor(
    public idMedio? : number, 
    public tipoMedio? : string, 
    public subTipo? : string 
  ) { }
}

export class TipoMedioMetadata {
  constructor(
  	public idMedio : Field, 
  	public tipoMedio : Field, 
  	public subTipo : Field 
  ) { }
}

export class TipoMedioDomain {
  private tipoMedioMetadata = new TipoMedioMetadata(
  	  	  new Field('idMedio','idMedio','number'), 
	  	  new Field('tipoMedio','tipoMedio','string'), 
	  	  new Field('subTipo','subTipo','string') 
      );
  getTipoMedioMetadata () : TipoMedioMetadata {
    return this.tipoMedioMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.tipoMedioMetadata.idMedio);
  	listOfFields.push(this.tipoMedioMetadata.tipoMedio);
  	listOfFields.push(this.tipoMedioMetadata.subTipo);
    return listOfFields;
  }
  
  formErrors = {
  	'idMedio': '',	
  	'tipoMedio': '',  	'subTipo': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idMedio': {
  	  'required': 	'idMedio es obligatorio',
  	  'maxlength':	'idMedio no puede exceder 10'
  	},  	'tipoMedio': {
  	  'required': 	'tipoMedio es obligatorio',
  	  'maxlength':	'tipoMedio no puede exceder 150'
  	},  	'subTipo': {
  	  'required': 	'subTipo es obligatorio',
  	  'maxlength':	'subTipo no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

