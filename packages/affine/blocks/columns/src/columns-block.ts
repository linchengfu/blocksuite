import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import type { ColumnsBlockModel } from '@blocksuite/affine-model';
import { BLOCK_CHILDREN_CONTAINER_PADDING_LEFT } from '@blocksuite/affine-shared/consts';
import { BlockSelection } from '@blocksuite/std';
import { html } from 'lit';

import { columnsBlockStyles } from './styles';

export class ColumnsBlockComponent extends CaptionedBlockComponent<ColumnsBlockModel> {
  static override styles = columnsBlockStyles;

  override connectedCallback() {
    super.connectedCallback();

    this.contentEditable = 'false';

    this.handleEvent('click', () => {
      this.host.selection.setGroup('note', [
        this.host.selection.create(BlockSelection, {
          blockId: this.blockId,
        }),
      ]);
    });
  }

  override renderBlock() {
    const children = html`<div
      class="affine-block-children-container"
      style="padding-left: ${BLOCK_CHILDREN_CONTAINER_PADDING_LEFT}px"
    >
      ${this.renderChildren(this.model)}
    </div>`;

    return html`
      <div class="affine-columns-block-container">
        <div class="affine-columns-layout">
          <div class="affine-columns-column left-column"></div>
          <div class="affine-columns-divider"></div>
          <div class="affine-columns-column right-column"></div>
        </div>
        ${children}
      </div>
    `;
  }

  override accessor useZeroWidth = true;
}

declare global {
  interface HTMLElementTagNameMap {
    'affine-columns': ColumnsBlockComponent;
  }
}
