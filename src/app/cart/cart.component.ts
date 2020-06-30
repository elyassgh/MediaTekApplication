import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../controller/service/produit.service";
import {Produit} from "../controller/model/produit.model";
import {ClientService} from "../controller/service/client.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient, private produitService: ProduitService, private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  url = 'http://localhost:8050/MediaTek-Api/Facture';
  url2 = 'http://localhost:8050/MediaTek-Api/LignesFacture';


  get cart(): Array<Produit> {
    return this.produitService.cart;
  }

  get sessionClient() {
    return this.clientService.sessionClient;
  }

  private _produits : Array<Produit>;


  get produits(): Array<Produit> {
    if (this._produits == null) {
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  adresse: string;

  public valider() {
     // Création de la commande :
     this.http.post(this.url + '/AdresseFact/' + this.adresse + '/cin/' + this.sessionClient.cin, null ).subscribe(data=>{
      }, error => {
        console.log('error');
     });

     // Insertion des lignes de commandes :
      this.http.get(this.url + '/lastFacture').subscribe(data => {

        //boucle sur les produits :
        // Probléme !  Comment submit chaque produit avec la sa qteCom. fetch product details to array produits.
        for(var p in this._produits) {
          this.http.post( this.url2 + '/ref' + data + ','+ this.sessionClient.id + '/qte/ + p.qte',null).subscribe();
        }

      } , error => {
        console.log('error');
      });
  }

}
