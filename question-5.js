// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

let promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(totalPriceProduct, promotion) {
  const checkoutPrice = totalPriceProduct.reduce((acc, cur) => {
    if (promotion === "") {
      return cur.price * cur.quantity + acc;
    } else if (promotion === "SALE20") {
      return cur.price * cur.quantity * 0.8 + acc;
    } else if (promotion === "SALE50") {
      return cur.price * cur.quantity * 0.5 + acc;
    }
  }, 0);
  return checkoutPrice;
}

console.log(calculateTotalPrice(products, promotionCode));

promotionCode = "";
console.log(calculateTotalPrice(products, promotionCode));

promotionCode = "SALE20";
console.log(calculateTotalPrice(products, promotionCode));
