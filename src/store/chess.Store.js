//棋盘状态
import { makeAutoObservable } from "mobx"
import {win} from '../utils/win'

class ChessStore{
  chessArr = Array(15).fill(Array(15).fill(0))
  chess = 3
  row = 0
  col = 0

  constructor(){
    makeAutoObservable(this)
  }

  play = (row,col) =>{
    let newChess = this.chess === 1 ? 2 :1;
    this.chess = newChess
    this.row = row
    this.col = col
    let newChessArr = this.chessArr.map((item,index)=>{
      if(index===col){
        return item.map((item,index)=>{
          if(index ===row){
            return item=newChess
          }else{
            return item
          }
        })
      }else{
        return item
      }
    })
    this.chessArr = newChessArr
    win(this.row,this.col,this.chess,this.chessArr)
  }

  reStart = ()=>{
    this.chessArr = Array(15).fill(Array(15).fill(0))
    this.chess = 3
    this.row = 0
    this.col = 0
  }

  reTract = ()=>{
    let newChess = this.chess === 1 ? 2 : 1;
    this.chess = newChess
    let newChessArr = this.chessArr.map((item,index)=>{
      if(index===this.col){
        return item.map((item,index)=>{
          if(index ===this.row){
            return item=0
          }else{
            return item
          }
        })
      }else{
        return item
      }
    })
    this.chessArr = newChessArr
  }
}

export default ChessStore