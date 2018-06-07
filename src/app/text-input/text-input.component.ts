import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {nodeBinder} from '../../../../MalaiFork/malai-core/org.malai.ts/src/binding/Bindings';
import {TextInputChanged} from '../../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/TextInputChanged';
import {AnonCmd} from '../../../../MalaiFork/malai-core/org.malai.ts/src-core/command/AnonCmd';
import {WidgetData} from '../../../../MalaiFork/malai-core/org.malai.ts/src-core/interaction/WidgetData';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @ViewChild('Editable') editable_p: ElementRef;
  @ViewChild('TextAreaTest') elm: ElementRef;
  textArea = new TextInputChanged();
  text_edit = '';

  constructor() { }

  ngOnInit() {
    nodeBinder(this.textArea, () => new AnonCmd(() => {
      const elementData: WidgetData<Element> = this.textArea.getData();
      const elementTarget: HTMLTextAreaElement = <HTMLTextAreaElement>elementData.getWidget();
      this.text_edit = elementTarget.value;
    })).on(this.elm.nativeElement).bind();
  }

}
