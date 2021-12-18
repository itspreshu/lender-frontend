import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-editor',
  templateUrl: './date-editor.component.html',
  styleUrls: ['./date-editor.component.scss']
})
export class DateEditorComponent implements OnInit {
  @Input()
  public date: Date = new Date();
  constructor() { }

  ngOnInit(): void {

  }

}
