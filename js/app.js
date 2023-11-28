class _app {
  id = 0;

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 1300;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 1300;

    let counter = 0;
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    document.getElementsByTagName('head')[0].appendChild(link);

    setInterval(() => {
      if (counter < urls.length) {
        link.href = urls[counter];
      } else {
        counter = 0;
      }

      ++counter;
    }, delay);
  };
}

const app = new _app();
