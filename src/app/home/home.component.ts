import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../controller/service/produit.service';
import {Produit} from '../controller/model/produit.model';
import {ClientService} from '../controller/service/client.service';
import {Client} from '../controller/model/client.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private produitService: ProduitService , public clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  get result(): Array<Produit> {
    return this.produitService.result;
  }

  get client(): Client {
    return this.clientService.client;
  }

  public connect() {
    return this.clientService.connect();
  }

  public save() {
     this.clientService.save();
  }

}
