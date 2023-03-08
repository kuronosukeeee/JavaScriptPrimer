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
