getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        console.log('加载Css失败')
      }
    }
  }
  request.open("GET", "/style.css");
  request.send()
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      } else {
        console.log('加载Js失败')
      }
    }
  }
  request.open('GET', '/2.js')
  request.send()
}
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      } else {
        console.log('加载Html失败')
      }
    }
  }
  request.open('GET', '/3.html')
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName('name')[0].textContent.trim()
        console.log(text)
      } else {
        console.log('加载xml失败')
      }
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const object = JSON.parse(request.response)
      dogName.textContent = object.name
    } else {
      console.log('加载JSON失败')
    }
  }
  request.send()
}
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open('get', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
      const object = JSON.parse(request.response)
      dogName.textContent = object.name
    } else {
      console.log('加载JSON失败')
    }
  }
  request.send()
}