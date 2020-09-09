class CurrentDate{
    
    static now = new Date();
    static months = ['January', 'Februay', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    static days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    static getDate(){
       return `${CurrentDate.now.getDate()} ${CurrentDate.months[now.getMonth()]}, ${CurrentDate.days[now.getDay()]}`;
    }
}

export default CurrentDate


