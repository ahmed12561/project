import { Component, inject } from '@angular/core';
import { IncidentService } from '../../services/incident';

@Component({
  selector: 'app-threat-table',
  imports: [],
  templateUrl: './threat-table.html',
  styleUrl: './threat-table.css',
})
export class ThreatTable {
  private incidentService = inject(IncidentService);
  

  get incidents(){
    return this.incidentService.getIncidents()
  }
  resolveincident(idToDelete:number){
    this.incidentService.deleteIncident(idToDelete);
  }
}
