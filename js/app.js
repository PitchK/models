var devOrientation = '';
//decide whether navigation bar will show right or left arrow; make mobile compatible
function decideLorR(x){
    if(x.matches){
        devOrientation = 'portrait';
    }else{
        devOrientation = 'landscape';
    }
}

var x = window.matchMedia("(orientation: portrait)");
decideLorR(x);
x.addListener(decideLorR);

function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = '2px solid black';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}

var unloadedPhoto = 'https://3358nc4e1je93h11tu493nryr3i-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/image-coming-soon.jpg';

document.getElementById('menu').addEventListener('click', show);

var allModels = [{modelName: 'AirPoint \'21', modelURL: 'point.jpg', difficulty: 4.5, tags: ['Future vehicle', 'Recreational vehicle', 'Air'], description: 'This model\'s distinguishable characteristic is that sharp point. Fold with black origami for the best contrast!', webLink: '/air-point-21', time: '12-15 min'}, 
{modelName: 'Future Vehicle 9', modelURL: 'fv9.jpg', difficulty: 5, tags: ['Future vehicle', 'Recreational vehicle', 'Hover'], description: 'A twist on the LandHover\'21. Now featuring two large back jets! Looks even faster!', webLink: '/not-created-yet', time: 'TBD'}, 
{modelName: 'LandHover \'21', modelURL: 'speedr.jpg', difficulty: 7, tags: ['Future vehicle', 'Recreational vehicle', 'Hover'], description: 'This model was sort of inspired by the landspeeder in Star Wars, as you can see. Doesn\'t it look fast?', webLink: '/land-hover-21', time: '12-18 min'}, 
{modelName: 'A simple plant (ver. 1)', modelURL: 'plant1.jpg', difficulty: 3, tags: ['Flower', 'Living'], description: 'null', webLink: '/plant-1', time: '7-12 min'}, 
{modelName: 'A simple plant (ver. 2)', modelURL: unloadedphoto, difficulty: 6, tags: ['Flower', 'Living'], description: 'null', webLink: '/plant-2', time: '12-20 min'}, 
{modelName: 'Tall plant', modelURL: 'plant2.jpg', difficulty: 7, tags: ['Flower', 'Living'], description: 'null', webLink: '/tall-plant', time: '15-25 min'}, 
{modelName: 'Sea shrimp', modelURL: 'shrimp.jpg', difficulty: 5.5, tags: ['Living', 'Attacker'], description: 'A small shrimp, complete with two front claws and its distinguishable flexible tail.', webLink: '/sea-shrimp', time: '10-14 min'}, 
{modelName: 'Attacker fish', modelURL: 'attackerfish.jpg', difficulty: 6.5, tags: ['Living', 'Attacker'], description: 'null', webLink: '/attacker-fish', time: '12-20 min'}, 
{modelName: 'Tank w/ triangular cannon', modelURL: unloadedPhoto, difficulty: 8.5, tags: ['Land', 'Attacker', 'Future vehicle'], description: 'With its cannon extending more than half the length of its body, this can wreck havoc in real life!', webLink: '/tank-with-triangular-cannon'}, 
{modelName: 'Tank w/ long cannon', modelURL: 'Long_tank.jpg', difficulty: 5, tags: ['Land', 'Attacker', 'Future vehicle'], description: 'Folding this on a 6in x 6in square paper would allow a Lego minifigure to fit perfectly behind the cannon!', webLink: '/tank-with-long-cannon', time: '8-13 min'}, 
{modelName: 'The Hexawing', modelURL: 'hexawing.jpg', difficulty: 5.5, tags: ['Air', 'Future vehicle'], description: 'With its hexagon-shaped wings, this could glide through the air and land smoothly as well.', webLink: '/hexawing', time: 'TBD'}, 
{modelName: 'Fighter jet', modelURL: unloadedPhoto, difficulty: 7, tags: ['Air', 'Future vehicle', 'Attacker'], description: 'A normal-looking jet, but it could drop bombs from the center and the side of its wings.', webLink: '/fighter-jet', time: 'TBD'}, 
{modelName: 'Future Vehicle 1', modelURL: 'fv1.jpg', difficulty: 6.5, tags: ['Air', 'Future vehicle', 'Recreational vehicle'], description: 'The very first model I came up with. Features a single upright tail jet and two engines that propel the vehicle forward.', webLink: '/hexawing', time: 'TBD'}, 
{modelName: 'Future Vehicle 2', modelURL: unloadedPhoto, difficulty: 5.5, tags: ['Air', 'Future vehicle'], description: 'A twist on Future Vehicle 1. The engines are now 3-dimensional, with a third engine taking the place of the tail jet.', webLink: '/hexawing', time: 'TBD'},
{modelName: 'Tank w/ tracks', modelURL: unloadedPhoto, difficulty: 4.5, tags: ['Land', 'Future vehicle', 'Attacker'], description: 'A big tank, complete with tracks.', webLink: '/tank-with-tracks', time: 'TBD'}, 
{modelName: 'A simple robot', modelURL: 'robot.jpg', difficulty: 7.5, tags: ['Attacker'], description: 'A robot that is ready to fight anything that comes in its way. Looks great on your desk!', webLink: '/simple-robot', time: '10-15 min'}];



for (var i = 0; i < allModels.length; i++){
    var d = document.createElement('div');
    d.className = 'outer';
    document.getElementById('allModels').appendChild(d);

    var image = document.createElement('img');
    image.setAttribute('src', allModels[i].modelURL);
    image.className = 'image';
    document.getElementsByClassName('outer')[i].appendChild(image);
    
    var innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    document.getElementsByClassName('outer')[i].appendChild(innerDiv);

    var title = document.createElement('p');
    title.className = 'modelTitle';
    title.innerHTML = allModels[i].modelName;
    document.getElementsByClassName('innerDiv')[i].appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.innerHTML = allModels[i].description;
    document.getElementsByClassName('innerDiv')[i].appendChild(subtitle);

    //difficulty display
    var difficulty = document.createElement('div');
    difficulty.className = 'difficultyDiv';
    document.getElementsByClassName('innerDiv')[i].appendChild(difficulty);

    var innerDifficulty = document.createElement('div');
    innerDifficulty.className = 'innerDifficultyDiv';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(innerDifficulty)

    var word = document.createElement('p');
    word.className = 'difficultyWord';
    word.innerHTML = 'Difficulty: ';
    document.getElementsByClassName('innerDifficultyDiv')[i].appendChild(word);

    var num = document.createElement('p');
    num.className = 'difficultyDisplay';
    num.innerHTML = allModels[i].difficulty + '/10';
    document.getElementsByClassName('innerDifficultyDiv')[i].appendChild(num);

    var time = document.createElement('p');
    time.className = 'time';
    if(devOrientation === 'landscape'){
        time.innerHTML = ' | ⌛ Estimated time: ' + allModels[i].time;
    }else{
        time.innerHTML = '⌛ Estimated time: ' + allModels[i].time;
    }
    
    document.getElementsByClassName('difficultyDiv')[i].appendChild(time);

    //bottom two buttons

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Instructions');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Watch tutorial');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);
}

for (var i = 0; i < document.getElementsByClassName('difficultyDisplay').length; i++){
    document.getElementsByClassName('difficultyDisplay')[i].style.background = 'linear-gradient(to right, #42aaf5 0%, #42aaf5 ' + allModels[i].difficulty*10 + '%, lightgrey ' + allModels[i].difficulty*10 +'%, lightgrey 100%)';
}