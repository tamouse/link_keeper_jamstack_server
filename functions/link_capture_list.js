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

exports.handler = async (event, context, callback) => {
  // sets up the airtable database. Good candidate for refactoring, maybe.
  const Airtable = require("airtable")
  Airtable.configure({
    apiKey: process.env.LINK_CAPTURE_TABLE_API_KEY,
  })
  const linkCaptureBase = Airtable.base(process.env.LINK_CAPTURE_TABLE_ID)

  try {
    let records = await linkCaptureBase("Saved Links")
      .select({
        view: "Grid view",
        sort: [{ field: "Capture Date", direction: "desc" }],
      })
      .all()
      .then(result => {
        return result
      })
      .catch(err => {
        console.log({
          in: "link_capture_link",
          after: "linkCaptureBase.select",
          error: err,
        })
        throw err
      })

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    }
  } catch (ex) {
    return {
      statusCode: 500,
      body: JSON.stringify(ex),
    }
  }
}
