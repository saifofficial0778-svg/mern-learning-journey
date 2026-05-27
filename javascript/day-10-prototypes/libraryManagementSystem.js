function Book(title,author){
    this.title=title;
    this.author=author;
}

Book.prototype.getDetails=function(){
    console.log(`This book ${this.title} is written by ${this.author} `);
}

function Ebook(title,author,fileSize){
    Book.call(this,title,author);
    this.fileSize=fileSize;

}
Ebook.prototype=Object.create(Book.prototype);
Ebook.prototype.constructor=Ebook;

Ebook.prototype.downloadBook=function(){
    console.log(`Downloading ${this.title} of size ${this.fileSize}MB...`)
}

const myBook = new Ebook("The_Rain","Saif",50);

myBook.downloadBook();
myBook.getDetails();