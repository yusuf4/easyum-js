const URL = "https://api.npoint.io/e0a8e34fe2bbce19de82";

class GoodsItemCold {
    constructor(id,image,title, description, weight,price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.price = price;
        this.image = image;
    }
    render() {
        return `<div class="goods-item-cold">
                    <div class="goods-quantity"><p class="quantityText">0</p></div>
                    <div class="articul">${this.id}</div>
                    <img class="img-product" src=${this.image} width="250px">
                    <span class="goods-item-title">${this.title}</span>
                    <p class="goods-items-desc">${this.description}</p>
                    <p class="goods-items-weight">Вес: ${this.weight}</p>
                    <div class="goods-buy">
                        <p class="goods-item-price">${this.price}</p>
                        <div class="goods-korzina">
                            <div class="goods-korzina-items" >
                                <p class="goods-korzina-text" >В корзину</p>
                                <img class="basketicon" src="./icons/Buy.png" width="24px" height="24px">
                            </div>
                        </div>
                    </div>
                    <div class="korzina-item-number">
                        <img class="basket-min" src="./icons/basket-min.png" alt="">
                         <p class="goods-item-price">${this.price}</p>
                        <img class="basket-max"  id="korzinabtn" src="./icons/basket-max.png" alt="">
                    </div>
                </div>`;
    }
}

class GoodsItemHot {
    constructor(id,image,title, description, weight,price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.weight = weight;
        this.price = price;
        this.image = image;
    }
    render() {
        return `<div class="goods-item-hot" >
                    <div class="goods-quantity"><p class="quantityText">1</p></div>
                    <div class="articul">${this.id}</div>
                    <img src=${this.image} width="250px">
                    <span class="goods-item-title">${this.title}</span>
                    <p class="goods-items-desc">${this.description}</p>
                    <p class="goods-items-weight">Вес: ${this.weight}</p>
                    <div class="goods-buy">
                        <p class="goods-item-price">${this.price}</p>
                        <div class="goods-korzina">
                            <div class="goods-korzina-items"  id="korzinabtn">
                                <p class="goods-korzina-text">В корзину</p>
                                <img src="./icons/Buy.png" width="24px" height="24px">
                            </div>
                        </div>
                    </div>
                </div>`;


    }


}


class GoodsList {
    constructor() {
        this.goods = [];
    }

    async fetchGoods() {
        const responce = await fetch(`${URL}`);
        if (responce.ok) {
            const catalogItems = await responce.json();
            this.goods = catalogItems;
        } else {
            alert("Нет ответа от сервера");
        }
    }
    render() {
        let listHtmlCold = "";
        for (let j = 0; j < this.goods.cold.length; j++) {
            const goodItemCold = new GoodsItemCold(this.goods.cold[j]['id'],this.goods.cold[j]['image'], this.goods.cold[j]['title'], this.goods.cold[j]['description'], this.goods.cold[j]['weight'], this.goods.cold[j]['price']);
            listHtmlCold += goodItemCold.render();
        }
        document.querySelector(".goods-list-cold").innerHTML = listHtmlCold;
        let listHtmlHot = "";
        for (let j = 0; j < this.goods.hot.length; j++) {
            //console.log(this.goods.hot[j]['id']);
            const goodItemHot = new GoodsItemHot(this.goods.hot[j]['id'],this.goods.hot[j]['image'],this.goods.hot[j]['title'], this.goods.hot[j]['description'], this.goods.hot[j]['weight'], this.goods.hot[j]['price']);
            listHtmlHot += goodItemHot.render();
        }
        document.querySelector(".goods-list-hot").innerHTML = listHtmlHot;

    }

}

