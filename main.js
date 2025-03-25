// メインJavaScriptファイル

// ハンバーガーメニューの動作
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // スクロール時のヘッダー変更
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // 現在の日付と時間を表示
    updateDateTime();
    
    // 1分ごとに時間を更新
    setInterval(updateDateTime, 60000);
});

// 日付と時間の更新関数
function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    // 現在時刻の表示があれば更新
    const currentTimeElement = document.querySelector('.current-time');
    if (currentTimeElement) {
        currentTimeElement.textContent = timeString;
    }
    
    // 現在の日付の表示があれば更新
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateString = now.toLocaleDateString('ja-JP', options);
    
    const currentDateElement = document.querySelector('.current-date');
    if (currentDateElement) {
        currentDateElement.textContent = dateString;
    }
}

// イベントスライダーの自動スクロール（シンプルな実装）
let currentSlide = 0;
const eventCards = document.querySelectorAll('.event-card');

if (eventCards.length > 0) {
    setInterval(() => {
        // 現在のスライドを非表示
        eventCards[currentSlide].classList.remove('active');
        
        // 次のスライドインデックスを計算
        currentSlide = (currentSlide + 1) % eventCards.length;
        
        // 次のスライドを表示
        eventCards[currentSlide].classList.add('active');
    }, 5000); // 5秒ごとに切り替え
}

// アトラクション待ち時間のシミュレーション
// 実際のアプリケーションでは、サーバーからリアルタイムデータを取得する
function simulateWaitingTimes() {
    const waitingTimeElements = document.querySelectorAll('.waiting-time span');
    
    waitingTimeElements.forEach(element => {
        // ランダムな待ち時間を生成（5分〜60分）
        const randomWaitTime = Math.floor(Math.random() * 56) + 5;
        element.textContent = `待ち時間：約${randomWaitTime}分`;
        
        // 待ち時間に応じて色を変更
        if (randomWaitTime < 15) {
            element.style.color = 'green';
        } else if (randomWaitTime < 30) {
            element.style.color = 'orange';
        } else {
            element.style.color = 'red';
        }
    });
}

// ページ読み込み時に待ち時間をシミュレート
document.addEventListener('DOMContentLoaded', simulateWaitingTimes);

// 30秒ごとに待ち時間を更新（デモ用）
setInterval(simulateWaitingTimes, 30000);
