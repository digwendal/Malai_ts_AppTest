import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnonCmd} from '../../../../MalaiFork/malai-core/org.malai.ts/src-core/command/AnonCmd';
import {ButtonBinder} from '../../../../MalaiFork/malai-core/org.malai.ts/src/binding/ButtonBinder';

@Component({
  selector: 'app-test-button-binder',
  templateUrl: './test-button-binder.component.html',
  styleUrls: ['./test-button-binder.component.css']
})
export class TestButtonBinderComponent implements OnInit {

  @ViewChild('TestButton') elm: ElementRef;
  name_button = 'Button_test';

  constructor() {
  }


  ngOnInit() {
    new ButtonBinder(() => new AnonCmd(() => {
      alert('test');
    })).on(this.elm.nativeElement).bind();
  }

}
