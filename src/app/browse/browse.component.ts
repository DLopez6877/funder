
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from './../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [ProjectService]
})


export class BrowseComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByCompleteness: string = "all";

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToProjectPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  onChange(optionFromMenu: any) {
    this.filterByCompleteness = optionFromMenu;
  }
}
