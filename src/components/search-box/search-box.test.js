import createTestCafe from "testcafe";
import { Selector } from 'testcafe';
import { getPageUrl } from '../../../helpers/test';

fixture('/search-box').page('http://localhost:3000/monster-rolodex');

test('should be on the correct URL', async t => {
    await t.expect(getPageUrl()).contains('/monster-rolodex');
});

test('there is a SearchBox component', async t => {
    let searchBoxComponent = Selector('[data-test="search"]').exists;
    await t.expect(searchBoxComponent).ok();
})