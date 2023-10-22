// =============================
// プラグインのpopupに関連する処理
// =============================

// 初期表示時の処理
window.onload = async () => {
  // 本番ドメインを取得
  let defaults = { domain: { value: "" } };
  try {
    const storageData = await getStorageData(defaults);
    const domains = storageData.domain.value;
    if (domains) {
      // ドメインを表示
      document.getElementById("domains").value = domains;
    }
  } catch (e) {
    alert("Error fetching data: " + error);
  }
};

// 保存ボタン押下時処理
document.getElementById("hold").onclick = async function () {
  // ドメインを取得
  let domains = document.getElementById("domains").value;
  // エラーチェック処理

  // localStorageに保存
  let entity = {};
  entity.domain = {
    value: domains,
  };
  await chrome.storage.local.set(entity, function () {
    alert("保存しました");
  });
};

// 本番ドメイン情報を取得する
function getStorageData(defaults) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(defaults, (items) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(items);
      }
    });
  });
}
