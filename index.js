
let myAuction = document.getElementById('auction');

let myOutput = document.getElementById('output1')
let myPrice = document.getElementById('price');
let myLocation = document.getElementById('location');

const renderOutput1 = value => {
  output1.textContent = value;
}
const renderOutput2 = value => {
  output2.textContent = value;
}
const renderOutput3 = value => {
  output3.textContent = value;
}

const renderOutput4 = value => {
  output4.textContent = value;
}

const renderOutput5 = value => {
  output5.textContent = value;
}

const renderOutput6 = value => {
  output6.textContent = value;
}

const renderOutput7 = value => {
  output7.textContent = value;
}

const renderOutput8 = value => {
  output8.textContent = value;
}

const calcPrice = () => {
  const pricess = Number(myPrice.value);

    if(pricess < 99.99){
      myIAAI = 1;
      myCopart = 2;
    }else if(pricess >= 100 && pricess <= 199.99){
      myIAAI = 69;
      myCopart = 75;
    }else if(pricess >= 200 && pricess <= 299.99){
      myIAAI = 89;
      myCopart = 95;
    }else if(pricess >= 300 && pricess <= 349.99){
      myIAAI = 104;
      myCopart = 110;
    }else if(pricess >= 350 && pricess <= 399.99){
      myIAAI = 119;
      myCopart = 125;
    }else if(pricess >= 400 && pricess <= 499.99){
      myIAAI = 129;
      myCopart = 135;
    }else if(pricess >= 500 && pricess <= 599.99){
      myIAAI = 169;
      myCopart = 175;
    }else if(pricess >= 600 && pricess <= 699.99){
      myIAAI = 184;
      myCopart = 190;
    }else if(pricess >= 700 && pricess <= 799.99){
      myIAAI = 199;
      myCopart = 205;
    }else if(pricess >= 800 && pricess <= 899.99){
      myIAAI = 214;
      myCopart = 220;
    }else if(pricess >= 900 && pricess <= 999.99){
      myIAAI = 229;
      myCopart = 235;
    }else if(pricess >= 1000 && pricess <= 1099.99){
      myIAAI = 254;
      myCopart = 260;
    }else if(pricess >= 1100 && pricess <= 1199.99){
      myIAAI = 269;
      myCopart = 275;
    }else if(pricess >= 1200 && pricess <= 1299.99){
      myIAAI = 279;
      myCopart = 285;
    }else if(pricess >= 1300 && pricess <= 1399.99){
      myIAAI = 289;
      myCopart = 295;
    }else if(pricess >= 1400 && pricess <= 1499.99){
      myIAAI = 304;
      myCopart = 310;
    }else if(pricess >= 1500 && pricess <= 1599.99){
      myIAAI = 329;
      myCopart = 335;
    }else if(pricess >= 1600 && pricess <= 1799.99){
      myIAAI = 349;
      myCopart = 355;
    }else if(pricess >= 1800 && pricess <= 1999.99){
      myIAAI = 369;
      myCopart = 375;
    }else if(pricess >= 2000 && pricess <= 2199.99){
      myIAAI = 404;
      myCopart = 410;
    }else if(pricess >= 2200 && pricess <= 2399.99){
      myIAAI = 419;
      myCopart = 425;
    }else if(pricess >= 2400 && pricess <= 2599.99){
      myIAAI = 434;
      myCopart = 440;
    }else if(pricess >= 2600 && pricess <= 2799.99){
      myIAAI = 454;
      myCopart = 460;
    }else if(pricess >= 2800 && pricess <= 2999.99){
      myIAAI = 469;
      myCopart = 475;
    }else if(pricess >= 3000 && pricess <= 3499.99){
      myIAAI = 494;
      myCopart = 500;
    }else if(pricess >= 3500 && pricess <= 3999.99){
      myIAAI = 509;
      myCopart = 515;
    }else if(pricess >= 4000 && pricess <= 4999.99){
      myIAAI = 549;
      myCopart = 555;
    }else if(pricess >= 5000 ){
      myIAAI = 549 + Number(pricess * 0.01);
      myCopart = 555 + Number(pricess * 0.01);
    }

    const ro3 = (myAuction.value === "IAAI" ? Number(myPrice.value) + Number(myIAAI) : Number(myPrice.value) + Number(myCopart));
    const countryPrice = JSON.parse(myFormControl.value)[ myCarType.value] || 0;
   renderOutput1(Number(myPrice.value));
   renderOutput2(Math.round(myAuction.value === "IAAI" ? Number(myIAAI) : Number(myCopart))); // i output2 reikia panaudoti Math.floor() o gal Math.round() iskviesti jame funkcija, joje irasytum output2 reiksme, returnintum ja.
   renderOutput3(Math.round(myAuction.value === "IAAI" ? Number(myPrice.value) + Number(myIAAI) : Number(myPrice.value) + Number(myCopart)));
   renderOutput4(countryPrice);
   renderOutput5(myOstM);
   renderOutput6(Number(countryPrice) + Number(myOstM));
   renderOutput7(Math.round(Number(ro3) + ((Number(countryPrice) + Number(myOstM)))));
   const price = (Number(ro3) + ((Number(countryPrice) + Number(myOstM)))); // salyga is renderOutput7
   const priceCustoms = ((price * 0.1) + price);
   const priceVAT = (priceCustoms * 0.21);
   renderOutput8(Math.round(priceCustoms + priceVAT));

  }

