/** 為何字串(string)可以使用字元(char)與陣列(array)的原因
 * input的給予的類型是字串(string)
 * 字串(string)在js裡面是字元(char)與陣列(array)所組成的
 * 舉例：
 * string name = "5293";
 * 這部分可以看成有四個字元(char),加上陣列(array)所組成的字串(string)
 * 圖示：'5'+'2'+'9'+'3'
 * 基本上""(雙引號)表示字串(string) , ''(單引號)表示字元(char)
 * 把四個字元(char)放到長度為4的陣列(array)裡面形成字串(string)
 **/

var QUESTION = this.initQuestion();
 
 //按鈕事件
 function buttonOnClick () {
	var legal = this.checkValueIsLegal();

	if(legal){
		
		//取得畫面上的輸入框
		var inputItem = document.getElementById("h_inputNum");
		//取得輸入框的數值
		var inputValue = inputItem.value;
		
		var arrAnswer = QUESTION;
		
		var Apoint= 0;
		var Bpoint= 0;
		
		for(var i = 0 ; i < 4 ; i++){
		
			for(var k = 0 ; k < 4 ; k++){
				
				if(inputValue[i] == arrAnswer[k]){
					if(i == k){
						Apoint += 1;
					}else{
						Bpoint += 1;
					}
				}
			}
		}
		
		//顯示結果
		this.createLabel(inputValue+"  " + Apoint + "A"  +Bpoint + "B");
		
		//如果4A0B,遊戲結束
		if(Apoint == 4){
			alert("恭喜妳成功了!!");
		}
	}
}

//檢查輸入是否符合規定
function checkValueIsLegal () {
	/** 符合規定的條件
	 * 1.輸入四個字
	 * 2.皆為數字
	 * 3.數字皆不重複
	 **/
	
	//取得畫面上的輸入框
	var inputItem = document.getElementById("h_inputNum");
	
	//輸入四個字
	if(inputItem.value.length < 4){
		inputItem.value = "";
		alert("輸入框不足四個字");
		return false;
	}

	//皆為數字
	var isNumber = false;
	for(var i = 0 ; i < 4 ; i++){
		//判斷是否為space,此處要做例外判斷
		if(inputItem.value[i] == " "){
			isNumber = true;
			break;
		}
		//比對是否為0~9
		for(var k = 0 ; k <= 9 ; k++){
			if(inputItem.value[i] == k){
				//break可以跳出該次迴圈(for)
				break;
			}
			//如果到9都還不是,那代表這不是數字
			if(k == 9){
				isNumber = true;
			}
		}
	}
	if(isNumber){
		inputItem.value = "";
		alert("請輸入數字");
		return false;
	}
	
	//數字皆不重複
	var isSame = false;
	for(var i = 0 ; i < 4 ; i++){
		for(k = 3 ; k > 0 ; k--){
			if((inputItem.value[i] == inputItem.value[k])&&(i != k)&&(k > i)){
				isSame = true;
			}
		}
	}
	if(isSame){
		inputItem.value = "";
		alert("請勿輸入重複數字");
		return false;
	}
	
	return true;
}

//顯示單行文字
function createLabel (inputText) {
	//如果沒有裝文字的地方,就會生成一個
	var labelBox = document.getElementById('labelBox');
	if(labelBox == null){
		labelBox = document.createElement('div');
		labelBox.id = "labelBox";
		document.body.appendChild(labelBox);
	}
	//文字
	var label = document.createElement('span');
	label.innerHTML = inputText;
	labelBox.appendChild(label);
	//斷行
	var hr = document.createElement('hr');
	labelBox.appendChild(hr);
}

//生成題目
function initQuestion () {
	var resultQ = [];
	var arrQ = ['0','1','2','3','4','5','6','7','8','9']
	
	for (var i = 0; i < 4; ++i) {
		var random = Math.floor(Math.random() * arrQ.length); 
		if(resultQ.includes(arrQ[random])){ 
			continue; 
		} 
		resultQ.push(arrQ[random]);
		arrQ.splice(random,1);
		console.log(resultQ);
	}
	
	return resultQ;
}



