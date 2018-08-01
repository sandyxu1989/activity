const myalert = n => {
  wx.showToast({
    title: n+'',
    icon: 'success',
    duration: 2000
  }) 
}

module.exports = {
  myalert: myalert
}