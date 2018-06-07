import {Component, OnInit} from '@angular/core';
import {nodeBinder} from '../../../MalaiFork/malai-core/org.malai.ts/src/binding/Bindings';
import {WindowClosed} from '../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/WindowClosed';
import {AnonCmd} from '../../../MalaiFork/malai-core/org.malai.ts/src-core/command/AnonCmd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppTestWBts';
  close = new WindowClosed();

  ngOnInit(): void {
    nodeBinder(this.close, () => new AnonCmd(() => {
      alert('Au revoir');
    })).bind();
  }

}
