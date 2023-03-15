//工具函数——判断输赢

const win = (row,col,chess,chessArr)=>{
  let colCount = 0
  // 左右
  for (let i = row + 1; i < 15; i++) {
    if (chessArr[col][i] !== chess) break;
    colCount++;
  }
  for (let i = row - 1; i >= 0; i--) {
    if (chessArr[col][i] !== chess) break;
    colCount++;
  }
  // console.log('左右',colCount);
  if (colCount >= 4) {
    setTimeout(() => {
      let r = window.confirm("Winner:  " +`${chess == 1 ? "黑棋" : "白棋"}` +"\n" + "是否再来一把？");
      if (r) window.location.reload();
    }, 50);
    colCount = 0;
    return;
  }
  //上下
  let rowCount = 0
  for (let i = col + 1; i < 15; i++) {
    if (chessArr[i][row] !== chess) break;
    rowCount++;
  }
  for (let i = col - 1; i >= 0; i--) {
    if (chessArr[i][row] !== chess) break;
    rowCount++;
  }
  // console.log('上下',rowCount);
  if (rowCount >= 4) {
    setTimeout(() => {
      let r = window.confirm(
        "Winner:  " +`${chess == 1 ? "黑棋" : "白棋"}` +"\n" +"是否再来一把？");
      if (r) window.location.reload();
    }, 50);
    rowCount = 0;
    return;
  }

  // 右斜
  let leftObliqueCount = 0
  for (let i = row + 1, j = col - 1; i < 15 && j >= 0; i++, j--) {
    if (chessArr[j][i] !== chess) break;
    leftObliqueCount++;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < 20; i--, j++) {
    if (chessArr[j][i] !== chess) break;
    leftObliqueCount++;
  }
  // console.log('右斜',leftObliqueCount);
  if (leftObliqueCount >= 4) {
    setTimeout(() => {
      let r = window.confirm(
        "Winner:  " +`${chess == 1 ? "黑棋" : "白棋"}` +"\n" +"是否再来一把？");
      if (r) window.location.reload();
    }, 50);
    leftObliqueCount = 0;
    return;
  }
  //左斜
  let rightObliqueCount = 0
  for (let i = row + 1, j = col + 1; i < 20 && j < 20; i++, j++) {
    if (chessArr[j][i] !== chess) break;
    rightObliqueCount++;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessArr[j][i] !== chess) break;
    rightObliqueCount++;
  }
  // console.log('左斜',rightObliqueCount);
  if (rightObliqueCount >= 4) {
    setTimeout(() => {
      let r = window.confirm(
        "Winner:  " +`${chess == 1 ? "黑棋" : "白棋"}` +"\n" +"是否再来一把？");
      if (r) window.location.reload();
    }, 50);
    rightObliqueCount = 0;
    return;
  }
}

export {win}