

const Time = ({timestamp}) => {
    const date= new Date(timestamp)
    const hours = date.getHours()
    const minutes = '0'+date.getMinutes()
    const seconds = '0'+date.getSeconds()
    const day = (date.getDay()-1)
    const month = (date.getMonth()+1)
    const year = (date.getFullYear())
    console.log(date)
    return`${day}/${month}/${year} as ${hours}:${minutes.substring(1,3)}:${seconds.substring(1,3)}`
  }

  export default Time