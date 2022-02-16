(function(){
    // const script = document.createElement('script')
    // script.src = 'https://pkg.mini1.cn/vconsole@3.4.0/dist/vconsole.min.js'
    // script.onload = function(){
    //     new VConsole()
    // }
    // document.body.appendChild(script)

    const app = document.querySelector("#app")
    const tmpl = `<ul class="demo" id="demo">
        <h3>基础方法调用</h3>
        <li>
        <p class="desc">box调用</p>
        <p><button type="button" class="btn" id="testBox">调用测试</button></p>
        </li>
    </ul>`
    app.innerHTML = tmpl;
}(window))