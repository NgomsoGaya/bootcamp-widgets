function transportWidget (){
    return{
      time: "",
      message: "",
      filler: "This shift is, ",
    calculateFee(){
      if(this.time == "morning"){
        this.message = this.filler + "R20"
      }
      else if(this.time == "afternoon"){
        this.message = this.filler + "R10"  
      }
      else if(this.time == "nightshift"){
        this.message = this.filler + "Free"
      }
      else if(this.time !== "nightshift" || this.time !== "afternoon" || this.time !== "morning"){
        this.message = this.filler + "not available"
      }
    }
    }
}
 