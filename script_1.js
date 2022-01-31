function hov(a)
{
    a.style.transition = "all 0.2s ease-out";
}

function star_pat()
{
    console.clear()

    console.log("Star Pattern");

    let row = 7;
    let out_1 = "";

    for(let i = 0; i <= row; i++) 
    {                                              
        for(let j = 0; j < row - i; j++)            
        {                                          
            out_1 += "*";                          
        }                                          
        out_1 += "\n";                            
    }                                              

    console.log(out_1);

    // ------------------------------------------------------------------------

    let out_2 = "";

    for (let k = 0; k <= row; k++)
    {                                               
        for (let l = 0; l < k; l++)               
        {                                        
            out_2 += " ";                          
        }                                           
        for (let m = 0; m < row - k; m++)          
        {                                        
            out_2 += "*";
        }
    out_2 += "\n";
    }

    console.log(out_2);

    // ------------------------------------------------------------------------

    let out_3 = "";

    for (let n = 1; n <= row; n++)                
    {                                             
        for (let o = 0; o < n; o++)               
        {                                         
            out_3 += "*";                         
        }                                         
    out_3 += "\n";                                  
    }

    console.log(out_3);

    // ------------------------------------------------------------------------

    let out_4 = "";

    for (let p = 1; p <= row; p++)
    {                                               
        for (let q = 0; q < row - p; q++)           
        {                                           
            out_4 += " ";                           
        }                                           
        for (let r = 0; r < p; r++)                 
        {                                           
            out_4 += "*";
        }
    out_4 += "\n";
    }

    console.log(out_4);

    // ------------------------------------------------------------------------

    let out_5 = "";

    for (let s = 1; s <= row; s++)
    {
        for (let t = row; t > s; t--)        
        {                                      
            out_5 += " ";                     
        }                                      
        for (let u = 0; u < s * 2 - 1; u++)      
        {                                       
            out_5 += "*";                      
        }
    out_5 += "\n";
    }

    console.log(out_5);

    // ----------------------------------------------------------------------
    
}

function nums_pat()
{
    console.clear()
    console.log("Numbers Pattern");

    let row = 5;
    let out_1 = "";
    let count = 1;

    for(let i = 1; i <= row + 1; i++) 
    {                                             
        for(let j = 1; j <= row - i + 1; j++)      
        {                           
            if (count <= 9)
            {
                out_1 = out_1 + ('0' + count) + ' ';
                count += 1;
            }             
            else
            {
                out_1 += count + ' ';                        
                count += 1;                          
            }
        }                                        
    out_1 += "\n";                                 
    }                                           
                                                
    console.log(out_1);

    // ------------------------------------------------------------------------

    let out_2 = "";
    count -= count;
    count += 1;

    for (let k = 1; k <= row; k++)
    {                                             
        for (let l = 0; l < k; l++)               
        {                                         
            out_2 += "   ";                          
        }                                       
        for (let m = 1; m <= row - k + 1; m++)    
        {                                         
            if (count <= 9)
            {
                out_2 = out_2  + ' ' + ('0' + count);
                count += 1;
            }             
            else
            {
                out_2 += ' ' + count;                        
                count += 1;                          
            }
        }
    out_2 += "\n";
    }

    console.log(out_2);

    // ------------------------------------------------------------------------

    let out_3 = "";
    count -= count;
    count += 1;

    for (let n = 1; n <= row; n++)
    {                                           
        for (let o = 1; o < n + 1; o++)         
        {                                        
            if (count <= 9)
            {
                out_3 = out_3 + ('0' + count) + ' ';
                count += 1;
            }             
            else
            {
                out_3 += count + ' ';                        
                count += 1;                          
            }                        
        }                                         
    out_3 += "\n";
    }

    console.log(out_3);

    // ------------------------------------------------------------------------

    let out_4 = "";
    count -= count;
    count += 1;

    for (let p = 1; p <= row; p++)
    {
        for (let q = 0; q < row - p; q++)       
        {                                       
            out_4 += "   ";                        
        }                                      
        for (let r = 1; r < p + 1; r++)          
        {                                      
            if (count <= 9)
            {
                out_4 = out_4 + ('0' + count) + ' ';
                count += 1;
            }             
            else
            {
                out_4 += count + ' ';                        
                count += 1;                          
            }
        }
    out_4 += "\n";
    }

    console.log(out_4);

    // ------------------------------------------------------------------------

    let row_1 = 5;
    let out_5 = "";
    count -= count;
    count += 1;

    for (let s = 1; s <= row_1; s++)
    {
        for (let t = row_1; t > s; t--)       
        {                                       
            out_5 += "   ";                    
        }                                      
        for (let u = 0; u < s * 2 - 1; u++)     
        {                                      
            if (count <= 9)
            {
                out_5 = out_5 + ('0' + count) + ' ';
                count += 1;
            }             
            else
            {
                out_5 += count + ' ';                        
                count += 1;                          
            }                      
        }
    out_5 += "\n";
    }

    console.log(out_5);

    // ----------------------------------------------------------------------
}

