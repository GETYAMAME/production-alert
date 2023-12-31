// =============================
// プラグインのpopupに関連する処理
// =============================

// 初期表示時の処理
window.onload = async () => {
  // 本番ドメインを取得
  const defaults = { domain: { value: "" } };
  try {
    const storage_data = await getStorageData(defaults);
    const domains = storage_data.domain.value;
    if (domains) {
      // ドメインを表示
      document.getElementById("domains").value = domains;
    }
  } catch (error) {
    alert("Error fetching data: " + error);
  }
};

// 保存ボタン押下時処理
document.getElementById("hold").onclick = function () {
  // ドメインを取得
  const domains = document.getElementById("domains").value;
  // エラーチェック処理
  if (!domains) {
    document.getElementById("message").textContent =
      "メッセージ：ドメインを入力してください";
    return;
  }
  // ドメイン形式チェック
  const domains_ary = domains.split(/\n/);
  for (let i = 0; i < domains_ary.length; i++) {
    if (!isValidDomain(domains_ary[i])) {
      document.getElementById("message").textContent =
        "メッセージ：" + (i + 1) + "行目のドメイン形式が不正です";
      return;
    }
  }
  // localStorageに保存
  const entity = {};
  entity.domain = {
    value: domains,
  };
  chrome.storage.local.set(entity, function () {
    document.getElementById("message").textContent =
      "メッセージ：保存しました！";
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

// ドメイン形式チェック
function isValidDomain(domain) {
  // 正規表現を使用してドメイン形式を検証
  const pattern = /^(?:(?![_.-])[\w-]+(?<![_.-])){1,}\.[a-z]{2,}$/;
  return pattern.test(domain);
}
