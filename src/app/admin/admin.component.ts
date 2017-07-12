import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, managers: string, description: string, targetAmount: string, currentAmount: string, intent: string, swag: string) {
    var newProject: Project = new Project(name, managers, description, targetAmount, currentAmount, intent, swag);
    this.projectService.addProject(newProject);
  }

}
