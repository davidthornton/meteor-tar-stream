Tinytest.add('tar-stream', function (test) {
    var isDefined = false;
    try {
        TarStream;
        isDefined = true;
    } catch (e) {
    }
    test.isTrue(isDefined, "TarStream is not defined");
    test.isTrue(Package['davidthornton:tar-stream'].TarStream, "Package.davidthornton:tar-stream.TarStream is not defined");
});
