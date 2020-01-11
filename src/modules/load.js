export default class LoadData {
  load(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
      document.getElementById('header').style.height = window.innerHeight;
    });
  }
}