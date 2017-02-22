// これまでのクラスのようなもの
function Human(name) {
    this.name = name;
}

Human.prototype.hello = function () {
    console.log('My name is ' + this.name);
};

// ES2015のclassを使って書き直す
class Human2 {
    constructor(name) {
        this.name = name;
    }

    hello(param = "is", ...other_params) { // <- ...other_paramsの部分が配列展開
        return 'My name ' + param + ' ' + this.name + (other_params.length ? " " : "") + other_params.join(" ");
    }
}

let human = new Human2("Taro");
console.log(human.hello());
// => My name is Taro
console.log(human.hello("was"));
// => My name was Taro
console.log(human.hello("is", "aka", "Jiro"));
// => My name is Taro aka Jiro

