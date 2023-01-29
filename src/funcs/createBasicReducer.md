 Pr.S. This is my best at writing documentations :/
 # createBasicReducer
 createBasicReducer will help you to create basic/common redux reducers

 ## API
 ```
 createBasicReducer<T>(initialState<T>, callbacks {
   def: (state<T>, payload<any>) => newState<T>,
   before?: (state<T>, action?<IAction>) => { end?: boolean, state?: T, data: object },
   actions?: {
     [actionType: string]: (state<T>, payload<any>) => newState<T>
   }
 }) => (state<T> = initialState, action?: IAction) => newState<T>;
 ```

 ```
 `T` is the type of the state
 `initialState` is the reducer initial state
 `callbacks` [required] {
   `def` [required] (default) - is the callback that is called when the action passed to the reducer does not exist.
     - Args (
       `state` [required] - is the current state
       `payload` [optional] - is the payload passed to the reducer
     )
   - Returns: a new state
   `before` [optional] - is a callback. It is not required, but if it is passed than it is called before action matching.
     - Args (
       `state` [required] - is the current state
       `action` [optional] - is the action passed to the reducer
     )
     - Returns: Object {
       `end` [optional] - if `true` than it forces the reducer to stop and to return the state passed in the `state` parameter (specified next)
       `state` [optional] - a new state. It is used as the return value for the reducer when the `end` parameter is `true`
       `data` [required] - it is a required object, but it may be empty. It is bound to the action callback (including `def`) as its context
     }
    `actions` [recommended but not required] - is the object with the reducer's actions. {
       (
         <string> `actionType` - is the name of your action. It is used as `type` for action matching
       ): (
         [function] - is the function that is called when its `type` (name) was matched
           - Args (
               `state` [required] - is the current state
               `payload` [optional] - is the payload passed to the reducer
             )
       )
     }
 }
 Returns a ready reducer
 ```
