import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dropdown',
  templateUrl: './project-dropdown.component.html',
  styleUrls: ['./project-dropdown.component.css']
})
export class ProjectDropdownComponent implements OnInit{
  @Output()
  NomeDoProjeto = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.NomeDoProjeto.emit('Projeto 1');
  }

  SalvarProjeto($event:any){
    this.NomeDoProjeto.emit($event.source.value);
  }
}
