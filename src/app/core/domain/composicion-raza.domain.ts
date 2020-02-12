
import { Field } from './generic.domain';
export class ComposicionRaza {
  constructor(
    public composicionRazaPK : ComposicionRazaPK, 
    public porcentajeComposicion? : number 
  ) { }
}

export class ComposicionRazaMetadata {
  constructor(
  	public codigoRazaBase : Field, 
  	public codigoRazaCompuesta : Field, 
  	public idHacienda : Field, 
  	public porcentajeComposicion : Field 
  ) { }
}

export class ComposicionRazaDomain {
  private composicionRazaMetadata = new ComposicionRazaMetadata(
	  	  new Field('composicionRazaPK.codigoRazaBase','codigoRazaBase','string'), 
	  	  new Field('composicionRazaPK.codigoRazaCompuesta','codigoRazaCompuesta','string'), 
	  	  new Field('composicionRazaPK.idHacienda','idHacienda','number'), 
	  	  new Field('porcentajeComposicion','porcentajeComposicion','number') 
      );
  getComposicionRazaMetadata () : ComposicionRazaMetadata {
    return this.composicionRazaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.composicionRazaMetadata.codigoRazaBase);
  	listOfFields.push(this.composicionRazaMetadata.codigoRazaCompuesta);
  	listOfFields.push(this.composicionRazaMetadata.idHacienda);
  	listOfFields.push(this.composicionRazaMetadata.porcentajeComposicion);
    return listOfFields;
  }
  
  formErrors = {
  	'composicionRazaPK': '',	
  	'porcentajeComposicion': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'codigoRazaBase': {
  	  'required': 	'codigoRazaBase es obligatorio',
  	  'maxlength':	'codigoRazaBase no puede exceder 3'
  	},  	'codigoRazaCompuesta': {
  	  'required': 	'codigoRazaCompuesta es obligatorio',
  	  'maxlength':	'codigoRazaCompuesta no puede exceder 3'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'porcentajeComposicion': {
  	  'required': 	'porcentajeComposicion es obligatorio',
  	  'maxlength':	'porcentajeComposicion no puede exceder 5'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class ComposicionRazaPK {
	constructor(
		public codigoRazaBase?: string, 
		public codigoRazaCompuesta?: string, 
		public idHacienda?: number 
	){}
}
