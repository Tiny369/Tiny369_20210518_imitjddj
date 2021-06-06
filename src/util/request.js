import config from './config.js'
import axios from 'axios'

export default function (url,data={},method='GET',headers){
	
	return new Promise((resolve,reject) => {
		axios({
			url: config.host + url,
			data,
			method,
			headers
		})
		.then(
			response => { resolve(response.data) },
			err => { reject(err) } 
		);
	})
	
}

/* 
	import axios from 'axios'
	import config from './config.js'

	export const post = (url, data = {}) => {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
		baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
			// baseURL:config.host + url,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
		resolve(response.data)
		}, err => {
		reject(err)
		})
	})
	}
 */