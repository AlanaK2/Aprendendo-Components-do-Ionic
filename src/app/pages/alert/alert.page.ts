import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertctrl: AlertController) {}

  ngOnInit() {}

  async alert() {
    const alert = await this.alertctrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async multiple() {
    const alert = await this.alertctrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['Cancel', 'Open Modal', 'Delete'],
    });
    await alert.present();
  }

  async confirm() {
    const alert = await this.alertctrl.create({
      header: 'Confirm!',
      message: 'Menssage <strong> text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('confirm cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirme Okay');
          },
        },
      ],
    });
    await alert.present();
  }

  async prompt() {
    const alert = await this.alertctrl.create({
      header: 'Acesso restrito!!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu e-mail',
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha',
        },
      ],
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secundary',
        handler: () => {
          console.log('Confirm cancel');
        }
      },
      {
        text: 'Ok',
        handler: (form) => {
          console.log('form');
        }
      }
    ]
    });
    await alert.present();
  }

}
