import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'aco-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {

  @Prop()
  open = false;

  @Prop({
    reflect: true
  })
  name!: string;


  render() {
    return (
      <Host>
        <div class="accordion">
          <div class="header">
            <span>{this.name}</span>
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
