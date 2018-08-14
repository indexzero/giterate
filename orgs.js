const Reader = require('./reader');

export default class Org extends Reader {
  /**
   * Gets all the repos in the org
   * @returns {Promise<Repos></Repos>} The repos within the org
   * @public
   */
  async repos(/* filter fn? */) {
    // returns repos within org.
  }
}