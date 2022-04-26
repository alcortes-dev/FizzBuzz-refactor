
class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        const { score } = explorer;
        if(score % 3 === 0 && score % 5 === 0){
            explorer.trick = "FIZZBUZZ";
            return null;
        }else if(score % 3 === 0){
            explorer.trick = "FIZZ";
            return null;
        }else if( score % 5 === 0){
            explorer.trick = "BUZZ";
            return null;
        }else{
            explorer.trick = score;
        }
    }
}

module.exports = FizzbuzzService;
