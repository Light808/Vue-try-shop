app.component('product-display', {
  template: 
    /*html*/ 
    `<div class="product-display">
      <div class="product-container">
            <div class="product-image"> 
                <img :src="image" :class="{'out-of-stock-img': !inStock}">

                <a v-bind:href="url">Socks Link</a>
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <h1>{{product}}</h1>
                <p>{{description}}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p v-if="onSale">{{ onSaleMessage }}</p>
                <div 
                v-for="(variant, index) in variants"
                :key="variant.id"
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color }">
                </div>
                <p>Size</p>
                <ul>
                    <li v-for="size in sizes"><small>{{ size }}</small></li>
                </ul>
                <div class="cart">Cart({{ cart }})</div>
                <button 
                class="button" 
                :class="{ disabledButton: !inStock }" 
                :disabled="!inStock" 
                v-on:click="addToCart">
                Add to Cart
                </button>
                <button class="button" v-on:click="remove">Remove</button>
            
        </div>
    </div>
    </div>`,
  data() {
    return {
        product: 'Socks',
        url: 'https://www.nike.com/vn/w/socks-7ny3q?msockid=034c738e07086a3529e366a206096b2e' ,
        brand: 'Vue Mastery',
        description: 'A pair of warm cozy socks' ,
        selectedVariant: 0,
        onSale: true,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: 'assets/Green_socks.png', quantity: 50 },
          { id: 2235, color: 'blue', image: 'assets/Blue_socks.png', quantity: 0 },
        ],
        cart: 0,
        sizes: ['S','M','L','XL']
    }
  },
  methods: {
      addToCart() {
          this.cart += 1
      },
      remove(){
        if(this.cart>0){
            this.cart -= 1
        }
      },
      updateVariant(index) {
          this.selectedVariant = index
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      onSaleMessage() {
      return this.onSale ? this.brand + ' ' + this.product + ' is on sale!' : ''
    }
  }
})