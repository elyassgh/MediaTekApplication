import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../controller/service/produit.service';
import {Produit} from '../controller/model/produit.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private produitService: ProduitService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  get produits(): Array<Produit> {
    return this.produitService.produits;
  }

  public getAll() {
    return this.produitService.getAll();
  }

  public add(produit: Produit) {
    return this.produitService.add(produit);
  }

}
