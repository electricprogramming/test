# Oyster
Oyster is a new, lightweight programming language designed to be easy to learn in almost no time at all. It is similar to Scratch, but is text-based and is not designed for a 'game engine.'
The main highlight of Oyster is that it has NO KEYWORDS. This means that everything is either a comment, function, class method, or value.
### File Extension
Oyster uses the .oys file extension. If you have a suggestion to change this or it is used somewhere else, open an issue.
## Inspiration
Oyster is loosely based on JavaScript, and uses objects and arrays identically. However, it has a slightly different syntax.
## Syntax
Oyster's syntax looks something like this as of last update.
```oyster
functionName('args')
class.methodName('args')
if(
  user.confirm(),
  () => {
    doSomething()
  },
  () => {
    doSomethingElse()
  }
)
--| This is a comment. Takes up exactly one full line and must start with the three chars `--|`
classManager.createClass({
  name: 'myClass',
  properties: ['value'],
  constructor: (value) => {
    this.value = value
  },
  staticMethods: {}
  instanceMethods: {
    getVal: () => {
      return this.value
    }
  }
})
classManager.createInstance({
  className: 'myClass',
  instanceName: 'instance',
  arguments: {
    value: 12
  }
})
```
For a more updated version, see the oyster_syntax.oys file in the '/examples' directory.
# Hosting
This repository is hosted on Vercel, therefore there is a vercel.json file, etc.  
The website, as of last update, is <https://oyster-interpreter.vercel.app>.

# File Setup
This uses the _root_ as the main part of the repository instead of an 'src' or similar folder. Therefore, the
