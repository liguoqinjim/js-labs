/**
 * Behavior Tree example for tutorials:
 *
 * http://guineashots.com/2014/09/24/implementing-a-behavior-tree-part-1/
 * http://guineashots.com/2014/10/25/implementing-a-behavior-tree-part-2/
 *
 * Visit http://guineashots.com to know more.
 *
 * Copyright (c) 2014 Renato de Pontes Pereira.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 **/



/* ========================================================================= */
/*                       GLOBAL CONSTANTS AND HELPERS                        */
/* ========================================================================= */
var SUCCESS = 1;
var FAILURE = 2;
var RUNNING = 3;
var ERROR = 4;

var createUUID = function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";

    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);

    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
/* ========================================================================= */



/* ========================================================================= */
/*                        ORE CLASSSES OF OUR LIBRARY                        */
/* ========================================================================= */
// Blackboard
var Blackboard = function () {
    this.initialize();
}
Blackboard.prototype.initialize = function () {
    this._baseMemory = {}; // used to store global information
    this._treeMemory = {}; // used to store tree and node information
}
Blackboard.prototype._getTreeMemory = function (treeScope) {
    if (!this._treeMemory[treeScope]) {
        this._treeMemory[treeScope] = {
            'nodeMemory': {},
            'openNodes': [],
        };
    }
    return this._treeMemory[treeScope];
};
Blackboard.prototype._getNodeMemory = function (treeMemory, nodeScope) {
    var memory = treeMemory['nodeMemory'];
    if (!memory[nodeScope]) {
        memory[nodeScope] = {};
    }

    return memory[nodeScope];
};
Blackboard.prototype._getMemory = function (treeScope, nodeScope) {
    var memory = this._baseMemory;

    if (treeScope) {
        memory = this._getTreeMemory(treeScope);

        if (nodeScope) {
            memory = this._getNodeMemory(memory, nodeScope);
        }
    }

    return memory;
};
Blackboard.prototype.set = function (key, value, treeScope, nodeScope) {
    var memory = this._getMemory(treeScope, nodeScope);
    memory[key] = value;
};
Blackboard.prototype.get = function (key, treeScope, nodeScope) {
    var memory = this._getMemory(treeScope, nodeScope);
    return memory[key];
};

// Tick
var Tick = function () {
    this.initialize();
}
Tick.prototype.initialize = function () {
    this.tree = null;
    this.openNodes = [];
    this.nodeCount = 0;
    this.debug = null;
    this.target = null;
    this.blackboard = null;
}
Tick.prototype.enterNode = function (node) {
    this.nodeCount++;
    this.openNodes.push(node);
    // call debug here
}
Tick.prototype.openNode = function (node) {
    // call debug here
}
Tick.prototype.tickNode = function (node) {
    // call debug here
}
Tick.prototype.closeNode = function (node) {
    // call debug here
    this.openNodes.pop();
}
Tick.prototype.exitNode = function (node) {
    // call debug here
}

// Behavior Tree
var BehaviorTree = function () {
    this.initialize();
}
BehaviorTree.prototype.initialize = function () {
    this.id = createUUID();
    this.root = null;
}
BehaviorTree.prototype.tick = function (target, blackboard) {
    /* CREATE A TICK OBJECT */
    var tick = new Tick();
    tick.target = target;
    tick.blackboard = blackboard;
    tick.tree = this;

    /* TICK NODE */
    this.root._execute(tick);

    /* CLOSE NODES FROM LAST TICK, IF NEEDED */
    var lastOpenNodes = blackboard.get('openNodes', this.id);
    var currOpenNodes = tick.openNodes.slice(0);

    // does not close if it is still open in this tick
    var start = 0;
    for (var i = 0; i < Math.min(lastOpenNodes.length, currOpenNodes.length); i++) {
        start = i + 1;
        if (lastOpenNodes[i] !== currOpenNodes[i]) {
            break;
        }
    }

    // close the nodes
    for (var i = lastOpenNodes.length - 1; i >= start; i--) {
        lastOpenNodes[i]._close(tick);
    }

    /* POPULATE BLACKBOARD */
    blackboard.set('openNodes', currOpenNodes, this.id);
    blackboard.set('nodeCount', tick.nodeCount, this.id);
};

