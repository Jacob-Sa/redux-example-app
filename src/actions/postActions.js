import { FETCH_POSTS, NEW_POST } from './types'
import Axios from 'axios'

export const fetchPosts = () => dispatch => {

    Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }))

}

export const newPost =()=>dispatch=>{
    Axios.post('https://jsonplaceholder.typicode.com/posts',)
    .then(res=>dispatch({
        type: NEW_POST,
        payload:res.data
    }))
}