
import { Field } from './generic.domain';
export class Animal {
  constructor(
    public idAnimal? : number, 
    public idHacienda? : number, 
    public numVaca? : string, 
    public numRegistro? : string, 
    public marcaOreja? : string, 
    public marcaHierro? : string, 
    public nombre? : string, 
    public fechaNacimiento? : string, 
    public sexo? : string, 
    public foto? : string, 
    public estadoProduccion? : string, 
    public fechaDescarte? : string, 
    public motivoDescarte? : string, 
    public observaciones? : string, 
    public fechaIngreso? : string, 
    public fincaOrigen? : string, 
    public idAnimalPadre? : number, 
    public codMadre? : string, 
    public nomMadre? : string, 
    public codPadre? : string, 
    public nomPadre? : string, 
    public procedencia? : string, 
    public lactancia? : number, 
    public origenPadre? : string, 
    public estadoAnimal? : string, 
    public estadoReproductivo? : string, 
    public idLote? : number, 
    public idAnimalMadre? : number 
  ) { }
}

export class AnimalMetadata {
  constructor(
  	public idAnimal : Field, 
  	public idHacienda : Field, 
  	public numVaca : Field, 
  	public numRegistro : Field, 
  	public marcaOreja : Field, 
  	public marcaHierro : Field, 
  	public nombre : Field, 
  	public fechaNacimiento : Field, 
  	public sexo : Field, 
  	public foto : Field, 
  	public estadoProduccion : Field, 
  	public fechaDescarte : Field, 
  	public motivoDescarte : Field, 
  	public observaciones : Field, 
  	public fechaIngreso : Field, 
  	public fincaOrigen : Field, 
  	public idAnimalPadre : Field, 
  	public codMadre : Field, 
  	public nomMadre : Field, 
  	public codPadre : Field, 
  	public nomPadre : Field, 
  	public procedencia : Field, 
  	public lactancia : Field, 
  	public origenPadre : Field, 
  	public estadoAnimal : Field, 
  	public estadoReproductivo : Field, 
  	public idLote : Field, 
  	public idAnimalMadre : Field 
  ) { }
}

