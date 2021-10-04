const goods = [
  { img: "img/j.jpeg", title: "Shirt", price: 150, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Socks", price: 50, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Jacket", price: 350, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Shoes", price: 250, desc: "Описание товара" },

  { img: "img/j.jpeg", title: "Shirt", price: 150, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Socks", price: 50, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Jacket", price: 350, desc: "Описание товара" },
  { img: "img/j.jpeg", title: "Shoes", price: 250, desc: "Описание товара" },
];


const renderGoodsItem = (img = "img", title = "title", price = 0, desc = "some text") => (
  `<div class="goods-item">
  <img scr=${img} width="250" height="250"/>
  <h3>${title}</h3>
  <p class="goods_price">${price}</p>
  <p class="goods_desc">${desc}</p>
  </div>`
);

const renderGoodsList = (list) => {
  const goodsList = list.map(({ img, title, price, desc }) => renderGoodsItem(img, title, price, desc));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

onload = () => {
  renderGoodsList(goods);
}





