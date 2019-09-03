const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')

console.log('export start')
let jsonData = {}
readXlsxFile('./dangerousCarList.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  rows.map(row => {
    console.log(row)
    let license = row[0].replace(/\s/g, '').toUpperCase()
    jsonData[license] = (!row[1] ? '' : row[1])
  })
  writeJson(jsonData)
})

function writeJson (json) {
  fs.writeFile('../public/data/db.json', JSON.stringify(json), function (err) {
    if (err) {
      console.error(err)
    }
    console.log('export done')
  })
}
