Tinytest.add('tar-stream', function (test) {
    var isDefined = false;
    try {
        tarStream;
        isDefined = true;
    } catch (e) {
    }
    test.isTrue(isDefined, "tarStream is not defined");
    test.isTrue(Package['davidthornton:tar-stream'].tarStream, "Package.davidthornton:tar-stream.tarStream is not defined");
});
