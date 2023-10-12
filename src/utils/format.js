const format = number => {
  return number < 1000 ? number : `${(number / 1000).toFixed(1)}k`
}

export default format