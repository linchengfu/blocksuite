import {
  BlockModel,
  BlockSchemaExtension,
  defineBlockSchema,
} from '@blocksuite/store';

export const ColumnsBlockSchema = defineBlockSchema({
  flavour: 'affine:columns',
  metadata: {
    version: 1,
    role: 'content',
    // 允许有子元素
    children: ['*'],
  },
  toModel: () => new ColumnsBlockModel(),
});

type Props = {
  text: string;
};

export class ColumnsBlockModel extends BlockModel<Props> {
}

export const ColumnsBlockSchemaExtension =
  BlockSchemaExtension(ColumnsBlockSchema);
