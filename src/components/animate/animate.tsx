import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'aco-animate',
  styleUrl: 'animate.css',
  shadow: true
})
export class Animate {

  render() {
    return (
      <Host>
        HELLO
        <slot></slot>
      </Host>
    );
  }

}
