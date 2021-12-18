import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  public options = [
    {
      label: 'Gestiona tu agenda',
      path: '/agenda',
      icon: 'calendar-event'
    },
    {
      label: 'Fichas por completar',
      path: '/fichas',
      icon: 'collection'
    },
    {
      label: 'Proximos pacientes',
      path: '/pacientes',
      icon: 'journal-bookmark'
    }]

}
