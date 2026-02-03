import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js'; 
import { loadCart } from '../data/cart.js'

async function loadPage(){
  try{
      await loadProductsFetch();
  const value =   new Promise((resolve, reject)=>{
      loadCart(()=>{
        resolve();
      });
    })
  }catch(error){
    console.log('error occured');
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage().then(()=>{

})

// Promise.all([
// loadProductsFetch(),
// new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })
// ]).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })

// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve();
//   })
// }).then(()=>{
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     })
//   })
// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })



