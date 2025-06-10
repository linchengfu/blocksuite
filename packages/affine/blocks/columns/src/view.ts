import {
  type ViewExtensionContext,
  ViewExtensionProvider,
} from '@blocksuite/affine-ext-loader';
import { BlockViewExtension } from '@blocksuite/std';
import { literal } from 'lit/static-html.js';

import { effects } from './effects';

export class ColumnsViewExtension extends ViewExtensionProvider {
  override name = 'affine-columns-block';

  override effect() {
    super.effect();
    effects();
  }

  override setup(context: ViewExtensionContext) {
    super.setup(context);
    context.register([
      BlockViewExtension('affine:columns', literal`affine-columns`),
    ]);
  }
}
