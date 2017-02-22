let foo = [1, 2, 3];
{
    let foo = [4, 5, 6];
    console.log(foo);
    // => 4, 5, 6
}
console.log(foo);
// => 1, 2, 3

const bar = "定数A";
// bar = "test"; <--- エラーになる
{
    const bar = "定数B";
    console.log(bar);
    // => 定数B
}
console.log(bar);
// => 定数A