export class AnimalDomain {
  private animalMetadata = new AnimalMetadata(
  	  	  new Field('idAnimal','idAnimal','number'), 
	  	  new Field('idHacienda','idHacienda','number'), 
	  	  new Field('numVaca','numVaca','string'), 
	  	  new Field('numRegistro','numRegistro','string'), 
	  	  new Field('marcaOreja','marcaOreja','string'), 
	  	  new Field('marcaHierro','marcaHierro','string'), 
	  	  new Field('nombre','nombre','string'), 
	  	  new Field('fechaNacimiento','fechaNacimiento','string'), 
	  	  new Field('sexo','sexo','string'), 
	  	  new Field('foto','foto','string'), 
	  	  new Field('estadoProduccion','estadoProduccion','string'), 
	  	  new Field('fechaDescarte','fechaDescarte','string'), 
	  	  new Field('motivoDescarte','motivoDescarte','string'), 
	  	  new Field('observaciones','observaciones','string'), 
	  	  new Field('fechaIngreso','fechaIngreso','string'), 
	  	  new Field('fincaOrigen','fincaOrigen','string'), 
	  	  new Field('idAnimalPadre','idAnimalPadre','number'), 
	  	  new Field('codMadre','codMadre','string'), 
	  	  new Field('nomMadre','nomMadre','string'), 
	  	  new Field('codPadre','codPadre','string'), 
	  	  new Field('nomPadre','nomPadre','string'), 
	  	  new Field('procedencia','procedencia','string'), 
	  	  new Field('lactancia','lactancia','number'), 
	  	  new Field('origenPadre','origenPadre','string'), 
	  	  new Field('estadoAnimal','estadoAnimal','string'), 
	  	  new Field('estadoReproductivo','estadoReproductivo','string'), 
	  	  new Field('idLote','idLote','number'), 
	  	  new Field('idAnimalMadre','idAnimalMadre','number') 
      );
  getAnimalMetadata () : AnimalMetadata {
    return this.animalMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.animalMetadata.idAnimal);
  	listOfFields.push(this.animalMetadata.idHacienda);
  	listOfFields.push(this.animalMetadata.numVaca);
  	listOfFields.push(this.animalMetadata.numRegistro);
  	listOfFields.push(this.animalMetadata.marcaOreja);
  	listOfFields.push(this.animalMetadata.marcaHierro);
  	listOfFields.push(this.animalMetadata.nombre);
  	listOfFields.push(this.animalMetadata.fechaNacimiento);
  	listOfFields.push(this.animalMetadata.sexo);
  	listOfFields.push(this.animalMetadata.foto);
  	listOfFields.push(this.animalMetadata.estadoProduccion);
  	listOfFields.push(this.animalMetadata.fechaDescarte);
  	listOfFields.push(this.animalMetadata.motivoDescarte);
  	listOfFields.push(this.animalMetadata.observaciones);
  	listOfFields.push(this.animalMetadata.fechaIngreso);
  	listOfFields.push(this.animalMetadata.fincaOrigen);
  	listOfFields.push(this.animalMetadata.idAnimalPadre);
  	listOfFields.push(this.animalMetadata.codMadre);
  	listOfFields.push(this.animalMetadata.nomMadre);
  	listOfFields.push(this.animalMetadata.codPadre);
  	listOfFields.push(this.animalMetadata.nomPadre);
  	listOfFields.push(this.animalMetadata.procedencia);
  	listOfFields.push(this.animalMetadata.lactancia);
  	listOfFields.push(this.animalMetadata.origenPadre);
  	listOfFields.push(this.animalMetadata.estadoAnimal);
  	listOfFields.push(this.animalMetadata.estadoReproductivo);
  	listOfFields.push(this.animalMetadata.idLote);
  	listOfFields.push(this.animalMetadata.idAnimalMadre);
    return listOfFields;
  }
  
  formErrors = {
  	'idAnimal': '',	
  	'idHacienda': '',  	'numVaca': '',  	'numRegistro': '',  	'marcaOreja': '',  	'marcaHierro': '',  	'nombre': '',  	'fechaNacimiento': '',  	'sexo': '',  	'foto': '',  	'estadoProduccion': '',  	'fechaDescarte': '',  	'motivoDescarte': '',  	'observaciones': '',  	'fechaIngreso': '',  	'fincaOrigen': '',  	'idAnimalPadre': '',  	'codMadre': '',  	'nomMadre': '',  	'codPadre': '',  	'nomPadre': '',  	'procedencia': '',  	'lactancia': '',  	'origenPadre': '',  	'estadoAnimal': '',  	'estadoReproductivo': '',  	'idLote': '',  	'idAnimalMadre': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idAnimal': {
  	  'required': 	'idAnimal es obligatorio',
  	  'maxlength':	'idAnimal no puede exceder 10'
  	},  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'numVaca': {
  	  'maxlength':	'numVaca no puede exceder 50'
  	},  	'numRegistro': {
  	  'required': 	'numRegistro es obligatorio',
  	  'maxlength':	'numRegistro no puede exceder 50'
  	},  	'marcaOreja': {
  	  'maxlength':	'marcaOreja no puede exceder 20'
  	},  	'marcaHierro': {
  	  'maxlength':	'marcaHierro no puede exceder 20'
  	},  	'nombre': {
  	  'required': 	'nombre es obligatorio',
  	  'maxlength':	'nombre no puede exceder 100'
  	},  	'fechaNacimiento': {
  	  'required': 	'fechaNacimiento es obligatorio',
  	  'maxlength':	'fechaNacimiento no puede exceder 7'
  	},  	'sexo': {
  	  'required': 	'sexo es obligatorio',
  	  'maxlength':	'sexo no puede exceder 1'
  	},  	'foto': {
  	  'maxlength':	'foto no puede exceder 4000'
  	},  	'estadoProduccion': {
  	  'maxlength':	'estadoProduccion no puede exceder 50'
  	},  	'fechaDescarte': {
  	  'maxlength':	'fechaDescarte no puede exceder 7'
  	},  	'motivoDescarte': {
  	  'maxlength':	'motivoDescarte no puede exceder 3'
  	},  	'observaciones': {
  	  'maxlength':	'observaciones no puede exceder 300'
  	},  	'fechaIngreso': {
  	  'required': 	'fechaIngreso es obligatorio',
  	  'maxlength':	'fechaIngreso no puede exceder 7'
  	},  	'fincaOrigen': {
  	  'maxlength':	'fincaOrigen no puede exceder 100'
  	},  	'idAnimalPadre': {
  	  'maxlength':	'idAnimalPadre no puede exceder 10'
  	},  	'codMadre': {
  	  'maxlength':	'codMadre no puede exceder 50'
  	},  	'nomMadre': {
  	  'maxlength':	'nomMadre no puede exceder 100'
  	},  	'codPadre': {
  	  'maxlength':	'codPadre no puede exceder 50'
  	},  	'nomPadre': {
  	  'maxlength':	'nomPadre no puede exceder 100'
  	},  	'procedencia': {
  	  'required': 	'procedencia es obligatorio',
  	  'maxlength':	'procedencia no puede exceder 100'
  	},  	'lactancia': {
  	  'maxlength':	'lactancia no puede exceder 5'
  	},  	'origenPadre': {
  	  'maxlength':	'origenPadre no puede exceder 3'
  	},  	'estadoAnimal': {
  	  'required': 	'estadoAnimal es obligatorio',
  	  'maxlength':	'estadoAnimal no puede exceder 3'
  	},  	'estadoReproductivo': {
  	  'maxlength':	'estadoReproductivo no puede exceder 3'
  	},  	'idLote': {
  	  'maxlength':	'idLote no puede exceder 10'
  	},  	'idAnimalMadre': {
  	  'maxlength':	'idAnimalMadre no puede exceder 10'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

