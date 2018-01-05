import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../projects.service';
import { Project } from '../project';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ ProjectsService ]
  
})
export class ProjectComponent implements OnInit {

  projects:Project[];
  filterProject:Project[] = [];
  filterMode:boolean = false;
  constructor(
    private _projectService:ProjectsService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  
  
  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(resTodoData  => this.projects = resTodoData);
  
  }
 

  
  
  
  

}
