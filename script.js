var qouts=[`Oscar Wilde
“Be yourself; everyone else is already taken.”
`,
`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control
“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
`,
`“So many books, so little time.”
`,
`“A room without books is like a body without a soul.”
`,
`'“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
`,
`“If you tell the truth, you don't have to remember anything.”
,
`,
`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
`,
`“A friend is someone who knows all about you and still loves you.”
`,
`Oscar Wilde
“To live is the rarest thing in the world. Most people exist, that is all.”
`
]
// var qouts=['1','2','3','4','5','6','7','8','9','10']
var rand=[]
var x;
var y;
function clickbtn(){
    x=Math.floor(Math.random()*qouts.length)
    y=qouts[x]
    if(qouts.length!==0){
    console.log(y);
    document.getElementById('item').innerHTML=y

    }
    qouts.splice(x,1)
     if(qouts.length==0){
    document.getElementById('item').innerHTML='qouts is finish'
        
    }
}