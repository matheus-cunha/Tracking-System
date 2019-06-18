import { Component, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges {

  NomeDoProjeto = 'Projeto 1';
  id = 1;
  briefing = 'Lorem ipsum dolor sit amet, a tempus felis odio ac, molestie purus. Maecenas sit amet libero vel risus accumsan ornare faucibus feugiat ligula. Aenean in lacus sed justo tincidunt lobortis. Aenean fringilla eleifend sem a molestie. In porta ut nulla at mollis. Nullam vel risus quis arcu condimentum pellentesque. Sed a neque sagittis nulla convallis venenatis ac vitae justo. Ut tempus ornare pretium. Nulla in lectus lorem. Nunc non sodales tortor, ac luctus felis. Etiam lacinia nibh tempus odio egestas, quis accumsan nunc vestibulum. Aliquam erat volutpat. Suspendisse vel porta metus. Sed iaculis turpis at euismod fringilla. Nunc fringilla velit ut nibh feugiat mattis sit amet vel lacus.';
  status = 'Andamento';

  ngOnChanges( NomeDoProjeto : SimpleChanges) {
    console.log(this.NomeDoProjeto + 'spo');
    this.selectUrl();
  }

  selectUrl() {
    switch (this.NomeDoProjeto) {
      case 'Projeto 1':
        this.id = 1;
        break;
      case 'Projeto 2':
        this.id = 2;
        break;
      case 'Projeto 3':
        this.id = 3;
        break;
      case 'Projeto 4':
        this.id = 4;
        break;
      default:
        this.id = 1;
        break;
    }
    console.log( 'final switch' + this.id );
  }
}
