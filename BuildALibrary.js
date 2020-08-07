class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(check){
      this._isCheckedOut = check;
    }
    toggleCheckOutStatus(){
      this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
    }
    getAverageRating(){
      let sum=0;
      sum = this._ratings.reduce((ca,cc) => ca+cc);
      return sum/this._ratings.length;
    }
    addRating(rate){
        if (rate >= 1 && rate <=5) {
            this._ratings.push(rate);
        } else{
            console.log('Rate must be between 1-5')
        }
    }
  }
  
  class Book extends Media {
    constructor(author,title,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  
  }
  
  class Movie extends Media {
    constructor(director,title,runtime){
      super(title);
      this._director = director;
      this._runtime = runtime;
    }
    get director(){
      return this._director;
    }
    get runtime(){
      return this._runtime;
    }
  }

  class CD extends Media {
    constructor(title,songTitles) {
      super(title);
      this._songTitles = songTitles;
    }
    get songTitles(){
      return this._songTitles;
    }
    shuffle(){
        let randomSongList = [];
        let randomSongIndex;
        while(true){
            randomSongIndex = Math.floor(Math.random()*this._songTitles.length);
            if(!randomSongList.includes(this._songTitles[randomSongIndex])){
                randomSongList.push(this._songTitles[randomSongIndex]);
            }
            if(randomSongList.length==this._songTitles.length){
                break;
            }
        }
        return randomSongList;
    }
  }

  class Catalog {
    constructor(){
      this._mediaItems = [];
    }
    get mediaItems(){
      return this._mediaItems;
    }
    addMedia(media) {
      this._mediaItems.push(media);
    }
  }

  
  /*const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everythins',544);
 
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Jan de Bont','Speed',116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());

  const royalty = new CD('royalty', ['Back to Sleep','Fine by Me','Wrist'])
  royalty.toggleCheckOutStatus();
  console.log(royalty.isCheckedOut);
  royalty.addRating(5);
  royalty.addRating(5);
  royalty.addRating(5);
  console.log(royalty.getAverageRating());

  const myMedias = new Catalog();

  myMedias.addMedia(speed);
  myMedias.addMedia(historyOfEverything);
  myMedias.addMedia(royalty);

  console.log(myMedias.mediaItems);*/

  const royalty = new CD('royalty', ['Back to Sleep','Fine by Me','Wrist']);
  console.log(royalty.songTitles);
  console.log(royalty.shuffle());


