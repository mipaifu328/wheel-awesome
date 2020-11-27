function chunk(array, size=1) {
  
  // 自己实现方式 
  let tempArr = JSON.parse(JSON.stringify(array))
  let result = []

  if(!array.length) {
    return []
  }

  while(tempArr.length > 0) {
    result.push(tempArr.splice(0, size))
  }
  
  return result
  
  /*
  // lodash库实现方式
  let length = array == null ? 0 : array.length
  if(!length || size < 1){
    return []
  }
  let index = 0,
      resIndex = 0,
      result = Array(Math.ceil(length / size))
  
  while(index < length) {
    // 源库是使用 baseSlice(array, index, (index += size))
    result[resIndex++] = array.slice(index, index += size)
  }
  return result
  */
}

module.exports = { chunk }
