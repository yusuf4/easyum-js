const data = {
    "cold": [
        {
            "title": "Ягненок",
            "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
            "weight": 200,
            "price": 450
        },
        {
            "title": "Индейка",
            "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
            "weight": 150,
            "price": 650
        },
        {
            "title": "Гусь",
            "description": "Фаршированный яблоками",
            "weight": 450,
            "price": 850
        },
        {
            "title": "Утка",
            "description": "Фаршированная рисом, курагой и айвойи",
            "weight": 450,
            "price": 850
        }
    ],
    "hot": [
        {
            "title": "Гусь",
            "description": "Фаршированный яблокам1",
            "weight": 4350,
            "price": 8530
        },
        {
            "title": "Ягненок",
            "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
            "weight": 2040,
            "price": 4350
        },
        {
            "title": "Утка",
            "description": "Фаршированная рисом, курагой и айвойи",
            "weight": 410,
            "price": 550
        },
        {
            "title": "Индейка",
            "description": "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
            "weight": 150,
            "price": 650
        }
    ]
}



// console.log("Холодные закуски");
// for(let j = 0; j< data.cold.length; j++){
//     console.log(data.cold[j]);
// }
//
// console.log("Горячие закуски");
//
// for(let l = 0; l< data.hot.length; l++){
//     console.log(data.hot[l]);
// }
//
//
// console.log("Загрузит все даные");
// for (let key in data) {
//         for(let i = 0; i<data[key].length;i++){
//           //console.log(data[key][i]['weight']) ;
//             console.log(data[key][i]);
//         }
// };




// Найти в массиве сколько человеков исполнилось 18+
let arraus = [
    {name: "Tom", id: 18, count: 0},
    {name: "Dina", id: 12, count: 0},
    {name: "Tom", id: 18, count: 0},
    {name: "Sami", id: 12, count: 0},
    {name: "Lucky", id: 15, count: 0},
    {name: "Tom", id: 18, count: 0},
    {name: "Lucky", id: 18, count: 0},
    {name: "Lucky", id: 18, count: 0}
];

let res = arraus.map(s=>s.id);
console.log(arraus)

//      Method for
let counts= {};
for (let i=0; i<arraus.length; i++){
    let num = arraus[i]['id'];
    if (counts[num]){
        counts[num]+=1;
    }else{
        counts[num]=1
    }
}
//console.log(counts)

for (let property in counts) {
    console.log(`${property}: ${counts[property]}`);
}
for (let j=0; j<arraus.length; j++){
    let num=arraus[j]['id'];
    for (let property in counts) {
       if (property==num){
            arraus[j]['count']+= counts[property];
       }
       //  console.log(`${property}: ${counts[property]}`);
        // console.log(`${property}`);
    }
}
console.log(arraus);








//          Third method
// let repeat = 0;
// for (let i=0; i<arraus.length; i++){
//     for (let j = i+1; j<arraus.length; j++){
//         if (arraus[i]['age']==arraus[j]['age']){
//             // arraus[i]['count']=repeat++;
//             repeat++;
//             //break;
//         }
//     }
// }
// console.log(repeat)
// console.log(arraus)





//              Thecond method
// console.log(arraus.sort((a, b) => a.age - b.age));
//
// var hp=new Map();
//
//  var freq=0;
//  for(var i=1;i<=arraus.length;i++){
//  // console.log(arr[i-1]+" "+arr[i]);
//      if(arraus[i]['age']==arraus[i-1]['age']){
//           freq++;
//
//      }else{
//          hp.set(arraus[i-1],freq+1);
//          freq=0;
//      }
//  }
//  console.log(hp);

//                  // First Method to solve problem
// let curage= 0;
//
// for(let i=0; i<arraus.length; i++){
//
//     if(curage!=arraus[i]['age']){
//         //console.log(arraus[i]);
//         var cnt = 1;
//     }else{
//         arraus[i]['count']=++cnt;
//
//     }
//     curage=arraus[i]['age'];
// }
// console.log(arraus);





// const ids = arraus.map(obj => obj.age);
// for (let i =0; i<ids.length; i++){
//     console.log(ids[i])
//     if (ids[i]=!ids[i]){
//         console.log("click 2");
//     }
// }





