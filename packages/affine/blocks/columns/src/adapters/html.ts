import { ColumnsBlockSchema } from '@blocksuite/affine-model';
import {
  BlockHtmlAdapterExtension,
  type BlockHtmlAdapterMatcher,
  HastUtils,
} from '@blocksuite/affine-shared/adapters';
import { nanoid } from '@blocksuite/store';

export const columnsBlockHtmlAdapterMatcher: BlockHtmlAdapterMatcher = {
  flavour: ColumnsBlockSchema.model.flavour,
  // 在 HTML 中，我们将使用带有特定类的 div 作为 columns block 的标识
  toMatch: o => {
    if (!HastUtils.isElement(o.node) || o.node.tagName !== 'div') {
      return false;
    }
    const className = o.node.properties?.className;
    if (Array.isArray(className)) {
      return className.includes('affine-columns-block-container');
    }
    if (typeof className === 'string') {
      return className === 'affine-columns-block-container';
    }
    return false;
  },
  fromMatch: o => o.node.flavour === ColumnsBlockSchema.model.flavour,
  toBlockSnapshot: {
    enter: (o, context) => {
      if (!HastUtils.isElement(o.node)) {
        return;
      }
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
            type: 'element',
            tagName: 'div',
            properties: {
              className: ['affine-columns-block-container'],
            },
            children: [
              {
                type: 'element',
                tagName: 'div',
                properties: {
                  className: ['affine-columns-layout'],
                },
                children: [
                  {
                    type: 'element',
                    tagName: 'div',
                    properties: {
                      className: ['affine-columns-column', 'left-column'],
                    },
                    children: [],
                  },
                  {
                    type: 'element',
                    tagName: 'div',
                    properties: {
                      className: ['affine-columns-divider'],
                    },
                    children: [],
                  },
                  {
                    type: 'element',
                    tagName: 'div',
                    properties: {
                      className: ['affine-columns-column', 'right-column'],
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          'children'
        )
        .closeNode();
    },
  },
};

export const ColumnsBlockHtmlAdapterExtension = BlockHtmlAdapterExtension(
  columnsBlockHtmlAdapterMatcher
);
