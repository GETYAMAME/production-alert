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

// 初期表示時の処理
window.onload = async () => {
  // 本番ドメインを取得
  let defaults = { domain: { value: "" } };
  try {
    const storageData = await getStorageData(defaults);
    const prod_domains = storageData.domain.value;
    const prod_domains_ary = prod_domains.split(",");
    const current_domain = location.hostname; // 現在表示している画面のドメイン名を取得
    // 本番ドメインに含まれている場合
    if (prod_domains_ary.includes(current_domain)) {
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
    }
  } catch (error) {
    alert("Error fetching data: " + error);
  }
};
