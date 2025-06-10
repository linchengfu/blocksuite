import { html } from 'lit';

export const ColumnsTooltip = html`
  <div style="width: 100%; padding: 12px;">
    <div
      style="display: flex; height: 140px; width: 100%; border-radius: 8px; overflow: hidden; background-color: var(--affine-background-secondary-color);"
    >
      <div style="flex: 1; background-color: var(--affine-background-secondary-color); border-radius: 4px; margin: 8px;"></div>
      <div style="width: 1px; height: 100%; margin: 0 2px; background-color: var(--affine-divider-color);"></div>
      <div style="flex: 1; background-color: var(--affine-background-secondary-color); border-radius: 4px; margin: 8px;"></div>
    </div>
  </div>
`;
