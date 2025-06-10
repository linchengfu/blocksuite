import { ColumnsBlockSchema } from '@blocksuite/affine-model';
import {
  BlockPlainTextAdapterExtension,
  type BlockPlainTextAdapterMatcher
} from '@blocksuite/affine-shared/adapters';

export const columnsBlockPlainTextAdapterMatcher: BlockPlainTextAdapterMatcher = {
  flavour: ColumnsBlockSchema.model.flavour,
  toMatch: () => false,
  fromMatch: o => o.node.flavour === ColumnsBlockSchema.model.flavour,
  toBlockSnapshot: {},
  fromBlockSnapshot: {
    enter: (_, context) => {
      context.textBuffer.content += '----- Columns -----\n';
    },
  },
};

export const ColumnsBlockPlainTextAdapterExtension =
  BlockPlainTextAdapterExtension(columnsBlockPlainTextAdapterMatcher);
