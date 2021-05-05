export function quarterOf(month: number): number {
    let firstQuarter: number[] = [1,2,3];
    let secondQuarter: number[] = [4,5,6];
    let thirdQuarter: number[] = [7,8,9];
    let quarter: number = 0;
   
       if (firstQuarter.includes(month)){
        quarter = 1
       }  else if (secondQuarter.includes(month)){
        quarter = 2
    } else if( thirdQuarter.includes(month)){
        quarter = 3
    } else{
        quarter = 4
      }
    return quarter
  } 