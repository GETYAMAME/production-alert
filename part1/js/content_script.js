// 一番下へ移動
function scrollBottom() {
  let elm = document.documentElement;

  // scrollHeight ページの高さ
  let bottom = elm.scrollHeight;

  // 垂直方向へ移動
  window.scroll(0, bottom);
}

// 一番上へ移動
function scrollTop() {
  // 垂直方向へ移動
  window.scroll(0, 0);
}

// 開いているページのbodyを取得
const body = document.querySelector("body");

// ボタン(top)を作成
let top_button = document.createElement("button");
top_button.textContent = "一番上へスクロール";
top_button.addEventListener("click", scrollTop); // クリックされたときの処理を追加
top_button.className = "page_top_btn"; // CSSで右下に固定するためにクラス名を設定する

// ボタン(bottom)を作成
let bottom_button = document.createElement("button");
bottom_button.textContent = "一番下へスクロール";
bottom_button.addEventListener("click", scrollBottom); // クリックされたときの処理を追加
bottom_button.className = "page_bottom_btn"; // CSSで右下に固定するためにクラス名を設定する

// ボタンをbodyに追加
body.append(top_button);
body.append(bottom_button);
