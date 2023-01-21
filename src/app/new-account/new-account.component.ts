import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]  //due to hierarchical injector concept. We dont have to use accountService since its available in app.component
})
export class NewAccountComponent {
  constructor(private loggingService:LoggingService, 
              private accountService:AccountsService){

              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus);
   // console.log('A server status changed, new status: ' + accountStatus);
  }
}
