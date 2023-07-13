function wordgameWidget(){
    return {
        sentence: "",
        longestword: "",
        shortestword: "",
        lenghtSum:0,
        wordsLength: 0,
        longestWord(phrase){
        phrase = this.sentence 
        var words = phrase.split(" ");
        var longest = ""
        for( var i = 0; i < words.length; i++){
        var word = words[i];
        if(word.length >= longest.length){
        longest = word;
        this.longestword = longest;
       }
       this.wordsLength = this.lenghtSum += word.length;
    }
},
        shortestWord(phrase1){
        phrase1 = this.sentence
        var words = phrase1.split(" ");
        var shortest = words[0];
        for( var i = 0; i < words.length; i++){
        var word = words[i];
        if(word.length <= shortest.length){
        shortest = word;
        this.shortestword = shortest
        }
        this.wordsLength = this.lenghtSum += word.length;
       }
        
}
}
}