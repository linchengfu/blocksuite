import type { ExtensionType } from '@blocksuite/store';

import { ColumnsBlockHtmlAdapterExtension } from './html';
import { ColumnsBlockMarkdownAdapterExtension } from './markdown';
import { ColumnsBlockPlainTextAdapterExtension } from './plain-text';

export const ColumnsBlockAdapterExtensions: ExtensionType[] = [
  ColumnsBlockHtmlAdapterExtension,
  ColumnsBlockMarkdownAdapterExtension,
  ColumnsBlockPlainTextAdapterExtension,
];
