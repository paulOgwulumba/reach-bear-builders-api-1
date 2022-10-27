// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  stdlib.protect(ctc0, await interact.isWillingToGetAttachers(), {
    at: './index.rsh:21:37:application',
    fs: ['at ./index.rsh:20:13:application call to [unknown function] (defined at: ./index.rsh:20:17:function exp)'],
    msg: 'isWillingToGetAttachers',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v192, time: v191, didSend: v25, from: v190 } = txn1;
      
      ;
      const v193 = stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '0');
      const v194 = v191;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v192, time: v191, didSend: v25, from: v190 } = txn1;
  ;
  let v193 = stdlib.checkedBigNumberify('./index.rsh:28:22:decimal', stdlib.UInt_max, '0');
  let v194 = v191;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v213], secs: v215, time: v214, didSend: v132, from: v212 } = txn2;
    undefined /* setApiDetails */;
    const v217 = stdlib.addressEq(v212, v190);
    const v218 = v217 ? false : true;
    stdlib.assert(v218, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:32:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)'],
      msg: 'Not Deployer',
      who: 'Alice'
      });
    ;
    const v223 = stdlib.lt(v193, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
    await txn2.getOutput('Bob_requestAdditionToList', 'v223', ctc3, v223);
    if (v223) {
      stdlib.protect(ctc0, await interact.notifyOfNewAttachers(v212, true), {
        at: './index.rsh:37:48:application',
        fs: ['at ./index.rsh:37:48:application call to [unknown function] (defined at: ./index.rsh:37:48:function exp)', 'at ./index.rsh:37:48:application call to "liftedInteract" (defined at: ./index.rsh:37:48:application)', 'at ./index.rsh:34:31:application call to [unknown function] (defined at: ./index.rsh:34:31:function exp)'],
        msg: 'notifyOfNewAttachers',
        who: 'Alice'
        });
      
      await stdlib.mapSet(map0, v212, null);
      const v232 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:39:32:decimal', stdlib.UInt_max, '1'));
      const cv193 = v232;
      const cv194 = v214;
      
      v193 = cv193;
      v194 = cv194;
      
      continue;}
    else {
      stdlib.protect(ctc0, await interact.notifyOfNewAttachers(v212, false), {
        at: './index.rsh:42:48:application',
        fs: ['at ./index.rsh:42:48:application call to [unknown function] (defined at: ./index.rsh:42:48:function exp)', 'at ./index.rsh:42:48:application call to "liftedInteract" (defined at: ./index.rsh:42:48:application)', 'at ./index.rsh:34:31:application call to [unknown function] (defined at: ./index.rsh:34:31:function exp)'],
        msg: 'notifyOfNewAttachers',
        who: 'Alice'
        });
      
      const cv193 = v193;
      const cv194 = v214;
      
      v193 = cv193;
      v194 = cv194;
      
      continue;}
    
    }
  return;
  
  
  };
export async function _Bob_requestAdditionToList3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_requestAdditionToList3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_requestAdditionToList3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Bool;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v190, v193] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc2, ctc3]);
  const v201 = ctc.selfAddress();
  const v203 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)'],
    msg: 'in',
    who: 'Bob_requestAdditionToList'
    });
  const v204 = stdlib.addressEq(v201, v190);
  const v205 = v204 ? false : true;
  stdlib.assert(v205, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_requestAdditionToList'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v190, v193, v203],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v213], secs: v215, time: v214, didSend: v132, from: v212 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bob_requestAdditionToList"
        });
      ;
      const v223 = stdlib.lt(v193, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
      const v224 = await txn1.getOutput('Bob_requestAdditionToList', 'v223', ctc5, v223);
      
      if (v223) {
        await stdlib.simMapSet(sim_r, 0, v212, null);
        const v232 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:39:32:decimal', stdlib.UInt_max, '1'));
        const v297 = v232;
        sim_r.isHalt = false;
        }
      else {
        const v299 = v193;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v213], secs: v215, time: v214, didSend: v132, from: v212 } = txn1;
  undefined /* setApiDetails */;
  const v217 = stdlib.addressEq(v212, v190);
  const v218 = v217 ? false : true;
  stdlib.assert(v218, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)', 'at ./index.rsh:31:43:application call to [unknown function] (defined at: ./index.rsh:31:43:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_requestAdditionToList'
    });
  ;
  const v223 = stdlib.lt(v193, stdlib.checkedBigNumberify('./index.rsh:35:29:decimal', stdlib.UInt_max, '5'));
  const v224 = await txn1.getOutput('Bob_requestAdditionToList', 'v223', ctc5, v223);
  if (v132) {
    stdlib.protect(ctc0, await interact.out(v213, v224), {
      at: './index.rsh:31:13:application',
      fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:13:function exp)', 'at ./index.rsh:35:18:application call to "resolve" (defined at: ./index.rsh:34:31:function exp)', 'at ./index.rsh:34:31:application call to [unknown function] (defined at: ./index.rsh:34:31:function exp)'],
      msg: 'out',
      who: 'Bob_requestAdditionToList'
      });
    }
  else {
    }
  
  if (v223) {
    await stdlib.mapSet(map0, v212, null);
    const v232 = stdlib.add(v193, stdlib.checkedBigNumberify('./index.rsh:39:32:decimal', stdlib.UInt_max, '1'));
    const v297 = v232;
    return;
    }
  else {
    const v299 = v193;
    return;
    }
  
  
  };
