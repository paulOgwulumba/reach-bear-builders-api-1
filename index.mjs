import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

//create test account
const startingBalance = stdlib.parseCurrency(100);
const acc = await stdlib.newTestAccount(startingBalance);

//Set up functions for checking balance
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance()
console.log('Your starting balance is: ' + before)
console.log(`Your address is ${acc.getAddress()}`)


const Common = {
  //...hasRandom
  random: () => stdlib.hasRandom.random(),
};

//Define interface for Alice
const Alice = {
  ...Common,

  isWillingToGetAttachers: async () => {
    const ready = await ask('Are you ready to accept attachers', yesno)
    if(!ready) process.exit()
  },

  notifyOfNewAttachers: (attacherAddress, isSuccessful) => {
    if(isSuccessful){
      console.log(attacherAddress + " successfully got added to list")
    }
    else {
      console.log(attacherAddress + " failed to be added to list")
    }
  }
};


//Program starts here
const Main = async () => {

  const isAlice = await ask(
    `Do you want to create a contract for other people to attach to?`,
    yesno
  )
  
  const who = isAlice ? 'Alice' : 'Bob';
  console.log(`Starting as ${who}`);

  //Contract gets initialized here
  let ctc = null; 

  if(isAlice){ //if deployer
    ctc =  acc.contract(backend);
    backend.Alice(ctc, Alice)
    const info = JSON.stringify(await ctc.getInfo(), null, 1)
    console.log(info);
  }
  else{
    const info = await ask(
      `Please paste the contract information of the contract you want to connect to:`, 
      JSON.parse
    );
    ctc = acc.contract(backend, info);
    const addedToList = await ctc.apis.Bob.requestAdditionToList()

    if(addedToList){
      console.log("Successfully connected to contract and got added to list");
    }
    else console.log(`Sorry! Maximum of 5 attachers have been attained. Better luck next time.`)
  }

}

await Main();