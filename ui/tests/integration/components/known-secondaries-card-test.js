import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | replication known-secondaries-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with secondary ids', async function(assert) {
    await render(hbs`<KnownSecondariesCard @cluster={{cluster}} @replicationAttrs={{replicationAttrs}} />`);

    assert.dom('.secondaries').exists();
  });

  test('it renders an empty state if there are no known secondaries', async function(assert) {
    await render(hbs`<KnownSecondariesCard @cluster={{cluster}} @replicationAttrs={{replicationAttrs}} />`);

    assert.dom('.secondaries').exists();
  });
});