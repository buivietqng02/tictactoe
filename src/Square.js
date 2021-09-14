import React from 'react';
import {lines} from './lines';
class Square extends React.Component {
  
    render() {
        return (
            <div>
            
            <button
            onClick= {this.props.handleOnClick}
            >{this.props.value}</button>
            </div>
           
        );
    }

}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            squares: Array(36).fill(null),
            xIsNext: true
        };
     
        
      
    }
    findWinner() {
         const squares= this.state.squares;
        let winner= false;
        console.log(lines.length);
            lines.forEach(([a, b, c,d]) => {
                if ((squares[a]) && (squares[a]===squares[b])&& (squares[b]===squares[c])
                &&(squares[c]===squares[d])) {
                        winner= squares[a];
                       
                       
                }
            });
            return winner;


   }
    handleSquareClick(i) {
   
        let squares= this.state.squares.slice();
        let xIsNext=this.state.xIsNext;
        if ((squares[i]===null)&&(this.findWinner()===false)) {
        if (xIsNext){
            squares[i]='X';

        } else {
        
        squares[i]='O';
        }
       
        this.setState({
            squares: squares,
            xIsNext: !xIsNext
        });
        
       
    }
   // console.log(this.findWinner());
}
        
   
 renderSquare(i) {                                          
     return (
        <Square 
        value= {this.state.squares[i]} handleOnClick={()=>this.handleSquareClick(i)} 
       />
     );
 }
 render() {
     let nextPlayer= this.state.xIsNext ? 'X': 'O';
     let status= `next player: ${nextPlayer}`;
     let winner= this.findWinner();
     if (winner) {
        status= "winner "+ winner; 
     }
     return(
         <div >
             <div className="status">
             {status}
             </div>
         <div className="board">
            
            
                 {this.renderSquare(0)}
                  {this.renderSquare(1)}
                   {this.renderSquare(2)}
                 {this.renderSquare(3)}
                  {this.renderSquare(4)} 
                  {this.renderSquare(5)}
                {this.renderSquare(6)}
                  {this.renderSquare(7)} 
                  {this.renderSquare(8)}
                 {this.renderSquare(9)}
                  {this.renderSquare(10)}
                   {this.renderSquare(11)}
             {this.renderSquare(12)}
                  {this.renderSquare(13)}
                   {this.renderSquare(14)}
                 {this.renderSquare(15)}
                  {this.renderSquare(16)}
                   {this.renderSquare(17)}
             {this.renderSquare(18)}
                  {this.renderSquare(19)} 
                  {this.renderSquare(20)}
                 {this.renderSquare(21)}
                  {this.renderSquare(22)}
                   {this.renderSquare(23)}
         {this.renderSquare(24)} 
                 {this.renderSquare(25)} 
                 {this.renderSquare(26)}
                 {this.renderSquare(27)} 
                 {this.renderSquare(28)} 
                 {this.renderSquare(29)}
            {this.renderSquare(30)} 
                 {this.renderSquare(31)} 
                 {this.renderSquare(32)}
                 {this.renderSquare(33)}
                  {this.renderSquare(34)} 
                  {this.renderSquare(35)}
            </div>
         </div>
     );
 }
}
export default Board;
