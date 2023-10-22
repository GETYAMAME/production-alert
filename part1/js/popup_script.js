// =============================
// プラグインのpopupに関連する処理
// =============================

// 初期表示時の処理
window.onload = function () {
  // localStorageからドメインを取得
  let domains = localStorage.getItem("domainsKey");
  // ドメインが存在する場合
  if (domains) {
    // ドメインを表示
    document.getElementById("domains").value = domains;
  }
};

// 保存ボタン押下時処理
document.getElementById("hold").onclick = function () {
  // ドメインを取得
  let domains = document.getElementById("domains").value;
  // エラーチェック処理

  // localStorageに保存
  localStorage.setItem("domainsKey", domains);

  // 保存完了メッセージを表示
};
