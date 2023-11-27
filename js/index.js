function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }
  
  function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }
  
  function togglePopup(id) {
    const popup = document.getElementById(id);
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }
  
  function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
    document
      .querySelector(`button[class='${closeBtnClass}']`)
      .addEventListener("click", function () {
        hidePopup(popupId);
      });
    document
      .querySelector(`button[class='${okBtnClass}']`)
      .addEventListener("click", function () {
        hidePopup(popupId);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    addPopupListeners("PopUpZurly", "ZurlyClose", "ZurlyOK");
    addPopupListeners("PopUpZui", "ZuiClose", "ZuiOK");
    addPopupListeners("PopUpJamari", "JamariClose", "JamariOK");
    addPopupListeners("PopUpGov", "GovClose", "GovOK");
    addPopupListeners("PopUpYung", "YungClose", "YungOK");
    addPopupListeners("PopUpH", "HClose", "HOK");
    addPopupListeners("PopUpXra", "XraClose", "XraOK");
    addPopupListeners("PopUpYan", "YanClose", "YanOK");
    addPopupListeners("PopUpVesu", "VesuClose", "VesuOK");
  });
  
  let date = new Date();
  
  setInterval(function () {
    document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }, 1000);
  
  document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("audio");
    let range = document.getElementById("range26");
    range.addEventListener("input", function () {
      audio.volume = range.value / 50;
    });
  });
  
  if (window.matchMedia("(max-width: 767px)").matches) {
    console.log("This is a mobile device, the code will not run");
  } else {
  
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
      $('.window-action-button.main').click(function () {
        try {
          const audio = $('#audio')[0];
  
          const canvas = document.getElementById("audioVisualizer");
          const ctx = canvas.getContext("2d");
  
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
          const analyser = audioContext.createAnalyser();
          analyser.fftSize = 256;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
  
          const source = audioContext.createMediaElementSource(audio);
          source.connect(analyser);
          analyser.connect(audioContext.destination);
  
          function drawVisualizer() {
            analyser.getByteFrequencyData(dataArray);
  
            ctx.clearRect(0, 0, canvas.width, canvas.height);
  
            const barWidth = (canvas.width / bufferLength) * 2;
            let x = 0;
  
            for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i] / 2;
  
              const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
              gradient.addColorStop(0, "rgb(0, 0, 0)");
              gradient.addColorStop(1, "rgb(255, 255, 255)");
  
              ctx.fillStyle = gradient;
              ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
  
              x += barWidth + 2;
            }
  
            requestAnimationFrame(drawVisualizer);
          }
  
          drawVisualizer();
  
          const visualizer = document.getElementById("audioVisualizer");
  
          let isDragging = false;
          let offsetX, offsetY;
  
          visualizer.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - visualizer.getBoundingClientRect().left;
            offsetY = e.clientY - visualizer.getBoundingClientRect().top;
          });
  
          document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
  
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
  
            visualizer.style.left = newX + "px";
            visualizer.style.top = newY + "px";
          });
  
          document.addEventListener("mouseup", () => {
            isDragging = false;
          });
  
          $('#enter').hide();
          $('#main').show();
  
          audio.play();
        } catch (error) {
          console.error("Error while trying to play audio:", error);
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
    }
  });
  
  