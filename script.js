let pat = document.querySelector('#opt_1');     // 1st select field
let shape = document.querySelector('#opt_2');   // 2nd select field

function check()
{
    let row = 7;        // No. of rows
    let num_row = 5;    // No. of rows for numbers pattern
    let out = "";       // output
    let count = 1;
    let r_count = 15;

    // If field is not clicked
    if (pat.value === "not clicked" || shape.value === "not clicked")       
    {
        console.clear();    // clear the console
        alert("Please select the option and submit !");     // will show the alert box to notify to select the option
        window.location.reload();       // reload the page
    }

    // Star pattern - Top left 
    else if (pat.value === "star")
    {
        if (shape.value === "top left")
        {
            console.clear();    // clear the console
            console.log("Star Pattern - Top left");
        
            for(let i = 0; i <= row; i++)          // rows
            {                                              
                for(let j = 0; j < row - i; j++)   // columns
                {                                          
                    out += "*";                          
                }                                          
                out += "\n";                       // new line     
            }                                              
        
            console.log(out);                      // output
        }

        else if (shape.value === "top right")
        {
            console.clear();    // clear the console
            console.log("Star Pattern - Top right");

            for (let k = 0; k <= row; k++)          // rows
            {                                               
                for (let l = 0; l < k; l++)         // spaces
                {                                        
                    out += " ";                          
                }                                           
                for (let m = 0; m < row - k; m++)   // columns       
                {                                        
                    out += "*";
                }
                out += "\n";                        // new line
            }                                          
        
            console.log(out);
        }

        else if (shape.value === "bottom left")
        {
            console.clear();    // clear the console
            console.log("Star Pattern - Bottom left");

            for (let n = 1; n <= row; n++)          // rows      
            {                                             
                for (let o = 0; o < n; o++)         // columns       
                {                                         
                    out += "*";                         
                }                                         
                out += "\n";                        // new line          
            }                   
            
            console.log(out);                       // output
        }

        else if (shape.value === "bottom right")
        {
            console.clear();    // clear the console
            console.log("Star Pattern - Bottom right");

            for (let p = 1; p <= row; p++)          // rows
            {                                               
                for (let q = 0; q < row - p; q++)   // space        
                {                                           
                    out += " ";                           
                }                                           
                for (let r = 0; r < p; r++)         // columns        
                {                                           
                    out += "*";
                }
                out += "\n";                        // new line
            } 
            
            console.log(out);                       // output
        }

        else if (shape.value === "triangle")
        {
            console.clear();    // clear the console
            console.log("Star Pattern - Triangle");

            for (let s = 1; s <= row; s++)          // rows
            {
                for (let t = row; t > s; t--)       // space
                {                                      
                    out += " ";                     
                }                                      
                for (let u = 0; u < s * 2 - 1; u++) // columns     
                {                                       
                    out += "*";                      
                }
                out += "\n";                        // new line
            }
            console.log(out);                       // output
        }
    }

    // ----------------------------------------------------------------------------------------------------------------------

    else if (pat.value === "numbers pattern")
    {
        if (shape.value === "top left")
        {
            console.clear();    // clear the console
            console.log("Numbers Pattern - Top left");

            for(let i = 1; i <= num_row + 1; i++)               // rows
            {                                              
                for(let j = 1; j <= num_row - i + 1; j++)       // columns 
                {                                        
                    out += j;                           
                }                                       
                out += "\n";                                    // new line
            }                                           
                                                        
            console.log(out);                                   // output
        }

        else if (shape.value === "top right")
        {
            console.clear();    // clear the console
            console.log("Numbers Pattern - Top right");

            for (let k = 1; k <= num_row; k++)                  // rows
            {                                               
                for (let l = 0; l < k; l++)                     // space
                {                                          
                    out += " ";                          
                }                                           
                for (let m = 1; m <= num_row - k + 1; m++)      // columns
                {                                         
                    out += m;
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom left")
        {
            console.clear();    // clear the console
            console.log("Numbers Pattern - Bottom left");

            for (let n = 1; n <= num_row; n++)                  // rows 
            {                                           
                for (let o = 1; o < n + 1; o++)                 // columns
                {                                        
                    out += o;                        
                }                                        
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom right")
        {
            console.clear();    // clear the console
            console.log("Numbers Pattern - Bottom right");

            for (let p = 1; p <= num_row; p++)                  // rows
            {
                for (let q = 0; q < num_row - p; q++)           // space
                {                                        
                    out += " ";                        
                }                                       
                for (let r = 1; r < p + 1; r++)                 // columns
                {                                         
                    out += r;
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "triangle")
        {
            console.clear();    // clear the console
            console.log("Numbers Pattern - Triangle");

            for (let s = 1; s <= num_row; s++)                  // rows
            {
                for (let t = num_row; t > s; t--)               // space
                {                                     
                    out += " ";                      
                }                                      
                for (let u = 0; u < s * 2 - 1; u++)             // columns
                {                                      
                    out += u + 1;                        
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

    }

    // ----------------------------------------------------------------------------------------------------------------------

    else if (pat.value === "reverse numbers pattern")
    {
        if (shape.value === "top left")
        {
            console.clear();    // clear the console
            console.log("Reverse Numbers Pattern - Top left");
    
            for(let i = 1; i <= num_row + 1; i++)               // rows
            {                                            
                for(let j = 1; j <= num_row - i + 1; j++)       // columns
                {                                         
                    out += num_row - j + 1;                 
                }                                         
                out += "\n";                                    // new line
            }                                           
                                                        
            console.log(out);                                   // output
        }

        else if (shape.value === "top right")
        {
            console.clear();    // clear the console
            console.log("Reverse Numbers Pattern - Top right");

            for (let k = 1; k <= num_row; k++)                  // rows
            {                                           
                for (let l = 0; l < k; l++)                     // space
                {                                         
                    out += " ";                       
                }                                        
                for (let m = 1; m <= num_row - k + 1; m++)      // columns
                {                                         
                    out += num_row - m + 1;
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom left")
        {
            console.clear();    // clear the console
            console.log("Reverse Numbers Pattern - Bottom left");

            for (let n = 1; n <= num_row; n++)                  // rows
            {                                             
                for (let o = 0; o < n; o++)                     // columns
                {                                       
                    out += (num_row - o);                    
                }                                        
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom right")
        {
            console.clear();    // clear the console
            console.log("Reverse Numbers Pattern - Bottom right");

            for (let p = 1; p <= num_row; p++)                  // rows
            {
                for (let q = 0; q < num_row - p; q++)           // space
                {                                        
                    out += " ";                       
                }                                        
                for (let r = 1; r <= p ; r++)                   // columns
                {                                       
                    out += num_row - r + 1;
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "triangle")
        {
            console.clear();    // clear the console
            console.log("Reverse Numbers Pattern - Triangle");
            
            sample = num_row + 3    // helps to maintain the triangle shape

            for (let s = 1; s <= num_row; s++)                  // rows
            {
                for (let t = num_row; t > s; t--)               // space
                {                                        
                    out += " ";                         
                }                                        
                for (let u = 0; u < s * 2 - 1; u++)             // columns
                {                                 
                    out += sample - u;                        
                }
                out += "\n";                                    // new line
            }
            
            console.log(out);                                   // output
        }
    }

    // ----------------------------------------------------------------------------------------------------------------------

    else if (pat.value === "running numbers pattern")
    {
        if (shape.value === "top left")
        {
            console.clear();    // clear the console
            console.log("Running Numbers Pattern - Top left");

            for(let i = 1; i <= num_row + 1; i++)               // rows 
            {                                             
                for(let j = 1; j <= num_row - i + 1; j++)       // columns
                {                           
                    if (count <= 9)     // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (count + ' ') + ' ';
                        count += 1;
                    }             
                    else                // greater than 9 (doesn't need space)
                    {
                        out += count + ' ';                        
                        count += 1;                          
                    }
                }                                        
                out += "\n";                                    // new line
            }                                           
                                                        
            console.log(out);                                   // output
        }
        
        else if (shape.value === "top right")
        {
            console.clear();    // clear the console
            console.log("Running Numbers Pattern - Top right");
    
            count -= count;
            count += 1;
    
            for (let k = 1; k <= num_row; k++)                  // rows
            {                                             
                for (let l = 0; l < k; l++)                     // space
                {                                         
                    out += "   ";                          
                }                                       
                for (let m = 1; m <= num_row - k + 1; m++)      // columns
                {                                         
                    if (count <= 9)     // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out  + ' ' + (' ' + count);
                        count += 1;
                    }             
                    else               // greater than 9 (doesn't need space)
                    {
                        out += ' ' + count;                        
                        count += 1;                          
                    }
                }
                out += "\n";                                    // new line
            }
    
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom left")
        {
            console.clear();    // clear the console
            console.log("Running Numbers Pattern - Bottom left");

            count -= count;
            count += 1;

            for (let n = 1; n <= num_row; n++)                  // rows
            {                                           
                for (let o = 1; o < n + 1; o++)                 // columns
                {                                        
                    if (count <= 9)     // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (count + ' ') + ' ';
                        count += 1;
                    }             
                    else                // greater than 9 (doesn't need space)
                    {
                        out += count + ' ';                        
                        count += 1;                          
                    }                        
                }                                         
                out += "\n";                                    // new line
            }

            console.log(out);                                   // output
        }

        else if (shape.value === "bottom right")
        {
            console.clear();    // clear the console
            console.log("Running Numbers Pattern - Bottom right");
    
            count -= count;
            count += 1;
    
            for (let p = 1; p <= num_row; p++)                  // rowa
            {
                for (let q = 0; q < num_row - p; q++)           // space
                {                                       
                    out += "   ";                        
                }                                      
                for (let r = 1; r < p + 1; r++)          
                {                                      
                    if (count <= 9)         // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (' ' + count) + ' ';
                        count += 1;
                    }             
                    else                    // greater than 9 (doesn't need space)
                    {
                        out += count + ' ';                        
                        count += 1;                          
                    }
                }
            out += "\n";                                        // new line
            }
    
            console.log(out);                                   // output
        }

        else if (shape.value === "triangle")
        {
            console.clear();    // clear the console
            console.log("Running Numbers Pattern - Triangle");

            count -= count;
            count += 1;
    
            for (let s = 1; s <= num_row; s++)                  // rowa
            {
                for (let t = num_row; t > s; t--)               // space
                {                                       
                    out += "   ";                    
                }                                      
                for (let u = 0; u < s * 2 - 1; u++)             // columns
                {                                      
                    if (count <= 9)     // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (count + ' ') + ' ';
                        count += 1;
                    }             
                    else               // greater than 9 (doesn't need space)
                    {
                        out += count + ' ';                        
                        count += 1;                          
                    }                      
                }
                out += "\n";                                    // new line
            }
    
            console.log(out);                                   // output
        }
    }

    // ----------------------------------------------------------------------------------------------------------------------

    else if (pat.value === "running reverse numbers pattern")
    {
        if (shape.value === "top left")
        {
            console.clear();    // clear the console
            console.log("Running Reverse Numbers Pattern - Top left");

            for(let i = 1; i <= num_row + 1; i++)              // rows
            {                                        
                for(let j = 1; j <= num_row - i + 1; j++)      // columns
                {                       
                    if (r_count <= 9)       // will add the space from 1 to 9 numbers to maintain the space
                    {

                        out = out + (r_count + ' ') + ' ';                
                        r_count -= 1;
                    }             
                    else                    // greater than 9 (doesn't need space)
                    {
                        out += r_count + ' ';                
                        r_count -= 1;                     
                    }                 
                }                                       
                out += "\n";                                    // new line
            }                                           
                                                        
            console.log(out);                                   // output
        }

        else if (shape.value === "top right")
        {
            console.clear();    // clear the console
            console.log("Running Reverse Numbers Pattern - Top right");

            r_count -= r_count;
            r_count += 15;
        
            for (let k = 1; k <= num_row; k++)                  //rows
            {                                            
                for (let l = 0; l < k; l++)                     // space
                {                                         
                    out += "   ";                        
                }                                         
                for (let m = 1; m <= num_row - k + 1; m++)      // columns
                {                                         
                    if (r_count <= 9)       // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (' ' + r_count) + ' ';                
                        r_count -= 1;
                    }             
                    else                    // greater than 9 (doesn't need space)
                    {
                        out += r_count + ' ';                
                        r_count -= 1;                     
                    }
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom left")
        {
            console.clear();    // clear the console
            console.log("Reverse Running Numbers Pattern - Bottom left");

            r_count -= r_count;
            r_count += 15;
        
            for (let n = 1; n <= num_row; n++)                  // rows
            {                                           
                for (let o = 0; o < n; o++)                     // columns
                {                                         
                    if (r_count <= 9)       // will add the space from 1 to 9 numbers to maintain the space
                    {
                        out = out + (r_count + ' ') + ' ';                
                        r_count -= 1;
                    }             
                    else                    // greater than 9 (doesn't need space)
                    {
                        out += r_count + ' ';                
                        r_count -= 1;                     
                    }                  
                }                                        
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "bottom right")
        {
            console.clear();    // clear the console
            console.log("Reverse Running Numbers Pattern - Bottom right");

            r_count -= r_count;
            r_count += 15;

            for (let p = 1; p <= num_row; p++)                  // rows
            {
                for (let q = 0; q < num_row - p; q++)           // space
                {                                        
                    out += "   ";                       
                }                                       
                for (let r = 1; r <= p ; r++)                   // columns
                {                                        
                    if (r_count <= 9)           // will add the space from 1 to 9 numbers to maintain the space
                    {
        
                        out = out + (' ' + r_count) + ' ';                
                        r_count -= 1;
                    }             
                    else                        // greater than 9 (doesn't need space)
                    {
                        out += r_count + ' ';                
                        r_count -= 1;                     
                    }
                }
                out += "\n";                                    // new line
            }
        
            console.log(out);                                   // output
        }

        else if (shape.value === "triangle")
        {
            console.clear();    // clear the console
            console.log("Reverse Running Numbers Pattern - Triangle");

            r_count -= r_count;
            r_count += 25;
          
            for (let s = 1; s <= num_row; s++)                  // rows
            {
                for (let t = num_row; t > s; t--)               // space
                {                                        
                    out += "   ";                       
                }                                        
                for (let u = 0; u < s * 2 - 1; u++)             // columns
                {                                 
                    if (r_count <= 9)       // will add the space from 1 to 9 numbers to maintain the space
                    {

                        out = out + (' ' + r_count) + ' ';                
                        r_count -= 1;
                    }             
                    else                    // greater than 9 (doesn't need space)
                    {
                        out += r_count + ' ';                
                        r_count -= 1;                     
                    }              
                }
                out += "\n";                                    // new line
            }

            console.log(out);                                   // output
        }
    }

}


// hover effect style
function hov(a)
{
    a.style.transition = "all 0.2s ease-out";
}
