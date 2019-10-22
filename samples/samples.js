const PodCommonService = require('pod-common-service');

// Variable Declaration & Initialization
let PodCommon = new PodCommonService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: addTagTreeCategory
let addTagTreeCategoryData = {
  // ------ REQUIRED ------
  name: 'NAME'

  // ------ OPTIONAL ------
  // desc: 'DESCRIPTION'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.addTagTreeCategory(addTagTreeCategoryData)
  .then(function (result) {
    console.log('function: addTagTreeCategory ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addTagTreeCategory ============>', error);
  });

// *****************************************************************
// #2
// function: getTagTreeCategoryList
let getTagTreeCategoryListData = {
  // ------ REQUIRED ------
  offset: 0,
  size: 10

  // ------ OPTIONAL ------
  // id:  0,
  // name: 'NAME',
  // query: 'QUERY'
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.getTagTreeCategoryList(getTagTreeCategoryListData)
  .then(function (result) {
    console.log('function: getTagTreeCategoryList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getTagTreeCategoryList ============>', error);
  });

// *****************************************************************
// #3
// function: updateTagTreeCategory
let updateTagTreeCategoryData = {
  // ------ REQUIRED ------
  id: 0

  // ------ OPTIONAL ------
  // name:  0,
  // desc: 'NAME',
  // enable: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.updateTagTreeCategory(updateTagTreeCategoryData)
  .then(function (result) {
    console.log('function: updateTagTreeCategory ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error updateTagTreeCategory ============>', error);
  });

// *****************************************************************
// #4
// function: addTagTree
let addTagTreeData = {
  // ------ REQUIRED ------
  name: 'NAME',
  categoryId: 0

  // ------ OPTIONAL ------
  // parentId:  0,
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.addTagTree(addTagTreeData)
  .then(function (result) {
    console.log('function: addTagTree ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addTagTree ============>', error);
  });

// *****************************************************************
// #5
// function: getTagTreeList
let getTagTreeListData = {
  // ------ REQUIRED ------
  categoryId: 0,
  levelCount: 0,

  // ------ REQUIRED (ONLY ONE OF THEM) ------
  // parentId: 0
  level: 0

  // ------ OPTIONAL ------
  // id: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.getTagTreeList(getTagTreeListData)
  .then(function (result) {
    console.log('function: getTagTreeList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getTagTreeList ============>', error);
  });

// *****************************************************************
// #6
// function: updateTagTreeCategory
let updateTagTreeData = {
  // ------ REQUIRED ------
  id: 0

  // ------ OPTIONAL ------
  // name: 'NAME'
  // enable: true | falsesd
  // parentId: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.updateTagTree(updateTagTreeData)
  .then(function (result) {
    console.log('function: updateTagTree ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error updateTagTree ============>', error);
  });

// *****************************************************************
// #7
// function: getOtt
let getOttData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.getOtt(getOttData)
  .then(function (result) {
    console.log('function: getOtt ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getOtt ============>', error);
  });

// *****************************************************************
// #8
// function: getGuildList
let getGuildListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // offset: 0,
  // size: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.getGuildList(getGuildListData)
  .then(function (result) {
    console.log('function: getGuildList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getGuildList ============>', error);
  });

// *****************************************************************
// #9
// function: getCurrencyList
let getCurrencyListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

PodCommon.getCurrencyList(getCurrencyListData)
  .then(function (result) {
    console.log('function: getCurrencyList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getgetCurrencyListOtt ============>', error);
  });