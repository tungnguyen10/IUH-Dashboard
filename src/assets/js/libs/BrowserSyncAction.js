const initSync = () => {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (window.___browserSync___) {
        const socket = window.___browserSync___.socket
        socket.on('click', data => {
          if (data.actionType && data.actionType === 'syncAction') {
            if (data.dataType === 'info') {
              console.log(`${data.source} trigger <${data.dataType}>`, data.payload, data)
              return
            }
            if (data.dataType === 'code') {
              try {
                console.log(`${data.source} trigger <${data.dataType}>`, eval(data.payload), data)
              } catch (e) {
                console.error(`${data.source} trigger <${data.dataType}>`, e, data)
              }
              return
            }
          }
        })
        window.syncAction = (type = 'info' || 'code', params) => {
          const data = {
            actionType: 'syncAction',
            dataType: type,
            source: window.navigator.platform,
            payload: params
          }
          socket.emit('click', data)
          return data
        }
      }
    }, 1000)
  })
}

initSync()
