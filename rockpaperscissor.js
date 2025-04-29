
        
       
        const score=JSON.parse(localStorage.getItem('score'))||{wins:0,loses:0,ties:0}
        function updateScore(){
            document.querySelector('.js-score').innerHTML=` wins:${score.wins},loses:${score.loses}, ties:${score.ties}`
        }
        let computermove='';
        function pickComputermove(){
            let x=Math.random();
            if(x>=0&&x<=1/3){computermove='rock';}
            else if(x>1/3&&x<=2/3){computermove='paper';}
            else{computermove='scissor';}
            
        }
      

        function game(playermove){
            
            pickComputermove();
        let result='';
             if (playermove==='rock'){
                   
                if(computermove==='rock'){
                        result='its a tie'
                    }
                else if(computermove==='paper'){
                        result='you lose'
                    }
                else{
                    result='you win'
                    }
                }
            else if(playermove==='paper'){
                pickComputermove();
                result='';
                if(computermove==='rock'){
                    result='you win'
                }
                else if(computermove==='paper'){
                    result='its a tie'
                }
                else{
                    result='you lose'
                }
            }
            else {playermove==='scissor'
                if(computermove==='rock'){
                result='youlose'
                }
                else if(computermove==='paper'){
                result='you win'
                }
             else{
                result=('its a tie')
                }
            }
            if(result==='you win'){
                score.wins+=1
            }
            else if(result==='you lose'){
                score.loses+=1
            }
            else{
                score.ties+=1
            }
            localStorage.setItem('score', JSON.stringify(score)); 
            updateScore();
            document.querySelector('.js-result').innerHTML=`${result}`
            document.querySelector('.js-computer-move').innerHTML=`you chose
            <img src="images/${playermove}.png" class="moves">
            <img src="images/${computermove}.png" class="moves">computer chose`             
        }

    