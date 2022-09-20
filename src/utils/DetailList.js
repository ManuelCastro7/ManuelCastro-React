import details from "./Details"

const DetailList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(details)
        }, 2000)
    })
}
  
  export default DetailList;