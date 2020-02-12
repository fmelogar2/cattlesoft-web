
import { Field } from './generic.domain';
export class Raza {
  constructor(
    public razaPK : RazaPK, 
    public nombreRaza? : string, 
    public tipoRaza? : string, 
    public propositoRaza? : string, 
    public color? : string 
  ) { }
}

export class RazaMetadata {
  constructor(
  	public codigoRaza : Field, 
  	public idHacienda : Field, 
  	public nombreRaza : Field, 
  	public tipoRaza : Field, 
  	public propositoRaza : Field, 
  	public color : Field 
  ) { }
}

export class RazaDomain {
  private razaMetadata = new RazaMetadata(
	  	  new Field('razaPK.codigoRaza','codigoRaza','string'), 
	  	  new Field('razaPK.idHacienda','idHacienda','number'), 
	  	  new Field('nombreRaza','nombreRaza','string'), 
	  	  new Field('tipoRaza','tipoRaza','string'), 
	  	  new Field('propositoRaza','propositoRaza','string'), 
	  	  new Field('color','color','string') 
      );
  getRazaMetadata () : RazaMetadata {
    return this.razaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.razaMetadata.codigoRaza);
  	listOfFields.push(this.razaMetadata.idHacienda);
  	listOfFields.push(this.razaMetadata.nombreRaza);
  	listOfFields.push(this.razaMetadata.tipoRaza);
  	listOfFields.push(this.razaMetadata.propositoRaza);
  	listOfFields.push(this.razaMetadata.color);
    return listOfFields;
  }
  
  formErrors = {
  	'razaPK': '',	
  	'nombreRaza': '',  	'tipoRaza': '',  	'propositoRaza': '',  	'color': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'codigoRaza': {
  	  'required': 	'codigoRaza es obligatorio',
  	  'maxlength':	'codigoRaza no puede exceder 3'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'nombreRaza': {
  	  'required': 	'nombreRaza es obligatorio',
  	  'maxlength':	'nombreRaza no puede exceder 100'
  	},  	'tipoRaza': {
  	  'required': 	'tipoRaza es obligatorio',
  	  'maxlength':	'tipoRaza no puede exceder 3'
  	},  	'propositoRaza': {
  	  'required': 	'propositoRaza es obligatorio',
  	  'maxlength':	'propositoRaza no puede exceder 3'
  	},  	'color': {
  	  'required': 	'color es obligatorio',
  	  'maxlength':	'color no puede exceder 50'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class RazaPK {
	constructor(
		public codigoRaza?: string, 
		public idHacienda?: number 
	){}
}
