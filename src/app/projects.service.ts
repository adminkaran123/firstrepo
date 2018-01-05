import { Injectable } from '@angular/core';
import {Http , Response , Headers, RequestOptions}  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProjectsService {
  private _getUrl = "/api";
  private _postUrl ="/api";   
  constructor(private _http:Http) { }
  getProjects(){
    return this._http.get(this._getUrl)
    .map((response:Response)=> response.json());
  }
  //Save Projects
  saveProjects(project){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postUrl,JSON.stringify(project),options)
    .map((response:Response)=> response.json());  
  }
  //Update  Projects
  updateProjects(project){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.put('/api/'+ project._id ,JSON.stringify(project),options)
    .map((response:Response)=> response.json());  
  }
  //Delete Project From your
  delelteProject(id){
    return this._http.delete('/api/'+id)
    .map((response:Response)=> response.json()); 
  }

  


}
