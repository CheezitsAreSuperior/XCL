const fs = require('fs');
const packageJsonPath = './package.json';

try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const currentVersion = packageJson.version;
    const versionParts = currentVersion.split('.').map(Number);

    // Increment the patch version (e.g., 1.2.3 -> 1.2.4)
    versionParts[2]++;

    // Handle minor/major version bumps if needed
    if (versionParts[2] > 99) { // Example: Reset patch and increment minor
        versionParts[2] = 0;
        versionParts[1]++;
        if (versionParts[1] > 99) { // Example: Reset minor and increment major
            versionParts[1] = 0;
            versionParts[0]++;
        }
    }

    const newVersion = versionParts.join('.');
    packageJson.version = newVersion;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4), 'utf-8'); // Use 4 spaces for indentation
    console.log(`Version bumped from ${currentVersion} to ${newVersion}`);
} catch (error) {
    console.error('Error bumping version:', error);
    process.exit(1); // Exit with error code
}