# Old Pines website

Static site for <https://www.oldpines.co.uk/>


## Development

Build in development mode and watch for file changes:

```bash
gulp
```

or `gulp build` to just build development files.


## Production

Build files for production deployment in Linux:

```bash
gulp clean && NODE_ENV=production gulp build
```

or Windows Powershell:

```ps
gulp clean
$env:NODE_ENV="production"
gulp build
```

## Deployment

Upload using FTP (not ideal but works on most hosts):

```bash
gulp deploy -u <ID> -p <PW>
```

## Browser testing

Test in Windows Chrome:

```bash
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --incognito --auto-open-devtools-for-tabs http://localhost:8000/
```

