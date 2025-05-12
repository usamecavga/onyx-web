import axios from "axios"

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
	headers: {
		"content-type": "application/json",
	},
})


const fetcher = async (
	url: string,
	method = "GET",
	data = {},
	headers = {}
) => {
	const axiosConfig = {
		method: method,
		url: url,
		data: data,
		headers: headers,
	}
	return axiosInstance
		.request(axiosConfig)
		.then(res => res.data)
		.catch(err => {
			throw err
		})
}

export default fetcher
