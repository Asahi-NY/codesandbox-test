import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeBotton = document.createElement("button");
  completeBotton.innerText = "完了";
  completeBotton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(completeBotton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBotton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以外を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ生成
    const backBotton = document.createElement("button");
    backBotton.innerText = "戻す";
    backBotton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backBotton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //　テキスト取得
      const text = backBotton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backBotton);

    // 未完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ作成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  deleteBotton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteBotton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBotton);
  div.appendChild(deleteBotton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/**
 * const,letの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き負荷
// // val3 = "const変数を上書き";
// // const val3 = "const変数"を再宣言;

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "あああ",
//   age : 32,
// };

// val4.name = "いいい";
// val4.address = "TOKYO";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// // push = 配列に値を追加すること
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列（文字列の中にJSを埋め込み可能）
 */

//  const name = "あああ";
//  const age = "32";

//  // 「私の名前はあああです。年齢は32歳です。」

//  // 従来の方法
//  const message1 = "私の名前は"　 + name + "です。年齢は" + age + "です。";
//  console.log(message1);

//  // テンプレート文字列を用いた方法
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//    return str;
//  }

// console.log(func1("func1です"));

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };

// // const func2 = (str) => str

// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // }

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "のぐち",
//    age : 32,
//  };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['のぐち' , 32 ];

// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// // console.log(message3);

// //配列は配列でうけとる（配列の順番通りに要素で受け取る）
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト" ) => console.log(`こんにちは!${name}さん！`);
// sayHello("あいうえお");

/**
 * スプレッド構文 ...
 */

//  // 配列の展開
//  const arr1 = [1, 2];
// //  console.log(arr1);
// //  console.log(...arr1);

//  const sumFunc = (num1, num2) => console.log(num1 + num2);
// //  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// // 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中","山田","あああ"];

// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(`${index + 1}番目は、${nameArr[index]}です`);
// // }

// // const nameArr2  = nameArr.map((name)=>{
// //   return name;
// // })

// // console.log(nameArr2);

// // nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です`));
// // nameArr.map((name) => console.log(`${name}です`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // })

// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "あああ")　{
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件　? 条件がtrueの時 : 条件がfalseの時

// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;

// // toLocaleString　＝　金額表示に3桁区切りしてくれる
// // num.toLocaleString();
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }

// console.log(checkSum(50,60));

/**
 * 論理演算子の本当の意味を知ろう　＆＆ ||
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
