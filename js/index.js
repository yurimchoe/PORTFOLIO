(() => {
  const spanEl = document.querySelector("main .sec1 h1");

  const txtArr = [
    "HI!\nI'm yurim\nI'm publisher/designer\nMore about me..."
  ];

  let idx = 0;
  let charIndex = 0;          // 현재 몇 글자까지 보여줬는지
  const typingSpeed = 70;
  const deletingSpeed = 40;
  const holdTime = 1200;      // 다 쓴 뒤 멈추는 시간(ms)

  function writeTxt() {
    const full = txtArr[idx];

    spanEl.textContent = full.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex < full.length) {
      setTimeout(writeTxt, typingSpeed);
    } else {
      setTimeout(deleteTxt, holdTime);
    }
  }


  function deleteTxt() {
    const full = txtArr[idx];

    spanEl.textContent = full.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex > 0) {
      setTimeout(deleteTxt, deletingSpeed);
    } else {
      idx = (idx + 1) % txtArr.length;
      setTimeout(writeTxt, 250);
    }
  }

  // 시작
  spanEl.textContent = "";
  charIndex = 0;
  writeTxt();

})();