//h=happiness, a= anger, s= sadness, f=fear

var emotion

function getEmotion(h,a,s,f){
  if(h >70){
    if(a>70){
      if(s>70){
        if(f>70){
          return 1
        }
        else{
          return 2
        }
      }
      else{
        return 3
      }
    }
    else if(s>70){
      if(f>70){
        return 1
      }
      else{
        return 2
      }
    }
    else if(f>70){
      return 12
    }
    else{
      return 4
    }
  }
  else if(a>70){
    if(s>70){
      if(f>70){
        return 5
      }
      else{
        return 6
      }
    }
    else if(f>70){
      return 2
    }
    else{
      return 7
    }
  }
  else if(s>70){
    if(f>70){
      return 8
    }
    else{
      return 9
    }
  }
  else if(f>70){
    return 10
  }
  else if((h<30)&&(a<30)&&(s<30)&&(f<30)){
    return 11
  }
  else{
    return 0
  }
}

function switchStatement(){
  switch(getEmotion(userh,usera,users,userf)) { 
    case 0: { 
        return 'Unknown'
        break; 
    } 
    case 1: { 
        return 'Overwhlemed' 
        break; 
    }
    case 2: { 
        return 'Confused'
        break; 
    }
    case 3: { 
        return 'Confused'
        break; 
    }
    case 4: { 
        return 'Happy'
        break; 
    }
    case 5: { 
        return 'Despair'
        break; 
    }
    case 6: { 
        return 'Bitter'
        break; 
    } 
    case 7: { 
        return 'Angry'
        break; 
    } 
    case 8: { 
        return 'Anxious'
        break; 
    } 
    case 9: { 
        return 'Sad'
        break; 
    } 
    case 10: { 
        return 'Afraid'
        break; 
    } 
    case 11: { 
        return 'Depressed'
        break; 
    } 
    case 12: { 
        return 'Worried'
        break; 
    } 
    default: { 
        return 'OOOOOPS'
        break; 
    } 
  } 
}


//userEmo = getEmotion(happy, angry, sad, fearful)
//print("\nMood:"+emotion[userEmo])

