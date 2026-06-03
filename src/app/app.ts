import { Component, inject } from '@angular/core';
import { IncidentService } from './services/incident';
import { ThreatForm } from './components/threat-form/threat-form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThreatForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // USING THE IMPORTS HERE MAKES THEM LIGHT UP:
  private incidentService = inject(IncidentService);

  userRole: string = 'Compliance Officer';
  appStatus: string = 'System Secure';
  isSystemLocked: boolean = false;

  // This connects your HTML loop to the service's array data
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