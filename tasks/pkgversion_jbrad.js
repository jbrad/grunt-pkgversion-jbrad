module.exports = function(grunt) {
    grunt.registerMultiTask('version', 'Add build number to the package.json', function() {
        var package = JSON.parse(grunt.file.read('./package.json'));
        var version = package.version.split('.');
        version[2] = this.data.buildNumber;

        package.version = version.join('.');

        grunt.file.write('./dist/package.json', JSON.stringify(package, null, 2));
    });
};