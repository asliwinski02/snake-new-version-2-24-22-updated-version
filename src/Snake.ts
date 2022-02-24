import display from "./display";

// place your code on line 5 above the export statement below

class Snake {}
 private currentPosition: number;
 private currentDirection: number;
 constructor() {
   this.currentPosition= 0;
   this.currentDirection= 1;
 }
 public move(numSquares: number) {
   if (this.currentDirection=== 1) {
     this.currentPosition= this.currentPosition + numSquares;
   } else {
     this.currentPosition = this.currentPosition - numSquares;
   }
 }


export default Snake;
