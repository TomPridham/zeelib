/* eslint-disable  */
// just require this and invoke to time requires into that file
// based on gh:stefanpenner/node-require-timings

import { readFileSync } from 'fs'

const timeRequire = () =>
  require.extensions['.js'] = (module, filename) => {
    const strt = new Date()
    const cont = readFileSync(filename, 'utf8').toString()
    const modl = module._compile(cont, filename)
    const arry = []
    const item = `${new Date() - strt} : ${filename}`
    arry.push(item)
    console.log(arry)
    return modl
  }

export default timeRequire
