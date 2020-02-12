
import { Field } from './generic.domain';
export class ChequeoMastitis {
  constructor(
    public chequeoMastitisPK : ChequeoMastitisPK, 
    public cuartoDelDer? : string, 
    public cuartoDelIzq? : string, 
    public cuartoTraDer? : string, 
    public cuartoTraIzq? : string, 
    public observaciones? : string 
  ) { }
}

export class ChequeoMastitisMetadata {
  constructor(
  	public idAnimal : Field, 
  	public fechaChequeo : Field, 
  	public cuartoDelDer : Field, 
  	public cuartoDelIzq : Field, 
  	public cuartoTraDer : Field, 
  	public cuartoTraIzq : Field, 
  	public observaciones : Field 
  ) { }
}

export class ChequeoMastitisDomain {
  private chequeoMastitisMetadata = new ChequeoMastitisMetadata(
	  	  new Field('chequeoMastitisPK.idAnimal','idAnimal','number'), 
	  	  new Field('chequeoMastitisPK.fechaChequeo','fechaChequeo','string'), 
	  	  new Field('cuartoDelDer','cuartoDelDer','string'), 
	  	  new Field('cuartoDelIzq','cuartoDelIzq','string'), 
	  	  new Field('cuartoTraDer','cuartoTraDer','string'), 
	  	  new Field('cuartoTraIzq','cuartoTraIzq','string'), 
	  	  new Field('observaciones','observaciones','string') 
      );
  getChequeoMastitisMetadata () : ChequeoMastitisMetadata {
    return this.chequeoMastitisMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.chequeoMastitisMetadata.idAnimal);
  	listOfFields.push(this.chequeoMastitisMetadata.fechaChequeo);
  	listOfFields.push(this.chequeoMastitisMetadata.cuartoDelDer);
  	listOfFields.push(this.chequeoMastitisMetadata.cuartoDelIzq);
  	listOfFields.push(this.chequeoMastitisMetadata.cuartoTraDer);
  	listOfFields.push(this.chequeoMastitisMetadata.cuartoTraIzq);
  	listOfFields.push(this.chequeoMastitisMetadata.observaciones);
    return listOfFields;
  }
  
  formErrors = {
  	'chequeoMastitisPK': '',	
  	'cuartoDelDer': '',  	'cuartoDelIzq': '',  	'cuartoTraDer': '',  	'cuartoTraIzq': '',  	'observaciones': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'fechaChequeo': {
  	  'required': 	'fechaChequeo es obligatorio',
  	  'maxlength':	'fechaChequeo no puede exceder 7'
  	},  	'cuartoDelDer': {
  	  'required': 	'cuartoDelDer es obligatorio',
  	  'maxlength':	'cuartoDelDer no puede exceder 1'
  	},  	'cuartoDelIzq': {
  	  'required': 	'cuartoDelIzq es obligatorio',
  	  'maxlength':	'cuartoDelIzq no puede exceder 1'
  	},  	'cuartoTraDer': {
  	  'required': 	'cuartoTraDer es obligatorio',
  	  'maxlength':	'cuartoTraDer no puede exceder 1'
  	},  	'cuartoTraIzq': {
  	  'required': 	'cuartoTraIzq es obligatorio',
  	  'maxlength':	'cuartoTraIzq no puede exceder 1'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 200'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class ChequeoMastitisPK {
	constructor(
		public idAnimal?: number, 
		public fechaChequeo?: string 
	){}
}
