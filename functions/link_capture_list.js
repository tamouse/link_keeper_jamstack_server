/**
 * Link Capture Airtable List
 *
 * @function
 * Returns a list of entries in the link capture table.
 * The netlify serverless function is passed three params:
 * @param event [Object] - the event object
 * @param context [Object] - t.b.d.
 * @param callback [Function] - callback function called at the end of the handler
 */

require("dotenv").config() // pull in the .env fields into process.env

exports.handler = (event, context, callback) => {
  // sets up the airtable database. Good candidate for refactoring, maybe.
  const Airtable = require("airtable")
  Airtable.configure({
    apiKey: process.env.LINK_CAPTURE_TABLE_API_KEY,
  })
  const linkCaptureBase = Airtable.base(process.env.LINK_CAPTURE_TABLE_ID)

  console.log(linkCaptureBase)

  return {
    statusCode: 200,
    body: JSON.stringify({ in: "link_capture_list.js" }),
  }
}
