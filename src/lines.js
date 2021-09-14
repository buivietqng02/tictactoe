export const arr=[
    [0,1,2,3,4,5],
    [6,7,8,9,10,11],
    [12,13,14,15,16,17],
    [18,19,20,21,22,23],
    [24,25,26,27,28,29],
    [30,31,32,33,34,35]
];
let line=[];
export let lines=[];

// horizontal increase
for (let j=0;j<6;j++){
if (j+3<=5) {
    for (let i=0;i<=5;i++){
        for (let k=j;k<=j+3;k++){

        
        line.push(arr[i][k]);
        }
        lines.push(line);
        line=[];
        

    }
}
}
//lines.forEach((arr)=>console.log(arr));
//verticlly
for (let i=0;i<6;i++){
    if (i+3<=5) {
        for (let j=0;j<=5;j++){
            for (let k=i;k<=i+3;k++){
    
            
            line.push(arr[k][j]);
            }
            lines.push(line);
            line=[];
            
    
        }
    }
    }
    //lines.forEach((arr)=>console.log(arr));
    //console.log(lines.length);
    //duogn cheo \
    for (let i=0;i<6;i++){
        if (i+3<=5) {
            for (let j=0;j<=5;j++){
                if (j+3<=5) {

                for (let k=i,m=j;k<=i+3,m<=j+3;k++,m++){
        
                
                line.push(arr[k][m]);
                }
                lines.push(line);
                line=[];
                
        
            }
        }
        }
        }
        //duong cheo /
        for (let i=3;i<6;i++){
           
                for (let j=0;j<=2;j++){
                   
    
                    for (let k=i,m=j;k<=i-3,m<=j+3;k--,m++){
            
                    
                    line.push(arr[k][m]);
                    }
                    lines.push(line);
                    line=[];
                    
            
                }
            }
            
            
       
       // export default lines;




