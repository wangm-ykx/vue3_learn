import mitt from 'mitt'
// mitt()得到emitter对象 可以绑定事件和触发事件
const emitter = mitt()
emitter.on('test1', () => {
  console.log('test1触发')
})
emitter.emit('test1')
export default emitter
