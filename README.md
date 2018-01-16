## React-redux messaging app based on RESTful API.

- Tested and developed only in Google Chrome
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- API: https://pv247messaging.azurewebsites.net/help/
- github API: https://github.com/KenticoAcademy/PV247-2017
- prototype: https://www.fluidui.com/editor/live/preview/cF82N211bDdjMER4Y0F3UERBWFdsT1RMOWxxdVAwSFUzTQ==

## Issues, max priority
- action tests - shared and body
- try catch - dont show console.log but custom errors - body

## TODOs in the future
- picture loading bad position
- repair load more btn - load more messages
- load only one message with polling
- redux form green/red
- better UI - for example get rid of grey loader
- (delete containers -> move to components)

## Resolved TODOs, waiting for testing
- new user -> no channels -> error when loading channels - why?
- after refresh showing channels where am i not in

## Questions
- i have tested my conversions, now i am testing thunk actions and the question is: should i add the conversions that i am invoking in thunk action as dependency (DI) even though i have them already tested? What if i have f.e. 50+ 'dependencies' in one thunk action? They should be all added as function parameters?
- when using redux, is it good idea to have component separated in component and container file? Personally i don't like the idea that i have my component in three different files. What are the advantages of doing so?
