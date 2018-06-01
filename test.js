var drop = document.getElementById('drop');
drop.ondragover = function(e) {
  e.preventDefault(); // 이 부분이 없으면 ondrop 이벤트가 발생하지 않습니다.
};
drop.ondrop = function(e) {
  e.preventDefault(); // 이 부분이 없으면 파일을 브라우저 실행해버립니다.
  var data = e.dataTransfer;
  if (data.items) { // DataTransferItemList 객체 사용
    for (var i = 0; i < data.items.length; i++) { // DataTransferItem 객체 사용
      if (data.items[i].kind == "file") { // 아이템 종류가 파일이면
        var file = data.items[i].getAsFile(); // File API 사용
        alert(file.name);
      }
    }
  } else { // File API 사용
    for (var i = 0; i < data.files.length; i++) {
      alert(data.files[i].name);
    }
  }
};