function rev_nums_pat()
{
    console.clear()
    console.log("Reverse Numbers Pattern");

    let row = 5;
    let out_1 = "";
    let count = 15;

    for(let i = 1; i <= row + 1; i++) 
    {                                        
        for(let j = 1; j <= row - i + 1; j++)     
        {                       
            if (count <= 9)
            {

                out_1 = out_1 + ('0' + count) + ' ';                
                count -= 1;
            }             
            else
            {
                out_1 += count + ' ';                
                count -= 1;                     
            }                 
        }                                       
    out_1 += "\n";                               
    }                                           
                                                
    console.log(out_1);

    // ------------------------------------------------------------------------

    let out_2 = "";
    count -= count;
    count += 15;

    for (let k = 1; k <= row; k++)
    {                                            
        for (let l = 0; l < k; l++)              
        {                                         
            out_2 += "   ";                        
        }                                         
        for (let m = 1; m <= row - k + 1; m++)   
        {                                         
            if (count <= 9)
            {
                out_2 = out_2 + ('0' + count) + ' ';                
                count -= 1;
            }             
            else
            {
                out_2 += count + ' ';                
                count -= 1;                     
            }
        }
    out_2 += "\n";
    }

    console.log(out_2);

    // ------------------------------------------------------------------------

    let out_3 = "";
    count -= count;
    count += 15;

    for (let n = 1; n <= row; n++)               
    {                                           
        for (let o = 0; o < n; o++)             
        {                                         
            if (count <= 9)
            {

                out_3 = out_3 + ('0' + count) + ' ';                
                count -= 1;
            }             
            else
            {
                out_3 += count + ' ';                
                count -= 1;                     
            }                  
        }                                        
    out_3 += "\n";
    }

    console.log(out_3);

    // ------------------------------------------------------------------------

    let out_4 = "";
    count -= count;
    count += 15;

    for (let p = 1; p <= row; p++)
    {
        for (let q = 0; q < row - p; q++)       
        {                                        
            out_4 += "   ";                       
        }                                       
        for (let r = 1; r <= p ; r++)             
        {                                        
            if (count <= 9)
            {

                out_4 = out_4 + ('0' + count) + ' ';                
                count -= 1;
            }             
            else
            {
                out_4 += count + ' ';                
                count -= 1;                     
            }
        }
    out_4 += "\n";
    }

    console.log(out_4);

    // ------------------------------------------------------------------------

    let row_1 = 5;
    let out_5 = "";
    count -= count;
    count += 25;

    for (let s = 1; s <= row_1; s++)
    {
        for (let t = row_1; t > s; t--)          
        {                                        
            out_5 += "   ";                       
        }                                        
        for (let u = 0; u < s * 2 - 1; u++)      
        {                                 
            if (count <= 9)
            {

                out_5 = out_5 + ('0' + count) + ' ';                
                count -= 1;
            }             
            else
            {
                out_5 += count + ' ';                
                count -= 1;                     
            }              
        }
    out_5 += "\n";
    }

    console.log(out_5);

    // ----------------------------------------------------------------------
}