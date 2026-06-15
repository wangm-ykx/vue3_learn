import mitt from 'mitt'
// 调用mitt()得到emitter对象 可以绑定事件和触发事件
const emitter = mitt()

// 拿到所绑定事件
// emitter.all()

// 绑定事件
emitter.on('mittTest1', () => {
  console.log('mittTest1被调用了')
})
emitter.on('mittTest2', () => {
  console.log('mittTest2被调用了')
})

// 解绑事件
emitter.off('test1')

//触发事件
setTimeout(() => {
  emitter.emit('mittTest1')
})
export default emitter