myAuction.addEventListener('input', () =>{
  calcPrice();
})
myPrice.addEventListener('input', ev =>{
  calcPrice();
})

//--------------SECOUND SECTION--------------------

let myCarType = document.getElementById('carType');

let auctionLocations = [
  {
    name: "---",
    price: 0
  },
  {
    name: "Abilene - Texas",
    car: 1075,
    van: 1175
  },
  {
    name: "Akron Canton - Ohio",
    car: 1275,
    van: 1400
  },
  {
    name: "Albany - New Yourk",
    car: 950,
    van: 1050
  },
  {
    name: "Albuquerque - New Mexico",
    car: 1225,
    van: 1325
  },
  {
    name: "Altoona - Pennsylvania",
    car: 1100,
    van: 1200
  },
  {
    name: "Amarillo - Texas",
    car: 1200,
    van: 1300
  },
  {
    name: "Anaheim - California",
    car: 1000,
    van: 1100
  },
  {
    name: "Appleton - Wisconsin",
    car: 1100,
    van: 1225
  },
  {
    name: "Asheville - North Carolina",
    car: 1000,
    van: 1100
  },
  {
    name: "Ashland - Kentucky",
    car: 1200,
    van: 1325
  },
  {
    name: "Atlanta - Georgia",
    car: 875,
    van: 975
  },
  {
    name: "Atlanta East - Georgia",
    car: 900,
    van: 1000
  },
  {
    name: "Atlanta North - Georgia",
    car: 875,
    van: 975
  },
  {
    name: "Atlanta South - Georgia",
    car: 875,
    van: 975
  },
  {
    name: "Austin - Texas",
    car: 950,
    van: 1050
  },
  {
    name: "Avenel - New Jersey",
    car: 800,
    van: 900
  },
  {
    name: "Baltimore - Maryland",
    car: 925,
    van: 1025
  },
  {
    name: "BATON ROUGE - Louisiana",
    car: 1025,
    van: 1125
  },
  {
    name: "BILLINGS - Montana",
    car: 1800,
    van: 1900
  },
  {
    name: "BIRMINGHAM - Alabama",
    car: 1000,
    van: 1100
  },
  {
    name: "BOISE - Idaho",
    car: 1500,
    van: 1600
  },
  {
    name: "BOSTON - SHIRLEY - Massachusetts",
    car: 1800,
    van: 1900
  },
  {
    name: "BOWLING GREEN - Kentucky",
    car: 1200,
    van: 1325
  },
  {
    name: "BRIDGEPORT - Pennsylvania",
    car: 875,
    van: 975
  },
  {
    name: "BUCKHANNON - West Virginia",
    car: 1225,
    van: 1325
  },
]

let myFormControl = document.getElementById('form-control');
let myOstM = document.getElementById('ostM');
auctionLocations.forEach(function(item) {
  let newLocationItem = document.createElement('option');
  newLocationItem.textContent = item.name;
  myFormControl.appendChild(newLocationItem);
  newLocationItem.value = JSON.stringify(item);
})

myOstM = 100;
myFormControl.addEventListener('input', (event)=>{
  var myId = myCarType.value;
  const countryPrice = JSON.parse(event.target.value)[myId] || 0;
  const ro3 = (myAuction.value === "IAAI" ? Number(myPrice.value) + Number(myIAAI) : Number(myPrice.value) + Number(myCopart)); // salyga is renderOutput3!!
  renderOutput4(countryPrice);
  renderOutput5(myOstM);
  renderOutput6(Number(countryPrice) + Number(myOstM));
  renderOutput7(Math.round(Number(ro3) + ((Number(countryPrice) + Number(myOstM)))));
  const price = (Number(ro3) + ((Number(countryPrice) + Number(myOstM)))); // salyga is renderOutput7
  const priceCustoms = ((price * 0.1) + price);
  const priceVAT = (priceCustoms * 0.21);
  renderOutput8(Math.round(priceCustoms + priceVAT));
})

myCarType.addEventListener('input', function(event) {
  console.log(myFormControl.value, event.target.value)
  const countryPrice = JSON.parse(myFormControl.value)[event.target.value] || 0;
  const ro3 = (myAuction.value === "IAAI" ? Number(myPrice.value) + Number(myIAAI) : Number(myPrice.value) + Number(myCopart)); // salyga is renderOutput3!!
  renderOutput4(countryPrice);
  renderOutput5(myOstM);
  renderOutput6(Number(countryPrice) + Number(myOstM));
  renderOutput7(Math.round(Number(ro3) + ((Number(countryPrice) + Number(myOstM)))));
  const price = (Number(ro3) + ((Number(countryPrice) + Number(myOstM)))); // salyga is renderOutput7
  const priceCustoms = ((price * 0.1) + price);
  const priceVAT = (priceCustoms * 0.21);
  renderOutput8(Math.round(priceCustoms + priceVAT));
});
