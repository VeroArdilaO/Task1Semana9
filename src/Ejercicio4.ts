//Esta en JavasScript

function updateLight(current) {
  
  
    if(current === "yellow"){
      return "red"
    } else if(current === "red"){
      return "green"
    }else if (current === "green"){
      return "yellow"
    }
  }