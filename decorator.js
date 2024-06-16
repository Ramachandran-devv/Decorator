/**
 * The base Beverage interface defines operations that can be altered by decorators.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
var SimpleFileStream = /** @class */ (function () {
    function SimpleFileStream() {
        this.content = '';
    }
    SimpleFileStream.prototype.read = function () {
        return this.content;
    };
    SimpleFileStream.prototype.write = function (data) {
        this.content = data;
    };
    return SimpleFileStream;
}());
/**
 * The base CondimentDecorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
var FileStreamDecorator = /** @class */ (function () {
    function FileStreamDecorator(stream) {
        this.wrappedStream = stream;
    }
    return FileStreamDecorator;
}());
var CompressedFileStream = /** @class */ (function (_super) {
    __extends(CompressedFileStream, _super);
    function CompressedFileStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompressedFileStream.prototype.read = function () {
        // Simulate decompression
        return "Decompressed: ".concat(this.wrappedStream.read());
    };
    CompressedFileStream.prototype.write = function (data) {
        // Simulate compression
        this.wrappedStream.write("Compressed: ".concat(data));
    };
    return CompressedFileStream;
}(FileStreamDecorator));
var EncryptedFileStream = /** @class */ (function (_super) {
    __extends(EncryptedFileStream, _super);
    function EncryptedFileStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EncryptedFileStream.prototype.read = function () {
        // Simulate decryption
        return "Decrypted: ".concat(this.wrappedStream.read());
    };
    EncryptedFileStream.prototype.write = function (data) {
        // Simulate encryption
        this.wrappedStream.write("Encrypted: ".concat(data));
    };
    return EncryptedFileStream;
}(FileStreamDecorator));
function clientCode(fileStream, data) {
    fileStream.write(data);
    console.log(fileStream.read());
}
var fileStream = new SimpleFileStream();
clientCode(fileStream, "Hello, World!");
var compressedStream = new CompressedFileStream(fileStream);
clientCode(compressedStream, "Hello, World!");
var encryptedStream = new EncryptedFileStream(compressedStream);
clientCode(encryptedStream, "Hello, World!");
//# sourceMappingURL=decorator.js.map