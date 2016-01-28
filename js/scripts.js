function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.minPizzaCost = 8;
  this.sizePizzaCost = this.sizePricingMethod();
}

Pizza.prototype.sizePricingMethod = function () {

  if (this.size === "Small") {
    return this.minPizzaCost;
  } else if (this.size === "Medium") {
    return this.minPizzaCost + 2;
  }
 return this.minPizzaCost + 4;
};

Pizza.prototype.toppingsPricingMethod = function () {
  if (this.toppings.length  === 1){
    return this.sizePizzaCost + 1;
  } else if (this.toppings.length === 2){
    return this.sizePizzaCost + 2;
  }
  return this.sizePizzaCost + 3;
};
