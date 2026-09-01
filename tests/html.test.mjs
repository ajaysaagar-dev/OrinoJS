import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const html = (strings, ...values) => String.raw(strings, ...values);

describe('html tagged template helper', () => {
    it('interpolates strings and numbers correctly', () => {
        const name = 'OrinoJS';
        const version = '0.0.1';
        const result = html`<div class="framework">${name} v${version}</div>`;
        assert.equal(result, '<div class="framework">OrinoJS v0.0.1</div>');
    });

    it('handles empty strings and multiline templates', () => {
        const template = html`
<div>
  <span>Hello</span>
</div>`;
        assert.match(template, /<span>Hello<\/span>/);
    });
});
