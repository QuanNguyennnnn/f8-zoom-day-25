const checkAll = document.getElementById('checkAll') // lấy checkbox chính
const rowCheckBoxes = document.querySelectorAll('.rowCheckBox') //lấy tất cả checkbox của các dòng
const checkedCount = document.getElementById('checkedCount') //phần tử hiện tổng số checkbox được chọn

function updateCheckAllState() {
  const checked = [...rowCheckBoxes].filter(cb => cb.checked).length;
  const total = rowCheckBoxes.length;

  //Cập nhật trạng thái của checkbox chính
  checkAll.checked = checked === total;
  checkAll.indeterminate = checked > 0 && checked === total;

  //Cập nhật số lượng checkbox được chọn
  checkedCount.textContent = `${checked} nhiệm vụ trong ngày được chọn`
};


// Sự kiện cho checkbox chính
checkAll.onclick = function() {
  for(let i = 0; i < rowCheckBoxes.length; i++){
    rowCheckBoxes[i].checked = checkAll.checked
  }
  updateCheckAllState();
}

// Sự kiện cho riêng từng checkbox 
for(let i = 0; i < rowCheckBoxes.length; i++){
  rowCheckBoxes[i].onclick = function(){
    updateCheckAllState();
  }
}


