class DateUseCase{
    constructor(unix){
        if(unix) this.date = new Date(parseInt(unix));
        else {
            const now = new Date();
            const nowInUnix = now.getTime()
            this.date = new Date(parseInt(nowInUnix));
        }
    }
    getUtcDate(){
        const utc = this.date.toUTCString();
        return utc;
    }
    getUnixDate(){
        const unix = Math.floor(this.date.getTime() / 1000);
        return unix;
    }


}
module.exports = DateUseCase;