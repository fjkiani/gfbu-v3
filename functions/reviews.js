require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app8KYi4JU3zJeZiJ')
  .table('customers')

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      }
    }
  }
    
  try {
    const {records} = await airtable.list({
    maxRecords: 200,
    })
    // console.log(records)
    const takeout  = records.map((product) => {
      const { id } = product
      const {name, quote, image, stars } = product.fields
      const url = image[0].url
      return { id, name, quote, stars, image}
      // console.log(product)
      
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify(takeout),
    
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    }
  }
}

