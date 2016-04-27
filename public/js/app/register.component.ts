import {Component} from 'angular2/core';

@Component({
  selector:'register',
  template: `
  <section class="register">
    <table class="table table-striped">
    <thead>
      <th>Skill</th>
      <th>Active</th>
    </thead>
    <tbody>
      <tr *ngFor="#action of actions">
        <td>{{action.skill}}</td>
        <td>{{action.material}}</td>
      </tr>
    </tbody>
  </table>
  </section>
  `
})

export class RegisterComponent{

  actions = [
		{
			skill: 'Laravel',
			material: 'Статья на хабре'
		},
		{
			skill: 'JS',
			material: 'JSz'
		},
	];
}
