const details = [
    {
      id: 1,
      stock: 5,
      name:"PC GAMER",
      processor:"AMD RYZEN 5",
      gpu:"NVIDIA GT 1030 2GB GDDR5",
      ram:"8GB DDR4",
      price:"$20000",
      image:"https://png.pngitem.com/pimgs/s/199-1994141_msi-gaming-series-hd-png-download.png"
    },
  ];


const DetailList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(details)
        }, 2000)
    })
}
  
  export default DetailList;