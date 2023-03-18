// chromeの検証で確認する
console.log(1);
console.log(1 + 1);

// constは再代入できない変数（定数ではない）
// letはカウンター変数などで使用する（基本的にはconst）
// varは後方互換性のために残された負の遺産（基本的には使わない）
const total = 42 + 42;
console.log(total);
console.log("JavaScript");

// 値の型（変数の型は存在しない）
console.log(typeof true);
console.log(typeof 42);
console.log(typeof 9000000000000n);
console.log(typeof "JavaScript");
console.log(typeof Symbol("シンボル"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof ["配列"]);
console.log(typeof {"key":"value"});
console.log(typeof function(){});

// numberで扱える最大値
console.log(Number.MAX_SAFE_INTEGER)

// 連想配列？
const obj = {
  "key": "value"
};
console.log(obj.key);
console.log(obj["key"]);

// 配列
const emptyArray = [];
const array = [1, 2, 3];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 正規表現(.testどっから出てきた？)
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));

// ラッパーオブジェクト（プリミティブ型の値をラップしたようなオフジェクト）
const str = new String("文字列");
console.log(typeof str);
console.log(str.length);

// プリミティブ型のデータに参照する方法
const str2 = "文字列";
console.log(typeof str2);
console.log(str2.length);

// べき乗演算子と同じ動きをするメソッド
console.log(2 ** 4);
console.log(Math.pow(2, 4));

// 後置インクリメント演算子の動き（）
let x = 1;
console.log(x++);
console.log(x);

// 前値インクリメント演算子の動き（変数を+1→評価結果を返す）
let y = 1;
console.log(++y);
console.log(y);

// 比較は型を揃えてから厳密等価演算子を使う
// 等価演算子は暗黙的な型変換が行われたのちに比較するため挙動が不安定
// 例外的にnullもしくはundefinedとの比較を行う際は等価演算子を使用する

// ビット演算もできる（シフト演算など）

// 論理演算時に暗黙的な型変換でfalseに変換される値（falsyな値）一覧
// false/undefined/null/0/0n/NaN/""（これ以外は全てtrueに変換される）

// AND演算時は左辺の評価がtrueの場合右辺の評価結果を返す
console.log("文字列" && "右辺の値");
console.log(42 && "右辺の値");
// 左辺がfalsyなので評価結果として左辺を返す（短絡評価）
console.log(false && "右辺の値");
console.log(0 && "右辺の値");
console.log(NaN && "右辺の値");

// Nullish coalescing演算子（??）
// 左辺の値がnullishであれば右辺の評価結果を返す
// nullish＝nullまたはundefined
console.log(null ?? "右辺の値");
console.log(undefined ?? "右辺の値");
// 左辺がnullishではないため評価結果として左辺を返す
console.log(true ?? "右辺の値");
console.log(0 ?? "右辺の値");
console.log("文字列" ?? "右辺の値");
// 変数への代入時に使用されることを想定している
// OR演算子（左辺がfalseの場合は右辺を評価）はfalsyな値が左辺に来る場合に使用できなかった
const inputValue = 0
const nullishValue = inputValue ?? 42;
console.log(nullishValue);

// 三項演算子（条件式？trueの時に処理する式：falseの時に処理する式）
const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);

// 暗黙的な型変換とif文（falsyな値→falseへ暗黙的に変換）
let z;
if (!z) {
  console.log("falsyな値なら表示", z)
}
// 明示的な型変換を行うことももちろん可能
let zz;
if (zz === undefined) {
  console.log("undefinedなら表示", zz);
}

// 文字列→数値への変換
// const input = window.prompt("数字を入力してください", "42");
// const num = Number(input);
// console.log(typeof num);
// console.log(num);

// Number.parseInt/.parseFloatで余計な文字を無視して数値のみ取り出す
console.log(Number.parseInt("100px", 10));
console.log(Number.parseFloat("42.5px"));

// NaN（Not a Number）の判定→isNaN
const userInput = "任意の文字列";
const num = Number.parseInt(userInput, 10);
if (Number.isNaN(num)) {
  console.log("パースした結果NaNになった", num);
}

// 関数は実引数の個数が足りなくても問題なく呼び出せる
// その場合足りない引数にはundefinedが代入されて渡される
function argumentsToArray (xx, yy) {
  return [xx, yy];
}
console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));
// デフォルト値を指定することも可能
function echo (zz = "デフォルト値") {
  return zz;
}
console.log(echo("実引数を表示する関数"));
console.log(echo());
// 実引数の個数が多い場合も問題なく実行される
// あふれた部分は無視される
console.log(echo("実引数1","実引数2"));

// 可変長引数を受け取るには仮引数の前にRest parameters（...）をつける
function fn (...args) {
  console.log(args);
}
fn("a", "b", "c");
// 通常の仮引数とRest parametersを組み合わせて定義することも可能
// その場合はRest parametersを末尾の仮引数にする必要がある
function fn2(arg1, ...restArgs) {
  console.log(arg1);
  console.log(restArgs);
}
fn2("a", "b", "c");

