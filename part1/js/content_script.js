// ========================
// 画面上の表示に関連する処理
// ========================

// 上部の警告クリック時の処理
function clickTop() {
  // 下部を表示、上部を非表示にする
  document.querySelector("#page_bottom_alert").style.display = "block";
  document.querySelector("#page_top_alert").style.display = "none";
}

// 下部の警告クリック時の処理
function clickBottom() {
  // 上部を表示、下部を非表示にする
  document.querySelector("#page_bottom_alert").style.display = "none";
  document.querySelector("#page_top_alert").style.display = "block";
}

// 開いているページのbodyを取得
const body = document.querySelector("body");

// 上部の警告を作成
let top_button = document.createElement("div");
top_button.textContent = "本番環境";
top_button.addEventListener("click", clickTop); // クリックされたときの処理を追加
top_button.id = "page_top_alert";

// 下部の警告を作成
let bottom_button = document.createElement("div");
bottom_button.textContent = "本番環境";
bottom_button.addEventListener("click", clickBottom); // クリックされたときの処理を追加
bottom_button.id = "page_bottom_alert";
bottom_button.style.display = "none"; // 初期状態では非表示

// 警告をbodyに追加
body.append(top_button);
body.append(bottom_button);
