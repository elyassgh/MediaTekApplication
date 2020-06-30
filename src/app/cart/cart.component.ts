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

  produits = Array<number>();

  adresse: string;

  public test () {
    //boucle sur les produits :
    for(var p in this.produits) {
      if (p !== undefined) {
        console.log("id : ", p ," qte :", this.produits[p]);
      }
    }
  }

  public valider() {
     // Création de la commande :
     this.http.post(this.url + '/AdresseFact/' + this.adresse + '/cin/' + this.sessionClient.cin, null ).subscribe(data=>{
      }, error => {
        console.log('error');
     });

     // Insertion des lignes de commandes :
      this.http.get(this.url + '/lastFacture').subscribe(data => {

        this.test()

        //boucle sur les produits :
        for(var p in this.produits) {
          this.http.post( this.url2 + '/ref' + data + ','+ p + '/qte/' + this.produits[p] ,null).subscribe();
        }
        
      } , error => {
        console.log('error');
      });
  }

}
