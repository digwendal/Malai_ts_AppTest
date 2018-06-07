import {CommandImpl} from '../../../MalaiFork/malai-core/org.malai.ts/src-core/command/CommandImpl';
import {DatePicked} from '../../../MalaiFork/malai-core/org.malai.ts/src/interaction/library/DatePicked';
import {WidgetData} from '../../../MalaiFork/malai-core/org.malai.ts/src-core/interaction/WidgetData';
import {DateChoiceComponent} from '../app/date-choice/date-choice.component';

export class DateShowerCommand extends CommandImpl {
  datePickerData: WidgetData<Element>;
  src: DateChoiceComponent;

  public constructor(datePickerData: WidgetData<Element>, src: DateChoiceComponent) {
    super();
    this.datePickerData = datePickerData;
    this.src = src;
  }

  canDo(): boolean {
    return true;
  }

  protected doCmdBody(): void {
    const elementTarget: HTMLInputElement = <HTMLInputElement>this.datePickerData.getWidget();
    const date_choice = elementTarget.valueAsDate;
    let src = '';
    if (date_choice.getMonth() >= 2 && date_choice.getMonth() <= 4) {
      src = 'assets/images/date-test-printemps.jpg';
    } else if (date_choice.getMonth() < 2 || date_choice.getMonth() === 11) {
      src = 'assets/images/date-test-hiver.jpg';
    } else if (date_choice.getMonth() >= 5 && date_choice.getMonth() <= 7) {
      src = 'assets/images/date-test-ete.jpg';
    } else {
      src = 'assets/images/date-test-automne.jpg';
    }
    this.src.setSource(src);
  }
}
