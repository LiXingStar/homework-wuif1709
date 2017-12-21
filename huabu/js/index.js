window.addEventListener('load',function(){
    let can = document.querySelector('canvas');
    let shape = document.querySelectorAll('.shape>li');
    let color = document.querySelectorAll('.color>li');
    let canvas = new Palette(can);
    shape.forEach(e=>{
        let type = e.id;
        e.onclick = function(){
            shape.forEach(obj=>{
                obj.classList.remove('hot');
            })
            e.classList.add('hot');
            if(type == 'poly' || type == 'polyj'){
                let ang = prompt('请输入边数或度数')
                canvas[type](ang);
            }else{
                canvas[type]();
            }
        }
    })
    color.forEach(e=>{
        if(e%2 == 0){
            e.onclick = function(){
                if(e.className == 'stroke'){
                    canvas.style = 'stroke';
                }else if(e.className == 'fill'){
                    canvas.style = 'fill';
                }
            }
        }
    })
})