window.onload = function(){

	let arr1,arr2;
	arr1 = localStorage.arr1?localStorage.arr1.split(","):[]
	arr2 = localStorage.arr2?localStorage.arr2.split(","):[]
	let input = document.querySelector(".top .con input")
	let text1 = document.querySelector(".main .list")
	let text2 = document.querySelector(".main1 .list")
	let num1 = document.querySelector(".main0 h2 span")
	let num2 = document.querySelector(".main1 h2 span")
	console.log(input,text1,text2,num1,num2)

	// function update(text1,arr1,num1){
	// 	text1.innerHTML = "";
	// 	num1.innerText = arr1.length;
	// 		arr1.forEach((item,index)=>{
	// 			let box = document.createElement("div");
	// 			let con = `<input type="checkbox"><p>${item}</p><div class="del"></div>`;
	// 			box.innerHTML = con;
	// 			box.className="dobox";
	// 			text1.appendChild(box)
	// 		})
	// }
	function update(){
		localStorage.arr1 = arr1.join(",")
		localStorage.arr2 = arr2.join(",")
		text1.innerHTML = "";
		text2.innerHTML = "";
		num1.innerText = arr1.length;
		num2.innerText = arr2.length;
		arr1.forEach((item,index)=>{
			let box = document.createElement("div");
			let con1 = document.createElement("input");
			con1.className = "input"
			con1.onclick = function(){
				arr1.splice(index,1);
				arr2.unshift(item);
				update()
			}
			con1.setAttribute("type","checkbox");
			let con2 = document.createElement("p");
			con2.innerText = item;
			con2.ondblclick = function(){
				let pin = document.createElement("input");
				pin.value = this.innerText;
				this.innerText = "";
				con2.appendChild(pin)
				pin.focus();
				pin.onblur = function(){
					con2.innerHTML="";
					arr1.splice(index,1,pin.value)
					update()
				}
			}
			let con3 = document.createElement("div");
			con3.className = "del"
			con3.onclick = function(){
				arr1.splice(index,1);
				update()
			}
			box.appendChild(con1)
			box.appendChild(con2)
			box.appendChild(con3)
			box.className="dobox";
			text1.appendChild(box)
		})
		arr2.forEach((item,index)=>{
			let box = document.createElement("div");
			let con1 = document.createElement("input");
			con1.setAttribute("type","checkbox");
			con1.setAttribute("checked","checked");
			con1.className = "input";
			con1.onclick = function(){
				arr2.splice(index,1);
				arr1.unshift(item);
				update()
			}
			let con2 = document.createElement("p");
			con2.innerText = item;
			con2.ondblclick = function(){
				let pin = document.createElement("input");
				pin.value = this.innerText;
				this.innerText = "";
				con2.appendChild(pin)
				pin.focus();
				pin.onblur = function(){
					con2.innerHTML="";
					arr2.splice(index,1,pin.value)
					update()
				}
			}
			let con3 = document.createElement("div");
			con3.className = "del"
			con3.onclick = function(){
				arr2.splice(index,1);
				update()
			}
			box.appendChild(con1)
			box.appendChild(con2)
			box.appendChild(con3)
			box.className="dobox";
			text2.appendChild(box)
		})
	}
	update();

	input.onkeydown=function(e){
		if(e.keyCode==13 && input.value!= ""){
			arr1.unshift(input.value);
			input.value = "";
			update(text1,arr1,num1);
		}	
	}























}