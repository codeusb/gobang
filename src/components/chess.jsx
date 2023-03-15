import './chess.css'
import {useStore} from '../store/index'
import { observer } from 'mobx-react-lite'

const Chess =()=>{
  const border = Array(15).fill(null)
  const {chessStore} = useStore()
  return(
    <div>
      <p>五子棋</p>
      <div className='board'>
        {border.map((row,rowIndex)=>(
          <div key={`row${rowIndex}`} className='row'>
            {border.map((col,colIndex)=>(
              <div key={`col${colIndex}`} className='col'>
                <div className='ceil'>
                  {chessStore.chessArr[colIndex][rowIndex]===0?(<div className="click" onClick={() => chessStore.play(rowIndex, colIndex)}></div>)
                    :chessStore.chessArr[colIndex][rowIndex]===1?(<div className="black"></div>) : (<div className="white"></div>)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className='btn' onClick={chessStore.reStart}>重新开始</button>
      <button className='btn' onClick={chessStore.reTract}>悔棋</button>
    </div>
    
  )
}

export default observer(Chess) 