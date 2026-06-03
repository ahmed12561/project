import { Component, inject } from '@angular/core';
import { IncidentService } from './services/incident';
import { ThreatForm } from './components/threat-form/threat-form';
import { ThreatTable } from './components/threat-table/threat-table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThreatForm, ThreatTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private incidentService = inject(IncidentService);

  userRole: string = 'Compliance Officer';
  appStatus: string = 'System Secure';
  isSystemLocked: boolean = false;

  get incidents() {
    return this.incidentService.getIncidents();
  }

  togglelock(){
    this.isSystemLocked = !this.isSystemLocked;
    if(this.isSystemLocked){
      this.appStatus = 'System locked';
    }else{
      this.appStatus = 'system secure';
    }
  }

  resolveincident(idToDelete: number){
    this.incidentService.deleteIncident(idToDelete);
  }
  
  createNewThreat(title: string, seve: string) {
    this.incidentService.addIncident(title,seve);
  }

}