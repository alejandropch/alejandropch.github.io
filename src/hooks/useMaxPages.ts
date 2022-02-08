import { useEffect, useState } from 'react';
import axios from '../http-common'

export default function useMaxPages (){
    const [maxPages, setMaxPages] = useState(0)
    const http = axios()
    useEffect(()=>{
        const getNumberOfProjects = async () => {
            const {data} = await http.get('/projects/count')
            const maxNumberOfPages = Math.ceil( data / 4 )
            setMaxPages(maxNumberOfPages)
        }
        getNumberOfProjects()
    },[])

    return maxPages
}
