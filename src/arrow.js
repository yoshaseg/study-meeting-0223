// 従来のfunctionを使った書き方
let plus = function (x, y) {
    return x + y;
};

// アロー関数でfunctionを省く
let plus2 = (x, y) => {
    return x + y;
};

// 単一式の場合はブラケットやreturnを省略できる
let plus3 = (x, y) => x + y;