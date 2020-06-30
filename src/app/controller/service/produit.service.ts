import { Injectable } from '@angular/core';
import {Produit} from '../model/produit.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {
    this.test();
  }

  url = 'http://localhost:8050/MediaTek-Api/Produit';

  private _produit: Produit;
  private _produits: Array<Produit>;
  private _result: Array<Produit>;
  private _cart: Array<Produit>;


  get cart(): Array<Produit> {
    if (this._cart == null) {
      this._cart = new Array<Produit>();
    }
      return this._cart;
  }

  set cart(value: Array<Produit>) {
    this._cart = value;
  }

  get produit(): Produit {
    if (this._produit == null) {
      this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get result(): Array<Produit> {
    return this._result;
  }


  get produits(): Array<Produit> {
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  public test() {
    this.http.get<Array<Produit>>(this.url + '/trendingProduit').subscribe(data => {
      this._result = data;
    }, error => {
      console.log('error');
    });
  }

  public getAll() {
    this.http.get<Array<Produit>>( this.url + '/').subscribe( data => {
      this._produits = data;
    }, error => {
      console.log('error');
    });
  }

  public add(produit: Produit) {
    this.cart.push(produit);
    alert('item added');
    console.log()
  }
}
