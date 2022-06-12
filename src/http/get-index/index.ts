import axios from 'axios'

export async function handler(request: any, context: any) {
  const users = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const returnData = JSON.stringify(users.data)
  
  return {
    statusCode: 200,
    body: returnData
  }
}