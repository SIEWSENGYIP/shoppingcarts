import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
    products = [
      {
          id: 0,
          price: 800,
          description: "Laptop 0",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 1,
          price: 1000,
          description: "Laptop 1",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 2,
          price: 600,
          description: "Laptop 2",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 3,
          price: 2000,
          description: "Laptop 3",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 4,
          price: 3000,
          description: "Laptop 4",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 5,
          price: 4000,
          description: "Laptop 5",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 6,
          price: 8000,
          description: "Laptop 6",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 7,
          price: 200,
          description: "Laptop 7",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 8,
          price: 800,
          description: "Laptop 8",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 9,
          price: 500,
          description: "Laptop 9",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 10,
          price: 20,
          description: "Laptop 10",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      },
      {
          id: 11,
          price: 9999,
          description: "Laptop 11",
          image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png"
      }
  ]

  tempQty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  tempCart = []

  myCart = []

  //productList = Object.keys(this.products)

  totalPrice = 0

  clickMe() {
    let myCart = document.querySelector(".myCartContainer")
    myCart.classList.add("hide")

    let logo = document.querySelector(".productContainer")
    logo.classList.remove("hide")
  }

  clickMyCart() {
    let logo = document.querySelector(".productContainer")
    logo.classList.add("hide")

    let myCart = document.querySelector(".myCartContainer")
    myCart.classList.remove("hide")
  }

  addQty(index) {
    this.tempQty[index] = this.tempQty[index] + 1
  }

  minusQty(index) {
    this.tempQty[index] = this.tempQty[index] - 1
  }

  clearMyCart() {
    this.myCart = []

    this.totalPrice = 0
  
  }

  addToTempCart(index) {
    let newItem = {
      id: this.products[index].id,
      price: this.products[index].price,
      description: this.products[index].description,
      image: this.products[index].image,
      qty: this.tempQty[index]
    }

    this.tempCart.push(newItem)
    this.totalPrice += this.products[index].price * this.tempQty[index]
    
  }

  highlightProduct(index): string {
    if(this.products[index].id in this.tempCart) {
      return "yellow"
    }
    else{
      return "white"
    }
  }

  hideSelectButton(index): string {
    if(this.products[index].id in this.tempCart) {
      return "none"
    }
    else{
      return "initial"
    }
  }

  addToCart() {
    this.myCart = this.tempCart
    this.tempCart = []
    this.tempQty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  removeFromCart(index) {
    this.totalPrice -= this.myCart[index].price * this.myCart[index].qty
    this.myCart.splice(index, 1)
  }

}

