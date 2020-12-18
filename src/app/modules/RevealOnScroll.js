/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor (els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially () {
    this.itemsToReveal.forEach(function (item) {
      item.classList.add('reveal-item');
    })
  }

  createWaypoints () {
    const that = this
    this.itemsToReveal.forEach(function (item) {
      new Waypoint({
        element: item,
        handler: function () {
          item.classList.add('reveal-item--is-visible');
        },
        offset: that.offsetPercentage
      })
    })
  }
}

export default RevealOnScroll;