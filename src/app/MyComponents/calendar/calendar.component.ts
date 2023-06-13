import { AfterViewInit, Component , OnChanges, ViewChild} from '@angular/core';
import { CalendarOptions , EventInput} from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent{
  @ViewChild('fullcalendar') fullcalendar!: FullCalendarComponent;
  eventsPromise!: Promise<EventInput>;
  events: EventInput[] = [];
  calendar!: FullCalendarComponent

  constructor(){}
  
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  handleDateClick(arg:any) {
    let newEvent: EventInput = {
      title: 'New Event '+arg.dateStr,
      date: arg.dateStr
    };
    this.calendarOptions.events = [...this.events, newEvent];
    console.warn(this.events);
    // alert('date click! ' + arg.dateStr);
  }

  ngOnInit() {
      this.calendarOptions = {
        plugins:[dayGridPlugin,timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this),
        events: [],
      };
    }
}
