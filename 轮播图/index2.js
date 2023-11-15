class Slider {
  constructor(id, cycle = 3000) {
    this.container = document.getElementById(id);
    this.items = this.container.querySelectorAll(
      ".slider-list__item, .slider-list__item--selected"
    );
    this.cycle = cycle;
    registerPlugins(...plugins){

    }
  }
  getSelectedItem() {
    const selected = this.container.querySelector(
      ".slider-list__item--selected"
    );
    return selected;
  }

  getSelectedItemIndex() {
    return Array.from(this.items).indexOf(this.getSelectedItem());
  }

  slideTo(idx) {
    const selected = this.getSelectedItem();
    if (selected) {
      selected.className = "slider-list__item";
    }
    const item = this.items[idx];
    if (item) {
      item.className = "slider-list__item--selected";
    }
0
    const detail = { index: idx };
    const event = new CustomEvent("slide", { bubbles: true, detail });
    this.container.dispatchEvent(event);
  }

  slideNext() {
    const currentIdx = this.getSelectedItemIndex();
    const nextIdx = (currentIdx + 1) % this.items.length;
    this.slideTo(nextIdx);
  }

  slidePrevious() {
    const currentIdx = this.getSelectedItemIndex();
    const previousIdx =
      (this.items.length + currentIdx - 1) % this.items.length;
    this.slideTo(previousIdx);
  }

  start() {
    this.stop();
    this._timer = setInterval(() => {
      this.slideNext();
    }, this.cycle);
  }

  stop() {
    clearInterval(this._timer);
  }
}

let slider = new Slider("my-slider");
slider.start();
