*{
    
   /* margin: 0;
    padding: 0;*/
    box-sizing: border-box;
}

/*main style*/
html,body{
    
    /*font-family: 'Roboto',sens-serif*/

}
 a{
    text-decoration: none;    /*ازالة الخط تحت اللينك*/
}
/*Utility Classes*/
.container{
    
    
}
.bg-dark{
    background-color: #252A34;
}

.text-primary{
    color: #ff2e63;
}
.center{
    text-align: center;
}
.l-heading{
    font-size: 3rem;
    text-transform: uppercase;
}
.py-1{
    padding: 1.5rem 0;
}
.btn{
    background-color: #08d9d6;
    color: #fff;
    padding: .5rem 1.5rem;
    border-radius: 5px;
    
}
.btn:hover{
    background-color: #ff2e63;
    
    
}
/*section navbar*/
#navbar{
    display: flex;
    justify-content: space-between;  /*minuts 24 part1*/
    align-items: center;
    padding: 1rem;
    border-radius: 10px; /*من عندى*/
    position: sticky;  
    top: 0;  
    z-index: 1; 
    
}
#navbar .logo i{
   font-size: 2rem;         /*من عندى*/
    /*padding-left: .72rem;*/   /*من عندى*/
    color: #fff; /*من عندى*/
} 

#navbar ul{
    list-style: none;
    display: flex;
}
#navbar ul li a{
    color: #fff;
    padding: 1rem;
    
}
#navbar ul li a:hover{
    background-color: #08d9d6;        /*minuts 27 part1*/
    border-radius: 5px;
}

















































/*

nav{   
    display: flex;                             
    justify-content: space-between;
     align-items: center;
    max-width: 1366px;
    height: 10vh;
    margin: 1rem auto;
    padding: 0 5rem;
}
nav .logo{
     
    font-size: 2rem;
   
}
nav .logo i{
     
    margin-left: 1rem;
   
}
nav .nav-itemes{
    display: flex;
    list-style-type: none;
}
nav .nav-item{
    padding-right: 1rem;
}
nav .nav-link{
    text-decoration: none;
    color: #4e547e;
    font-size: 1.4rem;
}
*/