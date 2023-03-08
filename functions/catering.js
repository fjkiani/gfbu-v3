require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app8KYi4JU3zJeZiJ')
  .table('catering')

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
    const catering  = records.map((product) => {
      const { id } = product
      const { name, price, category } = product.fields
    //   const url = image[0].url
      return { name, price, category}
      
    })
    return {
      statusCode: 200,
      body: JSON.stringify(catering),
    
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    }
  }
}