export async function Bob_requestAdditionToList(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_requestAdditionToList expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_requestAdditionToList expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Bob_requestAdditionToList3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_requestAdditionToList()byte`],
    pure: [],
    sigs: [`Bob_requestAdditionToList()byte`]
    },
  appApproval: `BiAFAAECAwUmAgEAACI1ADEYQQFXKWRJIls1AYEIWzUCMRkjEkEACDEAKChmQgElNhoAF0lBABIiNQQjNQaBhuGJvgMSRClCABY2GgIXNQQ2GgM2GgEXSSQMQAB5JBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/gSBbNf5JNQU1/YAEJTy31zT9ULAxADT/E0Q0/iEEDDX8gAgAAAAAAAAA3zT8FlEHCFCwNPwWUQcINQc0/EEAEjEAKIABAWY0/zT+IwgyBkIAMjT/NP4yBkIAKSISRIGgjQaIAKkiNAESRDQESSISTDQCEhFEgARfDav6sDEAIjIGQgAANf81/kk1/TT+FlAoSwFXAChnSCU1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v213",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v223",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_requestAdditionToList",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v213",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c6938038062000c69833981016040819052620000269162000231565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000b5565b6200008d6200014e565b805133905260208082018051600090525143910152620000ad81620000df565b5050620002d9565b81620000db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528551516001600160a01b03168085528683015151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200014992600292909101906200018b565b505050565b604080516060810182526000918101918252908190815260200162000186604051806040016040528060008152602001600081525090565b905290565b82805462000199906200029c565b90600052602060002090601f016020900481019282620001bd576000855562000208565b82601f10620001d857805160ff191683800117855562000208565b8280016001018555821562000208579182015b8281111562000208578251825591602001919060010190620001eb565b50620002169291506200021a565b5090565b5b808211156200021657600081556001016200021b565b6000604082840312156200024457600080fd5b604080519081016001600160401b03811182821017156200027557634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200029057600080fd5b60208201529392505050565b600181811c90821680620002b157607f821691505b60208210811415620002d357634e487b7160e01b600052602260045260246000fd5b50919050565b61098080620002e96000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633bc5b7bf146100835780633e59bac4146100b057806383230757146100c3578063ab53f2c6146100d8578063fbf33058146100fb57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b506100a361009e3660046106fd565b610113565b60405161007a9190610737565b61005d6100be36600461077e565b61013f565b3480156100cf57600080fd5b50600154610070565b3480156100e457600080fd5b506100ed61016a565b60405161007a929190610796565b610103610207565b604051901515815260200161007a565b604080516060810182526000808252602082018190529181019190915261013982610239565b92915050565b6040805160208101909152600081526101666101603684900384018461082a565b82610311565b5050565b60006060600054600280805461017f906108b5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ab906108b5565b80156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b50505050509050915091509091565b60006102116105e6565b60208082015160009081905260408051928301905281526102328282610311565b5192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561028557610285610721565b1415610302576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156102c6576102c6610721565b60018111156102d7576102d7610721565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b610321600360005414600a610554565b815161033c90158061033557508251600154145b600b610554565b60008080556002805461034e906108b5565b80601f016020809104026020016040519081016040528092919081815260200182805461037a906108b5565b80156103c75780601f1061039c576101008083540402835291602001916103c7565b820191906000526020600020905b8154815290600101906020018083116103aa57829003601f168201915b50505050508060200190518101906103df91906108ea565b604080516020808201835260008252825133815287518183015290870151511515818401529151929350917fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd9181900360600190a1815161045a906001600160a01b03163314610450576001610453565b60005b6008610554565b61046634156009610554565b6020828101516005118083526040519081527f0174bdb424bbbe4e4d10ae7151f49511e0a8c3c6b7470d9b2b755438511240a3910160405180910390a180511515835280511561051657336000908152600460205260409020805462ff00ff191660011790556104d4610615565b825181516001600160a01b03909116905260208301516104f690600190610924565b602080830180519290925290514391015261051081610579565b5061054e565b61051e610615565b825181516001600160a01b039091169052602080840151818301805191909152514391015261054c81610579565b505b50505050565b816101665760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082018252600080825260208083018281528551516001600160a01b03168085528683015151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926105e1926002929091019061064c565b505050565b60405180604001604052806000815260200161061060405180602001604052806000151581525090565b905290565b6040805160608101825260009181019182529081908152602001610610604051806040016040528060008152602001600081525090565b828054610658906108b5565b90600052602060002090601f01602090048101928261067a57600085556106c0565b82601f1061069357805160ff19168380011785556106c0565b828001600101855582156106c0579182015b828111156106c05782518255916020019190600101906106a5565b506106cc9291506106d0565b5090565b5b808211156106cc57600081556001016106d1565b6001600160a01b03811681146106fa57600080fd5b50565b60006020828403121561070f57600080fd5b813561071a816106e5565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061075c57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561079057600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156107ca578581018301518582016060015282016107ae565b818111156107dc576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff8111828210171561082457634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303604081121561083d57600080fd5b6108456107f3565b833581526020601f198301121561085b57600080fd5b60405191506020820182811067ffffffffffffffff8211171561088e57634e487b7160e01b600052604160045260246000fd5b604052602084013580151581146108a457600080fd5b825260208101919091529392505050565b600181811c908216806108c957607f821691505b6020821081141561079057634e487b7160e01b600052602260045260246000fd5b6000604082840312156108fc57600080fd5b6109046107f3565b825161090f816106e5565b81526020928301519281019290925250919050565b6000821982111561094557634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212206f65ca7304576713415c20c2cead7ab9c5ef10e726832a7b3f404e5b503c30d264736f6c634300080c0033`,
  BytecodeLen: 3177,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:48:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:28:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_requestAdditionToList": Bob_requestAdditionToList
  };
export const _APIs = {
  Bob: {
    requestAdditionToList: Bob_requestAdditionToList
    }
  };
