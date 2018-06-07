import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DragLock} from '../../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/DragLock';
import {AnonCmd} from '../../../../MalaiFork/malai-core/org.malai.ts/src-core/command/AnonCmd';
import {SrcTgtPointsData} from '../../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/SrcTgtPointsData';
import {NodeBinder} from '../../../../MalaiFork/malai-core/org.malai.ts/src/binding/NodeBinder';

@Component({
  selector: 'app-drag-lock-test',
  templateUrl: './drag-lock-test.component.html',
  styleUrls: ['./drag-lock-test.component.css']
})
export class DragLockTestComponent implements OnInit {

  dragLock: DragLock;
  @ViewChild('DivOne') elm1: ElementRef;
  @ViewChild('DivTwo') elm2: ElementRef;

  constructor() {
    this.dragLock = new DragLock();
  }

  ngOnInit() {
    let clone: Element;
    new NodeBinder<AnonCmd, DragLock, SrcTgtPointsData>(this.dragLock, () => new AnonCmd(() => {
      alert('commande');
      const tgtelement = <HTMLDivElement>this.dragLock.getTgtObject().get();
      alert(tgtelement.getAttribute('id'));
      const image = document.createElement('img');
      const image_src = <HTMLImageElement>this.dragLock.getSrcObject().get();
      alert(image_src);
      // image = image_src;
      image.setAttribute('src', '/assets/images/date-test-ete.jpg');
      tgtelement.appendChild(image);
      })).on(this.elm1.nativeElement).on(this.elm2.nativeElement)
      .first((i, c) => {
        alert('first');
        clone = <HTMLImageElement>this.dragLock.getData().getSrcObject().get();
    })
      .bind();
  }

}
