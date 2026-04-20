$jsonPath = "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev\package.json"
$json = Get-Content $jsonPath | ConvertFrom-Json
$json | Add-Member -Type NoteProperty -Name "homepage" -Value "https://Tanish00singh.github.io/portfolio"
$json.scripts | Add-Member -Type NoteProperty -Name "predeploy" -Value "npm run build"
$json.scripts | Add-Member -Type NoteProperty -Name "deploy" -Value "gh-pages -d dist"
$json | ConvertTo-Json -Depth 10 | Set-Content $jsonPath -Encoding utf8

$vitePath = "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev\vite.config.js"
$viteContent = @"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
"@
Set-Content -Path $vitePath -Value $viteContent -Encoding utf8

npm --prefix "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev" install gh-pages --save-dev
npm --prefix "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev" run deploy

git -C "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev" add package.json package-lock.json vite.config.js
git -C "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev" commit -m "Add GitHub Pages configuration"
git -C "c:\Users\Asus\Downloads\saveweb2zip-com-naveed-gung-dev" push
