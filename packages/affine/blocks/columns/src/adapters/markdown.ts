import { ColumnsBlockSchema } from '@blocksuite/affine-model';
import {
  BlockMarkdownAdapterExtension,
  type BlockMarkdownAdapterMatcher,
  type MarkdownAST,
} from '@blocksuite/affine-shared/adapters';
import { nanoid } from '@blocksuite/store';
import type { ThematicBreak } from 'mdast';

// 在 Markdown 中，我们将使用 hr 分隔符作为 columns block 的标识
const isColumnsNode = (node: MarkdownAST): node is ThematicBreak =>
  node.type === 'thematicBreak';

export const columnsBlockMarkdownAdapterMatcher: BlockMarkdownAdapterMatcher = {
  flavour: ColumnsBlockSchema.model.flavour,
  toMatch: o => isColumnsNode(o.node),
  fromMatch: o => o.node.flavour === ColumnsBlockSchema.model.flavour,
  toBlockSnapshot: {
    enter: (_, context) => {
      const { walkerContext } = context;
      walkerContext
        .openNode(
          {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:columns',
            props: {},
            children: [],
          },
          'children'
        )
        .closeNode();
    },
  },
  fromBlockSnapshot: {
    enter: (_, context) => {
      const { walkerContext } = context;
      walkerContext
        .openNode(
          {
            type: 'thematicBreak',
          },
          'children'
        )
        .closeNode();
    },
  },
};

export const ColumnsBlockMarkdownAdapterExtension =
  BlockMarkdownAdapterExtension(columnsBlockMarkdownAdapterMatcher);
