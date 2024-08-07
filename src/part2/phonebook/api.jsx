import axios from 'axios'
import { useEffect,useState } from 'react'

const Api = () =>{
    const [data,setData] = useState([])
    useEffect(() => {
        const response = axios.get('api/persons')
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }, [])

    return (
        data.map(item => (
            <div key={item.id}>Persons Name: {item.name}</div>
        ))
    )
}

export default Api;
