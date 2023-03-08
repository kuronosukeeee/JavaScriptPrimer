// chromeの検証で確認する
console.log(1);
console.log(1 + 1);

// constは定数ではない
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

