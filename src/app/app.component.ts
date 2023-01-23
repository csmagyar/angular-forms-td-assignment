import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  subscriptions = ['basic','advanced','pro'];
  defaultSub = 'advanced';

  onSubmit(): void {
    for (let value in this.form.value) {
      console.log(`${value}: ${this.form.value[value]}`)
    }
    this.form.reset();
  }
}
