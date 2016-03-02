var prs245 = {};

prs245.type = "electric";
prs245.numberOfStrings = 6;
prs245.color = "black";
prs245.manufacturer = "PRS";
prs245.model = 245;

prs245.setVolume = function(value) {
    // something to set the volume = value;
};

prs245.setVolume(10);


function playSoftly(guitar) {
    guitar.setVolume(5);
    
    // play the guitar
}

playSoftly(prs245);


