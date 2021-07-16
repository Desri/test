import Vue from 'vue'
export default function ({ store, $axios, redirect }) {
    $axios.onRequest(config => {
        config.withCredentials = false
        config.headers.common['Accept'] = 'application/json'
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded', 'multipart/form-data'
        config.headers.common['Authorization'] = 'Bearer 27c6d6a3d0bb990b6e738de95faac46753ca1493c2de39dbbd5b7edf'
        
    })
}