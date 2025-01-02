import { openTransportReplayer, RecordStore } from '@ledgerhq/hw-transport-mocker';
import { expect, test } from 'vitest';

import Aptos from '.'

test('Aptos init', async () => {
  const transport = await openTransportReplayer(RecordStore.fromString(''));
  const pkt = new Aptos(transport);
  expect(pkt).not.toBe(undefined);
});
