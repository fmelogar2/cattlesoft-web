import { Injectable } from '@angular/core';
import { UriControl } from '../domain/generic.domain';
import { AppSettings } from '../../app.settings';

@Injectable()
export class UriProvider {
  private host: string = AppSettings.API_ENDPOINT;
  
  getUri(control: UriControl): string {
    let provider = this.getProvider(control.serviceProvider);
    let uri = this.host + provider;
    if (control.pathParameters != null) {
      let path = this.getPathParams(control.pathParameters);
      uri = uri + path;
    }
    if (control.queryParameters != null) {
      let query = this.getQueryParams(control.queryParameters);
      uri = uri + query;
    }
    return uri;
  }

  private getProvider (serviceProvider : string): string {
    switch ( serviceProvider ) {
      case 'Aforo':
        return 'servicios/aforo';
      case 'Animal':
        return 'servicios/animal';
      case 'AnimalRaza':
        return 'servicios/animalraza';
      case 'CargaPotrero':
        return 'servicios/cargapotrero';
      case 'ChequeoMastitis':
        return 'servicios/chequeomastitis';
      case 'ComposicionRaza':
        return 'servicios/composicionraza';
      case 'DetalleAforo':
        return 'servicios/detalleaforo';
      case 'Diagnostico':
        return 'servicios/diagnostico';
      case 'Dominio':
        return 'servicios/dominio';
      case 'Enfermedad':
        return 'servicios/enfermedad';
      case 'EventoCelo':
        return 'servicios/eventocelo';
      case 'EventopotInsumo':
        return 'servicios/eventopotinsumo';
      case 'EventoPotrero':
        return 'servicios/eventopotrero';
      case 'EventoReproduccion':
        return 'servicios/eventoreproduccion';
      case 'EventoSanidad':
        return 'servicios/eventosanidad';
      case 'Hacienda':
        return 'servicios/hacienda';
      case 'InsumoPotrero':
        return 'servicios/insumopotrero';
      case 'Lactancia':
        return 'servicios/lactancia';
      case 'Lluvia':
        return 'servicios/lluvia';
      case 'Lote':
        return 'servicios/lote';
      case 'Medicamento':
        return 'servicios/medicamento';
      case 'Medio':
        return 'servicios/medio';
      case 'Pajilla':
        return 'servicios/pajilla';
      case 'Persona':
        return 'servicios/persona';
      case 'Potrero':
        return 'servicios/potrero';
      case 'PresentacionDosis':
        return 'servicios/presentaciondosis';
      case 'Produccion':
        return 'servicios/produccion';
      case 'Raza':
        return 'servicios/raza';
      case 'Rol':
        return 'servicios/rol';
      case 'RolAdministrativo':
        return 'servicios/roladministrativo';
      case 'TipoMedio':
        return 'servicios/tipomedio';
      case 'Tratamiento':
        return 'servicios/tratamiento';
      case 'Login':
        return '/Login';
      default:
        return '';
    }
  }

  private getPathParams (pathParams : [number, string][]): string {
    var paramResponse = '';
    for (let param of pathParams) {
      paramResponse = paramResponse + param[1] + '&';
    }
    let urilenght = paramResponse.length;
    return '/' + paramResponse.substring(0, (urilenght - 1));
  }

  private getQueryParams (queryParams : [string, string][]): string {
    var paramResponse = '';
    for (let param of queryParams) {
      paramResponse = paramResponse + param[0] + '=' + param[1] + '&';
    }
    let urilenght = paramResponse.length;
    return '?' + paramResponse.substring(0, (urilenght - 1));
  }

  public encodeURI (uri: string): string {
    return encodeURIComponent(uri);
  }
  public decodeURI (uri: string): string {
    return decodeURIComponent(uri);
  }
}