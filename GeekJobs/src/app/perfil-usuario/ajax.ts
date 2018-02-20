export function Ajax(method, url, onSuccess) {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      onSuccess(JSON.parse(this.responseText));
    }
  };

  xhttp.open(method, url, true);
  xhttp.send();
}
