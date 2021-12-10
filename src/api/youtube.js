import Axios from 'axios';

const KEY = 'AIzaSyBVOIpu4hyuScahcBAiPYz1NiTOnZPGSts';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResult: 20,
        key: KEY
    },
    headers: {}
})