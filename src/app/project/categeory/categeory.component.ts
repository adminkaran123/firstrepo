import { Component, OnInit , DoCheck } from '@angular/core';
import {ProjectsService} from '../../projects.service';
import { Project } from '../../project';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-categeory',
  templateUrl: '../project.component.html',
  styleUrls: ['./categeory.component.css']
})
export class CategeoryComponent implements OnInit , DoCheck {
  projects:Project[];
  categeory:string;
  filterProject:Project[] = [];
  filterMode:boolean = true ;
  constructor(
    private _projectService:ProjectsService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe(resTodoData  => this.projects = resTodoData);
    
    
    
    
 
     
    
    
    
  }

  ngDoCheck() {
    //GET ID
    this.categeory = this.route.snapshot.params['id'];
    this.filterProject = [];
    for (let i in this.projects) {
      if(this.projects[i].categeory == this.categeory){
        this.filterProject.push(this.projects[i]); 
      }
    }
   console.log(this.filterProject);

  }

  

}
