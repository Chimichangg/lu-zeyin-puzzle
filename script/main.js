// we always start with a module to encapsulate our own code
// is is called an IIFE (Immediately-Invoked Function Expression)

(() => {
	// collect ALL of the elements that we want the user to interact with and also elements that to change
	// JS holds these in memory so that it can access them later (these are elements in the HTML)
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
		gameBoard = document.querySelector('.puzzle-board'),
		pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone'),
		board = document.querySelector('.puzzle-pieces');

	/*
	theThumbnails = [
			<img src="images/buttonZero. jpg" data-bgref="0" alt="thumbnail">
			<img src="images/buttonOne.jpg" data-bgref="1" alt="thumbnail">
	    	<img src="images/buttonTwo.jpg" data-bgref="2" alt="thumbnail">
			<img src="images/buttonThree.jpg" data-bgref="3" alt="thumbnail">
	]
	*/

	const imagesNames = ['topLeft','topRight','bottomLeft','bottomRight'];



	function changeImagesSet() {
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		let currentSet = this;
		
		pzlPieces.forEach((piece,index) => {
			piece.src = `images/${imagesNames[index] + currentSet.dataset.bgref + '.jpg'}`
		});
		
	}

	/*function reset() {
		pzlPieces.forEach(piece => piece.appendTo(document.getElementById('#board')));
	}*/

	/*function reset() {
		pzlPieces.appendTo(document.getElementById('#board'));
	}*/

	/*function reset() {
		board.appendChild(pzlPieces);
	}*/

	function reset() {
		dropZones.forEach(zone => {
			board.appendChild(zone.firstChild)

			/*zone.removeChild (zone.firstChild)*/
		});
	}

	function allowDrag(event) {
		console.log('started draggin me');

		// create a reference to the element we're dragging so we can retrieve it later
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		// override default behaviour on certain elements when an event happens
		event.preventDefault();
		console.log('started draggin over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		let droppedElId = event.dataTransfer.getData('draggedEl');

		// retrieve the dragged el by its ID, and then put it inside the current drop zone

		// only move the image if the drop zone doesn't have any image in, do nothing if the drop zone already has image dropped
		if (this.childNodes.length < 1) {
			this.appendChild(document.querySelector(`#${droppedElId}`));
		} else {
			return;
		}

		// MDN JavaScript template string
	}

	// how to we want the user to interact with the elements that we collected earlier?
	// events are things like clikcs, drags, double-clicks, keypresses... all the ways that a user can interact with a mouse, a keyboard etc
 
	theThumbnails.forEach(image => image.addEventListener('click', changeImagesSet));

	theThumbnails.forEach(image => image.addEventListener('click', reset));


	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	// set up the drop zone event handling
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
})();
