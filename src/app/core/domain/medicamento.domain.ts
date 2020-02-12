
import { Field } from './generic.domain';
export class Medicamento {
  constructor(
    public idMedicamento? : number, 
    public nombreComercial? : string, 
    public nombreGenerico? : string, 
    public principioActivo? : string, 
    public descripcion? : string, 
    public contraindicaciones? : string, 
    public diasRetiroLeche? : number, 
    public estado? : string 
  ) { }
}

export class MedicamentoMetadata {
  constructor(
  	public idMedicamento : Field, 
  	public nombreComercial : Field, 
  	public nombreGenerico : Field, 
  	public principioActivo : Field, 
  	public descripcion : Field, 
  	public contraindicaciones : Field, 
  	public diasRetiroLeche : Field, 
  	public estado : Field 
  ) { }
}

export class MedicamentoDomain {
  private medicamentoMetadata = new MedicamentoMetadata(
  	  	  new Field('idMedicamento','idMedicamento','number'), 
	  	  new Field('nombreComercial','nombreComercial','string'), 
	  	  new Field('nombreGenerico','nombreGenerico','string'), 
	  	  new Field('principioActivo','principioActivo','string'), 
	  	  new Field('descripcion','descripcion','string'), 
	  	  new Field('contraindicaciones','contraindicaciones','string'), 
	  	  new Field('diasRetiroLeche','diasRetiroLeche','number'), 
	  	  new Field('estado','estado','string') 
      );
  getMedicamentoMetadata () : MedicamentoMetadata {
    return this.medicamentoMetadata;
  }
  getSearchListOfFields () : Field[] {
    let listOfFields : Field[] = new Array<Field>();
  	listOfFields.push(this.medicamentoMetadata.idMedicamento);
  	listOfFields.push(this.medicamentoMetadata.nombreComercial);
  	listOfFields.push(this.medicamentoMetadata.nombreGenerico);
  	listOfFields.push(this.medicamentoMetadata.principioActivo);
  	listOfFields.push(this.medicamentoMetadata.descripcion);
  	listOfFields.push(this.medicamentoMetadata.contraindicaciones);
  	listOfFields.push(this.medicamentoMetadata.diasRetiroLeche);
  	listOfFields.push(this.medicamentoMetadata.estado);
    return listOfFields;
  }
  
  formErrors = {
  	'idMedicamento': '',	
  	'nombreComercial': '',  	'nombreGenerico': '',  	'principioActivo': '',  	'descripcion': '',  	'contraindicaciones': '',  	'diasRetiroLeche': '',  	'estado': ''  };
  
  getFormErrors () {
    return this.formErrors;
  }

  validationMessages = {
  	'idMedicamento': {
  	  'required': 	'idMedicamento es obligatorio',
  	  'maxlength':	'idMedicamento no puede exceder 10'
  	},  	'nombreComercial': {
  	  'required': 	'nombreComercial es obligatorio',
  	  'maxlength':	'nombreComercial no puede exceder 100'
  	},  	'nombreGenerico': {
  	  'required': 	'nombreGenerico es obligatorio',
  	  'maxlength':	'nombreGenerico no puede exceder 100'
  	},  	'principioActivo': {
  	  'required': 	'principioActivo es obligatorio',
  	  'maxlength':	'principioActivo no puede exceder 100'
  	},  	'descripcion': {
  	  'maxlength':	'descripcion no puede exceder 200'
  	},  	'contraindicaciones': {
  	  'required': 	'contraindicaciones es obligatorio',
  	  'maxlength':	'contraindicaciones no puede exceder 200'
  	},  	'diasRetiroLeche': {
  	  'maxlength':	'diasRetiroLeche no puede exceder 5'
  	},  	'estado': {
  	  'required': 	'estado es obligatorio',
  	  'maxlength':	'estado no puede exceder 3'
  	}  	
  };
  
  getValidationMessages () : any {
    return this.validationMessages;
  }
}