// Spread構文（配列の値を展開して関数の各仮引数に代入する）
function fn3(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}
const arr = [1, 2, 3];
fn3(...arr);

// arguments（Array-likeなオブジェクト）の利用
// 関数の中でのみ使える特殊な変数（仮引数は空でok）
// Array-likeとは配列のようにインデックスで要素にアクセスできるという意味
// ただし実際には配列ではないためArrayメソッドは利用できない点に注意
// Rest parametersが利用できる環境ではRest parametersを利用するべき
// →仮引数を見て可変長引数を受け付ける関数かどうかがわからないため
function fn4() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
fn4("a", "b", "c");

// 分割代入
// ①オブジェクト
function printUserId({id}) {
  console.log(id);
}
const user = {
  id:42
};
printUserId(user);
// ②配列
function print([first, second]) {
  console.log(first);
  console.log(second);
}
const arrayForPrint = [1, 2];
print(arrayForPrint); 

// 関数は変数に代入することができる（＝ファーストクラスファンクション（第一級関数））
function fn5() {
  console.log("fn5が呼び出されました");
}
const myFunc = fn5;
myFunc();
// 最初から変数の値として関数を定義することも可能（＝関数式）
// その場合は関数名は不要（＝匿名関数or無名関数）
// →関数式の関数に名前をつけても外から呼び出すことはできないから
// ただし、関数式の定義の中で再起的に呼び出したい場合は名前をつけることがある
const myFunc2 = function() {
  return 1 + 1;
}
console.log(myFunc2());
// 関数式において、Arrow Fnctionを使用すればfunctionキーワードを省略できる
const myFunc3 = () => {
  return 1 + 1;
}
console.log(myFunc3());
// また、仮引数が一つのみの時は()を省略することができる
const myFunc4 = myFunc4Arg => {
  return myFunc4Arg + myFunc4Arg;
}
console.log(myFunc4(2))
// さらに、関数の処理が一つの場合はブロック{}とreturn省略できる
const myFunc5 = myFunc5Arg  => myFunc5Arg + myFunc5Arg;
console.log(myFunc5(2))
//  Arrow Functionには以下の制約がある
// ・常に匿名関数
// ・newできない（＝コンストラクタ関数ではない）
// ・arguments変数を参照できない（しかしそもそも使用は非推奨）
// しかし、Arrow Functionで問題ない場合は、様々な観点からメリットがあるためこちらの使用が推奨されている

// オーバーロード（多重定義）は存在しない
// 関数名のみで区別されるため、引数の個数が違ったとしても上書きされる

// 関数は他の関数の引数として渡すことができる（コールバック関数）
// コールバック関数を受け取る関数のことを高階関数という
const arr2 = [1, 2, 3];
const output = (value) => {
  console.log(value);
};
array.forEach(output);
// ここではforEachが高階関数、outputがコールバック関数となる

// メソッドの定義はオブジェクト内で行う
const myObj = {
  method1: function() {
    return "method1";
  },
  method2: () => "method2"
};
console.log(myObj.method1());
console.log(myObj.method2());
// 推奨：短縮記法（クラスメソッドの記法と統一された）
const myObj2 = {
  method1() {
    return "method1";
  }
};
console.log(myObj.method1());

// if文のネスト（今年が閏年かどうかの判定）
const year = new Date().getFullYear();
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year}年は閏年です`);
    } else {
      console.log(`${year}年は閏年ではありません`);
    }
  } else {
    console.log(`${year}年は閏年です`);
  }
} else {
  console.log(`${year}年は閏年ではありません`);
}
// ネストせずに書く方法
if (year % 400 === 0) {
  console.log(`${year}年は閏年です`);
} else if (year % 100 === 0) {
  console.log(`${year}年は閏年ではありません`);
} else if (year % 4 === 0) {
  console.log(`${year}年は閏年です`);
} else {
  console.log(`${year}年は閏年ではありません`);
}

// Switch文
// 関数と組みわせて条件に対する値を返すパターンとして使うことが多い
const version = "ES6";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("知らないバージョンです");
    break;
}

// while文
let whileTest = 0;
console.log(`ループ開始前の変数の値は${whileTest}`);
while (whileTest < 10) {
  console.log (whileTest);
  whileTest++;
}
console.log (`現在の変数の値は${whileTest}`);
// do while文
const doWhileTest = 1000;
do {
  console.log(doWhileTest);
}
while(doWhileTest < 10);

// for文と関数
function ForSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(ForSum([1, 2, 3, 4, 5]));

// 配列のforEachメソッドと関数
function ForEachSum(forEachArr) {
  let total = 0;
  forEachArr.forEach(num => {total += num})
  return total;
}
console.log(ForEachSum([1,2,3,4,5]));

