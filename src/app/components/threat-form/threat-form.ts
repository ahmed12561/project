import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-threat-form',
  standalone: true,
  imports: [],
  templateUrl: './threat-form.html',
  styleUrl: './threat-form.css'
})
export class ThreatForm {
  // We create a custom event named 'onThreatCreated'
  @Output() onThreatCreated = new EventEmitter<{ title: string, severity: string }>();

  // YOUR JOB: Write a helper method here called 'submitForm(t: string, s: string)'
  // Inside it, call: this.onThreatCreated.emit({ title: t, severity: s });
  submitForm(t: string,s: string){
    this.onThreatCreated.emit({title: t, severity:s})
  }
}