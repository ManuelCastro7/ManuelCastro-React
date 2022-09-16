const products = [
    {
      id: 1,
      stock: 5,
      name:"Pc gamer 1",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
    {
      id: 2,
      stock: 9,
      name:"Pc gamer 2",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
    {
      id: 3,
      stock: 9,
      name:"Pc gamer 3",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
    {
      id: 4,
      stock: 100,
      name:"Pc gamer 4",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
    {
      id: 5,
      stock: 6,
      name:"Pc gamer 5",
      price:"$20000!",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
    {
      id: 6,
      stock: 8,
      name:"Pc gamer 6",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    }
  ];


const productList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
  
  export default productList;