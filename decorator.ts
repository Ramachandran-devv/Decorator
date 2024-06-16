/**
 * The base Beverage interface defines operations that can be altered by decorators.
 */

// Add responsibilities to objects dynamically

interface FileStream {
    read(): string;
    write(data: string): void;
}


  
  /**
   * Concrete Components provide default implementations of the operations. There
   * might be several variations of these classes.
   */
  class SimpleFileStream implements FileStream {
    private content: string = '';

    read(): string {
        return this.content;
    }

    write(data: string): void {
        this.content = data;
    }
}


  
  /**
   * The base CondimentDecorator class follows the same interface as the other components.
   * The primary purpose of this class is to define the wrapping interface for all
   * concrete decorators. The default implementation of the wrapping code might
   * include a field for storing a wrapped component and the means to initialize
   * it.
   */
  abstract class FileStreamDecorator implements FileStream {
    protected wrappedStream: FileStream;

    constructor(stream: FileStream) {
        this.wrappedStream = stream;
    }

    abstract read(): string;
    abstract write(data: string): void;
}

class CompressedFileStream extends FileStreamDecorator {
    read(): string {
        // Simulate decompression
        return `Decompressed: ${this.wrappedStream.read()}`;
    }

    write(data: string): void {
        // Simulate compression
        this.wrappedStream.write(`Compressed: ${data}`);
    }
}

class EncryptedFileStream extends FileStreamDecorator {
    read(): string {
        // Simulate decryption
        return `Decrypted: ${this.wrappedStream.read()}`;
    }

    write(data: string): void {
        // Simulate encryption
        this.wrappedStream.write(`Encrypted: ${data}`);
    }
}

function clientCode(fileStream: FileStream, data: string) {
    fileStream.write(data);
    console.log(fileStream.read());
}

const fileStream = new SimpleFileStream();
clientCode(fileStream, "Hello, World!");

const compressedStream = new CompressedFileStream(fileStream);
clientCode(compressedStream, "Hello, World!");

const encryptedStream = new EncryptedFileStream(compressedStream);
clientCode(encryptedStream, "Hello, World!");

        