import electron from 'electron';
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', () => {
	console.log('All windows closed.');
	if (process.platform != 'darwin') {
		console.log('not darwin');
		app.quit();
	}
});

app.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	mainWindow.webContents.openDevTools();
	mainWindow.on('closed', () => {
		console.log('Main window closed.');
		mainWindow = null;
	});
	console.log('App ready.');
});