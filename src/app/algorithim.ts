//h=happiness, a= anger, s= sadness, f=fear
function algorithim(h,a,s,f){
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
      return 3
    }
  }
  else if(s>70){
    if(f>70){
      return 8
    }
  }
}

emotion = {1:'Overwhlemed', 2: 'confused', 3:'confused', 4:'happy', 5: 'despair', 6:'bitter',7:'angry',8: 'anxious', 9: 'sad', 10:'afraid', 11:'depressed',12: 'worried', 0: 'unknown'}

userEmo = getEmotion(happy, angry, sad, fearful)
print("\nMood:"+emotion[userEmo])

