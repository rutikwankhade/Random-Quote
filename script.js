
let quotes=[

           'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
           'Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)',
           'Before software can be reusable it first has to be usable. (Ralph Johnson)',
           'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)',
           'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)',
           'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)',
           'There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)',
           'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
           'It’s not a bug – it’s an undocumented feature. (Anonymous)',
           'One man’s crappy software is another man’s full-time job. (Jessica Gaston)',
           'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
           'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)',
           'Programming is like sex. One mistake and you have to support it for the rest of your life. (Michael Sinz)',
           'Deleted code is debugged code. (Jeff Sickel)',
           'Walking on water and developing software from a specification are easy if both are frozen. (Edward V Berard)',
           'If debugging is the process of removing software bugs, then programming must be the process of putting them in. (Edsger Dijkstra)',
           'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. (Anonymous)',
           'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. (Rick Cook)',
           'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes. (Keith Braithwaite)',
           'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
           'In order to understand recursion, one must first understand recursion. (Anonymous)',
           'The cheapest, fastest, and most reliable components are those that aren’t there. (Gordon Bell)',
           'The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout)',
           'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
           'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)'

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
   </div>

    `;
    div.innerHTML=quote;
    
}

