import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) {}

  public ObtenerGitHub(){
    return this.http.get("https://api.github.com/users/LuccaMariani");
  }

  public ObtenerPaises(){
    return this.http.get("https://restcountries.com/v3.1/subregion/ame");
  }

  public ObtenerPaisPorNombre(nombrePais:string){
    return this.http.get("https://restcountries.com/v3.1/name/"+nombrePais);
  }

  

}

