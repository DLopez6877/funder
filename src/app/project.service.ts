import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase
  ) {
  this.projects = database.list('projects');
 }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                managers: localUpdatedProject.managers,
                                description: localUpdatedProject.description,
                                targetAmount: localUpdatedProject.targetAmount,
                                currentAmount: localUpdatedProject.currentAmount,
                                intent: localUpdatedProject.intent,
                                swag: localUpdatedProject.swag
                              });
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}
