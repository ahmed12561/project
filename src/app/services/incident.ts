import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This metadata makes the service accessible globally via Dependency Injection
})
export class IncidentService {

  // Central data store for the application
  private incidentsList = [
    { id: 1, title: 'Unauthorized Database Access', severity: 'High' },
    { id: 2, title: 'Weak Password Policy Alert', severity: 'Low' },
    { id: 3, title: 'Failed Firewall Login Attempt', severity: 'Medium' }
  ];

  // Method to get the current list of incidents
  getIncidents() {
    return this.incidentsList;
  }

  // Method to remove an incident from the central list
  deleteIncident(idToDelete: number) {
    this.incidentsList = this.incidentsList.filter(item => item.id !== idToDelete);
  }
  addIncident(newTitle: string, seve: string) {
    const newIncident = { 
      id: Date.now(),          // Generates a unique numeric ID automatically
      title: newTitle,         // Uses the string passed from the component
      severity: seve     // Enclosed in quotes because it's a string literal
    };

    this.incidentsList.push(newIncident);
  }
}