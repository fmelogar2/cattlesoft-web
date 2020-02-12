
import { Field } from './generic.domain';
export class Potrero {
  constructor(
    public potreroPK : PotreroPK, 
    public nomPotrero? : string, 
    public extension? : number, 
    public topografia? : string, 
    public estadoCercas? : string, 
    public capacidadCarga? : number, 
    public cargaActual? : number, 
    public arbLeguminosos? : string, 
    public arbOtros? : string, 
    public estadoPotrero? : string 
  ) { }
}

export class PotreroMetadata {
  constructor(
  	public idHacienda : Field, 
  	public idPotrero : Field, 
  	public nomPotrero : Field, 
  	public extension : Field, 
  	public topografia : Field, 
  	public estadoCercas : Field, 
  	public capacidadCarga : Field, 
  	public cargaActual : Field, 
  	public arbLeguminosos : Field, 
  	public arbOtros : Field, 
  	public estadoPotrero : Field 
  ) { }
}

export class PotreroDomain {
  private potreroMetadata = new PotreroMetadata(
	  	  new Field('potreroPK.idHacienda','idHacienda','number'), 
	  	  new Field('potreroPK.idPotrero','idPotrero','number'), 
	  	  new Field('nomPotrero','nomPotrero','string'), 
	  	  new Field('extension','extension','number'), 
	  	  new Field('topografia','topografia','string'), 
	  	  new Field('estadoCercas','estadoCercas','string'), 
	  	  new Field('capacidadCarga','capacidadCarga','number'), 
	  	  new Field('cargaActual','cargaActual','number'), 
	  	  new Field('arbLeguminosos','arbLeguminosos','string'), 
	  	  new Field('arbOtros','arbOtros','string'), 
	  	  new Field('estadoPotrero','estadoPotrero','string') 
      );
  getPotreroMetadata () : PotreroMetadata {
    return this.potreroMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.potreroMetadata.idHacienda);
  	listOfFields.push(this.potreroMetadata.idPotrero);
  	listOfFields.push(this.potreroMetadata.nomPotrero);
  	listOfFields.push(this.potreroMetadata.extension);
  	listOfFields.push(this.potreroMetadata.topografia);
  	listOfFields.push(this.potreroMetadata.estadoCercas);
  	listOfFields.push(this.potreroMetadata.capacidadCarga);
  	listOfFields.push(this.potreroMetadata.cargaActual);
  	listOfFields.push(this.potreroMetadata.arbLeguminosos);
  	listOfFields.push(this.potreroMetadata.arbOtros);
  	listOfFields.push(this.potreroMetadata.estadoPotrero);
    return listOfFields;
  }
  
  formErrors = {
  	'potreroPK': '',	
  	'nomPotrero': '',  	'extension': '',  	'topografia': '',  	'estadoCercas': '',  	'capacidadCarga': '',  	'cargaActual': '',  	'arbLeguminosos': '',  	'arbOtros': '',  	'estadoPotrero': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idHacienda': {
  	  'required': 	'idHacienda es obligatorio',
  	  'maxlength':	'idHacienda no puede exceder 10'
  	},  	'idPotrero': {
  	  'required': 	'idPotrero es obligatorio',
  	  'maxlength':	'idPotrero no puede exceder 10'
  	},  	'nomPotrero': {
  	  'required': 	'nomPotrero es obligatorio',
  	  'maxlength':	'nomPotrero no puede exceder 100'
  	},  	'extension': {
  	  'required': 	'extension es obligatorio',
  	  'maxlength':	'extension no puede exceder 10'
  	},  	'topografia': {
  	  'required': 	'topografia es obligatorio',
  	  'maxlength':	'topografia no puede exceder 3'
  	},  	'estadoCercas': {
  	  'required': 	'estadoCercas es obligatorio',
  	  'maxlength':	'estadoCercas no puede exceder 3'
  	},  	'capacidadCarga': {
  	  'maxlength':	'capacidadCarga no puede exceder 5'
  	},  	'cargaActual': {
  	  'required': 	'cargaActual es obligatorio',
  	  'maxlength':	'cargaActual no puede exceder 5'
  	},  	'arbLeguminosos': {
  	  'maxlength':	'arbLeguminosos no puede exceder 300'
  	},  	'arbOtros': {
  	  'maxlength':	'arbOtros no puede exceder 300'
  	},  	'estadoPotrero': {
  	  'required': 	'estadoPotrero es obligatorio',
  	  'maxlength':	'estadoPotrero no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

export class PotreroPK {
	constructor(
		public idHacienda?: number, 
		public idPotrero?: number 
	){}
}
