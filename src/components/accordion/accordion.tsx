import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "aco-accordion",
  styleUrl: "accordion.css",
  shadow: true,
})
export class Accordion {
  @Prop({
    reflect: true,
  })
  headline!: string;

  @State()
  isActive: boolean;

  handleClick() {
    this.isActive = !this.isActive;
  }

  render() {
    return (
      <div class="accordion">
        <div
          class={this.isActive ? "header active" : "header"}
          onClick={() => this.handleClick()}
        >
          <svg class="angle" width="10px" height="10px" viewBox="0 0 50 80">
            <polyline
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="0.375,0.375 45.63,38.087 0.375,75.8 "
            />
          </svg>
          <span>{this.headline}</span>
        </div >

        <div class={this.isActive ? "content show" : "content hide"}>
          <slot></slot>
        </div>
      
      </div>
    );
  }
}