const init = async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.render();
    // basket button
    let AddToCard = document.querySelectorAll('.basketicon');
    let AddNumberGoods = document.querySelector('.korzina-text-number');



    // add event listener to korzina button
    for(let i=0; i<AddToCard.length; i++){
        let button = AddToCard[i];
        button.addEventListener('click', Hidebaskets);
    }
    function Hidebaskets(event){
        let buttons = event.target
        let blockbasket = buttons.parentElement.parentElement.parentElement.parentElement
        let hideblock = blockbasket.getElementsByClassName('goods-buy')[0].style.display='none';
        let showblock = blockbasket.getElementsByClassName('korzina-item-number')[0] .style.display='flex'
        // show quantity goods
        let itemamount = blockbasket.getElementsByClassName('goods-quantity')[0].style.display='flex'
    }

    // add event listener to plus basket icon
    let basketplus = document.querySelectorAll('.basket-max');
    for (let k=0; k<basketplus.length; k++){
        let button = basketplus[k];
        button.addEventListener('click', AddCardClick)
    }
    // get all id of goods from HTML window
    const idsitem = document.querySelectorAll('.articul')

    let totalQuantity = 0;
    let korzinaGoods = [];
    function AddCardClick(event){
        let button = event.target;
        let goodItem = button.parentElement.parentElement
        //console.log(goodItem)
        let title = goodItem.getElementsByClassName('goods-item-title')[0].innerText;
        let price = goodItem.getElementsByClassName('goods-item-price')[0].innerText;
        let IdProduct = goodItem.getElementsByClassName('articul')[0].innerText;
        let ItemQuantity = goodItem.getElementsByClassName('quantityText')[0].innerText;
        let imageProduct = goodItem.querySelector('.img-product').getAttribute('src');
        //console.log(ItemQuantity);

        // creat object from click
        let obj = {
            name: `${title}`,
            pprice: `${price}`,
            image: `${imageProduct}`,
            id: `${IdProduct}`,
            count: 0
        }
        korzinaGoods.unshift(obj);

        // count goods quantity and save it in object counts
        let counts= {};
        for (let i=0; i<korzinaGoods.length; i++){
            let num = korzinaGoods[i]['id'];
            if (counts[num]){
                counts[num]+=1;
            }else{
                counts[num]=1;
            }
        }
        console.log(counts)
        // add good quantity to an array
        for (let j=0; j<korzinaGoods.length; j++){
            let num=korzinaGoods[j]['id'];
            for (let property in counts) {
                if (property==num){
                    korzinaGoods[j]['count']= counts[property];
                }
            }
        }

        // sort element of array based by id
        korzinaGoods.sort((a, b) => a.id - b.id);

        // remove duplicate element from korzinaGoods array and assign result to a new array
        let korzinaitems = [];
        let currentId = 0;

        for (let i=0; i<korzinaGoods.length; i++){
            if (currentId!=korzinaGoods[i]['id']){
                korzinaitems.unshift(korzinaGoods[i]);
                //console.log(korzinaGoods[i]);
                //document.querySelector('.quantityText').innerHTML=korzinaitems[i]['count'];
            }
            currentId= korzinaGoods[i]['id'];
        }
        for (let i=0; i<korzinaitems.length; i++){
            let idarr = korzinaitems[i]['id'];
            for (let j=0; j<idsitem.length;j++) {
                let parent = idsitem[j].parentElement.childNodes[1].childNodes[0]
                //console.log(parent)
                //console.log(idsitem[j].textContent)
                let idblock = idsitem[j].textContent
                if (idarr==idblock){
                    parent.innerText = korzinaitems[i]['count']
                }
            }
        }


        console.log(korzinaitems)
        // for (let i=0; i<korzinaitems.length; i++){
        //     if (korzinaitems[i]['id']==)
        // }
        // show number goods in korzina button
        totalQuantity++;
        AddNumberGoods.innerText=totalQuantity;
        // render elements of korzinaitems array to HTML
        document.querySelector('.goods-item-korzina').innerHTML=korzinaitems.map(e=>`<div class="korzina-item" <p>${e.name}</p><p>${e.pprice}</p><p>${e.count}шт</p></div>`).join('');
        //document.querySelector('.basket-items').innerHTML=korzinaitems.map(e=>`<div class="korzina-item" <p>${e.name}</p><p>${e.pprice}</p><p>${e.count}шт</p></div>`).join('');
    }





     //console.log(idsitem)

     const minItem=document.querySelector('.basket-min');

     minItem.addEventListener('click', MinItem);
     function MinItem(){
         korzinabtn.style.display='flex';
         document.querySelector('.korzina-item-number').style.display='none';
         document.querySelector('.goods-quantity').style.display='none';
     }

     // show and hide korzina goods
     let ShowBlock = document.querySelector('.goods-item-korzina');
     let korzinaBtn =document.querySelector('.korzina')
     korzinaBtn.addEventListener('click', ShowItemBlock);
     function ShowItemBlock(){
         if (totalQuantity===0){
             alert('В корзине нет товаров');
         }else{

             ShowBlock.classList.toggle("show-korzina-list");
         }

     }
}

window.onload = init;