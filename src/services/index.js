import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

class newsApi {
  static getTopHeadlines = async () => {
    try {
      const res = await axios.get(`${baseUrl}/top-headlines`, {
        params: {
          country: 'id',
          pageSize: 2,
          apiKey,
        },
      })

      return await res
    } catch (error) {
      return error
    }
  }
}

export default newsApi
