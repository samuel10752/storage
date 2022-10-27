import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    //cria o objeto storege dentro do construtor
    private storage: Storage,
  ) {}

  async ngOnInit() {
    // cria o storage ao carregar a class AppComponent
    await this.storage.create();
  }
}
