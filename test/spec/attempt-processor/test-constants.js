'use strict';

const learnerId = 200;

const user = {
  id: 100,
  providerId: 'providerUserId',
  learners: [
    {
      id: 200,
      providerId: 'providerLearnerId'
    }
  ]
};

const trialTime = 2000;

const dimensions = [{
  id: 301,
  description: 'First test dimension',
  label: 'Test1',
  name: 'TEST1',
  skillsDomainId: 700,
  uri: '/dimension/test1'
},{
  id: 302,
  description: 'Second test dimension',
  label: 'Test2',
  name: 'TEST2',
  skillsDomainId: 700,
  uri: '/dimension/test2'
}];

const localDimensions = [{
  id: 201,
  dimension: dimensions[0],
  gameId: 501,
  name: 'test1',
  uri: '/local_dimension/test1'
},{
  id: 202,
  dimension: dimensions[1],
  gameId: 501,
  name: 'test2',
  uri: '/local_dimension/test2'
}];

const items = [{
  id: 101,
  localDimension: localDimensions[0],
  mean: -1,
  promptId: 401,
  standardDeviation: 1,
  uri: '/item/test1'
},{
  id: 102,
  localDimension: localDimensions[1],
  mean: -1,
  promptId: 402,
  standardDeviation: 1,
  uri: '/item/test2'
},{  // additional items for localDimension[0] to exercise response-history-aware IRT
  id: 103,
  localDimension: localDimensions[0],
  mean: -0.5,
  promptId: 403,
  standardDeviation: 0.7,
  uri: '/item/test1_3'
},
{
  id: 104,
  localDimension: localDimensions[0],
  mean: 0.8,
  promptId: 404,
  standardDeviation: 0.9,
  uri: '/item/test1_4'
},
{
  id: 105,
  localDimension: localDimensions[0],
  mean: 7.0,
  promptId: 405,
  standardDeviation: 1.0,
  uri: '/item/test1_5'
},
{
  id: 106,
  localDimension: localDimensions[0],
  mean: null,
  promptId: 406,
  standardDeviation: null,
  uri: '/item/test1_6'
},
{
  id: 107,
  localDimension: localDimensions[0],
  mean: undefined,
  promptId: 407,
  standardDeviation: undefined,
  uri: '/item/test1_7'
}];

const uriToModel = {
  dimension: {
    [dimensions[0].uri]: dimensions[0],
    [dimensions[1].uri]: dimensions[1]
  },
  'local-dimension': {
    [localDimensions[0].uri]: localDimensions[0],
    [localDimensions[1].uri]: localDimensions[1]
  },
  item: {
    [items[0].uri]: items[0],
    [items[1].uri]: items[1],
    [items[2].uri]: items[2],
    [items[3].uri]: items[3],
    [items[4].uri]: items[4],
    [items[5].uri]: items[5],
    [items[6].uri]: items[6]
  }
};

const defaultAbility = {
  dimension: dimensions[0],
  mean: 0.5,
  standardDeviation: 0.75,
  timestamp: 1000
};

const defaultState = {
  apiKey: 'testApiKey',
  initialized: true,
  options: {
    tier: 3, 
    authMode: 'client',
    environment: 'dev', 
    autoFlushInterval: 0, 
    loggingLevel: 'none',
    irtMethod: 'irt_cat',
    irtScalingFactor: Math.sqrt(8 / Math.PI),
    irtDefaultItemDifficulty: 0
  },
  user,
  learnerId,
  trialTime,
  ['latentAbilities.' + learnerId]: [defaultAbility],
  ['latentAbilitiesAtStartOfTrial.' + learnerId]: [defaultAbility],
  uriToModel
};

const defaultAttempt = {
  itemURI: items[0].uri,
  outcome: 1
};

export default {
  defaultAbility,
  defaultAttempt,
  defaultState,
  learnerId,
  items,
  trialTime
}
