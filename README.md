# Oyster
Oyster is a new, lightweight programming language designed to be easy to learn in almost no time at all. It is similar to Scratch, but is text-based and is not designed for a 'game engine.'
The main highlight of Oyster is that it has NO KEYWORDS. This means that everything is either a comment, class, function, or value.
### File Extension
Oyster uses the .oys file extension. If you have a suggestion to change this or it is used somewhere else, open an issue.
## Inspiration
Oyster is loosely based on JavaScript, and uses objects and arrays identically. However, it has a slightly different syntax.
## Syntax
Oyster's syntax looks something like this as of last update.
```oyster
functionName{
  args: args
}
class.methodName{
  args: args
}
if{
  condition: confirm{},
  ifTrue: () => {
    doSomething{}
  },
  ifFalse: () => {
    doSomethingElse{},
  }
}
--| This is a comment. |--
--| This is
also
a
comment |--
classManager.createClass{
  name: 'myClass',
  properties: ['value'],
  constructor: (value) => {
    this.value = value
  },
  methods: [
    getVal: () => {
      return this.value
    }
  ]
}
classManager.createInstance{
  className: 'myClass',
  instanceName: 'instance',
  arguments: {
    value: 12
  }
}
```
For a more updated version, see the oyster_syntax.oys file in the '/examples' directory.