// BaseNode
var BaseNode = function () {
    this.initialize();
}
BaseNode.prototype.initialize = function (children) {
    this.id = createUUID();

    this.children = [];
    if (children) {
        for (var i = 0; i < children.length; i++) {
            this.children.push(children[i]);
        }
    }
}
BaseNode.prototype._execute = function (tick) {
    /* ENTER */
    this._enter(tick);

    /* OPEN */
    if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
        this._open(tick);
    }

    /* TICK */
    var status = this._tick(tick);

    /* CLOSE */
    if (status !== RUNNING) {
        this._close(tick);
    }

    /* EXIT */
    this._exit(tick);

    return status;
}
// Wrapper functions
BaseNode.prototype._enter = function (tick) {
    tick.enterNode(this);
    this.enter(tick);
}
BaseNode.prototype._open = function (tick) {
    tick.openNode(this);
    tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
    this.open(tick);
}
BaseNode.prototype._tick = function (tick) {
    tick.tickNode(this);
    return this.tick(tick);
}
BaseNode.prototype._close = function (tick) {
    tick.closeNode(this);
    tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
    this.close(tick);
}
BaseNode.prototype._exit = function (tick) {
    tick.exitNode(this);
    this.exit(tick);
}
// Override these to create nodes
BaseNode.prototype.enter = function (tick) {
}
BaseNode.prototype.open = function (tick) {
}
BaseNode.prototype.tick = function (tick) {
}
BaseNode.prototype.close = function (tick) {
}
BaseNode.prototype.exit = function (tick) {
}
/* ========================================================================= */




/* ========================================================================= */
/*                                   NODES                                   */
/* ========================================================================= */
var Sequence = function () {
    this.initialize(arguments);
}
Sequence.prototype = new BaseNode();
Sequence.prototype.tick = function (tick) {
    for (var i = 0; i < this.children.length; i++) {
        var status = this.children[i]._execute(tick);

        if (status !== SUCCESS) {
            return status;
        }
    }

    return SUCCESS;
}

var Priority = function () {
    this.initialize(arguments);
}
Priority.prototype = new BaseNode();
Priority.prototype.tick = function (tick) {
    for (var i = 0; i < this.children.length; i++) {
        var status = this.children[i]._execute(tick);

        if (status !== FAILURE) {
            return status;
        }
    }

    return FAILURE;
}

var MemSequence = function () {
    this.initialize(arguments);
}
MemSequence.prototype = new BaseNode();
MemSequence.prototype.open = function (tick) {
    tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
}

MemSequence.prototype.tick = function (tick) {
    var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
    for (var i = child; i < this.children.length; i++) {
        var status = this.children[i]._execute(tick);

        if (status !== SUCCESS) {
            if (status === RUNNING) {
                tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
            }
            return status;
        }
    }

    return SUCCESS;
}

var MemPriority = function () {
    this.initialize(arguments);
}
MemPriority.prototype = new BaseNode();
MemPriority.prototype.open = function (tick) {
    tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
}

MemPriority.prototype.tick = function (tick) {
    var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
    for (var i = child; i < this.children.length; i++) {
        var status = this.children[i]._execute(tick);

        if (status !== FAILURE) {
            if (status === RUNNING) {
                tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
            }
            return status;
        }
    }

    return FAILURE;
}

var Inverter = function () {
    this.initialize(arguments);
}
Inverter.prototype = new BaseNode();
Inverter.prototype.tick = function (tick) {
    var child = this.children[0];

    if (!child) {
        return ERROR;
    }

    var status = child._execute(tick);

    if (status == SUCCESS)
        status = FAILURE;
    else if (status == FAILURE)
        status = SUCCESS;

    return status;
}

var Wait = function (milliseconds) {
    this.endTime = milliseconds;
    this.initialize();
}
Wait.prototype = new BaseNode();
Wait.prototype.open = function (tick) {
    var startTime = (new Date()).getTime();
    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
}

Wait.prototype.tick = function (tick) {
    var currTime = (new Date()).getTime();
    var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);

    if (currTime - startTime > this.endTime) {
        return SUCCESS;
    }

    return RUNNING;
}

var ChangeColor = function (color) {
    this.color = color;
    this.initialize()
}
ChangeColor.prototype = new BaseNode();
ChangeColor.prototype.tick = function (tick) {
    tick.target.graphics.clear();
    tick.target.graphics.beginFill(this.color);
    tick.target.graphics.drawRect(-100, -30, 200, 60);

    return SUCCESS;
}

var ChangePosition = function () {
    this.initialize()
}
ChangePosition.prototype = new BaseNode();
ChangePosition.prototype.tick = function (tick) {
    tick.target.x = Math.floor(Math.random() * 800);
    tick.target.y = Math.floor(Math.random() * 600);

    return SUCCESS;
}

var IsMouseOver = function () {
    this.initialize();
}
IsMouseOver.prototype = new BaseNode();
IsMouseOver.prototype.tick = function (tick) {
    var point = tick.target.globalToLocal(stage.mouseX, stage.mouseY);
    if (tick.target.hitTest(point.x, point.y)) {
        return SUCCESS;
    } else {
        return FAILURE;
    }
}
/* ========================================================================= */