//统一封装
import React from 'react'
import ChessStore from './chess.Store'

class RootStore{

  constructor(){
    this.chessStore = new ChessStore()
  }
}

const context = React.createContext(new RootStore())
export const useStore = ()=> React.useContext(context)