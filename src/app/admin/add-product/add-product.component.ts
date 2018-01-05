import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl , FormBuilder , Validators } from '@angular/forms';
import {ProjectsService} from '../../projects.service';
import { Project } from '../../project';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['../admin-layout/admin-layout.component.css']
})
export class AddProductComponent implements OnInit {

  projects:Project[];
  constructor(private _projectService:ProjectsService , private formBuilder: FormBuilder) { }
  form: FormGroup;
  ngOnInit() {
      this._projectService.getProjects()
    .subscribe(resTodoData  => this.projects = resTodoData )
    //Craete a Form to add Project
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      categeory: [null, Validators.required],
      desc: [null, Validators.required],
      link: [null, Validators.required],
    });
  }
  //shorten the  formcontrol for validation
  get  link(){
    return this.form.get('desc');
  };
  get  name(){
    return this.form.get('name');
  };
  get  categeory(){
    return this.form.get('categeory');
  };
  get  desc(){
    return this.form.get('desc');
  };
 //Get Image Name When upload
  imageName=null;
  updateFile(file: HTMLInputElement) {
    let name = file.value;
    let pos = name.lastIndexOf('\\');
    let resName = name.slice(pos+1);
    this.imageName = resName;
}

//upload image to server
uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://karan.nirnayepolytechnic.com/FileUpload/index.php',
    allowedExtensions:  ['jpg', 'png' , 'jpeg','gif']
  };
  sizeLimit = 4000000;
  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
  //Edit Project 
  editMode=false;
  editProjectValue:Project;

  
  editProjects(project){
    this.editMode = true;
    let projects = this.projects;
    for(let i=0;i<projects.length;i++){
      if(projects[i]._id == project._id){
          this.editProjectValue = projects[i];
          console.log(this.editProjectValue);
      }
    }
    this.form.controls['name'].patchValue(project['name']);
    this.form.controls['categeory'].patchValue(project['categeory']);
    this.form.controls['link'].patchValue(project['link']);
    this.form.controls['desc'].patchValue(project['desc']);
    this.imageName = project['image'];
  }
  
  //Add Project to your database and edit
  addProject(project){
    // Getting The File Value
    if(this.imageName==null){
      project.image="";
     } 
    else{
      project.image = this.imageName;
    }
    
    if(this.editMode==false){
      let result =  this._projectService.saveProjects(project);
      result.subscribe(x=>{
        this.projects.push(project);
      });
    }
    else{
      project._id = this.editProjectValue._id;
      var projects = this.projects;
      this._projectService.updateProjects(project)
      .subscribe(data => {
        if(data.n==1){
          for(let i=0;i<projects.length;i++){
            if(projects[i]._id == project._id){
                projects[i]   = project;
            }
          }
        }
      })
    }
    this.form.reset();
    this.imageName=null;
    this.editMode=false;
  }

  //Delete Projects
  delelteProjects(project){
    if(confirm('Sure you want to delelte app')){
    let projects = this.projects;
    this._projectService.delelteProject(project._id)
    .subscribe(data =>{
      if(data.n==1){
        for(let i=0;i<projects.length;i++){
          if(projects[i]._id == project._id){
            projects.splice(i,1);
          }
        }
      }
    });
  }  
  }
  


}
