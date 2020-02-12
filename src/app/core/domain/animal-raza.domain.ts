
import { Field } from './generic.domain';
export class AnimalRaza {
  constructor(
    public animalRazaPK : AnimalRazaPK, 
    public porcentajeRaza? : number 
  ) { }
}

export class AnimalRazaMetadata {
  constructor(
  	public idAnimal : Field, 
  	public codigoRaza : Field, 
  	public idHacienda : Field, 
  	public porcentajeRaza : Field 
  ) { }
}

export class AnimalRazaDomain {
  private animalRazaMetadata = new AnimalRazaMetadata(
	  	  new Field('animalRazaPK.idAnimal','idAnimal','number'), 
	  	  new Field('animalRazaPK.codigoRaza','codigoRaza','string'), 
	  	  new Field('animalRazaPK.idHacienda','idHacienda','number'), 
	  	  new Field('porcentajeRaza','porcentajeRaza','number') 
      );
  getAnimalRazaMetadata () : AnimalRazaMetadata {
    return this.animalRazaMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.animalRazaMetadata.idAnimal);
  	listOfFields.push(this.animalRazaMetadata.codigoRaza);
  	listOfFields.push(this.animalRazaMetadata.idHacienda);
  	listOfFields.push(this.animalRazaMetadata.porcentajeRaza);
    return listOfFields;
  }
  
  formErrors = {
  	'animalRazaPK': '',	
  	'porcentajeRaza': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'codigoRaza': {
  	  'required': 	'codigoRaza es obligatorio',
  	  'maxlength':	'codigoRaza no puede exceder 3'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'porcentajeRaza': {
  	  'required': 	'porcentajeRaza es obligatorio',
  	  'maxlength':	'porcentajeRaza no puede exceder 5'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class AnimalRazaPK {
	constructor(
		public idAnimal?: number, 
		public codigoRaza?: string, 
		public idHacienda?: number 
	){}
}
