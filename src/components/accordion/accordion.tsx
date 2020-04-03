import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'aco-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {

  @Prop({
    reflect: true
  })
  name!: string;

  @State() 
  isActive = false
  



  render() {
    return (
      <Host>
        <div class="accordion">
          <div class={this.isActive ? 'header active': 'header'} onClick={ () => this.isActive = !this.isActive}>
            <span class="angle">˃</span>
            <span>{this.name}</span>
          </div>
          <div class={this.isActive ? 'content show': 'content hide'}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
