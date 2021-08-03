var todo = {
  'css': null,
  'exports': {
    onBeforeMount(props, state) {
      // initial state
      this.state = {
        items: props.items,
        text: ''
      };
    },

    edit(e) {
      // update only the text state
      this.update({
        text: e.target.value
      });
    },

    add(e) {
      e.preventDefault();

      if (this.state.text) {
        this.update({
          items: [...this.state.items, // add a new item
          {
            title: this.state.text
          }],
          text: ''
        });
      }
    },

    toggle(item) {
      item.done = !item.done; // trigger a component update

      this.update();
    }

  },
  'template': function (template, expressionTypes, bindingTypes, getComponent) {
    return template('<h3 expr0="expr0"> </h3><ul><li expr1="expr1"></li></ul><form expr4="expr4"><input expr5="expr5"/><button expr6="expr6"> </button></form>', [{
      'redundantAttribute': 'expr0',
      'selector': '[expr0]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function (_scope) {
          return _scope.props.title;
        }
      }]
    }, {
      'type': bindingTypes.EACH,
      'getKey': null,
      'condition': null,
      'template': template('<label expr2="expr2"><input expr3="expr3" type="checkbox"/> </label>', [{
        'redundantAttribute': 'expr2',
        'selector': '[expr2]',
        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 1,
          'evaluate': function (_scope) {
            return [_scope.item.title].join('');
          }
        }, {
          'type': expressionTypes.ATTRIBUTE,
          'name': 'class',
          'evaluate': function (_scope) {
            return _scope.item.done ? 'completed' : null;
          }
        }]
      }, {
        'redundantAttribute': 'expr3',
        'selector': '[expr3]',
        'expressions': [{
          'type': expressionTypes.ATTRIBUTE,
          'name': 'checked',
          'evaluate': function (_scope) {
            return _scope.item.done;
          }
        }, {
          'type': expressionTypes.EVENT,
          'name': 'onclick',
          'evaluate': function (_scope) {
            return () => _scope.toggle(_scope.item);
          }
        }]
      }]),
      'redundantAttribute': 'expr1',
      'selector': '[expr1]',
      'itemName': 'item',
      'indexName': null,
      'evaluate': function (_scope) {
        return _scope.state.items;
      }
    }, {
      'redundantAttribute': 'expr4',
      'selector': '[expr4]',
      'expressions': [{
        'type': expressionTypes.EVENT,
        'name': 'onsubmit',
        'evaluate': function (_scope) {
          return _scope.add;
        }
      }]
    }, {
      'redundantAttribute': 'expr5',
      'selector': '[expr5]',
      'expressions': [{
        'type': expressionTypes.EVENT,
        'name': 'onkeyup',
        'evaluate': function (_scope) {
          return _scope.edit;
        }
      }]
    }, {
      'redundantAttribute': 'expr6',
      'selector': '[expr6]',
      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,
        'evaluate': function (_scope) {
          return ['Add #', _scope.state.items.length + 1].join('');
        }
      }, {
        'type': expressionTypes.ATTRIBUTE,
        'name': 'disabled',
        'evaluate': function (_scope) {
          return !_scope.state.text;
        }
      }]
    }]);
  },
  'name': 'todo'
};

export default todo;
