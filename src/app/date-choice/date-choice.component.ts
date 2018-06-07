import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {nodeBinder} from '../../../../MalaiFork/malai-core/org.malai.ts/src/binding/Bindings';
import {DatePicked} from '../../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/DatePicked';
import {DateShowerCommand} from '../../Command/DateShowerCommand';
import {NodeBinder} from '../../../../MalaiFork/malai-core/org.malai.ts/src/binding/NodeBinder';

@Component({
  selector: 'app-date-choice',
  templateUrl: './date-choice.component.html',
  styleUrls: ['./date-choice.component.css']
})
export class DateChoiceComponent implements OnInit {

  @ViewChild('Datepicker') elm: ElementRef;
  src_image = '';
  date_picker = new DatePicked();

  constructor() { }

  public setSource(source: string) {
    this.src_image = source;
  }

  ngOnInit() {
    new NodeBinder(this.date_picker, () => new DateShowerCommand(this.date_picker.getData(), this)).on(this.elm.nativeElement).bind();
  }

}
