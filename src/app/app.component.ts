import { ScullyRoutesService, IdleMonitorService } from '@scullyio/ng-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private idle: IdleMonitorService,
     public scully: ScullyRoutesService )
  { console.log('scully available', scully.available$)}
  
  title = 'scully-example';
}
