//creating a simple object
const Circ = new mojs.Shape({
    isShowStart: true,
    radius: 100,
});

document.addEventListener('click', function(e) {
    Circ.replay();
});

const burst1 = new mojs.Burst({
    left: 0, top: 0,
    count: 7,
    radius: { 50: 250 },
    children: {
      fill: 'white',
      shape: 'polygon',
      stroke: {'white': '#A50710'},
      strokeWidth: 4,
      radius: 'rand(30, 60)',
      radiusY: 0,
      scale: {1: 0 },
      pathScale: 'rand(.5, 1)',
      degree: 360,
      isForce3d: true } 
});

document.addEventListener('click', function(e) {
    burst1.
        tune({ x: e.pageX, y: e.pageY }).
        generate().
        replay();
    Circ.replay();
});

const burst2 = new mojs.Burst({
    top: 0, 
    left: 0,
    count: 4,
    radius: { 0: 250 }, 
    children: {
        shape: ['circle', 'rect'],
        points: 5,
        fill: ['white'],
        radius: 'rand(30, 60)',
        delay: 'stagger(50)',
        easing: ['cubic.out', 'cubic.out', 'cubic.out'],
        scale: { 1: 0 },
        pathScale: 'rand(.5, 1)',
        isForce3d: true 
        }
});

document.addEventListener('click', function(e) {
    burst1.
        tune ({ x: e.pageX, y: e.pageY }).
        generate().
        replay();
    burst2.
        tune({ x: e.pageX, y: e.pageY}).
        generate().
        replay();
    Circ.
        replay();
});

// creating the variable with similar parameters
const CIRCLE_OPTS = {
  	left: 0, top: 0,
    fill: 'white',
  	scale: { .2: 1 },
  	opacity: { 1: 0 },
  	isForce3d: true,
  	isShowEnd: false 
};

const circle1 = new mojs.Shape({
    ...CIRCLE_OPTS,
    radius: 200 
});

const circle2 = new mojs.Shape({
    ...CIRCLE_OPTS,
    radius: 240,
    easing: 'cubic.out',
    delay: 300 
});

document.addEventListener('click', function(e) {
    burst1.
        tune ({ x: e.pageX, y: e.pageY }).
        generate().
        replay();
    burst2.
    tune({ x: e.pageX, y: e.pageY}).
        generate().
        replay();
    Circ.
        replay();
});

const openBackground = new mojs.Shape({
    fill: '#FC2D79',
    left: 0, top: 0,
    scale: { 0: 4.5 },
    isShowStart: true,
    radius: 15,
    isForce3d: true,
    isTimelineLess: true,
    delay: 150,
    radius: 200,
    easing: 'cubic.out',
    backwardEasing: 'expo.in',
});

openBackground.
  tune({ x: e.pageX, y: e.pageY }).
  replay();
