console.log(document.all);
console.log(document.body);

/* first example about array*/ 
let forNavn ='obi';
let efterNavn = 'totakhil';
let faceBook = 'facebook';
let instaGram = 'instagram';
let snapChat = 'snapchat';

let contents = document.querySelector('.contents');
contents.style.backgroundColor = 'red';
contents.style.display = 'flex';
contents.style.justifyContent = 'space-evenly';
contents.style.listStyle = 'none';



/*about my firstname*/ 
let for_Navn = document.querySelector('#fornavn');
for_Navn.textContent = 'obaidullah';


/* about second name*/ 
let efter_Navn = document.querySelector('#efternavn');
efter_Navn.textContent = 'totakhil';


/* about facebook*/ 
let face_Book = document.querySelector('#facebook');
face_Book.textContent = 'obi@yahoo.com';


/* about instagram*/ 
let insta_Gram = document.querySelector('#instagram');
insta_Gram.textContent = 'har ikke';


/* about snapchat*/
let snap_Chat = document.querySelector('#snapchat');
snap_Chat.textContent = 'har ikke';

