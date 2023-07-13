function airtimeWidget(){
    return {
        airtimeAvailable: "",
        useString: "",
        totalUsage:0,
        amountLeft:0,
        balance: 0,
        enoughAirtime(airtimeUsage, airtime){
            airtime = this.airtimeAvailable
            airtimeUsage = this.useString

            var airtimeUse = airtimeUsage.split(",");
            
              for (var i = 0; i < airtimeUse.length; i++){
                   var projectedUsage = airtimeUse[i].trim();
                   if (projectedUsage.startsWith("c")){
                       this.totalUsage += 1.88;
                       }
                   else if(projectedUsage.startsWith("d")){
                       this.totalUsage+= 12;
                           }
                   else if(projectedUsage.startsWith("s")){
                        this.totalUsage += 0.75;
                           }
              }
            this.amountLeft = this.airtimeAvailable -= airtimeUsage;
            console.log(this.amountLeft)
            if (this.amountLeft > 0){
              this.balance += this.amountLeft;
              
            }
            
            else if (this.amountLeft <= 0){
                this.balance += 0.00 
                }
            }
    }
}
