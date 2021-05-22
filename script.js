document.getElementById('whiteImg').style.setProperty('opacity', 1);


function imageChange() {
       
    if(document.getElementById('white').checked) {
        setVisible('whiteImg', './images/whiteBg.jpg');
    } else if (document.getElementById('black').checked) {
        setVisible('blackImg', './images/blackBg.jpg');
    } else if(document.getElementById('blue').checked) {
        setVisible('blueImg', './images/blueBg.jpg');
    } else if (document.getElementById('green').checked) {
        setVisible('greenImg', './images/greenBg.jpg');
    } else {
        setVisible('redImg', './images/redBg.jpg');
    }

    document.querySelectorAll('.productImage img')[document.querySelectorAll('.productImage img').length-1].removeAttribute('style');

}


function swapNodes(nodeA, nodeB) {
    let parentA = nodeA.parentNode;
    let siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
};


function setVisible(id, bgUrl) {
    document.getElementById(id).style.setProperty('opacity', 1);
    document.body.style.setProperty('background-image', 'url(' + bgUrl + ')');
    setTimeout(function(){
        // Bring Image to front for the user to be able to select the the image that is currently displayed
        swapNodes(document.querySelectorAll('.productImage img')[document.querySelectorAll('.productImage img').length-1], document.getElementById(id));
    }, 300); 
}



function ramChange() {
    
    let price = getPrice();

    if(document.getElementById('8GB').checked) {
        setPrice(price-150);
    } else {
        setPrice(price+150);
    }
}

var previousStorageIndex = 0;

function storageChange() {

    let price = getPrice();

    if(document.getElementById('256GB').checked) {
        if(previousStorageIndex == 1) {
            setPrice(price-100);
        } else {
            setPrice(price-250);
        }

        previousStorageIndex = 0;

    } else if(document.getElementById('512GB').checked) {

        if(previousStorageIndex == 0) {
            setPrice(price+100);
        } else {
            setPrice(price-150);
        }

        previousStorageIndex = 1;
    } else {
        if(previousStorageIndex == 0) {
            setPrice(price+250);
        } else {
            setPrice(price+150)
        }
        previousStorageIndex = 2
    }
}


function getPrice() {
    let price = document.getElementsByClassName('price')[0].firstElementChild.innerText;
    price = price.split(': ')[price.split(': ').length-1];
    price = price.split('$')[0];
    return parseInt(price);
}

function setPrice(price) {
    document.getElementsByClassName('price')[0].firstElementChild.innerText = "Total Price: " + price + '$';
}
