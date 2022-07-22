'reach 0.1';

const common = {
  ...hasRandom
}
export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const Alice =  Participant('Alice', {
    ...common,
    isWillingToGetAttachers: Fun([], Null),
    notifyOfNewAttachers: Fun([Address, Bool], Null)
  });
  const Bob = API('Bob', {
    requestAdditionToList: Fun([], Bool),
  });

  init();

  Alice.only(() => {
    interact.isWillingToGetAttachers();
  })
  Alice.publish();

  const AttachedUsers = new Set();
  
  const [ counter ] = 
    parallelReduce([ 0 ])
      .invariant( balance() ==  balance())
      .while(true)
      .api_(Bob.requestAdditionToList, () => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve(counter < 5);
          if(counter < 5){
            Alice.interact.notifyOfNewAttachers(this, true);
            AttachedUsers.insert(this);
            return [ counter + 1];
          }
          else {
            Alice.interact.notifyOfNewAttachers(this, false);
            return [ counter ];
          }
        }]
      })
    
      commit();
      exit(); 
})