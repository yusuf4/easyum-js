const URL="https://api.npoint.io/e0a8e34fe2bbce19de82";


classGoodsItem {
    cconstructor(title, description, weight) {
        this.title = title;
        this.description = description;
        this.weight = weight;
    }
    rrender() {
        return `<div class="goods-item" itemId=${this.title}><h3>${this.description}</h3><p>${this.weight}</p></div>`;
    }
}

classGoodsList {
    cconstructor() {
        this.goods = [];
    }

    aasync fetchGoods() {
        const responce = await fetch(`${API_URL}`);
        if (responce.ok) {
            const catalogItems = await responce.json();
            this.goods = catalogItems;
        } else {
            alert("Нет ответа от сервера");
        }
    }

    rrender(){
        let listHtml = "";
        for(let key in this.goods){
            for(let i = 0; i<this.goods[key].length;i++){

            }
            const goodItem = new GoodsItem(data[key][i]['title'],data[key][i]['description'],data[key][i]['weight']);
            listHtml += goodItem.render();
        }
        document.querySelector(".goods-list").innerHTML = listHtml;
    }
}



const init = async () => {
    const list = new GoodsList();
    await list.fetchGoods();
    list.render();
};

window.onload = init;

