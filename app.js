// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕 0-9  +-*/
var btns = document.getElementsByClassName("btn");
//最終數字 "" 裡放字串，所以他不會作運算只會數字往後疊放
var final = "";

var equalBtn = document.getElementById("equal");

equalBtn.addEventListener("click", equal);

function equal() {

    // 如果 最終數字 等於 "" 就 跳出
    if (final == "") return;
    // eval 運算字串
    result.innerHTML = eval(final);
    //清空
    final = "";
    // 邏輯運算子 || 或者

    if (last == "+" || last == "-" || last == "*" || last == "/")
        return;
}


// var 在 function 內使用
// let 在 { } 內使用
for (let i = 0; i < btns.length; i++) {
    // 按鈕[編號].添加事件監聽器("點擊"，匿名函式() { 函式(); })
    btns[i].addEventListener("click", function () {

        // 顯示(按鈕[編號].內容)
        show(btns[i].innerHTML);
    });
}


//函式 顯示(參數-內容)
function show(content) {

    //處理尚未輸入文字
    if (final == "") {
        if (content == "0") return;
        if (content == "*") return;
        if (content == "/") return;
    }

    //取得最後一個字
    var last = final[final.length - 1];

    // 邏輯運算子 || 或者

    if (last == "+" || last == "-" || last == "*" || last == "/")
        if (content == "+" || content == "-" || content == "*" || content == "/")
            return;

    final += content;
    //結果元素.內容 = 參數-內容
    result.innerHTML = final;
}

var clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clear)

function clear() {
    final = "";
    result.innerHTML = "0";
}
