import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'nc-grid-slider',
  styleUrl: 'nc-grid-slider.css',
  shadow: true
})
export class NcGridSlider {

  @Element() slider: HTMLElement;

  @Prop() rows: string;

  componentDidLoad(){
    this.slider.style.setProperty('--rows',this.rows)
  }


  render() {
    return <slot/>;
  }
}
