document.addEventListener('DOMContentLoaded', () => {
  // モーダル要素取得
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const captionText = document.getElementById('modal-caption');
  const modalClose = document.querySelector('.modal-close');

  // メニュー画像クリックでモーダル表示
  document.querySelectorAll('.menu-item img').forEach(img => {
    img.style.cursor = 'pointer'; // カーソル変化
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  // モーダル閉じるボタン
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // モーダル外クリックで閉じる
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // スクロールフェードインアニメーション
  const fadeEls = document.querySelectorAll('.content, .mainvisual');
  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll(); // ページロード時にも実行

  // ナビリンクのスムーズスクロール
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });
});
