import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = document.querySelectorAll(".feature-item");
		this.hideInitially();
		this.createWaypoints();
	}

  hideInitially() {
    this.itemsToReveal.forEach(function(item){
      item.classList.add('reveal-item')
    });
  }

  createWaypoints() {
    this.itemsToReveal.forEach(function(item){
      new Waypoint({
        element: item,
        handler: function() {
          item.classList.add('reveal-item--is-visible')
        },
        offset: '85%'
      })
    })
  }
}

export default RevealOnScroll;