import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: 'navegacao', icon: 'paper-plane' },
    { title: 'Botões', url: 'botao', icon: 'construct' },
    { title: 'Alert', url: 'alert', icon: 'construct' },
    { title: 'Action-Sheet', url: 'actionsheet', icon: 'construct' },
    { title: 'Badge', url: 'badge', icon: 'construct' },
    { title: 'Card', url: 'card', icon: 'construct' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}