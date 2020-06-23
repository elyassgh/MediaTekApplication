import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient , private router: Router) {}

  url = 'http://localhost:8050/MediaTek-Api/Client';

  private _client: Client;
  private _cin: string;

  get cin(): string {
    return this._cin;
  }
  set cin(value: string) {
    this._cin = value;
  }

  get client(): Client {
    if (!this._client) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  public save() {
    this.http.post(this.url + '/' , this.client ).subscribe(data => {
        console.log(this.client.cin);
        window.alert('Client ajoutée avec succées.');
    }, error => {
        window.alert('Ajout de client échouée. peut être un cin dupliqué !');
    });
  }


  public connect() {
      this.http.get<Client>(this.url + '/cin/' + this.cin ).subscribe(data => {
        if (data != null && data.cin === this.cin) {
          this.router.navigate(['/store']);
        } else {
          window.alert('Le cin entré ne correspond au aucune client !!');
        }
      }, error => {
        console.log('error');
      });
  }
}
