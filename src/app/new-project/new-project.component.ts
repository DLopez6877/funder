import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, managers: string, description: string, targetAmount: string, currentAmount: string, intent: string, swag: string) {
    var newProject: Project = new Project(name, managers, description, targetAmount, currentAmount, intent, swag);
    this.projectService.addProject(newProject);
  }

}
