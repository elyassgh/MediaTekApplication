if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {

  var produits = document.getElementsByClassName('produit_row');

  function updateTotal() {
    var total = 0;
    for (var i = 0; i < produits.length; i++) {
      var row = produits[i];
      var prix_container = row.getElementsByClassName('price_container')[0];
      var prix = parseFloat(prix_container.getElementsByClassName('price')[0].innerText.replace('dhs', ''));
      var qte_container = row.getElementsByClassName('qty_container')[0];
      var qte_element = qte_container.getElementsByClassName('product_count')[0];
      var qte = parseFloat(qte_element.getElementsByClassName('qteCom')[0].value);
      var subtotal = row.getElementsByClassName['subtotal_container'][0];
      subtotal.getElementsByClassName['subtotal'][0].innerText = (prix * qte) + 'dhs';
      total = total + (prix * qte);
    }
    total = Math.round(total * 100) / 100;
    document.getElementById('total')[0].innerText = total + 'dhs';
  }

  for (var i = 0; i < produits.length; i++) {
    var row = produits[i];
    var qte_container = row.getElementsByClassName('qty_container')[0];
    var qte_element = qte_container.getElementsByClassName('product_count')[0];
    var qte = qte_element.getElementsByClassName('qteCom')[0];
    qte.addEventListener('changed', updateTotal);
  }

}
