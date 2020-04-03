import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'aco-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {

  @Prop()
  open = false;

  @Prop()
  name!: string;


  render() {
    return (
      <div class="accordion">
        <div class="header">
          <span>{name}</span>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    );
  }

}
