import { Component, Input } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers:[LoggingService] //due to hierarchical injector concept. We dont have to use accountService since its available in app.component
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService:LoggingService,
              private accountService:AccountsService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    //console.log('A server status changed, new status: ' + status);
  }
}
