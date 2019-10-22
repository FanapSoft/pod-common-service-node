// External Modules
const expect = require('chai').expect;

// Main Module
const PodCommonService = require('../lib/main');

let apiToken = 'API TOKEN';
let PodCommon = new PodCommonService({ apiToken: apiToken });

// #1
describe('Method: addTagTreeCategory', function () {
  this.timeout(10000);
  let addTagTreeCategoryData = {
    // ------ REQUIRED ------
    name: 'TAG TREE CATEGORY MY NAME'

    // ------ OPTIONAL ------
    // desc: 'DESCRIPTION'
  };
  it('correct request', function (done) {
    PodCommon.addTagTreeCategory(addTagTreeCategoryData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('Method: getTagTreeCategoryList', function () {
  this.timeout(10000);
  let getTagTreeCategoryListData = {
    // ------ REQUIRED ------
    offset: 0,
    size: 10

    // ------ OPTIONAL ------
    // id:  0,
    // name: 'NAME',
    // query: 'QUERY'
  };

  it('correct request', function (done) {
    PodCommon.getTagTreeCategoryList(getTagTreeCategoryListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #3
describe('Method: updateTagTreeCategory', function () {
  this.timeout(10000);
  let updateTagTreeCategoryData = {
    // ------ REQUIRED ------
    id: 402,

    // ------ OPTIONAL ------
    // name:  0,
    desc: 'DESC UPDATED'
    // enable: true | false
  };

  it('correct request', function (done) {
    PodCommon.updateTagTreeCategory(updateTagTreeCategoryData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('Method: addTagTree', function () {
  this.timeout(10000);
  let addTagTreeData = {
    // ------ REQUIRED ------
    name: 'NAME!!',
    categoryId: 402

    // ------ OPTIONAL ------
    // parentId:  0,
  };

  it('correct request', function (done) {
    PodCommon.addTagTree(addTagTreeData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('Method: getTagTreeList', function () {
  this.timeout(10000);
  let getTagTreeListData = {
    // ------ REQUIRED ------
    categoryId: 281,
    levelCount: 0,

    // ------ REQUIRED (ONLY ONE OF THEM) ------
    // parentId: 581
    level: 0

    // ------ OPTIONAL ------
    // id: 0
  };

  it('correct request', function (done) {
    PodCommon.getTagTreeList(getTagTreeListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('Method: updateTagTree', function () {
  this.timeout(10000);
  let updateTagTreeData = {
    // ------ REQUIRED ------
    id: 581,

    // ------ OPTIONAL ------
    name: 'NAME258'
    // enable: true | falsesd
    // parentId: 581
  };

  it('correct request', function (done) {
    PodCommon.updateTagTree(updateTagTreeData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('Method: getOtt', function () {
  this.timeout(10000);
  let getOttData = {

  };

  it('correct request', function (done) {
    PodCommon.getOtt(getOttData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('ott');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #8
describe('Method: getGuildList', function () {
  this.timeout(10000);
  let getGuildListData = {
    // ------ OPTIONAL ------
    // offset: 0
    // size: 0
  };

  it('correct request', function (done) {
    PodCommon.getGuildList(getGuildListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #9
describe('Method: getCurrencyList', function () {
  this.timeout(10000);
  let getCurrencyListData = {
  };

  it('correct request', function (done) {
    PodCommon.getCurrencyList(getCurrencyListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
