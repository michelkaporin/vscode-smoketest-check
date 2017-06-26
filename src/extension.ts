'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('vscode.smoketest.check', () => {
        const statusBarItem = vscode.window.createStatusBarItem();
        statusBarItem.text = 'VS Code Smoke Test Check';
        statusBarItem.tooltip = 'Verified';
        statusBarItem.show();
    });

    context.subscriptions.push(disposable);
}