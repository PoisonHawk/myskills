import {Component, Input} from 'angular2/core';

@Component({
  selector:'app-register',
  template: `
  <section class="register">
    <table class="table table-striped">
    <thead>
      <th>Skill</th>
      <th>Active</th>
    </thead>
    <tbody>
      <tr *ngFor="#action of registers">
        <td>{{action.skillName}}</td>
        <td>{{action.action}}</td>
      </tr>
    </tbody>
  </table>
  </section>
  `
})

export class RegisterComponent{

    @Input() registers: any;
}
