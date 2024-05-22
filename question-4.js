// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

function minQuantity(quantity) {
  //เริ่มต้น
  let min = 0;
  let max = 0;
  let position = null;
  for (let i = 0; i < quantity.length; i++) {
    if (quantity[i].quantity > max) {
      max = quantity[i].quantity;
    } else if (max > quantity[i].quantity) {
      min = quantity[i].quantity;
      max = quantity[i].quantity;
      position = quantity[i].name;
    }
  }

  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${position} ซึ่งมี ${min} ชิ้น`;
}

console.log(minQuantity(inventory));
