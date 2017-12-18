/*
* @Author: 阿杜
* @Date:   2017-12-18 17:19:13
* @Last Modified by:   阿杜
* @Last Modified time: 2017-12-18 23:21:35
*/
// class code{
// 	constructor(){
// 		this.char=['q','w','e','r','t','y','u','u','i','o','p'];
// 		this.length=5;
// 		this.current=[];
// 		this.speed=10;
// 	}
// 	start(){
// 		this.getChars(this.length);
// 		this.drop();
// 	};

// 	getChars(length){
// 		for(let i=0;i<length;i++){
// 			this.getChar();
// 		}
// 	}
// 	getChar(){
// 		let num=Math.floor(Math.random()*this.char.length);
// 		let divs=document.createElement('div');
// 		let tops=Math.floor(Math.random()*100);
// 		let lefts=Math.floor(Math.random()*200);
// 		div.style.cssText=`
// 		width:50px;height:50px;background:#ccc;
// 		border-radius:3px;text-align:center;
// 		line-height:50px;font-size:20px;
// 		position:absolute;top:0;left:0;
// 		`;
// 		divs.innerText=this.char[num];
// 		document.body.appendChild(divs);
// 		this.current.push(divs);

// 	}
// 	drop(){
// 		setInterval(function(){
// 			for(let i=0;i<that.current.length;i++){
// 				let top=that.current[i].offsetTop+that.speed;
// 				if(top>=500){
// 					document.body.removeChild(that.current[i]);
// 					that.current.splice(i,1);
// 					that.getChar();
// 				}
// 				that.current[i].style.top=tops+'px';
// 			}
//              },100)

// 		}
// 	}
//     // arr=[1,2,3,4,5,6];
//     // arr[2]
//     // arr.splice(2,1);
class Code{
        constructor(){
            this.char = ['Z','Y','X','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
            this.length = 5;
            this.current = [];
        }
        start(){
            this.getChars(this.length);
            this.drop();
        }

        getChars(length){
            for(let i = 0;i<length;i++){
                this.getChar();
            }
        }
        getChar(){
            let num = Math.floor(Math.random()*this.char.length);
            let divs = document.createElement('div');
            let tops = Math.floor(Math.random()*100);
            let lefts = Math.floor((window.innerWidth - 300)*Math.random()+200);
            divs.style.cssText = `width:55px;height:55px;background:#52D329;color:#fff;
                                  font-size:20px;text-align:center;line-height:55px;
                                  position:absolute;top:${tops}px;left:${lefts}px;
            `
            divs.innerText = this.char[num];
            document.body.appendChild(divs);
            this.current.push(divs);
        }
        drop(){
            let _this = this;
            setInterval(function () {
                for(let i = 0;i < _this.current.length;i++){
                    let tops = _this.current[i].offsetTop + 10;
                    _this.current[i].style.top = tops + 'px';
                    if(tops >= 500){
                        document.body.removeChild(_this.current[i]);
                        _this.current.splice(i,1);
                        _this.getChar();
                    }
                }
            },100)
        }
    }



