//ambigous
var pics = [
    "necker_cube.jpg",              //0,2
    "triangle_completion.png",      //1,1
    "duck_or_rabbit.jpg"            //2,0
];

var explain = [
    "You can experience the cube in two distinct ways:\n"+
    "1. With the yellow face being the front of the cube, facing the top left\n"+
    "direction\n"+
    "2. With the yellow face being the back of the cube, with the rest of the cube\n"+
    "coming out in the right direction.\n"+
    "You can change one orientation to the other by simply thinking about it,\n"+
    "however you cannot ‘hold’ one orientation for very long.\n"+
    "The first interpretation the Brain makes which is incorrect is that the shape\n"+
    "is 3D, although we consciously know that the cube is\n"+
    "a bunch of flat lines on a screen. These lines could potentially be interpreted\n"+
    "as something else other than a cube. However, the \n"+
    "brain sees the cube as the most likely interpretations.\n"+
    "The Brain sees both orientations as equally likely. Disruptions of any sort\n"+
    "(eg. blinking, eye-movements, top-down commands) causes\n"+
    "the orientations to ‘flip’.",
    "This illusion consists of the Brain seeing the empty space in the middle\n"+
    "as brighter than the background which causes an inverted triangle with a white\n"+
    "outline to appear along with a normal triangle with a black outline. Of course, these shapes\n"+
    "don’t actually exist. This can be explained using Gestalt's Law of closure.\n"+
    "This states that objects that are grouped together tend to be seen as being\n"+
    "part of a whole. We tend to ignore gaps and perceive contour lines in\n"+
    "order to make the image appear as a cohesive whole.",
    "If you see a duck, look at the beak and imagine it as rabbit ears.\n"+
    "If you see a rabbit, look at the the ears and imagine them as a duck’s beak. \n"+
    "There is disagreement on how this illusions works, whether it is the\n"+
    "visual experience that changes when seeing a rabbit vs. a duck or the\n"+
    "mental process that changes, for example due to expectations prior to\n"+
    "looking at the image or after the first experience. However,\n"+
    "the retinal image is agreed to stay constant."
];


var next = document.querySelector(".next");
var a_img = document.querySelector("#ni");
var counter = 1;

next.addEventListener("click", function(){
    if(counter === 3){
        counter = 0;
    }

    document.getElementById("txt").innerHTML = explain[counter]
    a_img.src = pics[counter]
    
    counter = counter + 1
});




// distorting
var pics1 = [
    "cw.png",           //0,2 
    "ml.png"         
];

var explain1 = [
    "This illusion consists of individual rows which have been displaced. "+
    "The grey lines seem as if they are at an angle with respect to one another- "+ 
    "in fact they all parallel. To explain this using the hypothesis that the mind " +
    "is made up of sections where their processes are not accessible to the "+
    "conscious awareness of a person, a person is still able to be consciously "+
    "aware that the illusion that is taking place but will nevertheless experience " +
    "the illusion. This shows that the visual system is not cognitively impenetrable "+
    "and counts against the claim that perceptual states are belief-like (ie.you see what you believe). ",
    "Here, the line on the left may seem longer than the one in the right but they "+
    "are in fact the same length. One explanation for this is the size constancy explanation "+
    "which states that this illusion works as our size constancy scaling is misapplied. "+
    "Size constancy allows us to perceive objects whilst taking distance into account eg." +
    "the height of a person. Another explanation is the conflicting cues explanation. "+
    "This states that our ability to perceive the length of the line depends on the length "+
    "of the line itself and the length of the overall line. Since the figure with arrowheads "+
    "facing it has a longer overall length, it causes the line with arrowhead facing out to seem shorter."
    
];

var next1 = document.querySelector(".next1");
var d_img = document.querySelector("#cw");
var counter = 1;

next1.addEventListener("click", function(){
    if(counter === 2){
        counter = 0;
    }

    document.getElementById("txt1").innerHTML = explain1[counter]
    d_img.src = pics1[counter]

    counter = counter + 1;
});


//paradox
var pics2 = [
    "pt1.jpg",           //0,2
    "vi.jpg",           //1,1
];

var explain2 = [
    "When looking at the Penrose triangle you will see something that "+
    "appears physically possible, but after looking at it for some time, "+
    "you can see that it is physically impossible to construct such a shape. "+
    "However, your perception of the triangle does not change for the same "+
    "reason your perception of the Cafe Wall illusion does not change after "+
    "recognising how the illusion works, using the hypothesis that the mind "+
    "is made up of modules in which the processes are not accessible to the "+
    "conscious awareness of a person. Due to this, a person will still experience "+
    "the illusion of the Penrose Triangle although they are consciously aware that "+
    "the illusion is taking place. This shows that the visual system is not "+
    "cognitively impenetrable and counts against the claim that perceptual states "+
    "are belief-like (ie.you see what you believe).",
    "On the left hand of this illusion there appears to be three prongs. "+
    "However, on the right hand side there only appears to be two. "+
    "What’s interesting is that even after we realise that this cannot actually "+
    "exist in a three-dimential space, we still see the illusion and not a bunch "+
    "of line on the page. This can be explained once again using the hypothesis "+
    "that the mind is modular and therefore we only consciously receive the outputs "+
    "of each part and we can’t consciously change the inputs we receive. "+
    "Due to this, a person will still experience the illusion of the Impossible Trident "+
    "although they are consciously aware that the illusion is taking place. "+
    "This shows that the visual system is not cognitively impenetrable and counts against "+
    "the claim that perceptual states are belief-like (ie.you see what you believe)."
];


var next2 = document.querySelector(".next2");
var p_img = document.querySelector("#pt");
var counter = 1;

next2.addEventListener("click", function(){
    if(counter === 2){
        counter = 0;
    }

    document.getElementById("txt2").innerHTML = explain2[counter]
    p_img.src = pics2[counter]

    counter = counter + 1;
});


// grey block
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('gb');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('gb'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

