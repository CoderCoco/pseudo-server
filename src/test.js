const ipc = require('node-ipc')

/***************************************\
 *
 * You should start both hello and world
 * then you will see them communicating.
 *
 * *************************************/

ipc.connectTo("TODO_CHANGE_THIS", "/tmp/test", () => {
    ipc.of.TODO_CHANGE_THIS.emit("shutdown");
});
