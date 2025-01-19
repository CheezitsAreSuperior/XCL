const vscode = require('vscode');

function activate(context) {
    console.log('Congratulations, your extension "xcl-language" is now active!');

    let disposable = vscode.commands.registerCommand('xcl-language.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from XCL Language Support!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}