import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface EmploiList {
  name: string;
  children?: EmploiList[];
}

const TREE_DATA: EmploiList[] = [
  {
    name: 'Emploi',
    children: [
      {name: 'Liste des emplois'},
      {name: 'Savoirs'},
      {name: 'Savoirs-Faire'},
      {name: 'Savoirs-Être'},
    ]
  }];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isMenuOpen = true;
  contentMargin = 240;

 

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

}
