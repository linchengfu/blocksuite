import { css } from 'lit';

export const columnsBlockStyles = css`
  .affine-columns-block-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: var(--affine-paragraph-space);
  }

  .affine-columns-layout {
    display: flex;
    width: 100%;
    min-height: 400px;
    margin-bottom: 12px;
  }

  .affine-columns-column {
    flex: 1;
    min-width: 0;
    height: 100%;
    border-radius: 4px;
    background-color: var(--affine-background-secondary-color, #f4f4f5);
  }

  .affine-columns-divider {
    width: 1px;
    height: 100%;
    min-height: 400px;
    margin: 0 12px;
    background-color: var(--affine-divider-color, rgba(0, 0, 0, 0.12));
  }
`;
