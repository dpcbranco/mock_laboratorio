const { Readable } = require('stream');

/**
 * @param buffer Buffer
 * returns readableInstanceStream Readable
 * source: https://stackoverflow.com/questions/47089230/how-to-convert-buffer-to-stream-in-nodejs
 */
const bufferToStream = (buffer) => {

    const readableInstanceStream = new Readable({
        read() {
            this.push(buffer);
            this.push(null);
        }
    });

    return readableInstanceStream;
};

module.exports = {bufferToStream};