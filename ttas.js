class catalog{
    constructor(){
        this.goods = [];
    }


    async getResponse(){
        let response = await fetch("https://api.npoint.io/4d5c60e14ad36d2bf821")
        let content = await response.json()
        this.goods = content
        console.log(content)
}
}
const init = async ()=>{
    const list = new catalog();
    await list.getResponse();
}

window.onload = init;