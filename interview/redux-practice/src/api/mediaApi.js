//for calling the api
import axios, { Axios } from 'axios'

const UNPLASH_KEYB=import.meta.env.VITE_UNPLASH_API;

export async function fetchPhotos(query,pages=1,val=20) {
    const rspnse =await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,pages,val},
        headers:{Authorization:`Client-ID ${UNPLASH_KEYB}`}
    });
    return (rspnse.data.results)
}